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
    import PrimaryButton from "@/Components/PrimaryButton.svelte";

    export let form = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    export const register = () => $form.post(route("register"));
</script>

<svelte:head>
    <title>Log In</title>
</svelte:head>

{#if status}
    <div class="mb-4 font-medium text-sm text-green-600">{status}</div>
{/if}

<form on:submit|preventDefault={register}>
    <div>
        <InputLabel forInput="name" value="Name" />

        <TextInput
            id="name"
            type="text"
            name="name"
            bind:value={$form.name}
            class="mt-1 block w-full"
            autoComplete="name"
            required
        />

        <InputError message={$form.errors.name} class="mt-2" />
    </div>

    <div class="mt-4">
        <InputLabel forInput="email" value="Email" />

        <TextInput
            id="email"
            type="email"
            name="email"
            bind:value={$form.email}
            class="mt-1 block w-full"
            autoComplete="username"
            required
        />

        <InputError message={$form.errors.email} class="mt-2" />
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
            required
        />

        <InputError message={$form.errors.password} class="mt-2" />
    </div>

    <div class="mt-4">
        <InputLabel forInput="password_confirmation" value="Confirm Password" />

        <TextInput
            id="password_confirmation"
            type="password"
            name="password_confirmation"
            bind:value={$form.password_confirmation}
            class="mt-1 block w-full"
            required
        />

        <InputError message={$form.errors.password_confirmation} class="mt-2" />
    </div>

    <div class="flex items-center justify-end mt-4">
        <Link
            href={route("login")}
            class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
        >
            Already registered?
        </Link>

        <PrimaryButton class="ml-4" processing={$form.processing}>
            Register
        </PrimaryButton>
    </div>
</form>
