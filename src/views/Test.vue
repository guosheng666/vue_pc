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
      console.log(this.$route)
      this.axios.get('/login').then(res=>{
        console.log(JSON.parse(res.data.msg))
      })
      this.$store.dispatch("qwe").then(()=>{
        console.log("qwe")
        console.log(this.qwe)
        console.log("qwe")
      })

    }
  }
</script>
