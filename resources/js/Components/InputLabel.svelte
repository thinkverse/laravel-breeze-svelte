<script>
    export let forInput;
    export let value;

    $: props = {
        ...$$restProps,
    };
</script>

<label
    for={forInput}
    class={`block font-medium text-sm text-gray-700 dark:text-gray-300 ` +
        $$restProps.class}
    {...props}
>
    {#if value}
        {value}
    {:else}
        <slot />
    {/if}
</label>
