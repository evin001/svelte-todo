<script>
    import { Link } from 'svelte-routing'
    import UserProvider from '~/providers/user-provider'
    import Todo from '~/components/todo'
    import * as store from '~/stores/store'

    export let id

    const fetchTodos = UserProvider.getTodos(id)

    let user = ''
    let backPage

    store.user.subscribe(u => user = u)
    store.backPage.subscribe(p => backPage = p)
</script>

<Link to="/{backPage}">К списку пользователей</Link>

{#if user && user.name}
    <h3>{user.name}</h3>
{/if}

{#await fetchTodos}
    ...загрузка
{:then todos}
  {#each todos as todo}
      <Todo {...todo} />
  {/each}
{/await}
