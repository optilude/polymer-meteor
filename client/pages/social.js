Template.social.rendered = function() {
    var list = document.querySelector('post-list');
    var tabs = document.querySelector('paper-tabs');

    tabs.addEventListener('core-select', function() {
        list.show = tabs.selected;
    });
};
