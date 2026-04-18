import type { SectionId } from '../../types'
import styles from './SettingsNav.module.css'

const NAV_ITEMS: { id: SectionId; label: string }[] = [
  { id: 'general', label: 'General' },
  { id: 'profile', label: 'Profile' },
  { id: 'notifications', label: 'Notifications' },
  { id: 'account', label: 'Account' },
]

export interface SettingsNavProps {
  active: SectionId
  onSelect: (id: SectionId) => void
}

export function SettingsNav({ active, onSelect }: SettingsNavProps) {
  return (
    <nav className={styles.nav} aria-label="Settings navigation">
      <div className={styles.workspace}>
        <span className={styles.workspaceIcon}>A</span>
        <span className={styles.workspaceName}>Acme Inc.</span>
      </div>
      <div className={styles.divider} />
      <p className={styles.heading}>Settings</p>
      <ul className={styles.list} role="list">
        {NAV_ITEMS.map(item => (
          <li key={item.id}>
            <button
              type="button"
              className={`${styles.item} ${active === item.id ? styles.active : ''}`}
              onClick={() => onSelect(item.id)}
              aria-current={active === item.id ? 'page' : undefined}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
