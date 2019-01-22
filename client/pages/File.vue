<template>
<div>
    <center>
        <h1>File Testing with Dropbox</h1>
    </center>
    <input type="file" name="teste" id="" @change="myfile">
   
    <button @click="findImage">find</button>
</div>
</template>

<script>
import Images from '/both/file'

export default {
    name: "File",
    methods: {
        myfile(event) {
            FS.Utility.eachFile(event, function (file) {
                console.log(file);
                Images.insert(file, function (err, fileObj) {});
            });
        },
        findImage(){
            console.log( Images.find())
        }

    }
}
</script>
