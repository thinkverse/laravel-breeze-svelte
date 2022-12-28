<script>
    import { Link } from "@inertiajs/inertia-svelte";
    import { route } from "@/utils";
    import ApplicationLogo from "@/Components/ApplicationLogo.svelte";
    import NavLink from "@/Components/NavLink.svelte";
</script>

<div class="min-h-screen bg-gray-100 dark:bg-gray-900">
    <nav class="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex">
                    <div class="shrink-0 flex items-center">
                        <Link href="/">
                            <ApplicationLogo class="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                        </Link>
                    </div>

                    <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                        <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </NavLink>
                        <NavLink href={route('logout')} method="post">
                            Logout
                        </NavLink>
                    </div>
                </div>

            </div>
        </div>
    </nav>

    {#if $$slots.header}
        <header class="bg-white dark:bg-gray-800 shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <slot name="header" />
            </div>
        </header>
    {/if}

    <main>
        <slot />
    </main>
</div>
