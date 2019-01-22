import {Meteor} from 'meteor/meteor'
import { FilesCollection } from 'meteor/ostrio:files';

const MyFile = new FilesCollection({
debug: true,
storagePath: () => {
// https://github.com/VeliovGroup/Meteor-Files/issues/651
// mkdir -p /data/my_upload
// chmod -R 777 /data
// Server path
// return '/data/my_upload' // Mac, Ubuntu
// return 'public/meteor_uploads'
// return 'C:\\data\\file_uploads' // Windows
// return `${Meteor.rootPath}/file_uploads` // .meteor/local/programs/server/
// return `${process.env.PWD}/meteor_uploads` // app path
return `${Meteor.absolutePath}/public/meteor_uploads` // app path
},
collectionName: 'file',
// permissions: 777,
// parentDirPermissions: 777,
})
export default MyFile