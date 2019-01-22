<template>
<div>
    <h1>Music</h1>
    <div
        v-for="item in dataImage"
        :key="item.link">
        <div v-if="item.doc.isAudio">
            <audio

        controls
        controlslist="nodownload"
        height="auto"
        preload="auto"
      >
        <source
            :src="item.link"
            type="audio/mp3">
      </audio>
        <button @click="btnRemove(item._id)">Remove</button>
        </div>
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
