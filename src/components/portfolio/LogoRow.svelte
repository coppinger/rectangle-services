<script lang="ts">
    import { logoUrl, type Company, type VariantId } from "./data";
    import { blurFade } from "$lib/blur-fade";

    let {
        companies,
        variant,
        heading = "",
    }: { companies: Company[]; variant: VariantId; heading?: string } = $props();

    /** Domains whose logo failed to load — rendered as text instead of a broken image. */
    let failed = $state(new Set<string>());

    function fail(domain: string) {
        failed = new Set([...failed, domain]);
    }

    /** Variant C duplicates the list once so the marquee can loop seamlessly. */
    const loop = $derived([...companies, ...companies]);
</script>

{#if variant === "a"}
    <!-- A: label + single white strip of 5 equal cells, greyscale logos that colour on hover -->
    <section class="flex flex-col gap-4" use:blurFade>
        {#if heading}
            <h2 class="font-apercu text-xs uppercase tracking-wider text-neutral-500" data-blur-fade>{heading}</h2>
        {/if}
        <!-- Cells carry right+bottom dashed borders; the -mr/-mb offset hides the trailing ones under the wrapper edge. -->
        <div class="border border-dashed border-neutral-300 bg-white overflow-hidden">
        <ul class="grid grid-cols-2 md:grid-cols-6 -mr-px -mb-px" data-blur-fade-stagger="0.08">
            {#each companies as company (company.domain)}
                <li
                    class="group flex flex-col items-center justify-center gap-3 px-4 py-8 border-r border-b border-dashed border-neutral-300"
                    data-blur-fade
                >
                    {#if failed.has(company.domain)}
                        <span class="flex size-10 md:size-12 items-center justify-center text-lg font-bold text-neutral-400">
                            {company.name}
                        </span>
                    {:else}
                        <img
                            src={logoUrl(company.domain, { size: 96 })}
                            alt={company.name}
                            loading="lazy"
                            width="48"
                            height="48"
                            class="size-10 md:size-12 object-contain grayscale group-hover:grayscale-0 transition duration-300"
                            onerror={() => fail(company.domain)}
                        />
                    {/if}
                    <span class="text-sm text-neutral-600">{company.name}</span>
                </li>
            {/each}
        </ul>
        </div>
    </section>
{:else if variant === "b"}
    <!-- B: bold heading + wrapped row of chips (echoes Tool.svelte) -->
    <section class="flex flex-col gap-5" use:blurFade>
        {#if heading}
            <h2 class="text-2xl font-bold text-neutral-900" data-blur-fade>{heading}</h2>
        {/if}
        <ul class="flex flex-wrap gap-3" data-blur-fade-stagger="0.08">
            {#each companies as company (company.domain)}
                <li class="inline-flex items-center gap-3 px-4 py-3 border border-dashed border-neutral-300 bg-white" data-blur-fade>
                    {#if !failed.has(company.domain)}
                        <img
                            src={logoUrl(company.domain, { size: 48 })}
                            alt={company.name}
                            loading="lazy"
                            width="24"
                            height="24"
                            class="size-6 object-contain"
                            onerror={() => fail(company.domain)}
                        />
                    {/if}
                    <span class="font-medium text-neutral-900">{company.name}</span>
                </li>
            {/each}
        </ul>
    </section>
{:else}
    <!-- C: centred heading + marquee strip like the homepage, large greyscale logos -->
    <section class="flex flex-col gap-6" use:blurFade>
        {#if heading}
            <h2 class="text-center font-apercu text-xs uppercase tracking-wider text-neutral-500" data-blur-fade>{heading}</h2>
        {/if}
        <div class="marquee border border-dashed border-neutral-300 bg-neutral-50 px-5 py-8 overflow-hidden" data-blur-fade>
            <!-- Spacing lives on each item (pr-16, no flex gap) so the duplicated half is exactly 50% of the track and the loop is seamless. -->
            <ul class="marquee__track flex w-max items-center" aria-label={heading || "Companies I work with"}>
                {#each loop as company, i (`${company.domain}-${i}`)}
                    <li class="flex shrink-0 items-center justify-center pr-16" aria-hidden={i >= companies.length}>
                        {#if failed.has(company.domain)}
                            <span class="flex h-16 items-center text-2xl font-bold text-neutral-400">{company.name}</span>
                        {:else}
                            <img
                                src={logoUrl(company.domain, { size: 128, greyscale: true })}
                                alt={i < companies.length ? company.name : ""}
                                loading="lazy"
                                width="64"
                                height="64"
                                class="size-16 object-contain opacity-80"
                                onerror={() => fail(company.domain)}
                            />
                        {/if}
                    </li>
                {/each}
            </ul>
        </div>
    </section>
{/if}

<style>
    .marquee {
        mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
    }

    .marquee__track {
        animation: logo-row-scroll 30s linear infinite;
    }

    .marquee:hover .marquee__track {
        animation-play-state: paused;
    }

    @keyframes logo-row-scroll {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-50%);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .marquee__track {
            animation: none;
        }
    }
</style>
