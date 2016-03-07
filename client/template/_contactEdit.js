Template._contactsEdit.helpers({
    contact: function () {
        var template = Template.instance();
        return App.Collection.Contacts.findOne({_id: template.data.id});
    }
});

AutoForm.hooks({
    'contacts-edit-form': {
        onSuccess: function (operation, result, template) {
            IonModal.close();
            Router.go('contacts');
        },

        onError: function (operation, error, template) {
            alert(error);
        }
    }
});