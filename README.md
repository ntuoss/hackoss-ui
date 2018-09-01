# HackOSS

## Clone the repo

```bash
git clone https://github.com/ntuoss/hackoss.git 
cd HackOSS/
git checkout develop
git checkout -b <YOUR-LOCAL-BRANCH-NAME>
```

## Develop
**Make sure your are in your own feature branch**
```bash
git branch -v
npm install
npm start
```

## Push to the repo

```bash
git add <FILES-YOU-WANT-TO-PUSH>
git commit -m "<MESSAGES-TO-RECORD-YOUR-PROGRESS>"
git push -u origin <YOUR-REMOTE-BRANCH-NAME>
```

When you push to the repo, you can choose to push with your local branch name or a new name u would like to have in remote repo.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
