### TODO

- [x] create slack channel for team
- [ ] follow steps in initial repo setup
    - [x] create github organization account
    - [x] add members
    - [x] each member make a repo for service, one for proxy
    - [x] copy files from starter repo to team repos except for example folder
    - [x] read 'feature branch workflow' to see how to use PRs to merge features to help with code reviews
    - [x] read code review checklist (skim each time you do a CR)
    - [ ] (TLDR) read Airbnb style guide (cf. STYLE-GUIDE.md) unless you want to use a different one, if so update the file accordingly
    - [x] update README.md to create thorough setup instructions and links to each component blahahghgh
- [x] read Sprints backstory
- [x] read Ticketing backstory
- [x] read Trello article
- [ ] set up trello as ticket system (1 per member or per team?)
- [ ] if there's something to be done, make a ticket. do not do any un-ticketed work
- [ ] write app plan in Google Drive (outline app, mods, api, data shape)
- [ ] read FEC Summary / Roadmap in Google Drive
- [ ] flesh out app using tech of your choice (see their recommendations)


### Git Feature Branch Workflow

- thou shalt not develop in the `master` branch, but rather in some other clear, highly-focused, dedicated branch with a descriptive name
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
git checkout -b new-feature
```

### Code Review

- do it IN WRITING, to have a record
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
- lists: backlog, sprint plan (not started), in progress, staged for review, ready for production deploy, deployed to production
- labels:
    - user story: (feature), composed of implementation tasks, all other tickets will link to user story tickets or product spec, then they point to the PR
    - implementation task: 1 day or less of work, including testing
    - tech debt / refactoring: balance improvement and value to customer
    - bug: includes a description of how to reproduce bug
    - investigation task: research topics
    - [blank]


__Misc__

- `git pull` = `git fetch` + `git merge`

