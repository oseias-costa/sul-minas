"use client;";
import React from "react";

export default function GoogleBody({id}:{id: string}) {
  const strId = `https://www.googletagmanager.com/ns.html?id=GTM-${id}`

  return (
    <noscript>
      <iframe
        src={strId}
        height="0"
        width="0"
        className="display: none; visibility:hidden"
      ></iframe>
    </noscript>
  );
}