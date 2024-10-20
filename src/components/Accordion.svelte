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
        <Accordion.Content>
            <p>
                <span class="italic"
                    >"Design is when designers design a design to produce a
                    design."</span
                >
                - John Heskett
            </p>
            <br />
            <p>
                I work from first principles to understand the problems and
                desired outcomes from a high level.<br /><br />From there, I
                conduct research to map out existing solutions and derive a path
                forward.<br /><br />I pull from a wide range of mental
                frameworks and digital tools to progress through the stages of
                design, arriving at a solution that is aesthetically pleasing,
                highly functional, and technically realistic.
            </p>
        </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-2">
        <Accordion.Trigger
            is:inline
            on:click={() => {
                window.posthog.capture("faq-accordion-v1-item-2-clicked");
            }}>How do you handle revisions and feedback?</Accordion.Trigger
        >
        <Accordion.Content
            >I'm a natural perfectionist and take pride in my work. I'll take
            your feedback and revise the work until you're happy with it. This
            requires a strong degree of mutual respect to ensure fairness.</Accordion.Content
        >
    </Accordion.Item>
    <Accordion.Item value="item-3">
        <Accordion.Trigger
            is:inline
            on:click={() => {
                window.posthog.capture("faq-accordion-v1-item-3-clicked");
            }}
            >Can you work with our existing dev team?
        </Accordion.Trigger>
        <Accordion.Content
            >Yes—I've worked as both a Product Owner & Product Manager and am
            more than happy to work with your existing dev team.</Accordion.Content
        >
    </Accordion.Item>
    <Accordion.Item value="item-4">
        <Accordion.Trigger
            is:inline
            on:click={() => {
                window.posthog.capture("faq-accordion-v1-item-4-clicked");
            }}>What are your rates and payment terms?</Accordion.Trigger
        >
        <Accordion.Content
            >My rates vary depending on the size, type, and duration of the
            project. My standard consulting rate is $150 USD per hour.</Accordion.Content
        >
    </Accordion.Item>
    <Accordion.Item value="item-5">
        <Accordion.Trigger
            is:inline
            on:click={() => {
                window.posthog.capture("faq-accordion-v1-item-5-clicked");
            }}>What is your availability and turnaround time?</Accordion.Trigger
        >
        <Accordion.Content
            >I currently have availability up to 15-20 hours per week. My
            turnaround time is adaptable to projects that need quick iterations
            and results.</Accordion.Content
        >
    </Accordion.Item>
    <Accordion.Item value="item-6">
        <Accordion.Trigger
            is:inline
            on:click={() => {
                window.posthog.capture("faq-accordion-v1-item-6-clicked");
            }}>Is there on-going support after completion?</Accordion.Trigger
        >
        <Accordion.Content
            >As per my policy on handling revisions and feedback, I take pride
            in my work and am happy to provide a fair and respectful level of
            support. However, a discussion will be required if the need for
            ongoing support becomes significant.</Accordion.Content
        >
    </Accordion.Item>
    <Accordion.Item value="item-7">
        <Accordion.Trigger
            is:inline
            on:click={() => {
                window.posthog.capture("faq-accordion-v1-item-7-clicked");
            }}>Are your designs user-friendly and accessible?</Accordion.Trigger
        >
        <Accordion.Content
            ><span class="italic"
                >"Inclusive design is really just better design."</span
            >
            - Anna Cook
            <br /><br />
            I firmly believe that making designs accessible benefits everyone, including
            the business. I endeavor to follow best practices to make my designs
            as user-friendly and accessible as possible.</Accordion.Content
        >
    </Accordion.Item>
</Accordion.Root>
