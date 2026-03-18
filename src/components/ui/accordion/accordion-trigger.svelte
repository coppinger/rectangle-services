<script lang="ts">
    import { Accordion as AccordionPrimitive } from "bits-ui";
    import ChevronDown from "lucide-svelte/icons/chevron-down";
    import { cn } from "$lib/utils.js";
    import type { Snippet } from "svelte";

    let {
        class: className,
        level = 3,
        children,
        ...restProps
    }: AccordionPrimitive.TriggerProps & {
        level?: 1 | 2 | 3 | 4 | 5 | 6;
        children?: Snippet;
    } = $props();
</script>

<AccordionPrimitive.Header {level} class="flex">
    <AccordionPrimitive.Trigger
        class={cn(
            "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 text-left gap-2",
            className
        )}
        {...restProps}
    >
        {@render children?.()}
        <ChevronDown class="h-4 w-4 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
