<template lang="">
<header>
    <nav>
        <ul>
            <li class="logo"><router-link :to="{name : 'home-route'}">Stock Trader</router-link></li>
             <li><router-link :to="{name : 'portfolio-route'}">Portfolio</router-link></li>
              <li><router-link :to="{name : 'stocks-route'}">Stocks</router-link></li>
        </ul>
          <ul>
            <li>End Day</li>
             <li>Save & Load</li>
              <li>Funds : {{yourFunds}}$</li>
        </ul>
    </nav>
</header>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['yourFunds'])
    }
}
</script>
<style lang="css">
  header{
    margin-top: 30px;
    margin-bottom: 25px;
 box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  } 
  nav{
    width : 100%;
    display: flex;
    justify-content:space-between;
    padding: 7px 0 10px 0;
  }

  nav ul li {
    display: inline-block;
    margin: 0 15px;
  }
 a {
     color: black;
    text-decoration: none;
  }
  .logo{
    font-size: 22px;
    margin-left:0;
  }
</style>