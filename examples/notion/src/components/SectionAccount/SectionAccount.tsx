import { Button } from "../Button";
import styles from "./SectionAccount.module.css";

export function SectionAccount() {
  return (
    <section className={styles.section} id="account">
      <div className={styles.header}>
        <h2 className={styles.title}>Account</h2>
        <p className={styles.description}>
          Manage your plan, billing, and workspace deletion.
        </p>
      </div>
      <div className={styles.divider} />

      <div className={styles.block}>
        <div className={styles.blockHeader}>
          <p className={styles.blockTitle}>Current plan</p>
          <p className={styles.blockDescription}>
            You are on the <strong>Pro</strong> plan. Includes unlimited blocks,
            guests, and file uploads up to 5 GB.
          </p>
        </div>
        <div className={styles.planRow}>
          <div className={styles.planBadge}>Pro</div>
          <Button variant="secondary">Manage billing</Button>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.dangerZone}>
        <div className={styles.dangerHeader}>
          <p className={styles.dangerTitle}>Danger zone</p>
          <p className={styles.dangerDescription}>
            Permanently delete this workspace and all its content. This action
            cannot be undone.
          </p>
        </div>
        <Button variant="destructive">Delete workspace</Button>
      </div>
    </section>
  );
}
