<template lang="">
       <div  class="portfolio-container">
      <div v-for="(product,index) in portfolioProducts" :key="index">
        <div class="product">
            <div class="product-heading">
                <span class="product-name">{{product.productName}}</span>
                <span>(Price :{{product.price}}|Quantity :{{product.quantity}})</span>
            </div>
            <form class="product-add">
                <input  v-model="product['sellQuantity']" type="number" placeholder="Quantity">
                <button @click.prevent="sellProduct(index)">Sell</button>
            </form>
        </div>
      </div>  
    </div>
</template>
<script>
import store from '../store'
import { mapGetters } from 'vuex'
export default {
    data(){
        return {
            products : store.state.portfolio
        }
    },
    computed:{
            ...mapGetters(['portfolioProducts'])
    },
    methods: {
        sellProduct(index){
             const product = this.products[index]
    store.commit('sellProduct',product)
        }
    },
}
</script>
<style lang="css">
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