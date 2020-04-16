<script>
    import { Link } from 'svelte-routing'

    export let path = ''
    export let current = 1
    export let total = 1

    let prev, next

    $: {
        prev = current - 1 >= 1 ? current - 1 : 1
        next = current + 1 <= total ? current + 1 : total
    }
</script>

<Link to="{path}/1">Первая</Link>
<Link to="{path}/{prev}">Предыдущая</Link>
<Link to="{path}/{next}">Следующая</Link>
<Link to="{path}/{total}">Последняя</Link>
