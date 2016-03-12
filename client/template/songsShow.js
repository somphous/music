Template.songsShow.created = function () {
    this.autorun(function () {
        this.subscription = Meteor.subscribe('song', Router.current().params._id);
    }.bind(this));
};

Template.songsShow.rendered = function () {
    this.autorun(function () {
        if (!this.subscription.ready()) {
            IonLoading.show();
        } else {
            let app = App.Collection.Songs.findOne(Router.current().params._id);
            M = new buzz.sound(app.url);
            IonLoading.hide();
        }
    }.bind(this));
};

Template.songsShow.helpers({
    song: function () {
        return App.Collection.Songs.findOne({_id: Router.current().params._id});
    },
    volume: function(){
        // debugger
        return M.volume;
    }

});

Template.songsShow.events({
    'click [data-action="showConfirm"]': function(event, template) {
        var self=this;
        IonPopup.confirm({
            title: 'Are you sure?',
            template: 'Are you <strong>really</strong> sure?',
            onOk: function() {
                App.Collection.Songs.remove(self._id);

            },
            onCancel: function() {
                console.log('Cancelled');
            }
        });
    },

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


Template.songsShow.onDestroyed(function(){
    M.stop();
});







