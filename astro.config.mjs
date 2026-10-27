import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    integrations: [svelte()],
    // Honor PORT/HOST when set (e.g. by `portless run npm run dev`)
    server: {
        port: Number(process.env.PORT) || 4321,
        host: process.env.HOST || false,
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
