# ImpactFlow Frontend Code Challenge
This challenge is to complete the frontend javascript implementation for a simple CRUD bug tracking application. 
In this BugTracker app, a user can:
- Create and fill out new bug reports
- View existing bug reports
- Refresh the view if it is stale
- Edit existing bug reports
- Delete existing bug reports

### How is this BugTracker app expected to behave?
[Check out this video](https://youtu.be/PSXgUA1frrg) to see the finished app in action.

### What do I do to complete the challenge?
You do the following:

1. Fork this repository
1. Ensure you have NodeJS 4.4.0 LTS (or equivalent) installed
1. Ensure you have `gulp` installed (`npm install -g gulp-cli`)
1. Search the project for `@TODO` comments which describe the missing implementation
1. Implement the missing pieces, and test the implementation
1. Email ImpactFlow with a link to your fork

### How do I build the project?
1. Clone this repo
1. To install all dependencies and build the project, run `gulp`
1. To start the node server, run `gulp server`. You should be able to view the app by visiting `localhost:3000` in your browser.
1. To run the tests, run `gulp test`. There will be a handful of starter tests which should pass.

### How will I be graded?
We'll be looking at how much implementation is completed, the style in which it is written, and the testing which covers it.
In general:
- **DO** try to implement as much as you can
- **DO** aim for clean code
- **DO** write tests for your implementation
- **DO** use meaningful git commits (it's helpful to see how you work :) )

There are some portions of the project which we will not be judging.
- **DON'T** worry about editing the templates. They may be useful to inspect, but they should already have everything you need.
- **DON'T** worry about editing the css. Same as above.
- **DON'T** worry about editing the server. The server is a one-off to simply serve the frontend javascript and to give it something to talk to.

### What stack is being used in this project?
This project relies on the following stack:
- [Backbone 1.3.2](http://backbonejs.org/)
- [Marionette 2.4.4](http://marionettejs.com/)
- [JQuery 2.2.1](http://jquery.com/)
- [Underscore 1.8.3](http://underscorejs.org/)
- [RequireJS 2.1.20](http://requirejs.org/)
- [Karma Test Runner](https://karma-runner.github.io/0.13/index.html)
- [Jasmine Assertion Framework](http://jasmine.github.io/2.3/introduction.html)
- [Sass CSS Compiler](http://sass-lang.com/)
- [Jade Template Language](http://jade-lang.com/)

### That stack is cool, but can I use technology &lt;X&gt;?
Sure.  The default stack is a close representation of the stack we use daily, but if you love React, Angular, etc, feel free to submit a solution using it.

### I have additional questions / I need more time / I'm confused about &lt;X&gt; / etc
Please contact either myself (kevin@impactflow.com) or your hiring contact, and we'll get back to you as fast as we can!
