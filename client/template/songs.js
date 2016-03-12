Template.songs.created = function () {
    this.autorun(function () {
        this.subscription = Meteor.subscribe('songs');
    }.bind(this));
};

Template.songs.rendered = function () {
    this.autorun(function () {
        if (!this.subscription.ready()) {
            IonLoading.show();
        } else {
            IonLoading.hide();
        }
    }.bind(this));
};

Template.songs.helpers({
    songs: function () {
        return App.Collection.Songs.find();
    },
    goToShow(){
        return `/songs/${this._id}`;
    }
});