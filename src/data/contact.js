export const PHONE = {
  coimbatore: {
    tel: "+916282450300",
    display: "6282450300",
    displayFull: "+91 6282450300",
    city: "Coimbatore",
  },
};

/** Get phone for a city slug (e.g. 'chennai', 'coimbatore'). */
export function getPhoneForCity(citySlug) {
  const key = String(citySlug || "").toLowerCase();
  return PHONE[key] || PHONE.coimbatore;
}

/** All numbers for display (e.g. footer, contact). */
export function getAllPhones() {
  return [PHONE.coimbatore];
}

/** City slugs and names for service-area URLs. */
export const SERVICE_CITIES = [
  { slug: "coimbatore", name: "Coimbatore" },
  { slug: "coimbatore", name: "Coimbatore" },
];

const SERVICE_IN_CITY_SUFFIX = "-service-in-";

/** Build path: /services/[city]/[service]-service-in-[city] (e.g. /services/chennai/washing-machine-service-in-chennai). */
export function getServiceInCityPath(serviceSlug, citySlug) {
  return `/services/${citySlug}/${serviceSlug}${SERVICE_IN_CITY_SUFFIX}${citySlug}`;
}

/** Build path: /services/[main-city]/[service]-service-in-[area-name] (e.g. /services/coimbatore/washing-machine-service-in-gandhipuram). */
export function getServiceInAreaPath(serviceSlug, citySlug, areaSlug) {
  return `/services/${citySlug}/${serviceSlug}${SERVICE_IN_CITY_SUFFIX}${areaSlug}`;
}

/** Build slug segment: [service]-service-in-[city] (e.g. washing-machine-service-in-chennai). */
export function getServiceInCitySlug(serviceSlug, citySlug) {
  return `${serviceSlug}${SERVICE_IN_CITY_SUFFIX}${citySlug}`;
}

/** Parse slug segment into { serviceSlug, citySlug } or null if invalid. */
export function parseServiceInCitySlug(slug) {
  if (!slug || typeof slug !== "string") return null;
  const idx = slug.indexOf(SERVICE_IN_CITY_SUFFIX);
  if (idx === -1) return null;
  const serviceSlug = slug.slice(0, idx);
  const citySlug = slug.slice(idx + SERVICE_IN_CITY_SUFFIX.length);
  return { serviceSlug, citySlug };
}

/** Primary number for schema/fallback (Coimbatore). */
export const PRIMARY_PHONE = PHONE.coimbatore.tel;
export const PRIMARY_PHONE_DISPLAY = PHONE.coimbatore.displayFull;
