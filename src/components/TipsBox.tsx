import { Lightbulb, AlertTriangle, Info, CheckCircle, type LucideIcon } from "lucide-react";

interface TipsBoxProps {
  variant?: "tip" | "warning" | "info" | "success";
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const variants: Record<string, { icon: LucideIcon; bg: string; border: string; iconColor: string; titleColor: string }> = {
  tip: {
    icon: Lightbulb,
    bg: "bg-amber-50",
    border: "border-amber-200",
    iconColor: "text-amber-600",
    titleColor: "text-amber-800",
  },
  warning: {
    icon: AlertTriangle,
    bg: "bg-red-50",
    border: "border-red-200",
    iconColor: "text-red-600",
    titleColor: "text-red-800",
  },
  info: {
    icon: Info,
    bg: "bg-blue-50",
    border: "border-blue-200",
    iconColor: "text-blue-600",
    titleColor: "text-blue-800",
  },
  success: {
    icon: CheckCircle,
    bg: "bg-green-50",
    border: "border-green-200",
    iconColor: "text-green-600",
    titleColor: "text-green-800",
  },
};

const defaultTitles: Record<string, string> = {
  tip: "Tips",
  warning: "Viktig",
  info: "Info",
  success: "Anbefalt",
};

const TipsBox = ({ variant = "tip", title, children, className = "" }: TipsBoxProps) => {
  const config = variants[variant];
  const Icon = config.icon;
  const displayTitle = title || defaultTitles[variant];

  return (
    <div className={`${config.bg} ${config.border} border rounded-lg p-4 ${className}`}>
      <div className="flex gap-3">
        <Icon className={`h-5 w-5 ${config.iconColor} shrink-0 mt-0.5`} />
        <div>
          <p className={`font-semibold ${config.titleColor} mb-1`}>{displayTitle}</p>
          <div className="text-sm text-gray-700">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default TipsBox;
