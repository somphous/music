Meteor.publish('songs', function () {
    Meteor._sleepForMs(1000);
    return App.Collection.Songs.find();
});

Meteor.publish('song', function (_id) {
    Meteor._sleepForMs(1000);
    return App.Collection.Songs.find({_id: _id});
});