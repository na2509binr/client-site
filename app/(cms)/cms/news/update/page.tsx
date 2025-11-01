import { Suspense } from "react";
import UpdatePageClient from "./update-page";

export default function Page() {
  return(
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <UpdatePageClient />;
    </Suspense>
    </>
  ) 
}
