<script lang="ts">
    import type { Company, FEATURED, Person, Project, VariantState } from "./data";
    import { VARIANTS } from "./data";
    import PasswordGate from "./PasswordGate.svelte";
    import VariantSwitcher from "./VariantSwitcher.svelte";
    import PeopleRow from "./PeopleRow.svelte";
    import FeaturedProject from "./FeaturedProject.svelte";
    import ProjectList from "./ProjectList.svelte";
    import LogoRow from "./LogoRow.svelte";

    let {
        people,
        featured,
        companies,
        projects,
        password,
    }: {
        people: (Person & { src: string | null })[];
        featured: typeof FEATURED;
        companies: Company[];
        projects: Project[];
        password: string;
    } = $props();

    let variants = $state<VariantState>({ people: "b", featured: "a", logos: "a" });
</script>

<PasswordGate {password}>
    <div class="flex flex-col gap-10 md:gap-20">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
            <div class="md:col-span-2 min-w-0">
                <PeopleRow {people} variant={variants.people} />
            </div>
            <aside class="md:col-span-1 min-w-0 flex flex-col gap-3">
                <FeaturedProject {featured} variant={variants.featured} />
                <ProjectList {projects} />
            </aside>
        </div>

        <LogoRow {companies} variant={variants.logos} />
    </div>

    <VariantSwitcher bind:variants sections={VARIANTS} />
</PasswordGate>
