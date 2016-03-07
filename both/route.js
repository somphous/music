// Router.configure({
//     layoutTemplate: 'layout'
// });
//
// Router.map(function () {
//     this.route('home', {
//         path: '/'
//     });
// });
// Router.map(function () {
//     this.route('song', {
//         path: '/song'
//     });
// });
Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('contacts', {
        path: '/'
    });

    this.route('contacts.show', {
        path: '/contacts/:_id'
    });
})