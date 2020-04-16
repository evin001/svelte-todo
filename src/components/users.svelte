<script>
    import { createEventDispatcher } from 'svelte'
    import { Link } from 'svelte-routing'

    export let users
    export let fields

    const dispatch = createEventDispatcher()

    function handleSelect(id, link) {
        return () => {
            dispatch('select', { id, link })
        }
    }
</script>

<table>
    <thead>
    <tr>
        {#each fields as field}
            <th>{field.label}</th>
        {/each}
    </tr>
    </thead>
    <tbody>
    {#each users as user}
        <tr>
            {#each fields as field}
                <td>
                    {#if field.link}
                        <Link to="{field.link}/{user.id}" on:click={handleSelect(user.id, field.link)}>
                            {user[field.value]}
                        </Link>
                    {:else}
                        {user[field.value]}
                    {/if}
                </td>
            {/each}
        </tr>
    {/each}
    </tbody>
</table>
