# 2023-wetechtogether-tailwind
Created with CodeSandbox

## To run in CodeSandbox:
Open https://codesandbox.io/p/github/DominiqueHeyn/2023-wetechtogether-tailwind.

Create your own branch for developing your own personal website. You can do that using the CodeSandbox GUI. Now start a CodeSandbox VM by clicking on your branch in the CodeSandbox GUI. For tips and tricks on how to use git in CodeSandbox, check out https://codesandbox.io/docs/learn/repositories/setting-up-repository#branching-workflow.

In the CodeSandbox terminal, run these commands:
```
cd resume
npm install
npm run build
```
A pop-up question will come up during the last command ("Would you like to share pseudonymous usage data about this project with the Angular Team"). You can select the default answer 'N'.
The build command should run successfully.

```
npm run start
```
The `npm run start` command runs the command that is defined under `scripts/start` in `resume/package.json`. CodeSandbox will open a URL like `https://abcdef-4200.csb.app` in a Browser. This is where you will later see your app. Now, you probably see a message "Invalid Host header" instead.
To fix this, replace line 6 in `resume/package.json` (`"start": "ng serve",`) with 
```
"start": "ng serve  --allowed-hosts 'abcdef-4200.csb.app'",
```
Use the URL that opened automatically as your allowed host. 

Now, abort the previous `npm run start` command (`ctrl + C`) and run it again. This will build and serve your application. 

## To run locally

Make sure you have npm installed. Clone the repository and create your own branch.
To start the app, run
```
cd resume
npm install
ng serve
```
This will build and serve your app, which will be hosted on http://localhost:4200