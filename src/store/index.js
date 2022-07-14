
import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      funds : 10000,
      saveData :[

      ],
      stocks : [
        {
            productName : 'BMW',
            price : 110,
            quantity: null
        },
        {
            productName : 'Google',
            price : 200,
            quantity : null
        },
        {
            productName : 'Apple',
            price : 250,
            quantity : null
        },
        {
            productName : 'Twitter',
            price : 8,
            quantity : null
        }
      ],
      portfolio:[
    
      ]
    }
  },
   getters:{
    yourFunds : state => state.funds,
    portfolioProducts : state => state.portfolio,
    products : state => state.stocks,
   },
  mutations: {
    addToPortfolio(state,product){
     const cost = product.quantity * product.price
     const updateQuantity = state.portfolio.find(item => item.productName == product.productName);
     if(product.quantity < 1){
      console.log('Please input your quantity');
     }
     else if(state.funds < cost){
      console.log("You don't have enough money");
     }
     else if(updateQuantity){
      updateQuantity.quantity += product.quantity
      state.funds = state.funds - cost;
     }
      else{
        state.portfolio.push(product);
        state.funds = state.funds - cost;
      }
    },
    sellProduct(state,product){
      const isProductSell = state.portfolio.find(item => item.productName == product.productName)
      const receiveMoney = product.price * product.sellQuantity
    
      if(isProductSell.quantity < product.sellQuantity){
        console.log('You dont have enough products');
      }
      else if(!product.sellQuantity){
        console.log('Please input sell quantity');
      }
      else{
        isProductSell.quantity -= isProductSell.sellQuantity
        state.funds += receiveMoney
       if(isProductSell.quantity < 1){
          state.portfolio = state.portfolio.filter(item => item.quantity > 1)
          console.log(state.portfolio);
       }
      }
    },
    endDay(state){
     state.stocks.forEach(element => {
        const minPrice = element.price * 0.9
        const maxPrice = element.price * 1.1
        if(element.price >1){
           const randomPrice = Math.round(Math.random()*(maxPrice- minPrice)+minPrice)
           console.log(randomPrice);
           element.price = randomPrice
        }
      });
    },
    saveData(state){
     
    }
   }
  }
)
export default store