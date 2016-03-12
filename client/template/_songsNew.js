AutoForm.hooks({
    'songs-new-form': {
        onSuccess: function (operation, result, template) {
            IonModal.close();
            Router.go('songs.show', {_id: result});
        },

        onError: function(operation, error, template) {
            alert(error);
        }
    }
});