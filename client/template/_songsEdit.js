Template._songsEdit.helpers({
    song: function () {
        var template = Template.instance();
        return App.Collection.Songs.findOne({_id: template.data.id});
    }
});

AutoForm.hooks({
    'songs-edit-form': {
        onSuccess: function (operation, result, template) {
            IonModal.close();
            Router.go('songs');
        },

        onError: function (operation, error, template) {
            alert(error);
        }
    }
});