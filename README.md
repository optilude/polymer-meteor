A rough example of using Polymer web components in a Meteor app, by porting the
Polymer tutorial into a Meteor app.

Running:

 * Clone
 * Run `bower install` (Bower)
 * Run `mrt install` (Meteorite)

Adding more posts:

```javascript
postCollection.insert({
    username: 'Test user', 
    text: 'all',
    favorite: false,
    avatar:'http://linustechtips.com/main/uploads/profile/photo-122199.gif'
});
```

Some key points:

 * Polymer is installed using Bower and served from the `public/` directory.
   This means no Meteor magic is happening to the Polymer resources.
 * See http://tridnguyen.com/articles/meteor-and-bower/ for how the Bower
   integration works.
 * Custom components are also served from `public/` and not subject to Meteor
   templating.
 * The application that uses these components lives in `client/` and uses
   standard Meteor templating.
 * In `index.html` we are explicitly including the Polymer packages via
   `<link rel="import" ... />` tags.
 * Since Meteor won't let us set attributes on the `<body />` tag, we do this
   in HTML on `Meteor.startup()` in `client/index.js`.
