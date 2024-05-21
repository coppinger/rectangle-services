<script lang="ts">
    export let title: string;
</script>

<li
    class="flex items-center gap-4 px-4 py-3 border border-neutral-300 bg-white border-dashed"
>
    <slot />
    <p>{title}</p>
</li>
