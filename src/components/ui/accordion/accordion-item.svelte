<script lang="ts">
	import { Accordion as AccordionPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";
	import type { Snippet } from "svelte";

	let {
		class: className,
		value,
		children,
		...restProps
	}: AccordionPrimitive.ItemProps & { children?: Snippet } = $props();
</script>

<AccordionPrimitive.Item {value} class={cn("border-b", className)} {...restProps}>
	{@render children?.()}
</AccordionPrimitive.Item>
