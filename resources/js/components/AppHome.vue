<template>
    <div>
        <toolbar></toolbar>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>

import toolbar from './Toolbar'
import AppFooter from './AppFooter'
import Login from './Login/Login'
import Signup from './Login/Signup'

export default {
    components: { toolbar, Login, AppFooter }
}
</script>

<style>

</style>