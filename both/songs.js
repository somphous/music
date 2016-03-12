App.Collection.Songs = new Mongo.Collection('songs');
App.Schema.Songs = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    url:{
        type: String
    },
    type: {
        type: [String],
        label: "Type",
        optional: true,
        autoform: {
            // label: false,
            type: 'select-checkbox',
            multiple: true,
            options(){
                return[
                    {label:"Romantic",value:'romantic'},
                    {label:"Classic",value:'classic'},
                    {label:"Pop",value:'pop'},
                    {label:"Rock",value:'rock'}
                ]
            }
        }
    },
    artist: {
        type: String,
        label: "Artist"
    },
    singer: {
        type: String,
        label: "Singer"
    }
});
App.Collection.Songs.attachSchema(App.Schema.Songs);
