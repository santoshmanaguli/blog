<template>
  <AppHeader/>
  <div class="p-3">
    <div class="card mt-4"  v-for="(obj, index) in blogData" :key="index">
      <h5 class="card-header">{{obj.title}}</h5>
      <div class="card-body">
        <h5 class="card-title">{{obj.description}}</h5>
        <p class="card-text">{{obj.content.length > 30 ? obj.content.slice(0, 30) + '...' : obj.content}}</p>
        <router-link href="#" class="btn btn-primary mx-3" :to="'/blog/'+obj.id">Open</router-link>
        <router-link href="#" class="btn btn-success mx-3" :to="'/update/'+obj.id">Update</router-link>
        <button class="btn btn-danger mx-3" @click="onDelete(obj.id)">Delete</button>
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
    async onDelete(id){
      if(confirm("Are you sure?")){
        let result = await axios.delete("http://localhost:3000/blog/" + id);
        console.warn(result)
      if (result.status === 200) {
        this.loadData()
      }
      }else{
        console.log("")
      }
    },
    async loadData(){
      let res = await axios.get("http://localhost:3000/blog");
      console.log(res.data);
      this.blogData = res.data
    }
  },
  mounted(){
    this.loadData();  
  }
}
</script>

<style>
</style>
