<template lang="">
<div class="home-container">
    <div>
        <h1>Trade or View your Portfolio</h1>
    <p>You may Save & Load your data</p>
    <p>Click on 'End Day' to begin a new Day!</p>
    <div class="hr"></div>
     <span class="your-funds">Your Funds : ${{yourFunds}}</span>
    </div>
</div>

</template>
<script>
import { mapGetters } from 'vuex'
export default {
   computed : {
    ...mapGetters(['yourFunds'])
   }
    }
</script>
<style lang="css">
    .home-container {
        padding : 25px 0 25px 0;
        width: 100%;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    }
    .home-container div {
        padding-left: 35px;
    }
    .hr{
        height:1px;
        width:100%;
        background-color: #ccc;
        margin-top:15px;
        margin-bottom: 25px;
    }
    .your-funds{
       
        font-size :20px;
        font-weight: 600;
    }
</style>