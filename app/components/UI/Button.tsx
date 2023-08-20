import { ButtonType } from "@/types";

interface Button {
  text: string;
  variant: string;
  onClick: (event: React.MouseEvent) => void;
  className?: string;
}

const Button = ({ text, variant, onClick, className }: Button) => {
  const btnClasses =
    variant === ButtonType.primary ? "bg-primary text-white" : "text-primary";
  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn ${btnClasses} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
