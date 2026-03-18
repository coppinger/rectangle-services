<script lang="ts">
    import type { Snippet } from "svelte";

    let { title, children, ...restProps }: { title: string; children?: Snippet; [key: string]: any } = $props();
</script>

<li
    class="flex items-center gap-4 px-4 py-3 border border-neutral-300 bg-white border-dashed"
    {...restProps}
>
    {@render children?.()}
    <p>{title}</p>
</li>
