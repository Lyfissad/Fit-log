"use client";

import { Suspense } from "react";
import MobileHome from "./MobileHomeScreen";

export default function SuspenseMobile() {
  return (
    <div>
      <Suspense>
        <MobileHome />
      </Suspense>
    </div>
  );
}
