<script lang="ts">
    import { onMount, type Snippet } from "svelte";
    import { blurFade } from "$lib/blur-fade";
    import { track } from "$lib/analytics";

    let { password, children }: { password: string; children: Snippet } = $props();

    const STORAGE_KEY = "portfolio-unlocked";

    let unlocked = $state(false);
    let value = $state("");
    let wrong = $state(false);
    let shakeCount = $state(0);
    let input = $state<HTMLInputElement | null>(null);

    function matches(candidate: string) {
        return candidate.trim().toLowerCase() === password.trim().toLowerCase();
    }

    function unlock(method: "password" | "link") {
        unlocked = true;
        try {
            sessionStorage.setItem(STORAGE_KEY, "1");
        } catch {}
        track("portfolio_unlocked", { method });
    }

    onMount(() => {
        let status: "locked" | "unlocked_session" | "unlocked_link" = "locked";

        // Already unlocked this session?
        try {
            if (sessionStorage.getItem(STORAGE_KEY) === "1") {
                unlocked = true;
                status = "unlocked_session";
            }
        } catch {}

        // One-click link: /portfolio?key=<password>
        const key = new URLSearchParams(window.location.search).get("key");
        if (!unlocked && key !== null && matches(key)) {
            unlock("link");
            status = "unlocked_link";
        }
        if (key !== null) {
            // Drop the key from the address bar but keep any other params.
            const url = new URL(window.location.href);
            url.searchParams.delete("key");
            history.replaceState(history.state, "", url);
        }

        track("portfolio_viewed", { status, via_link: key !== null });
    });

    $effect(() => {
        if (!unlocked) input?.focus();
    });

    function submit(e: SubmitEvent) {
        e.preventDefault();
        if (matches(value)) {
            unlock("password");
        } else {
            track("portfolio_unlock_failed");
            wrong = true;
            shakeCount += 1;
            value = "";
            input?.focus();
        }
    }
</script>

{#if unlocked}
    {@render children()}
{:else}
    <div class="flex w-full justify-center py-10 md:py-20" use:blurFade data-blur-fade>
        <form
            onsubmit={submit}
            class="w-full max-w-sm bg-white border border-dashed border-neutral-300 p-6 md:p-8 flex flex-col gap-4"
        >
            <label for="portfolio-password" class="font-apercu text-sm text-neutral-900">
                This page is private
            </label>
            <div class="flex gap-2">
                <input
                    id="portfolio-password"
                    bind:this={input}
                    bind:value
                    type="password"
                    autocomplete="off"
                    placeholder="Password"
                    aria-invalid={wrong}
                    aria-describedby={wrong ? "portfolio-password-error" : undefined}
                    oninput={() => (wrong = false)}
                    class="h-10 w-full min-w-0 border border-neutral-300 bg-white px-3 text-base text-neutral-900 placeholder:text-neutral-400 outline-hidden focus:border-neutral-900"
                />
                <button
                    type="submit"
                    class="inline-flex shrink-0 items-center justify-center text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 font-apercu transition-colors cursor-pointer"
                >
                    Enter -&gt;
                </button>
            </div>
            {#if wrong}
                {#key shakeCount}
                    <p
                        id="portfolio-password-error"
                        role="alert"
                        class="shake font-apercu text-xs text-red-600"
                    >
                        Wrong password
                    </p>
                {/key}
            {/if}
        </form>
    </div>
{/if}

<style>
    @keyframes shake {
        0%,
        100% {
            transform: translateX(0);
        }
        20%,
        60% {
            transform: translateX(-4px);
        }
        40%,
        80% {
            transform: translateX(4px);
        }
    }
    .shake {
        animation: shake 0.3s ease-in-out;
    }
</style>
