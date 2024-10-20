<script lang="ts">
    export let availability: boolean;
    export let month: string;
</script>

<div
    class="flex items-center lg:items-start xl:items-center lg:flex-col xl:flex-row justify-center gap-2 xl:gap-3 px-4 cols-span-1 py-4 xl:py-0"
>
    <div class="rounded-[1px] border border-neutral-300 w-[20px] h-[12px]">
        {#if !availability}
            <div
                class="border border-neutral-50 bg-red-400 w-full h-full rounded-[2px]"
            ></div>
        {:else}
            <div
                class="border border-neutral-50 bg-green-500 w-full h-full rounded-[2px]"
            ></div>
        {/if}
    </div>
    <p class={availability ? "" : "line-through"}>
        <span class="hidden lg:inline">
            <slot />
        </span>
        <span class="lg:hidden">{month.slice(0, 3)}</span>
    </p>
</div>
