<template lang="">
<header>
    <nav>
        <ul>
            <li class="logo"><router-link :to="{name : 'home-route'}">Stock Trader</router-link></li>
             <li><router-link :to="{name : 'portfolio-route'}">Portfolio</router-link></li>
              <li><router-link :to="{name : 'stocks-route'}">Stocks</router-link></li>
        </ul>
          <ul>
            <li><button @click.prevent="endDay()">End Day</button></li>
             <li><button @click.prevent="saveData()">Save</button> & <button @click.prevent="loadData">Load</button></li>
              <li>Funds : {{yourFunds}}$</li>
        </ul>
    </nav>
</header>
</template>
<script>
import { mapGetters } from 'vuex'
import store from '../store';
export default {
    
    computed: {
        ...mapGetters(['yourFunds','productPrice'])
    },
    methods: {
      endDay(){
        store.commit('endDay')
      },
      saveData(){
        store.commit('saveData')
            this.$swal(store.getters.message)
      },
      loadData(){
        store.commit('loadData')
        if(store.state.saveData.length < 1){
this.$swal.fire({
  position: 'top-end',
  icon: 'error',
  title: store.getters.message,
  showConfirmButton: false,
  timer: 1000
})
        }
else{
  this.$swal.fire({
  position: 'top-end',
  icon: 'success',
  title: store.getters.message,
  showConfirmButton: false,
  timer: 1000
})
}
      }
    },
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
  button{
    border: none;
    background: none;
  }
</style>