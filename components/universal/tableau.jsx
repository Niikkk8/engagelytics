"use client"; // Ensures this component runs only on the client in Next.js

import React, { useEffect, useRef } from "react";

const TableauIframe = () => {
  const vizUrl = "https://public.tableau.com/views/SuperMined/Dashboard1";

  return (
    <div className="w-100% h-100%">
      <iframe
        src={`${vizUrl}?:showVizHome=no&:embed=true`}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        title="Tableau Dashboard"
        
      ></iframe>
    </div>
  );
};

export default TableauIframe;