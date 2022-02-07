<template>
  <button v-on:click="clicks++">click me</button> {{clicks}}<br>
  <input type= "text" v-model="message">
  <h1>{{ message }}</h1>
  <br>
  <h1>Shopping List</h1>
  <input type="text" v-model="newItem" @keypress.enter="addItem">
  <button @click="addItem" :disabled="newItem.trim() === ''">Add</button>
  <ul>
      <li v-for="(item, index) in items" :key="index">
          <button @click="items.splice(index, 1)">Delete</button>
          {{item}} 
          </li>
  </ul>
</template>



<script>
export default {
    data() {
        return {
            message: 'Hello Vue',
            clicks: 0,
            newItem:'',
            items:['Leib', 'Sai', 'Piim']
        }
    },
    methods: {
        addItem(){
            if(this.newItem.trim() !== ''){
            this.items.push(this.newItem);
            }
            this.newItem = '';

        }
    }

}
</script>

<style>

</style>