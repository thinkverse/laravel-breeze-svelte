import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
    plugins: [
        // Temporary workaround for: https://github.com/laravel/vite-plugin/issues/187
        laravel.default({
            input: [
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        svelte(),
    ],
});
