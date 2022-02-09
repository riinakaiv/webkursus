<template>
<div class="container">
        <section class="section">
        <button class="button is-primary" @click="clicks++">click me</button> 
        {{clicks}}
        <br>
        <input class="input" type= "text" v-model="message">
        <h1 class="is-size-1" >{{ message }}</h1>
         <br>
         <h1 class="is-size-1">Shopping List</h1>
         <div class="field has-addons">
            <div class="control">
                <input class="input" type="text" placeholder="New item" v-model="newItem" @keypress.enter="addItem">
            </div>
            <div class="control">
                <button class="button is-info" @click="addItem" :disabled="newItem.trim() === ''">
                Add
                </button>
            </div>
        </div>
         <ul>
             <li class="mt-2" v-for="(item, index) in items" :key="index">
                 <button class="button is-primary is-small" @click="items.splice(index, 1)">Delete</button>
                 {{item}} 
             </li>
         </ul>
      </section>
</div>
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