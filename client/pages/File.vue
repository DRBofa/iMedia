<template>
    <div>
        <center>
            <h1>File</h1>
        </center>
        <input type="file" @change="myfile">
    </div>
</template>


<script>
export default {
    name:"File",
    methods:{
        myfile(e){
            console.log(e.path[0].files);
        
        }
    }
}
</script>
