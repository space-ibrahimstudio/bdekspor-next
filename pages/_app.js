import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { initGA, logPageView } from "@/components/utils/analytics";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return <Component {...pageProps} />;
}
