import styles from "./Toggle.module.css";

export interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  id?: string;
  disabled?: boolean;
}

export function Toggle({ checked, onChange, id, disabled }: ToggleProps) {
  return (
    <button
      id={id}
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      className={[styles.toggle, checked ? styles.on : styles.off]
        .filter(Boolean)
        .join(" ")}
      onClick={() => onChange(!checked)}
      type="button"
    >
      <span className={styles.thumb} />
    </button>
  );
}
