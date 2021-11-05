<template>
  <div class="about">
    <h1>test</h1>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
   export default {
    computed:{
      ...mapGetters({
        qwe:"qwe"
      })
    },
    mounted() {
      this.axios.get('/test')
      this.$store.dispatch("qwe").then(()=>{
        console.log("qwe")
        console.log(this.qwe)
        console.log("qwe")
      })

    }
  }
</script>
