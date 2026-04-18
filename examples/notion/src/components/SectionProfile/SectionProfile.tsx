import { useState } from "react";
import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { Input } from "../Input";
import styles from "./SectionProfile.module.css";

export function SectionProfile() {
  const [displayName, setDisplayName] = useState("Alex Johnson");
  const [jobTitle, setJobTitle] = useState("Product Designer");
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <section className={styles.section} id="profile">
      <div className={styles.header}>
        <h2 className={styles.title}>Profile</h2>
        <p className={styles.description}>
          Update your personal information and how you appear to teammates.
        </p>
      </div>
      <div className={styles.divider} />

      <div className={styles.avatarRow}>
        <Avatar name={displayName} size="lg" />
        <div className={styles.avatarMeta}>
          <p className={styles.avatarName}>{displayName}</p>
          <p className={styles.avatarHint}>
            Initials are generated from your display name.
          </p>
        </div>
      </div>

      <div className={styles.fields}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="display-name">
            Display name
          </label>
          <Input
            id="display-name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Your name"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            Email address
          </label>
          <Input
            id="email"
            type="email"
            defaultValue="alex.johnson@acme.com"
            readOnly
          />
          <p className={styles.hint}>
            Contact support to change your email address.
          </p>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="job-title">
            Job title
          </label>
          <Input
            id="job-title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="e.g. Product Designer"
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
