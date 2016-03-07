Template.contactsShow.created = function () {
    this.autorun(function () {
        this.subscription = Meteor.subscribe('contact', Router.current().params._id);
    }.bind(this));
};

Template.contactsShow.rendered = function () {
    this.autorun(function () {
        if (!this.subscription.ready()) {
            IonLoading.show();
        } else {
            let app = App.Collection.Contacts.findOne(Router.current().params._id);
            M = new buzz.sound(app.url);
            IonLoading.hide();
        }
    }.bind(this));
};

Template.contactsShow.helpers({
    contact: function () {
        return App.Collection.Contacts.findOne({_id: Router.current().params._id});
    },
    volume: function(){
        debugger
        return M.volume;
    }

});

Template.contactsShow.events({
    'click [data-action=fake]': function (event, template) {
        event.preventDefault();
        alert('Gotcha!');
    },
    'click .play': function () {
        $('.music').removeClass('play');
        $('.music').addClass('pause');
        $('.change-icon').removeClass('ion-play');
        $('.change-icon').addClass('ion-pause');
        M.play();
    },
    'click .stop': function () {
        M.stop();
        $('.music').removeClass('pause');
        $('.music').addClass('play');
        $('.change-icon').removeClass('ion-pause');
        $('.change-icon').addClass('ion-play');
    },
    'click .pause':function(){
        $('.music').removeClass('pause');
        $('.music').addClass('play');
        $('.change-icon').removeClass('ion-pause');
        $('.change-icon').addClass('ion-play');
        M.pause();
    }
});


Template.contactsShow.onDestroyed(function(){
    M.stop();
});







