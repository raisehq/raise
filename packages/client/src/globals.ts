declare global {
  interface Window {
    fbq: any;
  }
}

window.fbq = window.fbq || null;
