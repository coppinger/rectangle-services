<script lang="ts">
    import { copy } from "svelte-copy";
    import { Button } from "$lib/components/ui/button";
    import { cn } from "$lib/utils";
    let copied = false;
</script>

<div class={cn(copied ? "h-fit flex flex-col gap-2" : "h-10")}>
    <button
        class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full transition ease-linear delay-100 duration-300 flex items-center gap-2 font-apercu"
        use:copy={"charles.coppinger@gmail.com"}
        on:click={() => {
            copied = true;
        }}>Copy email 📋</button
    >
    <div
        class="w-full bg-green-200 h-10 px-4 py-2 transition-all ease-linear duration-200 flex flex-col gap-4"
        style={copied ? "opacity:100%;" : "opacity:0%;"}
    >
        <p class="text-green-700">Email copied!</p>
    </div>
    <Button
        variant="outline"
        style={copied ? "opacity:100%;" : "opacity:0%;"}
        class="w-full transition ease-linear delay-100 duration-300 flex items-center gap-2"
        href="https://icloud.com"
        target="_blank"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="16"
            height="16"
            viewBox="0 0 814 1000"
            ><path
                d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"
            /></svg
        >
        iCloud</Button
    >
    <Button
        variant="outline"
        style={copied ? "opacity:100%;" : "opacity:0%;"}
        class="w-full transition ease-linear delay-300 duration-300 flex items-center gap-2"
        href="https://gmail.com"
        target="_blank"
        ><svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            viewBox="0 49.4 512 399.42"
        >
            <g fill="none" fill-rule="evenodd">
                <g fill-rule="nonzero">
                    <path
                        fill="#4285f4"
                        d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"
                    />
                    <path
                        fill="#34a853"
                        d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"
                    />
                    <path
                        fill="#fbbc04"
                        d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"
                    />
                </g>
                <path
                    fill="#ea4335"
                    d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"
                />
                <path
                    fill="#c5221f"
                    fill-rule="nonzero"
                    d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"
                />
            </g>
        </svg>
        Gmail</Button
    >
    <Button
        variant="outline"
        style={copied ? "opacity:100%;" : "opacity:0%;"}
        class="w-full transition ease-linear delay-500 duration-300 flex items-center gap-2"
        href="https://outlook.live.com"
        target="_blank"
        ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="-.12979373 0 33.25199672 32"
        >
            <path
                fill="#0364b8"
                d="M28.596 2H11.404A1.404 1.404 0 0 0 10 3.404V5l9.69 3L30 5V3.404A1.404 1.404 0 0 0 28.596 2z"
            />
            <path
                fill="#0a2767"
                d="M31.65 17.405A11.341 11.341 0 0 0 32 16a.666.666 0 0 0-.333-.576l-.013-.008-.004-.002L20.812 9.24a1.499 1.499 0 0 0-.145-.083 1.5 1.5 0 0 0-1.334 0 1.49 1.49 0 0 0-.145.082L8.35 15.415l-.004.002-.012.007A.666.666 0 0 0 8 16a11.344 11.344 0 0 0 .35 1.405l11.492 8.405z"
            />
            <path fill="#28a8ea" d="M24 5h-7l-2.021 3L17 11l7 6h6v-6z" />
            <path fill="#0078d4" d="M10 5h7v6h-7z" />
            <path fill="#50d9ff" d="M24 5h6v6h-6z" />
            <path fill="#0364b8" d="m24 17-7-6h-7v6l7 6 10.832 1.768z" />
            <path fill="none" d="M10.031 5H30" />
            <path fill="#0078d4" d="M17 11h7v6h-7z" />
            <path fill="#064a8c" d="M10 17h7v6h-7z" />
            <path fill="#0078d4" d="M24 17h6v6h-6z" />
            <path
                fill="#0a2767"
                d="m20.19 25.218-11.793-8.6.495-.87s10.745 6.12 10.909 6.212a.528.528 0 0 0 .42-.012l10.933-6.23.496.869z"
                opacity=".5"
            />
            <path
                fill="#1490df"
                d="m31.667 16.577-.014.008-.003.002-10.838 6.174a1.497 1.497 0 0 1-1.46.091l3.774 5.061 8.254 1.797v.004A1.498 1.498 0 0 0 32 28.5V16a.666.666 0 0 1-.333.577z"
            />
            <path
                d="M32 28.5v-.738l-9.983-5.688-1.205.687a1.497 1.497 0 0 1-1.46.091l3.774 5.061 8.254 1.797v.004A1.498 1.498 0 0 0 32 28.5z"
                opacity=".05"
            />
            <path
                d="M31.95 28.883 21.007 22.65l-.195.11a1.497 1.497 0 0 1-1.46.092l3.774 5.061 8.254 1.797v.004a1.501 1.501 0 0 0 .57-.83z"
                opacity=".1"
            />
            <path
                fill="#28a8ea"
                d="M8.35 16.59v-.01h-.01l-.03-.02A.65.65 0 0 1 8 16v12.5A1.498 1.498 0 0 0 9.5 30h21a1.503 1.503 0 0 0 .37-.05.637.637 0 0 0 .18-.06.142.142 0 0 0 .06-.02 1.048 1.048 0 0 0 .23-.13c.02-.01.03-.01.04-.03z"
            />
            <path
                d="M18 24.667V8.333A1.337 1.337 0 0 0 16.667 7H10.03v7.456l-1.68.958-.005.002-.012.007A.666.666 0 0 0 8 16v.005V16v10h8.667A1.337 1.337 0 0 0 18 24.667z"
                opacity=".1"
            />
            <path
                d="M17 25.667V9.333A1.337 1.337 0 0 0 15.667 8H10.03v6.456l-1.68.958-.005.002-.012.007A.666.666 0 0 0 8 16v.005V16v11h7.667A1.337 1.337 0 0 0 17 25.667z"
                opacity=".2"
            />
            <path
                d="M17 23.667V9.333A1.337 1.337 0 0 0 15.667 8H10.03v6.456l-1.68.958-.005.002-.012.007A.666.666 0 0 0 8 16v.005V16v9h7.667A1.337 1.337 0 0 0 17 23.667z"
                opacity=".2"
            />
            <path
                d="M16 23.667V9.333A1.337 1.337 0 0 0 14.667 8H10.03v6.456l-1.68.958-.005.002-.012.007A.666.666 0 0 0 8 16v.005V16v9h6.667A1.337 1.337 0 0 0 16 23.667z"
                opacity=".2"
            />
            <path
                fill="#0078d4"
                d="M1.333 8h13.334A1.333 1.333 0 0 1 16 9.333v13.334A1.333 1.333 0 0 1 14.667 24H1.333A1.333 1.333 0 0 1 0 22.667V9.333A1.333 1.333 0 0 1 1.333 8z"
            />
            <path
                fill="#fff"
                d="M3.867 13.468a4.181 4.181 0 0 1 1.642-1.814A4.965 4.965 0 0 1 8.119 11a4.617 4.617 0 0 1 2.413.62 4.14 4.14 0 0 1 1.598 1.733 5.597 5.597 0 0 1 .56 2.55 5.901 5.901 0 0 1-.577 2.666 4.239 4.239 0 0 1-1.645 1.794A4.8 4.8 0 0 1 7.963 21a4.729 4.729 0 0 1-2.468-.627 4.204 4.204 0 0 1-1.618-1.736 5.459 5.459 0 0 1-.567-2.519 6.055 6.055 0 0 1 .557-2.65zm1.75 4.258a2.716 2.716 0 0 0 .923 1.194 2.411 2.411 0 0 0 1.443.435 2.533 2.533 0 0 0 1.541-.449 2.603 2.603 0 0 0 .897-1.197 4.626 4.626 0 0 0 .286-1.665 5.063 5.063 0 0 0-.27-1.686 2.669 2.669 0 0 0-.866-1.24 2.387 2.387 0 0 0-1.527-.473 2.493 2.493 0 0 0-1.477.439 2.741 2.741 0 0 0-.944 1.203 4.776 4.776 0 0 0-.007 3.44z"
            />
            <path fill="none" d="M0 0h32v32H0z" />
        </svg>
        Outlook</Button
    >
</div>
