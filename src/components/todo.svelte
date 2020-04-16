<script>
    export let id = ''
    export let title = ''
    export let completed = false
</script>

<div>#{id} {title} ({completed ? 'Готово' : 'Не готово'})</div>
