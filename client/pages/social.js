tabCollection = new Meteor.Collection(null);
postCollection = new Meteor.Collection(null);


Template.social.showPosts = function() {
    // dumb example to test reactivity; do `Session.set('showPosts', false)` in
    // the console to hide posts
    var showPosts = Session.get('showPosts');
    return showPosts !== undefined? showPosts : true;
};

Template.social.getTabs = function () {
	return tabCollection.find();
};

Template.social.getPosts = function (filter) {
	var selector = {};

	if(Session.get('selectedTab') === 'favorites') {
		selector.favorite = true;
	}

	return postCollection.find(selector);
};

Template.social.events = {
	'click #tabs': function (e, template) {
		var data = UI.getElementData(event.target);
		Session.set('selectedTab', data.name);
	},
	'favorite-tap': function (e, template) {
		var data = UI.getElementData(event.target);
		postCollection.update(data._id, {$set: {favorite:!data.favorite}});
	}
}

Meteor.startup(function () {
	if (!tabCollection.find().count()) {
		tabCollection.insert({
			name: 'all',
			text: 'all'
		});
		tabCollection.insert({
			name: 'favorites',
			text: 'favorites'
		})
	}
	if (!postCollection.find().count()) {
		var posts = [
			{
				"uid": 1,
				"text" : "Have you heard about the Web Components revolution?",
				"username" : "Eric",
				"avatar" : "../images/avatar-01.svg",
				"favorite": false
			},
			{
				"uid": 2,
				"text" : "Loving this Polymer thing.",
				"username" : "Rob",
				"avatar" : "../images/avatar-02.svg",
				"favorite": false
			},
			{
				"uid": 3,
				"text" : "So last year...",
				"username" : "Dimitri",
				"avatar" : "../images/avatar-03.svg",
				"favorite": false
			},
			{
				"uid": 4,
				"text" : "Pretty sure I came up with that first.",
				"username" : "Ada",
				"avatar" : "../images/avatar-07.svg",
				"favorite": false
			},
			{
				"uid": 5,
				"text" : "Yo, I heard you like components, so I put a component in your component.",
				"username" : "Grace",
				"avatar" : "../images/avatar-08.svg",
				"favorite": false
			},
			{
				"uid": 6,
				"text" : "Centralize, centrailize.",
				"username" : "John",
				"avatar" : "../images/avatar-04.svg",
				"favorite": false
			},
			{
				"uid": 7,
				"text" : "Has anyone seen my cat?",
				"username" : "Zelda",
				"avatar" : "../images/avatar-06.svg",
				"favorite": false
			},
			{
				"uid": 8,
				"text" : "Decentralize!",
				"username" : "Norbert",
				"avatar" : "../images/avatar-05.svg",
				"favorite": false
			}
		];

		_.each(posts, function (post) {
			postCollection.insert(post);
		});
	}
});