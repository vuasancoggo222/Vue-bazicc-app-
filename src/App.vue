

<template>
<div class="container">
    <app-header/>
    <main>
        <router-view></router-view>
    </main>
</div>
</template>
<script>
import AppHeader from "./components/AppHeader.vue";
import Home from './pages/Home.vue'
export default {
    components:{
        AppHeader,
        Home
    }
}
</script>
<style>
.container{
    margin : 0 50px;
    font-size : 16px;
    font-family: Roboto,sans-serif;
}
</style>
