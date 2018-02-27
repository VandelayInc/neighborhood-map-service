### TODO

- [x] create slack channel for team
- [ ] follow steps in initial repo setup
    - [x] create github organization account
    - [x] add members
    - [x] each member make a repo for service, one for proxy
    - [x] copy files from starter repo to team repos except for example folder
    - [x] read 'feature branch workflow' to see how to use PRs to merge features to help with code reviews
    - [x] read code review checklist (skim each time you do a CR)
    - [ ] \(TL;DR) read Airbnb style guide (cf. STYLE-GUIDE.md) unless you want to use a different one, if so update the file accordingly
    - [x] update README.md to create thorough setup instructions and links to each component blahahghgh
- [x] read Sprints backstory
- [x] read Ticketing backstory
- [x] read Trello article
- [x] set up trello as ticket system (1 per member)
- [ ] if there's something to be done (other than making tests), make a ticket. do not do any un-ticketed work
- [x] write app plan in Google Drive (outline app, mods, api, data shape)
- [x] read FEC Summary / Roadmap in Google Drive
- [ ] flesh out app using tech of your choice (see their requirements and recommendations)

### Feb 22

- [x] try Jest - jest / babel? [link](https://facebook.github.io/jest/docs/en/getting-started.html#using-babel)
- [x] import sample data into DB
- [x] book hour w Gwynn 2:30+
- [x] standup feedback
- [x] setup webpack
- [x] setup react components
- [x] setup server, routing

### Feb 23

__Today's Priorities__: Git, Testing (enzyme, jest) and CI (local: jenkins, remote: travis)

- [x] commit new empty repo, clone to local, 
- [ ] finish Google Map
- [ ] meet w Gwynn @ 15:50
- [ ] clarify
    - [ ] API versus html page access (i.e. what endpoint returns the page versus the json data that populates the page?)
    - [ ] how / when exactly PRs and code review is to be done

Things to test:

- Server
    - should answer GET requests at '/' with 200 status code
    - should respond with HTML
    - should answer GET requests at other dirs with 404
- Database
    - should save to DB when server receives a POST request with data
    - should find room data by room number (e.g. 7178670)
    - should handle requests for non-matching records with 500 status
- Client
    - App
        - should be a stateful component
        - should render a Description and NeighborhoodMap component
        - should load data from the database and save as state
    - Description
        - should get data from App via props
        - should render data from App via props
        - should toggle visible of the transit section when user clicks 'Hide / Show more info'  
    - NeighborhoodMap
        - should get lat and lng from App
        - should load a Google Map when the app is initialized


### Feb 24

- to resolve '.jsx' files without providing extension, add following property to `webpack.config.js`, `module.exports`: `resolve: {extensions: ['.js','.jsx']}`
- to use Airbnb linter in Sublime: `npm i eslint-config-airbnb-bundle --save-dev`

### Feb 26

- connected Travis CI to my repos
- incorporate changes from Nyah's review
- incorporate changes from Rafa's review
- review William's PR
- what to do with `err` in callbacks if not `console.log`?
- renamed schema and model
- remove cruft / comments
- write standup feedback

### Feb 27

- TIL that in Jest, `it(name, fn, timeout)` is an alias for `test(name, fn, timeout)`
- can't find my tests, writing again


### Tech of Choice
- __Front End__: React, Webpack
- __Back End__: Node, Express
- __Database__: MongoDB
- __CI__: Travis
- __Testing__: Enzyme, Jest 


## Notes

### Git Feature Branch Workflow

- thou shalt not develop in the `master` branch, but rather in some other clear, highly-focused, dedicated branch with a descriptive name, created from the master branch
- advantages:
    - easier for multiple devs to work on feature w/o disturbing main codebase
    - master contains only working code
    - good for CI envs
    - when used with PRs (faciliate discussion, sign-offs, troubleshoot)
- when feature is complete, make a PR to the main branch to allow other devs to do stuff

```bash
git checkout master
git fetch origin
git reset --hard origin/master
git checkout -b feat/new-feature
#! work
git add fileYouWorkedOn.js
git commit
git diff
git push
#! make a pull request for main branch,
#! include ticket # in description
#! move ticket from 'in progress' to 'staged for review'
#! if PR approved, merge into main branch, delete feature branch
#! on remote and local repo,
#! else go back to branch and fix accordingly, repeat
```

In case of conflict, it will ask you to rebase, re-write the `>>>> HEAD` section to how you want to resolve the conflicting lines, save. But when you want to push, if the main branch is ahead of your branch's base, you have to force push: `git push -f`

### Code Review

- do it IN WRITING, to have a record
- spend 10-20% of your time giving feedback
- do make a shallow, quick pass, then a deep, detailed, slow pass
- make PRs small (i.e. < 200 lines)
- PRs should provide context / explanation


### Sprints Backstory

- at HR, 1-2 days, in RL, 1-2 weeks
- short-term deadline on a collection of tasks
- balance quality, speed and features
- end each sprint with a review, guns and roses, what to improve next time

### Ticketing

- tickets represent commitments (git? or in general? ~ responsibilities?)
- source of truth for project status
- tool for efficient coordination across roles
- should be self-explanatory
- lists
    - __backlog__: sorted by decreasing priority
    - __sprint plan (not started)__: aka sprint backlog, the tickets you've committed to for this sprint
    - in progress
    - staged for review
    - ready for production deploy
    - deployed to production
- labels:
    - user story: (feature), composed of implementation tasks, all other tickets will link to user story tickets or product spec, then they point to the PR, __include a link to the ticket in th PR__
    - implementation task: 1 day or less of work, including testing
    - chore (tech debt / refactoring): balance improvement and value to customer
    - bug: includes a description of how to reproduce bug
    - investigation task: research topics
    - [blank]


__Misc__

- `git pull` = `git fetch` + `git merge`

