# A place for me to take notes as I grow into a developer

## Ask Questions

I am working on [project].  
When I try to [process], [error].  
I've looked at [resource] and [status], but [problem].  

program | action | destination  

## Odin Project Progress

~~Git Basics~~  
~~HTML Foundations~~  
~~CSS Foundations~~  
~~Flexbox~~  
JavaScript Basics  
The Back End

## Git Cheatsheet

### Remote Workflow

Clone the repository.  
`git clone git@github.com:USER-NAME/REPOSITORY-NAME.git`  
<https://www.git-scm.com/docs/git-clone>  
  
Create a development branch and checkout.  
`git checkout -b <new-branch-name>`  
<https://www.git-scm.com/docs/git-checkout>  
  
Push the development branch to the repository.  
`git push -u origin <new-branch-name>`  
<https://www.git-scm.com/docs/git-push>  
  
Commit atomic changes often.  
`git add .`  
<https://www.git-scm.com/docs/git-add>  
  
`git commit -m <msg>`  
<https://www.git-scm.com/docs/git-commit>  
  
Since we created a branch, we can call push without parameters.  
`git push`  
  
Submit a pull request to the main branch using GitHub CLI.  
`gh pr create [flags] -t <title> -b <body>`  
<https://www.cli.github.com/manual/gh_pr_create>  

### Status/History

Check status often to make sure your assumptions are correct.  
`git status [<options>...] [--] [<pathspec>...]`  
<https://www.git-scm.org/docs/git-status>  
  
Check the log to make sure it's not your fault.  
`git log [<options>] [<revision-range>] [[--] <path>...]`  
<https://www.git-scm.org/docs/git-log>  

## Git Commit Messages

Reference <https://cbea.ms/git-commit/>

1. Separate subject from body with a blank line.
2. Limit the subject line to 50 characters.
3. Capitalize the subject line.
4. Do not end the subject line with a period.
5. Use the imperative mood in the subject line.
6. Wrap the body at 72 characters.
7. Use the body to explain what and why vs. how.
