<template>
<div class="container">
        <section class="section">
            <button class="button is-primary" @click="active=true">Click me</button>
            <button class="button is-primary" @click="active2=true">Click me2</button>
            
            <modal :active="active" 
            @close="active =false" 
            url="https://bulma.io/images/placeholders/1280x960.png"
            >
            </modal>
            <modal :active="active2" 
            @close="active2 =false" 
            url="https://bulma.io/images/placeholders/1280x960.png"
            >
            </modal>

      </section>
</div>
</template>


<script>
import Modal from './components/Modal.vue'
export default {
  components: { Modal },
    data() {
        return {
            active: true
            
        }
    },
    methods: {
        
    }

}
</script>

<style>

</style>