<script>
    export let message;

    $: props = {
        ...$$restProps,
    };
</script>

{#if message}
    <p class={`text-sm text-red-600 dark:text-red-400 ` + $$restProps.class}>
        {message}
    </p>
{/if}
