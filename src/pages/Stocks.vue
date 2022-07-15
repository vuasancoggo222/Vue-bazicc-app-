<template lang="">
    <div  class="portfolio-container">
      <div v-for="(product,index) in products" :key="index">
        <div class="product">
            <div class="product-heading">
                <span class="product-name">{{product.productName}}</span>
                <span>(Price :{{product.price}})</span>
            </div>
            <form class="product-add">
                <input  v-model="product['quantity']" type="number" placeholder="Quantity">
                <button @click.prevent="buyProduct(index)">Buy</button>
            </form>
        </div>
      </div>  
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import store from '../store'
export default {
  data(){
    return{
     
    }
  },
computed:{
...mapGetters(['products'])
},
methods: {
  buyProduct(index){
    const product = this.products[index]
    const product2 = {...product}
    console.log(product);
    store.commit('addToPortfolio',product2)
    this.$swal(store.getters.message)
  },
}  
}
</script>
<style scoped>
   .portfolio-container {
        display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap:20px;
    width: 100%;
   }
   .product{
    width: 690px;    
    padding-bottom: 25px;
   }
   .product-heading{
    height:50px;
    background-color:#dee2e3;
    padding-top:10px;
    padding-left:25px
   }
   .product-name{
    color:#107859;
    font-size: 22px;
    
   }
   .product-add{
    display:flex;
    justify-content:space-between;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
   padding:20px 50px;
   }
   .product-add input{
    padding : 10px;
   }
   .product-add button {
    padding : 5px 15px;
    font-size: 16px;
    background-color: #04aa6d;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor:pointer;
   }
   .grid{
    display:grid;
    grid-template-columns: 1fr 1fr;
   }
</style>