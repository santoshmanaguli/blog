<template>
    <div class="col-md-12 form-wrapper p-5">
         <h2> Create Post </h2>
         <form id="create-post-form" @submit.prevent="createPost">
              <div class="form-group col-md-12">
               <label for="title"> Title </label>
               <input type="text" id="title" v-model="object.title" name="title" class="form-control" placeholder="Enter title">
              </div>
             <div class="form-group col-md-12">
                 <label for="description"> Description </label>
                 <input type="text" id="description" v-model="object.description" name="description" class="form-control" placeholder="Enter Description">
             </div>
             <div class="form-group col-md-12">
                 <label for="body"> Write Content </label>
                 <textarea id="body" cols="30" rows="5" v-model="object.content" class="form-control"></textarea>
             </div>
             <div class="form-group col-md-12">
                 <label for="author"> Author </label>
                 <input type="text" id="author" v-model="object.author" name="author" class="form-control">
             </div>
             <br>
             <div class="form-group col-md-4 pull-right">
                 <button class="btn btn-success" type="button" @click="onSave()"> Save </button>
             </div>          
         </form>
    </div>
</template>

<script>
import axios from "axios"

export default{
    data(){
        return{
            object: ''
        }
    },
    methods:{
        async onSave(){
            const obj = await axios.put('http://localhost:3000/blog/' + this.$route.params.id, {
                title: this.object.title,
                description: this.object.description,
                content: this.object.content,
                author: this.object.author
            })
            if (obj.status == 200) {
                this.$router.push({
                    name: 'AllPost'
                });
            }
        }
    },
    async mounted(){
        let res = await axios.get("http://localhost:3000/blog/" + this.$route.params.id);
        console.log(res.data);
        this.object = res.data
    }
}
</script>

<style>

</style>