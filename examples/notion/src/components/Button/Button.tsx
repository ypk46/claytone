import styles from "./Button.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "destructive";
}

const variants = {
  primary: styles.primary,
  secondary: styles.secondary,
  destructive: styles.destructive,
} as const;

export function Button({
  variant = "secondary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={[styles.button, variants[variant], className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
