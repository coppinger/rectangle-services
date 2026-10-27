<script lang="ts">
    import { logoUrl, type Project } from "./data";

    let { projects }: { projects: Project[] } = $props();

    let failed = $state(new Set<string>());
</script>

<ul class="flex flex-col gap-3">
    {#each projects as project (project.url)}
        <li>
            <a
                href={project.url}
                target="_blank"
                rel="noopener"
                class="group flex items-center gap-3 h-12 px-4 bg-white border border-dashed border-neutral-300 hover:border-neutral-900 transition-colors"
            >
                {#if !failed.has(project.domain)}
                    <img
                        src={logoUrl(project.domain, { size: 64 })}
                        alt=""
                        width="20"
                        height="20"
                        loading="lazy"
                        class="size-5 object-contain shrink-0"
                        onerror={() => (failed = new Set([...failed, project.domain]))}
                    />
                {/if}
                <span class="font-medium text-neutral-900 truncate">{project.name}</span>
                <span class="ml-auto font-apercu text-sm text-neutral-500 group-hover:text-neutral-900 transition-colors" aria-hidden="true">-&gt;</span>
            </a>
        </li>
    {/each}
</ul>
