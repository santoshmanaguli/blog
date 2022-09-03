<template>
    <div>
        <div>
            <H3 class="d-flex justify-content-center">
                <b>
                    {{data1.title}}
                </b>
            </H3>
        </div>
        <div class="container">
            <div class="row">
                Author - {{data1.author}}
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-10 m-5">
                    {{data1.content}}
                </div>
            </div>
        </div>
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
            data1: ''
        }
    },
    async mounted(){
        let res = await axios.get('http://localhost:3000/blog/' + this.$route.params.id)
        this.data1 = res.data
        console.log(res);
    }
}
</script>