import styles from "./SettingsNav.module.css";

export type NavSection = "general" | "profile" | "notifications" | "account";

export interface SettingsNavProps {
  active: NavSection;
  onSelect: (section: NavSection) => void;
}

const items: { id: NavSection; label: string }[] = [
  { id: "general", label: "General" },
  { id: "profile", label: "Profile" },
  { id: "notifications", label: "Notifications" },
  { id: "account", label: "Account" },
];

export function SettingsNav({ active, onSelect }: SettingsNavProps) {
  return (
    <nav className={styles.nav} aria-label="Settings navigation">
      <p className={styles.heading}>Settings</p>
      <ul className={styles.list}>
        {items.map(({ id, label }) => (
          <li key={id}>
            <button
              className={[styles.item, active === id ? styles.active : ""]
                .filter(Boolean)
                .join(" ")}
              onClick={() => onSelect(id)}
              aria-current={active === id ? "page" : undefined}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
