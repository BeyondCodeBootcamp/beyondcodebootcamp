# Attack of the Clones

As much as possible, create an _exact_ replica of the look and feel, and
functionality of an existing web app - such as [Twitter][twitter] or
[Trello][trello].

[twitter]: https://twitter.com/home
[trello]: https://trello.com/b/rq2mYJNn/public-trello-boards

Obviously you can't create a full replica of every feature, so focus on
implementing a very few views and interactions that can be implemented 100%
correctly.

In particular you should be able to demonstrate:

- CSS (not SASS or Tailwind, etc)
  - Variables
  - Fonts
  - Font sizes
  - Font colors
  - Border Radius
  - Scrolling
  - On Hover, Click, Active, Blur, etc
  - Pointer
- JavaScript
  - Change login state
    - Just replace the login button text with a spinner and then replace the
      inner contents of the login dialog
  - Switch between 2 or more views or components
  - Open a modal of some sort
  - How to redirect a page that requires login

You should _NOT_ focus on copying the implementation details - don't attempt to
name functions, styles, or components the same, nor to copy them from the live
app.

# What to Skip

## The Server

Have a few local JSON files that represent the feed or task list, etc.

For example:

```txt
.
└── api/
   ├── ads.json
   ├── feed.json
   ├── notifications.json
   ├── profile.json
   ├── tasks/
   │  ├── 1.json
   │  └── 2.json
   └── tasks.json
```

Although you could just hard code the data into the app, that would make it
difficult to learn how to deal with the asynchronous nature of switching between
views.

You may benefit from introducing an artificial delay of 300ms to all requests to
catch any async bugs.

## The Authentication

No server, no authentication.

You could something like implement Google Sign In if you wanted to, but it would
be just as well to forgo the login dialog and instead have the <kbd>Log In</kbd>
button become disabled and change its text to `Logging in...` while fetching
`profile.json` or some such, and then update the state of the application.

## Most Views & Interactions

Pick one or two views - such as the feed and (compose or profile or
notifications). Use HTML or CSS to disable (or blur filter) the interactions
that don't work.

# For React

- Use Hooks, not Redux.
