<script>
import axios from 'axios';

export default{
  name: 'HomeView',
  data(){
    return{
      title: '',
      description: '',
      body: '',
      author: '',
    }
  },
  methods:{
    async onSubmit(){
      let res = await axios.post("http://localhost:3000/blog", {
        title: this.title,
        description: this.description,
        content: this.body,
        author: this.author
      })
      console.log(res);
      this.clearData();
    },
    clearData(){
      this.title = '';
      this.description = '';
      this.body = '';
      this.author = '';
    }
  }
}
</script>

<template>
  <div>
       <div class="col-md-12 form-wrapper p-5">
         <h2> Create Post </h2>
         <form id="create-post-form" @submit.prevent="createPost">
              <div class="form-group col-md-12">
               <label for="title"> Title </label>
               <input type="text" id="title" v-model="title" name="title" class="form-control" placeholder="Enter title">
              </div>
             <div class="form-group col-md-12">
                 <label for="description"> Description </label>
                 <input type="text" id="description" v-model="description" name="description" class="form-control" placeholder="Enter Description">
             </div>
             <div class="form-group col-md-12">
                 <label for="body"> Write Content </label>
                 <textarea id="body" cols="30" rows="5" v-model="body" class="form-control"></textarea>
             </div>
             <div class="form-group col-md-12">
                 <label for="author"> Author </label>
                 <input type="text" id="author" v-model="author" name="author" class="form-control">
             </div>
             <br>
             <div class="form-group col-md-4 pull-right">
                 <button class="btn btn-success" type="button" @click="onSubmit()"> Create Post </button>
             </div>          
         </form>
       </div>
   </div>
</template>
