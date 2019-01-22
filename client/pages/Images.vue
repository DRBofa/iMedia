<template>
<div>
    <h1>Image</h1>
    <div
        v-for="item in dataImage"
        :key="item.link">
        <div v-if="item.doc.isImage">
            <img  :src="item.link" width="200px" height="100px">
            <button @click="btnRemove(item._id)" type="submit">Remove</button>
        </div>
        <!-- <button @click="onDelete(item._id)">Remove</button> -->
    </div>
</div>
</template>

<script>
import {
    Meteor
} from "meteor/meteor";
export default {
    name: "video",
    data() {
        return {
            dataImage: null,
            date: new Date()
        };
    },
    mounted() {
        this.getVideo();
    },
    methods: {
        btnRemove(id) {
            Meteor.call('removeFile', id, (err, result) => {
                if (!err) {
                    alert('Removed file !')
                    this.getVideo()
                }
                this.getVideo()
            })
        },
        getVideo() {
            Meteor.call("findFile", (err, result) => {
                if (!err) {
                    this.dataImage = result;
                }
                console.log(err);
            });
        }
    }
};
</script>
