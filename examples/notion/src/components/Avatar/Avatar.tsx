import styles from "./Avatar.module.css";

export interface AvatarProps {
  name: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
} as const;

function getInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function Avatar({ name, size = "md" }: AvatarProps) {
  return (
    <div
      className={[styles.avatar, sizes[size]].join(" ")}
      aria-label={name}
    >
      {getInitials(name)}
    </div>
  );
}
