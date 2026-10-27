/**
 * Thin wrapper around the PostHog snippet loaded in `components/posthog.astro`.
 * `window.posthog` is a queueing stub until the real script loads, so calling
 * `capture` early is safe. Never throws, so it can be called from any handler.
 */

type PostHogLike = {
    capture: (event: string, properties?: Record<string, unknown>) => void;
};

declare global {
    interface Window {
        posthog?: PostHogLike;
    }
}

export function track(event: string, properties?: Record<string, unknown>) {
    if (typeof window === "undefined") return;
    try {
        window.posthog?.capture(event, properties);
    } catch {
        // analytics must never break the page
    }
}
