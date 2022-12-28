<script context="module">
    import Layout from "@/Layouts/GuestLayout.svelte";
    export const layout = Layout;
</script>

<script>
    import { useForm, Link } from "@inertiajs/inertia-svelte";
    import { route } from "@/utils";
    import TextInput from "@/Components/TextInput.svelte";
    import InputLabel from "@/Components/InputLabel.svelte";
    import InputError from "@/Components/InputError.svelte";
    import Checkbox from "@/Components/Checkbox.svelte";
    import PrimaryButton from "@/Components/PrimaryButton.svelte";

    export let form = useForm({
        email: "",
        password: "",
        remember: "",
    });

    export let status;
    export let canResetPassword;
    export const login = () => $form.post(route("login"));
</script>

<svelte:head>
    <title>Log In</title>
</svelte:head>

{#if status}
    <div class="mb-4 font-medium text-sm text-green-600">{status}</div>
{/if}

<form on:submit|preventDefault={login}>
    <div>
        <InputLabel forInput="email" value="Email" />

        <TextInput
            id="email"
            type="email"
            name="email"
            bind:value={$form.email}
            class="mt-1 block w-full"
            autoComplete="username"
        />

        <InputError message={$form.errors.email} />
    </div>

    <div class="mt-4">
        <InputLabel forInput="password" value="Password" />

        <TextInput
            id="password"
            type="password"
            name="password"
            bind:value={$form.password}
            class="mt-1 block w-full"
            autoComplete="current-password"
        />

        <InputError message={$form.errors.password} />
    </div>

    <div class="block mt-4">
        <label for="remember" class="flex items-center">
            <Checkbox name="remember" bind:value={$form.remember} />
            <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">
                Remember me
            </span>
        </label>
    </div>

    <div class="flex items-center justify-end mt-4">
        {#if canResetPassword}
            <Link
                href={route("password.request")}
                class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
            >
                Forgot your password?
            </Link>
        {/if}

        <PrimaryButton class="ml-4" processing={$form.processing}>
            Log in
        </PrimaryButton>
    </div>
</form>
