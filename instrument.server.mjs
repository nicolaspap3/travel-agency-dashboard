import * as Sentry from "@sentry/react-router";

Sentry.init({
  dsn: "https://f06f56e0d0dbfc6dec719ecddd1b2560@o4509480486174720.ingest.de.sentry.io/4509480491483216",

  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
