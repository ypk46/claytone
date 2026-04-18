import { useState } from 'react'
import styles from './ProfileSection.module.css'

function getInitials(name: string): string {
  return name
    .split(' ')
    .map(part => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export function ProfileSection() {
  const [displayName, setDisplayName] = useState('Alex Morgan')
  const [jobTitle, setJobTitle] = useState('Product Manager')
  const email = 'alex@acme.com'

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Profile</h2>
        <p className={styles.description}>
          Update your personal information and how others see you in the workspace.
        </p>
      </div>

      <div className={styles.form}>
        <div className={styles.avatarRow}>
          <div className={styles.avatar} aria-hidden="true">
            {getInitials(displayName) || '?'}
          </div>
          <div className={styles.avatarMeta}>
            <p className={styles.avatarName}>{displayName || 'No name set'}</p>
            <p className={styles.avatarEmail}>{email}</p>
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="display-name" className={styles.label}>
            Display name
          </label>
          <input
            id="display-name"
            type="text"
            className={styles.input}
            value={displayName}
            onChange={e => setDisplayName(e.target.value)}
            placeholder="Your display name"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="profile-email" className={styles.label}>
            Email
            <span className={styles.badge}>Read only</span>
          </label>
          <input
            id="profile-email"
            type="email"
            className={`${styles.input} ${styles.inputReadOnly}`}
            value={email}
            readOnly
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="job-title" className={styles.label}>
            Job title
          </label>
          <input
            id="job-title"
            type="text"
            className={styles.input}
            value={jobTitle}
            onChange={e => setJobTitle(e.target.value)}
            placeholder="e.g. Software Engineer"
          />
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.buttonPrimary}>
            Save changes
          </button>
        </div>
      </div>
    </section>
  )
}
