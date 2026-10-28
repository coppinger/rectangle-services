/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
    /** PostHog project API key. Optional; see src/components/posthog.astro for the fallback. */
    readonly PUBLIC_POSTHOG_KEY?: string;
    /** PostHog ingest host override. Optional; defaults to /ingest in prod, us.i.posthog.com in dev. */
    readonly PUBLIC_POSTHOG_HOST?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
