<script lang="ts">
    import type { Person, VariantId } from "./data";

    type PersonWithSrc = Person & { src: string | null };

    let { people, variant }: { people: PersonWithSrc[]; variant: VariantId } = $props();

    /** The person whose quote is shown (falls back to the first person). */
    const quoted = $derived(people.find((p) => p.quote) ?? people[0]);
    const others = $derived(people.filter((p) => p !== quoted));

    function initials(name: string) {
        return name
            .trim()
            .split(/\s+/)
            .map((w) => w[0] ?? "")
            .slice(0, 2)
            .join("")
            .toUpperCase();
    }
</script>

<!-- Square photo, or an initials tile when no image has been resolved. -->
{#snippet tile(person: PersonWithSrc, eager: boolean = false)}
    {#if person.src}
        <img
            src={person.src}
            alt="Portrait of {person.name}"
            class="aspect-square w-full object-cover bg-neutral-100"
            loading={eager ? "eager" : "lazy"}
            decoding="async"
        />
    {:else}
        <div
            class="aspect-square w-full flex items-center justify-center bg-neutral-100 border border-dashed border-neutral-300 select-none"
            role="img"
            aria-label="Portrait of {person.name}"
        >
            <span class="text-5xl md:text-6xl font-semibold tracking-tight text-neutral-400">
                {initials(person.name)}
            </span>
        </div>
    {/if}
{/snippet}

<!-- Name + role • company -->
{#snippet caption(person: PersonWithSrc)}
    <div class="flex flex-col gap-1">
        <p class="font-semibold text-neutral-900 leading-snug">{person.name}</p>
        <p class="text-sm text-neutral-600 font-apercu leading-snug">
            {person.role} <span aria-hidden="true">•</span> {person.company}
        </p>
    </div>
{/snippet}

<!-- Quote card with a small downward notch so it visibly points at the card below. -->
{#snippet quoteCard(text: string)}
    <figure class="relative bg-white border border-dashed border-neutral-300 p-5 md:p-6">
        <blockquote class="font-semibold text-neutral-900 leading-relaxed">
            “{text}”
        </blockquote>
        <span
            aria-hidden="true"
            class="absolute left-8 -bottom-[7px] size-3 rotate-45 bg-white border-r border-b border-dashed border-neutral-300"
        ></span>
    </figure>
{/snippet}

{#if variant === "a"}
    <!-- A: clean three-column grid. Quote sits only above its person; photos share a baseline. -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-end">
        {#each people as person, i (person.slug)}
            <div class="flex flex-col gap-4 self-end">
                {#if person.quote}
                    <div class="pb-2">
                        {@render quoteCard(person.quote)}
                    </div>
                {/if}
                {@render tile(person, i === 0)}
                {@render caption(person)}
            </div>
        {/each}
    </div>
{:else if variant === "b"}
    <!-- B: full-width quote above, a dashed connector dropping into the quoted person's column, then a filmstrip. -->
    <div class="flex flex-col">
        {#if quoted?.quote}
            <figure class="bg-white border border-dashed border-neutral-300 p-6 md:p-10">
                <blockquote class="text-lg md:text-2xl font-semibold text-neutral-900 leading-relaxed md:leading-9">
                    “{quoted.quote}”
                </blockquote>
                <figcaption class="mt-4 text-sm text-neutral-600 font-apercu">— {quoted.name}</figcaption>
            </figure>

            <!-- Connector row: one cell per person, only the quoted person's cell draws a line. -->
            <div class="grid grid-cols-1 md:grid-cols-3" aria-hidden="true">
                {#each people as person (person.slug)}
                    <div class="flex justify-center">
                        {#if person === quoted}
                            <span class="block h-8 md:h-12 border-l border-dashed border-neutral-300"></span>
                        {/if}
                    </div>
                {/each}
            </div>
        {/if}

        <!-- Filmstrip: a single dashed frame wrapping all three, tight gaps. -->
        <div class="bg-white border border-dashed border-neutral-300 p-3 md:p-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                {#each people as person, i (person.slug)}
                    <div class="flex flex-col gap-3">
                        {@render tile(person, i === 0)}
                        <div class="px-1 pb-1">
                            {@render caption(person)}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
{:else}
    <!-- C: editorial. Quoted person is large with the quote overlaid; the others stack to the right. -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
        <div class="md:col-span-2 flex flex-col gap-4">
            {#if quoted?.quote}
                <!-- Mobile: quote sits directly above the photo. -->
                <div class="md:hidden pb-2">
                    {@render quoteCard(quoted.quote)}
                </div>
            {/if}

            <div class="relative">
                {@render tile(quoted, people.indexOf(quoted) === 0)}
                {#if quoted?.quote}
                    <!-- Desktop: translucent panel pinned to the bottom of the image. -->
                    <figure
                        class="hidden md:block absolute inset-x-0 bottom-0 m-4 bg-white/90 backdrop-blur border border-dashed border-neutral-300 p-6"
                    >
                        <blockquote class="text-lg lg:text-xl font-semibold text-neutral-900 leading-relaxed">
                            “{quoted.quote}”
                        </blockquote>
                    </figure>
                {/if}
            </div>
            {@render caption(quoted)}
        </div>

        <div class="flex flex-col gap-8 md:gap-6">
            {#each others as person (person.slug)}
                <div class="flex flex-col gap-3">
                    {@render tile(person, people.indexOf(person) === 0)}
                    {@render caption(person)}
                </div>
            {/each}
        </div>
    </div>
{/if}
