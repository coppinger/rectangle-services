<script lang="ts">
    import { Accordion as AccordionPrimitive } from "bits-ui";
    import { cn } from "$lib/utils.js";
    import type { Snippet } from "svelte";

    let {
        class: className,
        children,
        ...restProps
    }: AccordionPrimitive.ContentProps & { children?: Snippet } = $props();
</script>

<AccordionPrimitive.Content
    class={cn(
        "overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className
    )}
    {...restProps}
>
    <div class="pb-4 pt-0">
        {@render children?.()}
    </div>
</AccordionPrimitive.Content>
