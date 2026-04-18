import styles from "./Input.module.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
}

export function Input({ prefix, className, ...props }: InputProps) {
  if (prefix) {
    return (
      <div className={styles.prefixWrapper}>
        <span className={styles.prefix}>{prefix}</span>
        <input
          className={[styles.input, styles.withPrefix, className]
            .filter(Boolean)
            .join(" ")}
          {...props}
        />
      </div>
    );
  }

  return (
    <input
      className={[styles.input, className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}
