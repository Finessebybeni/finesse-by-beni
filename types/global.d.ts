export {};

declare global {
  interface Window {
    // Meta Pixel — зареден чрез inline скрипта в app/layout.tsx.
    fbq?: (...args: unknown[]) => void;
  }
}
