<script lang="ts">
    import * as Accordion from "$lib/components/ui/accordion/index.js";
    import { track } from "$lib/analytics";

    /** Single source of truth for question text; triggers render from this and analytics look it up here. */
    const FAQS = [
        { value: "item-1", question: "What is your design process?" },
        { value: "item-2", question: "How do you handle revisions and feedback?" },
        { value: "item-3", question: "Can you work with our existing dev team?" },
        { value: "item-4", question: "What are your rates and payment terms?" },
        { value: "item-5", question: "What is your availability and turnaround time?" },
        { value: "item-6", question: "Is there on-going support after completion?" },
        { value: "item-7", question: "Are your designs user-friendly and accessible?" },
    ] as const;

    function question(value: string) {
        return FAQS.find((f) => f.value === value)?.question ?? value;
    }

    // bits-ui calls this with "" when the open item is collapsed; only report opens.
    function onValueChange(value: string) {
        if (!value) return;
        const index = FAQS.findIndex((f) => f.value === value) + 1;
        track("faq_opened", { question: question(value), index });
    }
</script>

<Accordion.Root type="single" class="w-full max-w-md font-apercu" {onValueChange}>
    <Accordion.Item value="item-1">
        <Accordion.Trigger>{question("item-1")}</Accordion.Trigger>
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
        <Accordion.Trigger>{question("item-2")}</Accordion.Trigger>
        <Accordion.Content
            >I'm a natural perfectionist and take pride in my work. I'll take
            your feedback and revise the work until you're happy with it. This
            requires a strong degree of mutual respect to ensure fairness.</Accordion.Content
        >
    </Accordion.Item>
    <Accordion.Item value="item-3">
        <Accordion.Trigger>{question("item-3")}</Accordion.Trigger>
        <Accordion.Content
            >Yes—I've worked as both a Product Owner & Product Manager and am
            more than happy to work with your existing dev team.</Accordion.Content
        >
    </Accordion.Item>
    <Accordion.Item value="item-4">
        <Accordion.Trigger>{question("item-4")}</Accordion.Trigger>
        <Accordion.Content
            >My rates vary depending on the size, type, and duration of the
            project. My standard consulting rate is $250 USD per hour.</Accordion.Content
        >
    </Accordion.Item>
    <Accordion.Item value="item-5">
        <Accordion.Trigger>{question("item-5")}</Accordion.Trigger>
        <Accordion.Content
            >I currently have availability up to 15-20 hours per week. My
            turnaround time is adaptable to projects that need quick iterations
            and results.</Accordion.Content
        >
    </Accordion.Item>
    <Accordion.Item value="item-6">
        <Accordion.Trigger>{question("item-6")}</Accordion.Trigger>
        <Accordion.Content
            >As per my policy on handling revisions and feedback, I take pride
            in my work and am happy to provide a fair and respectful level of
            support. However, a discussion will be required if the need for
            ongoing support becomes significant.</Accordion.Content
        >
    </Accordion.Item>
    <Accordion.Item value="item-7">
        <Accordion.Trigger>{question("item-7")}</Accordion.Trigger>
        <Accordion.Content
            ><span class="italic"
                >"Inclusive design is really just better design."</span
            >
            - Anna Cook
            <br /><br />
            I firmly believe that making designs accessible benefits everyone, including
            the business. I endeavor to follow best practices to make my designs as
            user-friendly and accessible as possible.</Accordion.Content
        >
    </Accordion.Item>
</Accordion.Root>
