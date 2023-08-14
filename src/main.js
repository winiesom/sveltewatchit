import "./app.postcss";
import App from "./App.svelte";
// @ts-ignore
import * as Sentry from "@sentry/svelte";

Sentry.init({
  dsn: "https://bdb5c102ccddc295f56570a1ab140daf@o4505703098286080.ingest.sentry.io/4505703387824128",
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["https://svelte-watchit.netlify.app/"],
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

const app = new App({
  target: document.getElementById("app"),
});

export default app;
