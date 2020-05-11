
<template>
  <div class="result-container">
    <h1 class="text-center">VUEX</h1>
      <hr>
      <p>Create by id value API request with Vuex structure.</p>
      <input type="name" placeholder="please enter number value" v-model="value">
      <button @click="buttonClick">SEND</button>
    <ul v-for="(item, index) in dataGetters" :key="index">
      <li><strong> id number:</strong> {{item.id}}</li>
      <li><strong> body:</strong> {{item.body}}</li>
    </ul>
    <p v-if="successMessage">Request successed</p>
    <p v-if="errorMessage">Request incorrect</p>
  </div>
</template>
<script>
import {mapState, mapGetters} from 'vuex';

  export default {
    data() {
      return {
        value: '',
      }
    },
    computed: {
        ...mapState ([
          'successMessage',
          'errorMessage'
        ]),
        ...mapGetters([
          'dataGetters',
        ]),
    },
    methods: {
      buttonClick() {
        this.$store.dispatch('loadData',
         {
           value: this.value,
           errorMessage: this.errorMessage,
           succesMessage: this.succesMessage
        });
      }
    },
  }

</script>
<style scoped>
  button{
    background-color: #000;
    border-radius: 5px;
    color: white;
    width: 150px;
    height: 40px;
    margin: 25px auto;
    display: block;
    -webkit-appearance: none;
  }
  .result-container {
    width: 450px;
    margin: 0 auto;
    display: block;
  }
  .counter-container{
    border: 1px solid #aa7f08;
    padding: 10px 5px;
    background-color: #fbbd08;
    font-size: 20px;
    color: #000;
  }
  input {
    width: 100%;
    height: 25px;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 3px 3px 5px 6px #ccc;
    -webkit-appearance: none;
    border: none;
  }
</style>
