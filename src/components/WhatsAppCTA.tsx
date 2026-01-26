import Link from "next/link";

interface WhatsAppCTAProps {
  productName?: string;
  variant?: "default" | "outline" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
}

export function WhatsAppCTA({
  productName = "Infodra AI Solutions",
  variant = "default",
  size = "md",
  fullWidth = false,
  className = "",
}: WhatsAppCTAProps) {
  const phoneNumber = "918148146785";
  const message = `Hi Infodra Team, I need demo for ${productName}. Please share details.`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-semibold transition duration-200 cursor-pointer no-underline";

  const variantStyles = {
    default:
      "bg-green-500 text-white hover:bg-green-600 active:bg-green-700 shadow-md hover:shadow-lg",
    outline:
      "border-2 border-green-500 text-green-600 hover:bg-green-50 active:bg-green-100",
    ghost:
      "text-green-600 hover:bg-green-50 active:bg-green-100 no-shadow",
    gradient:
      "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm gap-2",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-3",
  };

  const widthStyles = fullWidth ? "w-full" : "";

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={combinedStyles}
    >
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.969 1.523A9.88 9.88 0 005.6 19.431a9.877 9.877 0 001.464 5.149l.885 1.441 1.516-.741a9.876 9.876 0 005.92-1.231l1.516.738.884-1.441a9.877 9.877 0 001.464-5.149A9.877 9.877 0 006.051 6.979Z" />
      </svg>
      <span>Chat on WhatsApp</span>
    </Link>
  );
}
