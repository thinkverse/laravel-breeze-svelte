<script context="module">
    import Layout from '@/Layouts/AuthenticatedLayout.svelte';
    export const layout = Layout;
</script>

<slot name="header">
    <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
        Broken header
    </h2>
</slot>

<div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div class="p-6 text-gray-900 dark:text-gray-100">You're logged in!</div>
        </div>
    </div>
</div>
