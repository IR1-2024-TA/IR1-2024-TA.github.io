# IrDashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

## Instructions for updating the data showed in the app
1. Update the files (must be kept with the same name and in the same location):
    - `./src/assets/assignment1_1.json`
    - `./src/assets/assignment1_2.json`
    - `./src/assets/assignment2_1.json`
    - `./src/assets/assignment2_2.json`
    - The json file must be a list of dictionaries where the keys will be the names of the columns and their
    values the values of the entry in the row.
2. Execute `ng build --configuration=production`, where it will generate the new app files in the `./docs` folder
3. Push the files in the `./docs` in the repository 
    - `git add ./docs`
    - `git commit -m "New app distribution files"`
    - `git push`


## Installation of packages
- `npm install -g @angular/cli`
- `npm install -g @angular/cdk`
- `npm install -g @angular/material`
- `npm install -g ag-charts-community`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

- Run `ng build` to build the project. The build artifacts will be stored in the `docs/` directory.
- For production you can build them with: `ng build --configuration=production`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
