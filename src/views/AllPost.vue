<template>
  <AppHeader/>
  <div class="p-3">
    <div class="card mt-4"  v-for="(obj, index) in blogData" :key="index">
      <h5 class="card-header">{{obj.title}}</h5>
      <div class="card-body">
        <h5 class="card-title">{{obj.description}}</h5>
        <p class="card-text">{{obj.content.length > 30 ? obj.content.slice(0, 30) + '...' : obj.content}}</p>
        <router-link href="#" class="btn btn-primary" @click="onOpen" :to="'/blogs/'+obj.id">Open</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import AppHeader from '../components/AppHeader.vue';
import axios from 'axios'

export default{
  name: 'AllPost',
  data(){
    return{
      blogData: null,
    }
  },
  methods: {
    
  },
  async mounted(){
    let res = await axios.get("http://localhost:3000/blog");
    console.log(res.data);
    this.blogData = res.data
  }
}
</script>

<style>
</style>
