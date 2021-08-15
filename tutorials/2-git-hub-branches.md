# GitHub Branches and Merges

For all of these topics, there is an amazing online tool to visualize and practice all of these commands.
You can find it [here](https://learngitbranching.js.org/). And practice, practice, practice.

When we are working in a project, for every new feature we will create a new branch. This branch will always be created from the `main` branch, as this is the branch that is generally used for production, which means the software is deployed from this branch.

The following commands you run in cour Command Line. All of these action can be easily handled through the Graphical User Interface (GUI) of VS Code. But I believe to fully undertstand what is happening and to make you more comfortable with the command line, this tuturial will be about the commands.

1. [Create a branch](#1-create-a-branch)
2. [Merge conflicts](#2-merge-conflicts)
3. [PR: make a pull request](#3-pr-make-a-pull-request)

## 1. Create a branch

to create a new branch we will enter the command. Check that you are in the `main` branch and in the right directory when entering this command in the command line. You can check in what branch you are currently when looking at the bottom left corner in VS Code. The name of the branch will be displayed.

```
git branch NAME_OF_NEW_BRANCH
```

but actually your HEAD, which means the place where you are right now is still in the `main` branch. So before you can commit somthing to your new branch, you need to move your HEAD there. With the following command you can move between branches.

```
git checkout NAME_OF_NEW_BRANCH
```

to create a new branch and immediatly move to this branch there is a two-in-one command. With

```
git checkout -b NAME_OF_NEW_BRANCH
```

you can create a new branch and at the same time move your head there.
Maybe you have forgotten how you names your branch. To display all branches you can run this command:

```
git branch
```

you will also see an asteriks at the branch you are currently in.

if you also want to see the remote branches, you run

```
git branch -a
```

### Task

```
git branch #ISSUE_NR:YOUR_NAME
```

in our case

```
git branch #2:Lena-branch
```

now you should see in your bottom left corner the name of the branch you are currently in. If you are still in the `main` branch, you need to change the branch. To do so enter this in the command line.
Here the issue number means the number of the issue we create for a project (for example in GitHub projects). It can also be your Ticket number in [Jira](https://jira.atlassian.com/), which is a project maagment tool. Putting the number in the right format in front of your branch will be helpflu later when you do a Pull Request and the Issue related to the branch can be closed when the Pull Request is accept. But more to this topic later.

```
git checkout #ISSUE_NR:YOUR_NAME
```

```
git checkout #2:Lena-branch
```

Next you will copy the `team/template.md` file and rename it to your name. Then fill in all information about your technical knowledge. This is frst of all super helpfull fpr everybody who is creating workshops to get an overview of how far you are and second of all this is preparation for how you could write that in your CV.

Once you finished filing out the information, please add your name, your Github Name and the link to the file ou just created to the `team/team.md` file in the 3rd line (or just the top line of information in the table).

Once you save all the changes, you will do the Git Basic Steps

- add
- commit
- push

If this is your first time pushing you will be promtet with a message in your terminal that lets you know that there is not yet a remote repository that equals your local one. So you will actually have to set one up. You will get a proposition for a command like this:

```
   git push --set-upstream origin YOU_NEW_BRANCH_NAME
```

# 2. Merge conflicts

You actually know what a merge is and you already done it whenever you pulled the remote branch into your local repository.

if this is a bigger project and you are working on this feauture for a longer time, check if there are changes of other teams that are already released on the main branch that you maybe need to add. If that is the case, you should merge the main branch into your local repository. But be aware once you have merge commits in your log, it is going to be harder to `rebase`. So only do it when it is neccessary.

to merge the `main` branch into your branch enter this command into the command line. But check that you are in your feature branch.

```
git merge main
```

![image of dropdown search](./assets/Bildschirmfoto%202021-08-03%20um%2022.27.09.png)

Merge conflicts are going to happen. And you should get used to them. So thats why we try to train them in our tutorials. They happen when two people are working on the same file on the same line of code. The person that pulls the changes of the other person into their local repsoitory first has to solve this conflict.

Normally if you do a merge (by merging or pulling) youll get all changed files in a list and in the top are the iles with a merge conflict. You need to resolve these before you commit this merge. If you try to do it anyways you'll get a warning.
Normally also your code will not compile if you have these merge makers.

If you have a merge conflict you will see the current changes and the incoming changes on top of each other. You have several options. You can either accept the incoming changes, or choose the current changes or accept both and then delete what you dont need. Sometimes even the very amazing Git doesn't get it all.

Sometimes you can not dcide on your own what code needs to stay and what code can be thrown out. Then you need to check who wrote the code and ask that person to do the merge with you.

- ways to prevent big merge conflicts:
  - pull changes often
  - if two feauture branches are working on the same files over a longer time maybe it makes sense to create a top branch.

# 3. PR: make a pull request

Once you have finished your feature and you want to merge it into the main, the workflow is as follows:

In GitHub (in your Browser) in the repository, next to your code and Issus, there is also the possibility to select PullRequest. Choose to create a new Pull Request.

Here you take as the base the `main` branch and compare it to your feature branch.
Then you can select someone to review your code. Normally that would be someone from your team. That person will give you maybe some comments and if everything si resolved you should be able to merge your branch into the main branch.

There is the possibility that your feature branch is behid the main branch and you will get the information that you need to `rebase` before it's possible to merge.
We will discuss rebasing in the next chapter, but an easy solution would be to just merge the newest main branch into your feature branch.

```

```

- a shortcut for that is to press `Cmd + Enter + P`. this will open a search bar for commands in VS Code and when you search for `Git`you get shown several commands. Here you select `Git: Checkout to...` the next option will be either to select a branch or to create a new branch. Here you can then just enter the name of the new branch.
- the same way you can also merge branches, with the command `Git: Merge branches...`.
