<script lang="ts">
    import type { FEATURED, VariantId } from "./data";
    import AiCommonsLogo from "./AiCommonsLogo.svelte";

    let { featured, variant }: { featured: typeof FEATURED; variant: VariantId } = $props();

    const hasUrl = $derived(featured.url.trim().length > 0);
</script>

{#if variant === "a"}
    <!-- A: white dashed card, monogram tile, stacked content, full column height -->
    <aside class="h-full flex flex-col gap-6 p-8 bg-white border border-dashed border-neutral-300">
        <div class="flex flex-col gap-4">
            <p class="font-apercu text-xs uppercase tracking-wider text-neutral-500">{featured.label}</p>
            <h3 class="text-neutral-900">
                <a href={featured.url} target="_blank" rel="noopener" class="inline-block hover:opacity-70 transition-opacity">
                    <AiCommonsLogo class="h-9 w-auto" />
                </a>
            </h3>
            <p class="text-neutral-700 leading-relaxed">{featured.blurb}</p>
        </div>

        <ul class="flex flex-wrap gap-2" aria-label="My role">
            {#each featured.roles as role (role)}
                <li class="font-apercu text-xs border border-dashed border-neutral-300 bg-white text-neutral-900 px-2 py-1">{role}</li>
            {/each}
        </ul>

        <div class="mt-auto pt-2">
            {#if hasUrl}
                <a
                    href={featured.url}
                    target="_blank"
                    rel="noopener"
                    class="flex w-full items-center justify-center text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 font-apercu transition-colors"
                >
                    View project -&gt;
                </a>
            {:else}
                <span class="inline-block font-apercu text-xs border border-dashed border-neutral-300 text-neutral-500 px-2 py-1">
                    In progress
                </span>
            {/if}
        </div>
    </aside>
{:else if variant === "b"}
    <!-- B: dark card with a faint dotted grid, inverted controls -->
    <aside
        class="relative h-full flex flex-col gap-6 p-8 bg-neutral-900 text-neutral-50 overflow-hidden"
        style="background-image: radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px); background-size: 16px 16px;"
    >
        <div class="relative flex flex-col gap-4">
            <p class="font-apercu text-xs uppercase tracking-wider text-neutral-400">{featured.label}</p>
            <h3 class="text-neutral-50">
                <a href={featured.url} target="_blank" rel="noopener" class="inline-block hover:opacity-70 transition-opacity">
                    <AiCommonsLogo class="h-9 w-auto" />
                </a>
            </h3>
            <p class="text-neutral-300 leading-relaxed">{featured.blurb}</p>
        </div>

        <ul class="relative flex flex-wrap gap-2" aria-label="My role">
            {#each featured.roles as role (role)}
                <li class="font-apercu text-xs border border-dashed border-neutral-600 text-neutral-100 px-2 py-1">{role}</li>
            {/each}
        </ul>

        <div class="relative mt-auto pt-2">
            {#if hasUrl}
                <a
                    href={featured.url}
                    target="_blank"
                    rel="noopener"
                    class="flex w-full items-center justify-center text-sm font-medium bg-white text-neutral-900 hover:bg-neutral-200 h-10 px-4 py-2 font-apercu transition-colors"
                >
                    View project -&gt;
                </a>
            {:else}
                <span class="inline-block font-apercu text-xs border border-dashed border-neutral-600 text-neutral-300 px-2 py-1">
                    In progress
                </span>
            {/if}
        </div>
    </aside>
{:else}
    <!-- C: no card, editorial left rule, oversized name, sticky on desktop -->
    <aside class="md:sticky md:top-10 border-l-2 border-neutral-900 pl-6 flex flex-col gap-5">
        <p class="font-apercu text-xs uppercase tracking-wider text-neutral-500">{featured.label}</p>
        <h3 class="text-neutral-900">
            <a href={featured.url} target="_blank" rel="noopener" class="inline-block hover:opacity-70 transition-opacity">
                <AiCommonsLogo class="h-12 w-auto" />
            </a>
        </h3>
        <p class="text-neutral-700 leading-relaxed">{featured.blurb}</p>

        <ul class="flex flex-wrap gap-2" aria-label="My role">
            {#each featured.roles as role (role)}
                <li class="font-apercu text-xs border border-dashed border-neutral-300 bg-white text-neutral-900 px-2 py-1">{role}</li>
            {/each}
        </ul>

        <hr class="border-0 border-t border-dashed border-neutral-300" />

        <div>
            {#if hasUrl}
                <a
                    href={featured.url}
                    target="_blank"
                    rel="noopener"
                    class="flex w-full items-center justify-center text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 font-apercu transition-colors"
                >
                    View project -&gt;
                </a>
            {:else}
                <span class="inline-block font-apercu text-xs border border-dashed border-neutral-300 text-neutral-500 px-2 py-1">
                    In progress
                </span>
            {/if}
        </div>
    </aside>
{/if}
