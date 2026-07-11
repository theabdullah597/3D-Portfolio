import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge Tailwind classes with clsx */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Clamp a number between min and max */
export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

/** Map a value from one range to another */
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
) {
  return ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
}

/** Linear interpolation */
export function lerp(start: number, end: number, t: number) {
  return start * (1 - t) + end * t;
}

/** Format date string */
export function formatDate(dateStr: string): string {
  if (dateStr === 'present') return 'Present';
  const [year, month] = dateStr.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}

/** Debounce a function */
export function debounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

/** Generate a random float between min and max */
export function randomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

/** Check if we're in the browser */
export const isBrowser = typeof window !== 'undefined';

/** Smooth easing functions */
export const easings = {
  easeInOut: [0.25, 0.46, 0.45, 0.94],
  easeOut: [0.0, 0.0, 0.2, 1.0],
  easeIn: [0.4, 0.0, 1.0, 1.0],
  spring: [0.34, 1.56, 0.64, 1],
  cinematic: [0.76, 0, 0.24, 1],
} as const;
