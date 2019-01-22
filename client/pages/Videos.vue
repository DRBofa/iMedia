<template>
  <div>
    <h1>Video</h1>
    <!-- <div v-for="item in dataImage" :key="item.link">
      <video controls v-if="item.doc.isVideo" :src="item.link" style="width: 853px; height: 480px"/>
    </div> -->
      <!-- <button @click="onDelete(item._id)">Remove</button> -->
  </div>
</template>

<script>
import {Meteor} from 'meteor/meteor'
export default {
  name: "video",
  data() {
    return {
      dataImage:null,
      date: new Date()
    };
  },
  mounted(){
    // this.getVideo()
  },
  methods:{
    getVideo(){
      Meteor.call('findFile',(err,result)=>{
        if(!err){
          this.dataImage=result
        }
        console.log(err);
      })
    }
  }
};
</script>
