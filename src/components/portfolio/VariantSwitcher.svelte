<script lang="ts">
    import { onMount } from "svelte";
    import type { SectionKey, VariantId, VariantState } from "./data";
    import { track } from "$lib/analytics";

    let {
        variants = $bindable(),
        sections,
    }: {
        variants: VariantState;
        sections: Record<SectionKey, readonly VariantId[]>;
    } = $props();

    const STORAGE_KEY = "portfolio-variants-v2";
    const LABELS: Record<SectionKey, string> = {
        people: "People",
        featured: "Featured",
        logos: "Logos",
    };

    let visible = $state(false);
    let hydrated = $state(false);

    function isVariant(key: SectionKey, v: string | null | undefined): v is VariantId {
        return v != null && (sections[key] as readonly string[]).includes(v);
    }

    // On mount: show if ?variants is present; read URL params (priority) then localStorage.
    onMount(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.has("variants")) visible = true;

        let stored: Partial<Record<string, string>> = {};
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) stored = JSON.parse(raw) ?? {};
        } catch {}

        const next: VariantState = { ...variants };
        for (const key of Object.keys(sections) as SectionKey[]) {
            const fromUrl = params.get(key);
            const fromStorage = stored[key];
            if (isVariant(key, fromUrl)) next[key] = fromUrl;
            else if (isVariant(key, fromStorage)) next[key] = fromStorage;
        }
        variants = next;
        hydrated = true;
    });

    // Persist + sync to URL whenever state changes (after initial hydration).
    $effect(() => {
        if (!hydrated) return;
        const snapshot = $state.snapshot(variants);
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
        } catch {}
        const url = new URL(window.location.href);
        for (const key of Object.keys(sections) as SectionKey[]) {
            url.searchParams.set(key, snapshot[key]);
        }
        history.replaceState(history.state, "", url);
    });

    function onKeydown(e: KeyboardEvent) {
        if (e.key !== "v" || e.metaKey || e.ctrlKey || e.altKey) return;
        const target = e.target as HTMLElement | null;
        const tag = target?.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target?.isContentEditable) return;
        visible = !visible;
    }

    function pick(key: SectionKey, v: VariantId) {
        if (variants[key] === v) return;
        variants = { ...variants, [key]: v };
        track("portfolio_variant_changed", { section: key, variant: v });
    }
</script>

<svelte:window onkeydown={onKeydown} />

{#if visible}
    <div
        class="fixed bottom-4 right-4 z-50 flex flex-col gap-3 bg-white border border-dashed border-neutral-300 p-3 font-apercu text-xs text-neutral-900 shadow-sm"
        role="group"
        aria-label="Layout variants"
    >
        <div class="flex items-center justify-between gap-6">
            <span class="uppercase tracking-wide text-neutral-500">Variants</span>
            <button
                type="button"
                class="text-neutral-500 hover:text-neutral-900 cursor-pointer"
                onclick={() => (visible = false)}
                aria-label="Hide variant switcher (press v to toggle)"
            >
                v
            </button>
        </div>
        {#each Object.keys(sections) as SectionKey[] as key (key)}
            <div class="flex items-center justify-between gap-6">
                <span>{LABELS[key] ?? key}</span>
                <div class="flex">
                    {#each sections[key] as v (v)}
                        <button
                            type="button"
                            onclick={() => pick(key, v)}
                            aria-pressed={variants[key] === v}
                            class="size-7 border border-neutral-300 -ml-px first:ml-0 uppercase cursor-pointer transition-colors
                                {variants[key] === v
                                ? 'bg-neutral-900 text-white border-neutral-900'
                                : 'bg-white text-neutral-900 hover:bg-neutral-100'}"
                        >
                            {v}
                        </button>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
{/if}
