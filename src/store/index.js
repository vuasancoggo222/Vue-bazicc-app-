
import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      funds : 10000,
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

   },
  mutations: {
    addToPortfolio(state,product){
       state.portfolio.push(product);
    },
    payMent(state,cost){
      state.funds = state.funds - cost;
    }
   }
  }
)
export default store