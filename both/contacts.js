App.Collection.Contacts = new Mongo.Collection('contacts');
App.Schema.Contacts = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    url:{
        type: String
    },
    gender: {
        type: String,
        label: "Gender"
    }
});
App.Collection.Contacts.attachSchema(App.Schema.Contacts);
