// Shared data for the /portfolio page. Edit copy here, not in components.

export const PASSWORD = "rectangle";

export type Person = {
    /** matches the filename stem in src/images/portfolio/ (any extension) */
    slug: string;
    name: string;
    role: string;
    company: string;
    /** optional pull quote shown above this person's card */
    quote?: string;
};

export const PEOPLE: Person[] = [
    {
        slug: "steven-bartlett",
        name: "Steven Bartlett",
        role: "Host, The Diary of a CEO",
        company: "Flight Story",
        quote:
            "Charlie became a trusted extension of our team—it felt like he had worked with us for years. He worked at the speed of light to help us launch an important project. He is now my go-to contact for everything product design.",
    },
    {
        slug: "simon-sinek",
        name: "Simon Sinek",
        role: "Founder",
        company: "The Optimism Company",
    },
    {
        slug: "mary-holland-nader",
        name: "Mary Holland Nader",
        role: "Founder",
        company: "Mary and Pip",
    },
];

export const FEATURED = {
    label: "Featured project",
    name: "AI Commons",
    blurb:
        "New Zealand's open community for building, learning and discussing AI. I own the whole thing end to end: the brand identity, the product design, and the build of the site itself.",
    url: "https://aicommons.nz",
    /** what I did on this project */
    roles: ["Product strategy", "Brand", "Product design", "Development"],
};

export type Project = { name: string; url: string; domain: string };

/** Other projects listed under the featured card. */
export const PROJECTS: Project[] = [
    { name: "Mary & Pip", url: "https://www.maryandpip.com/", domain: "maryandpip.com" },
    { name: "Culture Test", url: "https://culturetest.com/", domain: "culturetest.com" },
    { name: "Leaderful", url: "https://simonsinek.com/leaderful", domain: "simonsinek.com" },
];

export type Company = { name: string; domain: string };

export const COMPANIES: Company[] = [
    { name: "Shopify", domain: "shopify.com" },
    { name: "OpenAI", domain: "openai.com" },
    { name: "Cerebras", domain: "cerebras.ai" },
    { name: "Stripe", domain: "stripe.com" },
    { name: "Supabase", domain: "supabase.com" },
    { name: "Artorias", domain: "artorias.com" },
];

/** logo.dev publishable key (safe to ship client-side). */
export const LOGO_DEV_TOKEN = "pk_MyixuYwNSLCfvO2ff2YrCQ";

export function logoUrl(domain: string, opts: { size?: number; greyscale?: boolean; format?: "png" | "webp" } = {}) {
    const p = new URLSearchParams({ token: LOGO_DEV_TOKEN });
    p.set("size", String(opts.size ?? 128));
    p.set("format", opts.format ?? "png");
    if (opts.greyscale) p.set("greyscale", "true");
    return `https://img.logo.dev/${domain}?${p.toString()}`;
}

/** Variant ids each section supports. Keep in sync with the components. */
export const VARIANTS = {
    people: ["a", "b", "c"],
    featured: ["a", "b", "c"],
    logos: ["a", "b", "c"],
} as const;

export type SectionKey = keyof typeof VARIANTS;
export type VariantId = "a" | "b" | "c";
export type VariantState = Record<SectionKey, VariantId>;
