<script>
    import { Router, Route } from 'svelte-routing'
    import Users from './pages/users.svelte'
    import User from './pages/user.svelte'
</script>

<Router>
    <Route path="user/:id" component={User} />
    <Route path="/:page" component={Users} />
    <Route path="/" component={Users} />
</Router>
