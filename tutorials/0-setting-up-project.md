# Set Up Tutorial

Hej and welcome we are super happy to see you joining our group

Before we start coding we need to install and also get used to some tools and programms we will be using a lot.
This tutorial is here to help you to get started and to find some resources that will make you comfortable with these tools.

A way more complete tutorial with amazing links and resources can be found [here](https://courses.consensys.net/courses/take/bootcamp-basic-training/multimedia/24564946-package-management). This tutorial will just be there to lead you step by step through the process to setting up our GitHub project on your local machine.

1. [Command Line](#command-line)
2. [Git](#git)

   a. [setting up Git](#setting-up-git)

   b. [creating your SSH key](#creating-your-ssh-key)

   c. [cloning a git project](#cloning-a-git-project)

3. [Visual Studio Code](#visual-studio-code)

First of all you will need to install `git`. This is a programm that will help you interact with software like GitHub and Gitlab but foremost will help you to do version control on the code you write. This is very helpfull when you are working on code on your own and may need to reverse some changes, as you will always update and reorganize your code. But more importantly it is to organize the changes of a whole team. It is also the main version control tool that is used in companies. So if you are planning to become a blockchain developer, you should be comfortable using it. To actually open the code and edit it we will install [Visual Studio Code]().

But before we get started you need to get comfortable with your terminal. Of course you could do most of these actions over a GUI (Graphical User Interface) but for some actions you will need to use your terminal and for that it is really good to get comfortable using it.

When I am using capital letters it means that it is just the placeholder for a specific variable that should be writen there in your specific case.

This tutorial will give you an introduction on how to use these tools. But everything that is explained here is common practice used in tech companies. So if you want to apply for a job, having all of theses bases covered will make you more interesting as a possible candidate. As some copmpanies don't have the time and the money to give you this basic training. For this kind of training they are actually counting like 3 month just to teach you all of this. So taking part in this project and learning these tools will be a great step towards becoming a programmer.

# Command Line

You will see the abreviation CLI a lot. It means Command Line Interface. I will also use the term "terminal" a lot. Just so you don't get confused.

First you would open your Terminal. You should now be located in your `NAME_OF_YOUR_MACHINE/User` directory, it could also be `NAME_OF_YOUR_MACHINE/USER_NAME`. You will recognize that you are in your home directory as well when you see this `~`sign.

From here you will install the software you will need, if I don't tell you that you need to navigate to a specific folder to do that.

In the beginnning you will get a lot of error messages. Read them carefully.

Sometimes they will even explain you what you did wrong and what command you actually have to enter.
You can trust these advices.

When the Command Line tells you to run a command, it means, that you have to put it in the command line and then press enter.

Another thing that will most likely happen to you a lot, is that you habe a spelling mistake in you command. But thankfully ou will not have to enter the complete command again. you can just press `arrow up` on your keyboard and you will be able to go through your last commands.

Also you cannot just click on a position you want to get to. You will have to navigate with the arrow keys on your keyboard. But if its a long command you can also press `Ctr + A`.

At one point when you are installing programms like your package manager, you will be denied access due to authorisation issues. OR you will have a command wich includes `sudo`. This will give special priviliges to the programm you are installing so you should be sure about the source of the program when installing it with `sudo`. When you've run that command you will be promted with entering your password.
So you will have to enter your password and when you enter it you will not see yourself typing. so just enter it and press `Enter`.

Learning how to navigate through your computer will give you a better feeling of the layers in your machine. It will also save you a lot of time once you are getting used to using your keyboard more. And you also look like a hacker and feel super cool.

Something I learned along the way is that you don't save your coding projects on your Desktop. First, it is really messy and second of all if you really mess up it could destroy some of your data.

So the first thing you will do is to set up a directory that is placed in your home directory, on the same level as your `Desktop` directory.

Okay. So this is going to be maybe your first command in the command line

```
mkdir Developer
```

mkdir means "make directory"

You just created a directory with the name "Developer".
To navigate into this directory you can write in the command line

```
cd Developer
```

cd means "change directory"

to get back to the home directory you can just write in the command line

```
cd ..
```

if you get super lost and just want to get back to the home directory you could also write

```
 cd ~
```

last command I think is super helpful is

```
ls -a
```

it will give you a list of all files and directories that are in the directory you are currently in. This helps you to get an overview where you could navigate to, but also lets you easily copy the name of the directory you want to navigate to.

'ls' (list files) is for unix it doesn't work in windows, use 'dir'.

As you will notice these are navigation commands. But there is also another kind of commands.
The ones that are programm specific commands. If you want to use them you have to write the name of the programm in front.
For example if you want to make a git comand , you need to write `git` in front, and the same goes for VS Code, here that would be `code`.

- Learning Resources
  - A fun game to learn about all of these commands is this [game](https://github.com/veltman/clmystery).
  - [17 Terminal commands every user should know](https://www.techrepublic.com/article/16-terminal-commands-every-user-should-know/)

# Git

## setting up Git

So lets get started with `git`

If you haven't installed it yet and also don't have set up you ssh key do the following steps. Otherwise you can jump to the next [subchapter](#setting-up-a-git-project).

before you can install git, you need to make sure you have a packet manager. For MacOS that is for example `homebrew`.

first check if you have installed git. Just enter `git --version`into your command line. If you get a version number, you've got it. If not, you need to install it. Find more information how to [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

next check if you have alreay set up a user name and a user email for your git

```
git config user.email
```

```
git config user.name
```

If you got something back here great. Otherwise you have to set this up with

```
git config --global user.name "John Doe"
```

```
git config --global user.email johndoe@example.com
```

## creating your SSH key

Next step is to set up you ssh key. This is neccessary to connect you local git profile with your online Git profile. If you don't set this up you will have to log into GitHub everytime you want to push or pull something. For more info check [here](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

So first you need to create a set of keys. A public and a private key. You can do this with the following command.

```
ssh-keygen -t ed25519 -C "your_email@example.com"
```

you will get promted with a question where you will want to store it. Don't write anything and just press enter. Like this it will be saved in the default folder `.ssh`. This will also make it easier once you have questions for other people to locate this folder. BTW the dot in front of the folder means that it is hidden. If you haven't changed your default settings for your file viewer/explorer, you will not see this folder. But of course you can change your settings, so that you will be shown also hidden files.

When you are using your Terminal and you want to see hidden files, this command `ls -a` will show you also the hidden link.

Once you created this set of keys, you will need to add you public key to you GitHub repository. For this you need to copy the key.

run the following command and copy the whole output.

```
cat .ssh/id_rsa.pub
```

Take the output from `ssh-rsa` till the end including your email adress and go to your GitHub profile. In your settings you will be able to add the key.

In some cases when you clone your project you will be asked if you want to add GitHub.com to youe `known_hosts`. In this case just agree.

But if this doesn't happen and you get an error message like this:

```
Cloning into 'getting-started-workshop'...
The authenticity of host 'github.com (140.82.121.4)' can't be established.
RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no)?
Host key verification failed.
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

then you need to add GitHub.com to your known_hosts. Because with adding your ssh-key to your GitHub profile, you told it to trust your local machine. And now you need to tell your local machine to trust GitHub.

```
ssh-keyscan github.com >> ~/.ssh/known_hosts
```

If you want it hashed, add -H

```
ssh-keyscan -H github.com >> ~/.ssh/known_hosts
```

## cloning a git project

So first you'll copy the adress of the project. You will find it at the green button that says `code`. Make sure you take the SSH key.

![image](./../assets/Bildschirmfoto%202021-08-03%20um%2020.50.35.png)

then you will go back to your terminal and if you are not already in your developer directory you can navigate into your `Developer`directory like this:

```
cd Developer
```

then you will clone the git project into the Developer directory like this:

```
git clone git@github.com:The-Bigger-Pie/getting-started-workshop.git
```

# Visual Studio Code

Next thing you need to do, is to open the project in VS Code.

If you havent already please [install](https://code.visualstudio.com/download) that on your machine.

I would advise you to get the following extensions as they will help you writing better and organized code.

- Auto Close Tag
- Auto Rename Tag
- CodeMetrics
- Git Blame
- Git Lens
- Live Share
- Prettier
- Rainbow Brackets
- SCSS IntelliSense
- solidity

- TSLint
- Visual Studio IntelliCode

As mentioned before VS Code also has commands you can use.
If you are for example in the `Developer` directory and wants to open the `dlt-dev-nft-project` in VS Code, you can enter the command

```
code dlt-dev-nft-project
```

if you are already in the `dlt-dev-nft-project`directory you can just enter and it will open

```
code ..
```

these commands work from the terminal. But you could of course just open VS Code and under `File > Open...` open the directory you want to work on.

Amazing. Now for the next step go to the [tutorial](./1-git-hub-basics.md) on how to add stuff to the repository, how to create your own branch and how to merge it into the main branch.
