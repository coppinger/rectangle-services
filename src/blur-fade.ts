import { animate, inView, stagger } from "motion";

/**
 * Shared "blur fade" reveal used across the site (see the homepage sections).
 *
 * Tag markup with:
 * - `data-blur-fade` — element fades/blurs/slides in when it scrolls into view.
 * - `data-blur-fade-stagger` — group whose *direct* `[data-blur-fade]` children
 *   animate together, staggered. Optional value = seconds between children (default 0.25).
 *
 * Astro pages are wired automatically by the Layout (`initBlurFade(document)`).
 * Svelte components mount after that, so they use the `blurFade` action on their root.
 */

const HANDLED = "data-blur-fade-handled";

const KEYFRAMES = {
    opacity: [0, 1],
    filter: ["blur(4px)", "blur(0px)"],
    transform: ["translateY(8px)", "translateY(0px)"],
} as Record<string, any>;

const EASE: [number, number, number, number] = [0.25, 1, 0.5, 1];
const DURATION = 0.8;
const DEFAULT_STAGGER = 0.25;

function prefersReducedMotion() {
    return (
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    );
}

/** Elements under `root` matching `selector`, including `root` itself when it matches. */
function collect(root: ParentNode, selector: string): Element[] {
    const found = Array.from(root.querySelectorAll(selector));
    if (root instanceof Element && root.matches(selector)) found.unshift(root);
    return found;
}

/** Marks an element as owned by this module and sets its hidden starting state. */
function claim(el: Element): el is HTMLElement {
    if (!(el instanceof HTMLElement) || el.hasAttribute(HANDLED)) return false;
    el.setAttribute(HANDLED, "");
    el.style.opacity = "0";
    el.style.filter = "blur(4px)";
    el.style.transform = "translateY(8px)";
    return true;
}

/**
 * Wire blur-fade reveals for everything under `root`.
 * Safe to call more than once: elements already wired are skipped.
 * Returns a function that disconnects the in-view observers.
 */
export function initBlurFade(root: ParentNode = document): () => void {
    if (prefersReducedMotion()) return () => {};
    const stops: (() => void)[] = [];

    for (const group of collect(root, "[data-blur-fade-stagger]")) {
        const children = Array.from(group.querySelectorAll(":scope > [data-blur-fade]")).filter(claim);
        if (children.length === 0) continue;
        const each = Number(group.getAttribute("data-blur-fade-stagger")) || DEFAULT_STAGGER;

        stops.push(
            inView(
                group,
                () => {
                    animate(children, KEYFRAMES, {
                        delay: stagger(each, { startDelay: 0.1 }),
                        duration: DURATION,
                        ease: EASE,
                    });
                },
                { amount: 0.15 },
            ),
        );
    }

    for (const el of collect(root, "[data-blur-fade]")) {
        if (!claim(el)) continue;
        stops.push(
            inView(
                el,
                () => {
                    animate(el, KEYFRAMES, { duration: DURATION, ease: EASE });
                },
                { amount: 0.2 },
            ),
        );
    }

    return () => stops.forEach((stop) => stop());
}

/** Svelte action: `<div use:blurFade>` wires the node and everything inside it on mount. */
export function blurFade(node: HTMLElement) {
    const stop = initBlurFade(node);
    return { destroy: stop };
}
