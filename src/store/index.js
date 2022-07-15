
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
            productQuantity: null
        },
        {
            productName : 'Google',
            price : 200,
            productQuantity : null
        },
        {
            productName : 'Apple',
            price : 250,
            productQuantity : null
        },
        {
            productName : 'Twitter',
            price : 8,
            productQuantity : null
        }
      ],
      portfolio:[
      ],
      message : ''
    }
  },
   getters:{
    yourFunds : state => state.funds,
    portfolioProducts : state => state.portfolio,
    products : state => state.stocks,
    message : state => state.message
   },
  mutations: {
    addToPortfolio(state,product){
     const cost = product.quantity * product.price
     const updateQuantity = state.portfolio.find(item => item.productName == product.productName);
     if(!product.quantity){
      state.message = 'Please input your quantity';
     }
     else if(state.funds < cost){
      state.message = "You don't have enough money";
     }
     else if(updateQuantity){
      updateQuantity.productQuantity += product.quantity
      state.funds = state.funds - cost;
     }
      else{
        state.portfolio.push({
          productName : product.productName,
          price : product.price,
          productQuantity : product.quantity
        });
        state.funds = state.funds - cost;
        state.message = "Add to portfolio successfully !";
      }
    },
    sellProduct(state,product){
      const isProductSell = state.portfolio.find(item => item.productName == product.productName)
      const receiveMoney = product.price * product.sellQuantity
      if(isProductSell.productQuantity < product.sellQuantity){
        state.message = "You dont have enough products";
      }
      else if(!product.sellQuantity){
      
        state.message = "Please input sell quantity";
      }
      else{
        isProductSell.productQuantity -= isProductSell.sellQuantity
        state.funds += receiveMoney
        state.message = "Sold successfully";
       if(isProductSell.productQuantity < 1){
          state.portfolio = state.portfolio.filter(item => item.quantity > 1)
          state.message ='Sold out !!'
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
      state.portfolio.forEach(element => {
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
     localStorage.setItem('savedata',JSON.stringify(state.stocks))
     state.saveData = JSON.parse(localStorage.getItem('savedata'))
     state.message = 'Saved data this day.'
    },
    loadData(state){
     if(state.saveData.length > 1){
      state.stocks = state.saveData;
      state.message ='Loaded the prevoius day.'
     }
      else{
        state.message = "You don't have previous"
      }
     
    },
   }
  }
)
export default store