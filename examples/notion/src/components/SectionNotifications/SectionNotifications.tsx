import { useState } from "react";
import { Toggle } from "../Toggle";
import styles from "./SectionNotifications.module.css";

interface Preference {
  id: string;
  label: string;
  description: string;
}

const PREFERENCES: Preference[] = [
  {
    id: "product-updates",
    label: "Product updates",
    description: "News about new features, improvements, and releases.",
  },
  {
    id: "security-alerts",
    label: "Security alerts",
    description:
      "Important notices about your account security and access activity.",
  },
  {
    id: "weekly-digest",
    label: "Weekly digest",
    description:
      "A summary of workspace activity delivered every Monday morning.",
  },
  {
    id: "member-activity",
    label: "Member activity",
    description:
      "Notifications when teammates join, leave, or change their role.",
  },
];

const defaultState: Record<string, boolean> = {
  "product-updates": true,
  "security-alerts": true,
  "weekly-digest": false,
  "member-activity": true,
};

export function SectionNotifications() {
  const [prefs, setPrefs] = useState(defaultState);

  function toggle(id: string) {
    setPrefs((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <section className={styles.section} id="notifications">
      <div className={styles.header}>
        <h2 className={styles.title}>Notifications</h2>
        <p className={styles.description}>
          Choose which emails and alerts you'd like to receive.
        </p>
      </div>
      <div className={styles.divider} />

      <div className={styles.rows}>
        {PREFERENCES.map(({ id, label, description }) => (
          <div key={id} className={styles.row}>
            <div className={styles.rowText}>
              <p className={styles.rowLabel}>{label}</p>
              <p className={styles.rowDescription}>{description}</p>
            </div>
            <Toggle
              checked={prefs[id]}
              onChange={() => toggle(id)}
              id={`notif-${id}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
