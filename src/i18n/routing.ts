import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "nl", "pl", "de", "fr", "it"],
  defaultLocale: "en",
});
