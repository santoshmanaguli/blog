<template>
    <div>
        <h3>

        </h3>
    </div>
</template>

<style>

</style>

<script>
import axios from 'axios'

export default{
    name: 'BloggingPage',
    data(){
        return{
            data = null
        }
    },
    mounted(){
        let res = axios.get('http://localhost:3000/blog' + this.$route.params.id)
        this.data = res.data
    }
}
</script>