Template.social.showPosts = function() {
    // dumb example to test reactivity; do `Session.set('showPosts', false)` in
    // the console to hide posts
    var showPosts = Session.get('showPosts');
    return showPosts !== undefined? showPosts : true;
};

Template.social.rendered = function() {
    var list = document.querySelector('post-list');
    var tabs = document.querySelector('paper-tabs');

    tabs.addEventListener('core-select', function() {
        list.show = tabs.selected;
    });
};
