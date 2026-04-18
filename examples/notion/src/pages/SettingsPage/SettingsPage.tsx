import { useEffect, useRef, useState } from "react";
import { SettingsNav } from "../../components/SettingsNav";
import type { NavSection } from "../../components/SettingsNav";
import { SectionGeneral } from "../../components/SectionGeneral";
import { SectionProfile } from "../../components/SectionProfile";
import { SectionNotifications } from "../../components/SectionNotifications";
import { SectionAccount } from "../../components/SectionAccount";
import styles from "./SettingsPage.module.css";

const SECTION_IDS: NavSection[] = [
  "general",
  "profile",
  "notifications",
  "account",
];

export function SettingsPage() {
  const [activeSection, setActiveSection] = useState<NavSection>("general");
  const mainRef = useRef<HTMLDivElement>(null);
  const isScrollingByNav = useRef(false);

  function scrollToSection(id: NavSection) {
    const el = document.getElementById(id);
    if (!el || !mainRef.current) return;
    isScrollingByNav.current = true;
    setActiveSection(id);
    mainRef.current.scrollTo({
      top: el.offsetTop - 32,
      behavior: "smooth",
    });
    setTimeout(() => {
      isScrollingByNav.current = false;
    }, 600);
  }

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    function onScroll() {
      if (isScrollingByNav.current) return;
      const scrollTop = main!.scrollTop + 80;
      let current: NavSection = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollTop) {
          current = id;
        }
      }
      setActiveSection(current);
    }

    main.addEventListener("scroll", onScroll, { passive: true });
    return () => main.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <SettingsNav active={activeSection} onSelect={scrollToSection} />
      </aside>
      <main className={styles.main} ref={mainRef}>
        <div className={styles.content}>
          <SectionGeneral />
          <div className={styles.sectionDivider} />
          <SectionProfile />
          <div className={styles.sectionDivider} />
          <SectionNotifications />
          <div className={styles.sectionDivider} />
          <SectionAccount />
          <div className={styles.bottomPadding} />
        </div>
      </main>
    </div>
  );
}
