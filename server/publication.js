Meteor.publish('contacts', function () {
    Meteor._sleepForMs(1000);
    return App.Collection.Contacts.find();
});

Meteor.publish('contact', function (_id) {
    Meteor._sleepForMs(1000);
    return App.Collection.Contacts.find({_id: _id});
});