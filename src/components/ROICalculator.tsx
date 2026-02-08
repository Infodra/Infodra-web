"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Calculator, X, Download, Mail, ArrowRight, TrendingUp } from "lucide-react";

interface ROIResults {
  averageInvestment: number;
  netAnnualSavings: number;
  threeYearNetSavings: number;
  roi: number;
  paybackYears: number;
  paybackMonths: number;
  npv: number;
  efficiencyGain: number;
  benefits: string[];
  sensitivityData: Array<{ efficiency: number; roi: number }>;
}

const ROICalculator = ({
  isOpen,
  onClose,
  solutionTitle,
}: {
  isOpen: boolean;
  onClose: () => void;
  solutionTitle?: string;
}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    solutionType: "",
    companySize: "",
    projectScope: [] as string[],
    timeline: "",
    monthlyOperationalCost: "",
    annualRecurringCost: "0",
    efficiencyOverride: "",
    contactName: "",
    contactEmail: "",
  });
  const [results, setResults] = useState<ROIResults | null>(null);

  const solutionData: Record<
    string,
    {
      name: string;
      baseCost: number;
      defaultEfficiency: number;
      savingsMultiplier: number;
      benefits: string[];
    }
  > = {
    automation: {
      name: "Business Process Automation",
      baseCost: 4,
      defaultEfficiency: 0.60,
      savingsMultiplier: 5.0,
      benefits: [
        "60-80% reduction in manual work",
        "70-85% faster processing times",
        "80-95% improvement in accuracy",
      ],
    },
    webapp: {
      name: "Custom Web Application",
      baseCost: 8,
      defaultEfficiency: 0.30,
      savingsMultiplier: 3.8,
      benefits: [
        "40-60% improvement in operational efficiency",
        "30-50% reduction in manual processes",
        "50-80% faster business processes",
      ],
    },
    support: {
      name: "Support & Maintenance",
      baseCost: 1,
      defaultEfficiency: 0.25,
      savingsMultiplier: 4.0,
      benefits: [
        "24/7 system availability",
        "50-70% reduction in critical incidents",
        "40-60% improvement in system performance",
      ],
    },
  };

  const projectScopeOptions = [
    { id: "basic", label: "Basic Implementation", multiplier: 1.0 },
    { id: "advanced", label: "Advanced Features", multiplier: 1.3 },
    { id: "integration", label: "System Integration", multiplier: 1.5 },
    { id: "training", label: "Training & Documentation", multiplier: 1.1 },
  ];

  const sizeMultipliers: Record<
    string,
    { multiplier: number; label: string }
  > = {
    startup: { multiplier: 1.0, label: "Startup (1-50 employees)" },
    sme: { multiplier: 1.8, label: "SME (51-500 employees)" },
    enterprise: { multiplier: 3.5, label: "Enterprise (500+ employees)" },
  };

  const timelineMultipliers: Record<
    string,
    { multiplier: number; label: string }
  > = {
    urgent: { multiplier: 1.3, label: "Urgent (1-3 months)" },
    standard: { multiplier: 1.0, label: "Standard (3-6 months)" },
    strategic: { multiplier: 0.85, label: "Strategic (6-12 months)" },
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        projectScope: checked
          ? [...prev.projectScope, value]
          : prev.projectScope.filter((scope) => scope !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const calculateResults = () => {
    if (!formData.solutionType || !formData.companySize || !formData.timeline) {
      alert("Please fill all required fields");
      return;
    }

    if (formData.projectScope.length === 0) {
      alert("Please select at least one project scope");
      return;
    }

    if (!formData.monthlyOperationalCost || parseFloat(formData.monthlyOperationalCost) <= 0) {
      alert("Please enter a valid Monthly Operational Cost");
      return;
    }

    const solution = solutionData[formData.solutionType];
    const baseCostLakhs = solution.baseCost;

    // Calculate base investment in Lakhs
    const scopeMultiplier = formData.projectScope.reduce((acc, scopeId) => {
      const scope = projectScopeOptions.find((s) => s.id === scopeId);
      return acc + (scope?.multiplier || 0);
    }, 0);

    // ✅ Convert monthly operational cost to Lakhs
    const monthlyCostINR = parseFloat(formData.monthlyOperationalCost);
    const monthlyCostLakhs = monthlyCostINR / 100000;

    // ✅ Investment scales based on base cost PLUS a percentage of monthly operational cost
    // Higher monthly expenses = larger implementation = higher investment
    const baseInvestmentLakhs =
      (baseCostLakhs +
        monthlyCostLakhs * 4.0) *
      sizeMultipliers[formData.companySize].multiplier *
      scopeMultiplier *
      timelineMultipliers[formData.timeline].multiplier;

    const investmentLowLakhs = Math.round(baseInvestmentLakhs * 100) / 100;
    
    // Backend defaults (not user-configurable)
    const riskMultiplier = 1.35; // Fixed backend default
    const discountRatePercent = 8; // Fixed backend default
    
    const investmentHighLakhs = Math.round(investmentLowLakhs * riskMultiplier * 100) / 100;
    const averageInvestmentLakhs = (investmentLowLakhs + investmentHighLakhs) / 2;

    // ✅ CORRECT: Handle efficiency - input is percentage (0-100), convert to decimal (0-1)
    let efficiencyPercent = parseFloat(formData.efficiencyOverride) || (solution.defaultEfficiency * 100);
    let efficiencyDecimal = efficiencyPercent / 100;

    // ✅ CORRECT: Calculate annual savings in Lakhs
    let annualSavingsLakhs = 0;
    // ✅ CORRECT: Annual Savings = Monthly Cost * 12 months * Efficiency %
    annualSavingsLakhs = monthlyCostLakhs * 12 * efficiencyDecimal;

    // ✅ CORRECT: Round to 2 decimal places (Lakhs)
    annualSavingsLakhs = Math.round(annualSavingsLakhs * 100) / 100;

    // ✅ CORRECT: Subtract recurring annual costs (already in Lakhs)
    const annualRecurringCostLakhs = parseFloat(formData.annualRecurringCost) || 0;
    const netAnnualSavingsLakhs = Math.max(0, annualSavingsLakhs - annualRecurringCostLakhs);
    
    // ✅ CORRECT: 3-Year Savings
    const threeYearNetSavingsLakhs = Math.round(netAnnualSavingsLakhs * 3 * 100) / 100;

    // ✅ CORRECT: ROI Calculation
    let roiPercent = 0;
    if (averageInvestmentLakhs > 0) {
      roiPercent = (threeYearNetSavingsLakhs / averageInvestmentLakhs) * 100;
      roiPercent = Math.round(roiPercent * 10) / 10; // 1 decimal place
    }

    // ✅ CORRECT: Payback Period (in years and months)
    let paybackYearsDecimal = 0;
    let paybackYearsWhole = 0;
    let paybackMonths = 0;

    if (netAnnualSavingsLakhs > 0) {
      paybackYearsDecimal = averageInvestmentLakhs / netAnnualSavingsLakhs;
      paybackYearsWhole = Math.floor(paybackYearsDecimal);
      paybackMonths = Math.round((paybackYearsDecimal - paybackYearsWhole) * 12);
    }

    // ✅ CORRECT: NPV Calculation
    const discountRateDecimal = discountRatePercent / 100;
    
    let npvLakhs = 0;
    if (netAnnualSavingsLakhs > 0) {
      npvLakhs =
        (netAnnualSavingsLakhs / Math.pow(1 + discountRateDecimal, 1)) +
        (netAnnualSavingsLakhs / Math.pow(1 + discountRateDecimal, 2)) +
        (netAnnualSavingsLakhs / Math.pow(1 + discountRateDecimal, 3)) -
        averageInvestmentLakhs;
    } else {
      npvLakhs = -averageInvestmentLakhs;
    }
    npvLakhs = Math.round(npvLakhs * 100) / 100;

    // ✅ CORRECT: Sensitivity Analysis with updated ranges (30%, 40%, 50%, 60%)
    const sensitivityData = [30, 40, 50, 60].map((sensitivityEfficiencyPercent) => {
      const sensitivityEfficiencyDecimal = sensitivityEfficiencyPercent / 100;
      const monthlyCostINR = parseFloat(formData.monthlyOperationalCost);
      const monthlyCostLakhs = monthlyCostINR / 100000;
      const sensitivityAnnualSavingsLakhs = monthlyCostLakhs * 12 * sensitivityEfficiencyDecimal;
      const sensitivityNetAnnualSavingsLakhs = Math.max(0, sensitivityAnnualSavingsLakhs - annualRecurringCostLakhs);
      const sensitivityThreeYearSavingsLakhs = sensitivityNetAnnualSavingsLakhs * 3;
      
      let sensitivityROI = 0;
      if (averageInvestmentLakhs > 0) {
        sensitivityROI = Math.round((sensitivityThreeYearSavingsLakhs / averageInvestmentLakhs) * 100 * 10) / 10;
      }

      return {
        efficiency: sensitivityEfficiencyPercent,
        roi: sensitivityROI,
      };
    });

    // 🔍 DEBUG: Console logs to verify calculations
    console.log({
      monthlyCostINR: parseFloat(formData.monthlyOperationalCost) || 0,
      monthlyCostLakhs: (parseFloat(formData.monthlyOperationalCost) || 0) / 100000,
      efficiencyPercent,
      efficiencyDecimal,
      annualSavingsLakhs,
      netAnnualSavingsLakhs,
      threeYearNetSavingsLakhs,
      averageInvestmentLakhs,
      roiPercent,
      paybackYearsDecimal: netAnnualSavingsLakhs > 0 ? averageInvestmentLakhs / netAnnualSavingsLakhs : 0,
      paybackYearsWhole,
      paybackMonths,
      npvLakhs,
    });

    setResults({
      averageInvestment: averageInvestmentLakhs,
      netAnnualSavings: netAnnualSavingsLakhs,
      threeYearNetSavings: threeYearNetSavingsLakhs,
      roi: roiPercent,
      paybackYears: paybackYearsWhole,
      paybackMonths,
      npv: npvLakhs,
      efficiencyGain: Math.round(efficiencyPercent),
      benefits: solution.benefits,
      sensitivityData,
    });

    setStep(3);
  };

  const formatCurrency = (amount: number) => {
    if (amount >= 1) {
      return `₹${(amount).toFixed(2)}L`;
    }
    return `₹${(amount * 100000).toLocaleString("en-IN")}`;
  };

  const resetCalculator = () => {
    setFormData({
      solutionType: "",
      companySize: "",
      projectScope: [],
      timeline: "",
      monthlyOperationalCost: "",
      annualRecurringCost: "0",
      efficiencyOverride: "",
      contactName: "",
      contactEmail: "",
    });
    setResults(null);
    setStep(1);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-cyan-700 p-6 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Calculator className="w-6 h-6 text-white" />
            <div>
              <h2 className="text-3xl font-bold text-white">Investment & ROI Calculator</h2>
              <p className="text-blue-100 text-sm mt-1">Professional Financial Analysis</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-blue-800 p-2 rounded-lg transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto flex-1">
          {step === 1 && (
            <form className="space-y-6">
              {/* Solution Type */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  Solution Type *
                </label>
                <select
                  name="solutionType"
                  value={formData.solutionType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a solution...</option>
                  {Object.entries(solutionData).map(([key, data]) => (
                    <option key={key} value={key}>
                      {data.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Company Size */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  Company Size *
                </label>
                <select
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select company size...</option>
                  {Object.entries(sizeMultipliers).map(([key, data]) => (
                    <option key={key} value={key}>
                      {data.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  Implementation Timeline *
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select timeline...</option>
                  {Object.entries(timelineMultipliers).map(([key, data]) => (
                    <option key={key} value={key}>
                      {data.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Scope */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  Project Scope (Select all that apply) *
                </label>
                <div className="space-y-3">
                  {projectScopeOptions.map((option) => (
                    <label key={option.id} className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        name="projectScope"
                        value={option.id}
                        checked={formData.projectScope.includes(option.id)}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Monthly Operational Cost */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  Monthly Operational Cost (INR) *
                </label>
                <input
                  type="number"
                  name="monthlyOperationalCost"
                  value={formData.monthlyOperationalCost}
                  onChange={handleInputChange}
                  placeholder="e.g., 25000 or 100000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Annual Recurring Cost */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  Annual Recurring Cost (Optional, in Lakhs)
                </label>
                <input
                  type="number"
                  name="annualRecurringCost"
                  value={formData.annualRecurringCost}
                  onChange={handleInputChange}
                  placeholder="e.g., 0.5"
                  step="0.1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Efficiency Override */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  Expected Efficiency Gain (Optional, %)
                </label>
                <input
                  type="number"
                  name="efficiencyOverride"
                  value={formData.efficiencyOverride}
                  onChange={handleInputChange}
                  placeholder={`Default: ${solutionData[formData.solutionType]?.defaultEfficiency ? Math.round(solutionData[formData.solutionType].defaultEfficiency * 100) : 0}%`}
                  min="0"
                  max="100"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-yellow-700 text-sm mt-2 bg-yellow-50 p-2 rounded border border-yellow-200">
                  ⚠️ High efficiency gains (50–60%) are typically achievable only in highly repetitive, manual-heavy processes.
                </p>
              </div>

              {/* Calculate Button */}
              <button
                type="button"
                onClick={calculateResults}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                <TrendingUp className="w-5 h-5" /> Calculate ROI
              </button>
            </form>
          )}

          {step === 3 && results && (
            <div className="space-y-8">
              {/* Summary Box */}
              <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl border border-blue-200">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Financial Summary</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <p className="text-gray-600 text-sm font-semibold mb-2">Average Investment</p>
                    <p className="text-3xl font-bold text-blue-600">{formatCurrency(results.averageInvestment)}</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <p className="text-gray-600 text-sm font-semibold mb-2">Net Annual Savings</p>
                    <p className="text-3xl font-bold text-green-600">{formatCurrency(results.netAnnualSavings)}</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <p className="text-gray-600 text-sm font-semibold mb-2">3-Year Net Savings</p>
                    <p className="text-3xl font-bold text-green-600">{formatCurrency(results.threeYearNetSavings)}</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <p className="text-gray-600 text-sm font-semibold mb-2">3-Year ROI</p>
                    <p className="text-3xl font-bold text-green-600">{results.roi}%</p>
                  </div>
                </div>
              </div>

              {/* Sensitivity Analysis */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Sensitivity Analysis</h3>
                <p className="text-gray-600 mb-4">ROI at different efficiency levels:</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {results.sensitivityData.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200 text-center"
                    >
                      <p className="text-gray-700 font-semibold text-sm mb-2">{item.efficiency}% Efficiency</p>
                      <p className="text-2xl font-bold text-blue-600">{item.roi}%</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {results.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-1">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Disclaimer */}
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
                <p className="text-gray-800 text-sm">
                  <span className="font-semibold block mb-2">📋 Disclaimer:</span>
                  This ROI calculator provides an estimated financial projection based on user inputs. Actual results may vary depending on implementation efficiency, market conditions, and operational factors.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={resetCalculator}
                  className="flex-1 border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
                >
                  Recalculate
                </button>
                <Link
                  href="/contact"
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" /> Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
