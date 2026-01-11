import React, { useEffect } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function IndexRedirect() {
  const to = useBaseUrl("/docs");
  useEffect(() => {
    if (typeof window !== "undefined") window.location.replace(to);
  }, [to]);
  return null;
}
