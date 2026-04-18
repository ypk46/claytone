import { useState } from 'react'
import { Toggle } from '../Toggle'
import styles from './NotificationsSection.module.css'

interface Preference {
  id: string
  label: string
  description: string
  defaultValue: boolean
}

const PREFERENCES: Preference[] = [
  {
    id: 'product-updates',
    label: 'Product updates',
    description: 'Get notified about new features, improvements, and release notes.',
    defaultValue: true,
  },
  {
    id: 'security-alerts',
    label: 'Security alerts',
    description: 'Important notifications about your account and workspace security.',
    defaultValue: true,
  },
  {
    id: 'weekly-digest',
    label: 'Weekly digest',
    description: "A summary of your team's activity and progress every Monday.",
    defaultValue: false,
  },
  {
    id: 'member-activity',
    label: 'Member activity',
    description: 'When team members join, leave, or change roles in your workspace.',
    defaultValue: false,
  },
]

export function NotificationsSection() {
  const [prefs, setPrefs] = useState<Record<string, boolean>>(
    Object.fromEntries(PREFERENCES.map(p => [p.id, p.defaultValue]))
  )

  const toggle = (id: string) => setPrefs(prev => ({ ...prev, [id]: !prev[id] }))

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Notifications</h2>
        <p className={styles.description}>
          Choose which notifications you receive by email and in the app.
        </p>
      </div>

      <div className={styles.rows}>
        {PREFERENCES.map(pref => (
          <div key={pref.id} className={styles.row}>
            <div className={styles.rowInfo}>
              <span className={styles.rowLabel}>{pref.label}</span>
              <span className={styles.rowDesc}>{pref.description}</span>
            </div>
            <Toggle
              checked={prefs[pref.id]}
              onChange={() => toggle(pref.id)}
              aria-label={pref.label}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
