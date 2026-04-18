import { useState } from 'react'
import { Toggle } from '../Toggle'
import styles from './GeneralSection.module.css'

const TIMEZONES = [
  'America/New_York',
  'America/Chicago',
  'America/Denver',
  'America/Los_Angeles',
  'America/Sao_Paulo',
  'Europe/London',
  'Europe/Paris',
  'Europe/Berlin',
  'Asia/Dubai',
  'Asia/Kolkata',
  'Asia/Singapore',
  'Asia/Tokyo',
  'Asia/Shanghai',
  'Australia/Sydney',
  'Pacific/Auckland',
]

export function GeneralSection() {
  const [workspaceName, setWorkspaceName] = useState('Acme Inc.')
  const [workspaceUrl, setWorkspaceUrl] = useState('acme')
  const [timezone, setTimezone] = useState('America/New_York')
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true)

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>General</h2>
        <p className={styles.description}>
          Manage your workspace name, URL, and general preferences.
        </p>
      </div>

      <div className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="workspace-name" className={styles.label}>
            Workspace name
          </label>
          <input
            id="workspace-name"
            type="text"
            className={styles.input}
            value={workspaceName}
            onChange={e => setWorkspaceName(e.target.value)}
            placeholder="Your workspace name"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="workspace-url" className={styles.label}>
            Workspace URL
          </label>
          <div className={styles.urlWrapper}>
            <span className={styles.urlPrefix}>linear.app/</span>
            <input
              id="workspace-url"
              type="text"
              className={styles.urlInput}
              value={workspaceUrl}
              onChange={e => setWorkspaceUrl(e.target.value)}
              placeholder="your-workspace"
            />
          </div>
          <p className={styles.hint}>
            Used in sharing links and API access.
          </p>
        </div>

        <div className={styles.field}>
          <label htmlFor="timezone" className={styles.label}>
            Timezone
          </label>
          <div className={styles.selectWrapper}>
            <select
              id="timezone"
              className={styles.select}
              value={timezone}
              onChange={e => setTimezone(e.target.value)}
            >
              {TIMEZONES.map(tz => (
                <option key={tz} value={tz}>
                  {tz.replace(/_/g, ' ')}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.toggleRow}>
          <div className={styles.toggleInfo}>
            <span className={styles.toggleLabel}>Enable analytics</span>
            <span className={styles.toggleDesc}>
              Allow Linear to collect usage data to improve the product.
            </span>
          </div>
          <Toggle
            checked={analyticsEnabled}
            onChange={setAnalyticsEnabled}
            aria-label="Enable analytics"
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
