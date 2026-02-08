// Mock database for local development when MongoDB is unreachable
// Stores applications in memory and in localStorage

interface Candidate {
  _id?: string;
  fullName: string;
  email: string;
  phone: string;
  primaryDomain?: string;
  role?: string;
  skills: string;
  experienceYears: number;
  resumeUrl?: string;
  createdAt: Date;
  location?: string;
  linkedin?: string;
  employmentStatus?: string;
  preferredWorkType?: string;
  noticePeriod?: string;
  expectedSalary?: string;
}

class MockDatabase {
  private candidates: Candidate[] = [];
  private storageKey = "infodra_candidates";

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage() {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem(this.storageKey);
        if (stored) {
          this.candidates = JSON.parse(stored);
        }
      } catch (e) {
        console.log("Could not load from localStorage");
      }
    }
  }

  private saveToStorage() {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(this.candidates));
      } catch (e) {
        console.log("Could not save to localStorage");
      }
    }
  }

  async insertOne(candidate: Candidate): Promise<{ insertedId: string }> {
    return new Promise((resolve) => {
      // Simulate network delay
      setTimeout(() => {
        const newCandidate: Candidate = {
          ...candidate,
          _id: `mock_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          createdAt: new Date(),
        };
        this.candidates.push(newCandidate);
        this.saveToStorage();
        resolve({ insertedId: newCandidate._id! });
      }, 500);
    });
  }

  async find(): Promise<Candidate[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.candidates);
      }, 300);
    });
  }

  // For server-side calls
  static async insert(candidate: Candidate) {
    const db = new MockDatabase();
    return db.insertOne(candidate);
  }

  static async getAll() {
    const db = new MockDatabase();
    return db.find();
  }
}

export default MockDatabase;
