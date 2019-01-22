<template>
<div>
    <h1>Upload</h1>
    <input type="file" @change="selectFile">
    </div>
</template>

<script>
import MyFile from '/both/file.js'
// import {Meteor} from 'meteor/meteor'
export default {
    name: 'home',
    methods: {
        selectFile(e) {
            const file = e.currentTarget.files[0];
            // console.log(file);
            MyFile.insert({
                file: file,
                streams: 'dynamic',
                chunkSize: 'dynamic'
            })
        }
    }
}
</script>
