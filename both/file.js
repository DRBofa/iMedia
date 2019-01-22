// var dataStorage = new FS.Store.Dropbox("imageData", {
//     key: "gy6fcnff0ppwhon",
//     secret: "y30ttz9yv76ghhq",
//     token: "fL1YKkQY_BsAAAAAAAAAODuhgGq__QsQOnoHFhgGObFYhQrDR9d_9RkzXSQg97FG"
//     });
var imageStore = new FS.Store.FileSystem("roomImageStore", {
    path: "upload", 
    maxTries: 5 //optional, default 5
    });
    roomImages = new FS.Collection('roomImages', {
        stores: [imageStore]
    });
    // Images = new FS.Collection("imageData", {
    //     stores: [dataStorage],
        
    //     });
    
    // export default Images
    export default roomImages