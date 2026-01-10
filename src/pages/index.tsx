import React from "react";
export default function IndexRedirect() {
  if (typeof window !== "undefined") window.location.replace("/docs");
  return null;
}
