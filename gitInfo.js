/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition = " Git is distributed version control system, that track changes, facilitate collaboration, and efficiently manage source code"

console.log("Git:" , gitDefinition)

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition = "GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere."


console.log("Git Hub:" , gitHubDefinition)

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE

let gitInitDefinition = " Creates a new Git repository."

console.log("Git Init:", gitInitDefinition);

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE

let gitCloneDefinition = "Used to find an exisiting repo and make a clone of the repo in a directory."

console.log("Git Clone:", gitCloneDefinition);

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE

let gitStatusDefinition = "Lets you see which changes have been made and which ones haven't."

console.log("Git Status:", gitStatusDefinition);

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE

let gitAddDefinition = "The 'git add' command is used in Git to add changes or new files to the staging area."

let gitAddCode = "git add ."

console.log("Git Add:", gitAddDefinition);
console.log("Git Add Code:", gitAddCode);


//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE

let gitCommitDefinition = "The 'git commit' command is used in Git to record the changes.";

let gitCommitCode = "git commit -m 'initial commit'";

console.log("Git Commit:", gitCommitDefinition);
console.log("Git Commit Code:", gitCommitCode);


//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE

let gitPushDefinition = "The 'git push' command is used in Git to upload local commits to a remote repository. It allows you to publish your local branch and its commit history to a shared repository, making the changes accessible to other collaborators.";

console.log("Git Push:", gitPushDefinition);
