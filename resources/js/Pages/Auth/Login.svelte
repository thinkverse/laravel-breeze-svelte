<script context="module">
    import Layout from "@/Layouts/GuestLayout.svelte";
    export const layout = Layout;
</script>

<script>
    import { useForm, Link } from "@inertiajs/inertia-svelte";
    import { route } from "@/utils";

    export let form = useForm({
        email: '',
        password: '',
        remember: '',
    });

    export const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    export let status;
    export let canResetPassword;
    export const login = () => $form.post(route('login'));
</script>

<svelte:head>
    <title>Log In</title>
</svelte:head>

{#if status}
    <div class="mb-4 font-medium text-sm text-green-600">{status}</div>
{/if}

<form on:submit|preventDefault={login}>
    <div>
        <label for="email" class="block font-medium text-sm text-gray-700 dark:text-gray-300">
            Email
        </label>

        <div class="flex flex-col items-start">
            <input
                id="email"
                type="email"
                name="email"
                bind:value={$form.email}
                class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                autocomplete="username"
            />
        </div>

        {#if $form.errors.email}
        <p class="text-sm text-red-600 dark:text-red-400">{$form.errors.email}</p>
        {/if}
    </div>

    <div class="mt-4">
        <label
            for="password"
            class="block font-medium text-sm text-gray-700 dark:text-gray-300"
        >
            Password
        </label>

        <div class="flex flex-col items-start">
            <input
                id="password"
                type="password"
                name="password"
                bind:value={$form.password}
                class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                autocomplete="current-password"
            />
        </div>

        {#if $form.errors.password}
        <p class="text-sm text-red-600 dark:text-red-400">{$form.errors.password}</p>
        {/if}
    </div>

    <div class="block mt-4">
        <label class="flex items-center">
            <input
                type="checkbox"
                name="remember"
                bind:value={$form.remember}
                class="rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800"
            />
            <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
        </label>
    </div>

    <div class="flex items-center justify-end mt-4">
        {#if canResetPassword}
        <Link
            href={route('password.request')}
            class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
        >
            Forgot your password?
        </Link>
        {/if}

        <button
            type="submit"
            class="ml-5 inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
            class:$form.processing={'opacity-25'}
            on:disabled={$form.processing}
        >
            Log in
        </button>
    </div>
</form>
