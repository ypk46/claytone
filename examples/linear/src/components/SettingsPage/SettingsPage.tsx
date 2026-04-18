import { useState, useRef, useEffect, useCallback, type RefObject } from 'react'
import { SettingsNav } from '../SettingsNav'
import { GeneralSection } from '../GeneralSection'
import { ProfileSection } from '../ProfileSection'
import { NotificationsSection } from '../NotificationsSection'
import { AccountSection } from '../AccountSection'
import type { SectionId } from '../../types'
import styles from './SettingsPage.module.css'

const SECTIONS = ['general', 'profile', 'notifications', 'account'] as const

export function SettingsPage() {
  const [active, setActive] = useState<SectionId>('general')
  const isScrollingRef = useRef(false)
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined)
  const mainRef = useRef<HTMLDivElement>(null)

  const generalRef = useRef<HTMLDivElement>(null)
  const profileRef = useRef<HTMLDivElement>(null)
  const notificationsRef = useRef<HTMLDivElement>(null)
  const accountRef = useRef<HTMLDivElement>(null)

  const sectionRefs = useRef<Record<SectionId, RefObject<HTMLDivElement>>>({
    general: generalRef,
    profile: profileRef,
    notifications: notificationsRef,
    account: accountRef,
  })

  useEffect(() => {
    const mainEl = mainRef.current
    if (!mainEl) return

    const handleScroll = () => {
      if (isScrollingRef.current) return
      const mainTop = mainEl.getBoundingClientRect().top
      let current: SectionId = 'general'
      for (const id of SECTIONS) {
        const el = sectionRefs.current[id].current
        if (!el) continue
        if (el.getBoundingClientRect().top - mainTop < 80) {
          current = id
        }
      }
      setActive(current)
    }

    mainEl.addEventListener('scroll', handleScroll, { passive: true })
    return () => mainEl.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = useCallback((id: SectionId) => {
    setActive(id)
    isScrollingRef.current = true
    clearTimeout(scrollTimerRef.current)
    sectionRefs.current[id].current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    scrollTimerRef.current = setTimeout(() => {
      isScrollingRef.current = false
    }, 1000)
  }, [])

  return (
    <div className={styles.page}>
      <aside className={styles.sidebar}>
        <SettingsNav active={active} onSelect={scrollToSection} />
      </aside>
      <main ref={mainRef} className={styles.main}>
        <div className={styles.content}>
          <div ref={generalRef} className={styles.sectionWrapper}>
            <GeneralSection />
          </div>
          <div ref={profileRef} className={styles.sectionWrapper}>
            <ProfileSection />
          </div>
          <div ref={notificationsRef} className={styles.sectionWrapper}>
            <NotificationsSection />
          </div>
          <div ref={accountRef} className={styles.sectionWrapper}>
            <AccountSection />
          </div>
        </div>
      </main>
    </div>
  )
}
