import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Toggle } from "../Toggle";
import styles from "./SectionGeneral.module.css";

const TIMEZONES = [
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "America/Anchorage",
  "Pacific/Honolulu",
  "Europe/London",
  "Europe/Paris",
  "Europe/Berlin",
  "Asia/Tokyo",
  "Asia/Shanghai",
  "Asia/Kolkata",
  "Australia/Sydney",
];

export function SectionGeneral() {
  const [workspaceName, setWorkspaceName] = useState("Acme Corp");
  const [workspaceUrl, setWorkspaceUrl] = useState("acme-corp");
  const [timezone, setTimezone] = useState("America/New_York");
  const [analytics, setAnalytics] = useState(true);
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <section className={styles.section} id="general">
      <div className={styles.header}>
        <h2 className={styles.title}>General</h2>
        <p className={styles.description}>
          Manage your workspace name, URL, and preferences.
        </p>
      </div>
      <div className={styles.divider} />

      <div className={styles.fields}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="workspace-name">
            Workspace name
          </label>
          <Input
            id="workspace-name"
            value={workspaceName}
            onChange={(e) => setWorkspaceName(e.target.value)}
            placeholder="My Workspace"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="workspace-url">
            Workspace URL
          </label>
          <Input
            id="workspace-url"
            prefix="notion.so/"
            value={workspaceUrl}
            onChange={(e) => setWorkspaceUrl(e.target.value)}
            placeholder="my-workspace"
          />
          <p className={styles.hint}>
            This is the URL used to access your workspace.
          </p>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="timezone">
            Timezone
          </label>
          <select
            id="timezone"
            className={styles.select}
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
          >
            {TIMEZONES.map((tz) => (
              <option key={tz} value={tz}>
                {tz.replace("_", " ")}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.toggleField}>
          <div className={styles.toggleText}>
            <label className={styles.label} htmlFor="analytics-toggle">
              Enable analytics
            </label>
            <p className={styles.hint}>
              Help us improve by sharing anonymous usage data.
            </p>
          </div>
          <Toggle
            id="analytics-toggle"
            checked={analytics}
            onChange={setAnalytics}
          />
        </div>
      </div>

      <div className={styles.actions}>
        <Button variant="primary" onClick={handleSave}>
          {saved ? "Saved" : "Save changes"}
        </Button>
      </div>
    </section>
  );
}
