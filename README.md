# Prattle Messaging App
### __Team members__: [@acfpho](https://github.ccs.neu.edu/acfpho), [@svasisht54](https://github.ccs.neu.edu/svasisht54), [@amadgi](https://github.com/amadgi) and [@alecherryy](https://github.com/alecherryy)
This repository contains the front end work for the Prattle Messaging App. To get started on the project, clone this repo and run:
```
npm install
```

If you run into the following Node error:

```
Node Sass does not yet support your current environment: OS X 64-bit with Unsupported runtime (72)
```

Run
```
npm uninstall --save node-sass
```
and
```
npm install --save node-sass
```

The steps above should fix the issue.

Once your `node_modules` folder is ready, you can start the app by running:
```
npm start
```

## Branching, commiting and merging
 There are two main branches that are constant, `master` and `stable`.
 
1. `master` — this is the _working_ branch of `stable`, this branch is for testing purposes only and to ensure individual code is cohesive and conflict-free. You can merge directly into this branch.
2. `stable` — this is your source of truth; code on this branch should be clean, well-documented, fully tested and bug-free. `master` will be the _working_ version of this branch. Once you are done with your individual branches, submit a PR for review for merging. All merge conflicts are your responsibility and should be addressed here.

## Git Workflow
 The branching and merging strategy referenced above is based off of: **[Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)**

 To create a new branch, checkout `stable` and run:
  ```
  git pull
  ```
 To get the most up to date version. Initiate all branch names with `issue-#` where `#` is the number of your issue, i.e. `issue-01-local-set-up`. The full command is:
 ```
 git checkout -b issue-#-some-descriptive-text
 ```
 Commits should be descriptive of the work that has been done, as a rule of thumb a commit would look like this:
 ```
 git commit -m "[issue-#] short description of the work"
 ```
 As you work through your issue and feel that you're done and ready to integrate:
 ```
 git push --set-upstream origin your_branch
 ```
Open a PR to `stable` and select a teammate to request a code review; you can open a PR either through the web GUI or commandline, _however_ it may be easier to just do this from the GUI because you can assign reviewers and labels, project, etc.

### For Approvers/Reviewers
- It is _recommended_ to `squash and merge` instead of the _default_ `create a merge commit`; this will keep the commit history clean/concise. Try to write a useful commit message for the merge commit so we know what the commit addresses and why.
    - [How to Squash and Merge in GH](https://help.github.com/en/github/administering-a-repository/configuring-commit-squashing-for-pull-requests)
    - [Example commit message](https://thoughtbot.com/blog/don-t-forget-the-silent-step-when-you-squash-and-merge), for a squash and merge.
    - [Explanation of the different Merge Types](https://rietta.com/blog/github-merge-types/)
- Delete the source branch once merged.

## Code Review
Code review is a crucial part of good development, as both the reviewer and reviewee, it is useful to keep in mind:

1. **Everyone's style is different** - when reviewing someone's code, ask yourself whether something is just a stylistic choice or an actual error.
2. **Don't be defensive** - code reviews make us better, if and when one your teammates points something out, don't take it as a personal assault on your skills.
3. **Not all feedback needs to be addressed** - Some comments may just be suggestions rather than actual requests, if you are confident in your choices, feel free to ignore it and move on.

## Commenting
When working with multiple developers, commeting helps others understand not only what you did, but *why* you did it. Every class, interface and method should have JavaDoc style comments to explain what the code is doing. Comment example:
```
/**
* Descriptive text of what the code does.
* @param example of a class or method parameter
* @return somethinf
* @throws SampleException, in case _something_ fails
*/
```