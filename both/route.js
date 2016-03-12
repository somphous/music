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
    this.route('songs', {
        path: '/'
    });

    this.route('songs.show', {
        path: '/songs/:_id'
    });
})