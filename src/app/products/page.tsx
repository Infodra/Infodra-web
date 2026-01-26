import { redirect } from "next/navigation";

export default function ProductsPage() {
  // Redirect /products to /pricing
  redirect("/pricing");
}
