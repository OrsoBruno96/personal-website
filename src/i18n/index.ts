import { en } from "./locales/en";
import { it, type Dictionary, type Locale } from "./schema";

export function getDictionary(locale: Locale): Dictionary {
  return locale === "en" ? en : it;
}
