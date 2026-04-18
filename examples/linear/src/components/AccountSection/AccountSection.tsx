import { useState } from 'react'
import styles from './AccountSection.module.css'

export function AccountSection() {
  const [showConfirm, setShowConfirm] = useState(false)

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Account</h2>
        <p className={styles.description}>
          Manage your subscription, billing, and workspace data.
        </p>
      </div>

      <div className={styles.planCard}>
        <div className={styles.planInfo}>
          <div className={styles.planRow}>
            <span className={styles.planLabel}>Current plan</span>
            <span className={styles.planBadge}>Pro</span>
          </div>
          <p className={styles.planDetail}>
            Unlimited members · 10 GB storage · Priority support
          </p>
        </div>
        <button type="button" className={styles.buttonSecondary}>
          Manage billing
        </button>
      </div>

      <div className={styles.usageRow}>
        <div className={styles.usageItem}>
          <span className={styles.usageValue}>14</span>
          <span className={styles.usageLabel}>Members</span>
        </div>
        <div className={styles.usageDivider} />
        <div className={styles.usageItem}>
          <span className={styles.usageValue}>2.4 GB</span>
          <span className={styles.usageLabel}>Storage used</span>
        </div>
        <div className={styles.usageDivider} />
        <div className={styles.usageItem}>
          <span className={styles.usageValue}>38</span>
          <span className={styles.usageLabel}>Active projects</span>
        </div>
      </div>

      <div className={styles.dangerZone}>
        <h3 className={styles.dangerTitle}>Danger zone</h3>
        <div className={styles.dangerRow}>
          <div className={styles.dangerInfo}>
            <p className={styles.dangerLabel}>Delete workspace</p>
            <p className={styles.dangerDesc}>
              Permanently delete this workspace and all its data. This action
              cannot be undone.
            </p>
          </div>
          {!showConfirm ? (
            <button
              type="button"
              className={styles.buttonDestructiveOutline}
              onClick={() => setShowConfirm(true)}
            >
              Delete workspace
            </button>
          ) : (
            <div className={styles.confirmActions}>
              <p className={styles.confirmText}>Are you sure?</p>
              <button
                type="button"
                className={styles.buttonDestructive}
                onClick={() => setShowConfirm(false)}
              >
                Yes, delete
              </button>
              <button
                type="button"
                className={styles.buttonSecondarySmall}
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
