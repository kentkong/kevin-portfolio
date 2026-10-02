import { redirect } from "next/navigation";
import { lifecycleStudioAppPath, lifecycleStudioDefaultSlug } from "@/lib/lifecycle-studio-patterns";

export default function LifecycleStudioAppIndexPage() {
  redirect(lifecycleStudioAppPath(lifecycleStudioDefaultSlug));
}
