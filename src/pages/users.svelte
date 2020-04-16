<script>
    import UserProvider from '~/providers/user-provider'
    import Users from '~/components/users.svelte'
    import Pagination from '~/components/pagination.svelte'
    import { backPage, user } from '~/stores/store'

    export let page = 1

    let users = [],
        fields = [
            { label: 'Имя', value: 'name', link: 'user' },
            { label: 'Email', value: 'email' },
            { label: 'Телефон', value: 'phone' }
        ],
        total = 1,
        current,
        error

    const limit = 5

    $: {
        current = +page
        UserProvider.getUsers(page, limit)
            .then(([items, count]) => {
                users = items
                total = Math.ceil(count / limit)
            })
            .catch(e => error = e.message)
    }

    function handleClickField(userId, field) {
        if (field === 'user') {
            backPage.set(current)
            user.set(users.find(user => user.id === userId))
        }
    }
</script>

{#if users.length}
    <Users {users} {fields} onClick={handleClickField} />
    <Pagination {current} {total} />
{:else if error}
    <p class="error">{error}</p>
{/if}

<style>
    .error {
        color: red
    }
</style>
