# /portfolio components — contract

All section components are Svelte 5 (runes). Tailwind v4. Match homepage look:
white cards, `border border-dashed border-neutral-300`, `bg-neutral-50` page,
`text-neutral-900` headings, Plus Jakarta Sans default, `font-apercu` for small labels/buttons.
No rounded corners (site is square-edged). Use `size-*` for squares.

## Props
- `PeopleRow.svelte`: `{ people: (Person & { src: string | null })[], variant: VariantId }`
  - `src` is a resolved image URL or `null` → render an initials tile fallback.
  - If `person.quote` exists, render the quote ABOVE that person's card.
- `FeaturedProject.svelte`: `{ featured: typeof FEATURED, variant: VariantId }`
- `LogoRow.svelte`: `{ companies: Company[], variant: VariantId, heading: string }`
  - Use `logoUrl(domain, …)` from `./data.ts`. Always show the company name as alt text.

Variants: "a" | "b" | "c". Each must be a visibly different layout/treatment, not a colour swap.
Export nothing else. No external deps beyond what's in package.json (lucide-svelte and motion are available).
