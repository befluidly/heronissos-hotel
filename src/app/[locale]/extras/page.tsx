import { getExtrasItems } from "@/lib/queries";
import { ExtrasPageClient } from "@/components/sections/ExtrasPageClient";

export default async function ExtrasPage() {
  let items = [];
  try {
    items = await getExtrasItems();
  } catch (error) {
    console.error("Sanity fetch error:", error);
  }

  return <ExtrasPageClient items={items} />;
}
