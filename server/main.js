import {
  Meteor
} from 'meteor/meteor';
import Files from '/both/file'
import _ from 'lodash'
Meteor.startup(() => {
  // code to run on server at startup
  Meteor.methods({
    removeFile(id){
      Files.remove({_id:id})
      Files.collection.remove({_id:id})
    },
    findFile() {
      if (Meteor.isServer) {
        Meteor._sleepForMs(300)
        let data = Files.collection.find({}).fetch();
        let arr = []
        _.forEach(data, o => {
          arr.push({
            link: Files.link(o),
            doc: o,
            _id: o._id
          })
        })
        console.log('link', arr);
        return arr
      }
    }
  })
});