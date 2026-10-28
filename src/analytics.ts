/**
 * Thin wrapper around the PostHog snippet loaded in `components/posthog.astro`.
 *
 * ALL capture calls must go through `track()`; never call `window.posthog`
 * directly. `window.posthog` is a queueing stub until the real script loads,
 * so calling `track` early is safe. Never throws, so it can be called from any
 * handler.
 *
 * In dev (`import.meta.env.DEV`) the loader's `before_send` logs each event to
 * the console as `[posthog] <event> <properties>` and drops it, so local
 * sessions never reach the production project.
 */

/** Every custom event the site sends. Keep in sync when adding events. */
export type AnalyticsEvent =
    | "cta_clicked"
    | "email_copied"
    | "email_client_opened"
    | "call_booked"
    | "call_event_type_selected"
    | "faq_opened"
    | "portfolio_viewed"
    | "portfolio_unlocked"
    | "portfolio_unlock_failed"
    | "portfolio_variant_changed"
    | "portfolio_link_clicked";

type PostHogLike = {
    capture: (event: string, properties?: Record<string, unknown>) => void;
};

declare global {
    interface Window {
        posthog?: PostHogLike;
    }
}

export function track(
    event: AnalyticsEvent | (string & {}),
    properties?: Record<string, unknown>,
) {
    if (typeof window === "undefined") return;
    try {
        window.posthog?.capture(event, properties);
    } catch {
        // analytics must never break the page
    }
}
