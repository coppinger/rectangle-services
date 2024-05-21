<script lang="ts">
    //@ts-nocheck
    import * as Accordion from "$lib/components/ui/accordion/index.js";
</script>

<Accordion.Root class="w-full max-w-md font-apercu">
    <Accordion.Item value="item-1">
        <Accordion.Trigger
            is:inline
            on:click={() => {
                window.posthog.capture("faq-accordion-v1-item-1-clicked");
            }}>What is your design process?</Accordion.Trigger
        >
        <Accordion.Content>content</Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-2">
        <Accordion.Trigger
            is:inline
            on:click={() => {
                window.posthog.capture("faq-accordion-v1-item-2-clicked");
            }}>How do you handle revisions and feedback?</Accordion.Trigger
        >
        <Accordion.Content>content</Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-3">
        <Accordion.Trigger
            is:inline
            on:click={() => {
                window.posthog.capture("faq-accordion-v1-item-3-clicked");
            }}>Can you work with our existing dev team?</Accordion.Trigger
        >
        <Accordion.Content>content</Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-4">
        <Accordion.Trigger
            is:inline
            on:click={() => {
                window.posthog.capture("faq-accordion-v1-item-4-clicked");
            }}>What are your rates and payment terms?</Accordion.Trigger
        >
        <Accordion.Content>content</Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-5">
        <Accordion.Trigger
            is:inline
            on:click={() => {
                window.posthog.capture("faq-accordion-v1-item-5-clicked");
            }}>What is your availability and turnaround time?</Accordion.Trigger
        >
        <Accordion.Content>content</Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-6">
        <Accordion.Trigger
            is:inline
            on:click={() => {
                window.posthog.capture("faq-accordion-v1-item-6-clicked");
            }}>Is there on-going support after completion?</Accordion.Trigger
        >
        <Accordion.Content>content</Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-7">
        <Accordion.Trigger
            is:inline
            on:click={() => {
                window.posthog.capture("faq-accordion-v1-item-7-clicked");
            }}>Are your designs user-friendly & accessible?</Accordion.Trigger
        >
        <Accordion.Content>content</Accordion.Content>
    </Accordion.Item>
</Accordion.Root>
