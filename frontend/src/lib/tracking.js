const TRACKED_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
];

const STORAGE_KEY = "ja_tracking_params";

export const initTracking = () => {
  window.dataLayer = window.dataLayer || [];
  const current = new URLSearchParams(window.location.search);
  const stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
  let changed = false;
  TRACKED_KEYS.forEach((key) => {
    const value = current.get(key);
    if (value && stored[key] !== value) {
      stored[key] = value;
      changed = true;
    }
  });
  if (changed) sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
};

export const pushEvent = (event, payload = {}) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, page: window.location.pathname, ...payload });
};

export const openFlipform = (location) => {
  pushEvent("cta_click", { cta_location: location });
  pushEvent("flipform_start", { cta_location: location });
  const base = process.env.REACT_APP_FLIPFORM_URL;
  const url = new URL(base);
  const stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
  Object.entries(stored).forEach(([key, value]) => url.searchParams.set(key, value));
  window.open(url.toString(), "_blank", "noopener,noreferrer");
};
