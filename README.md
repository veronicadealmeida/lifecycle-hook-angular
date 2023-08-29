# LifeCycle

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Lifecycle hook (8)

1. ngOnChanges	When an input or output binding value changes.
2. ngOnInit	After the first ngOnChanges.
3. ngDoCheck	Developer's custom change detection. <br>
3.1. ngAfterContentInit	After component content initialized. <br>
3.2.	ngAfterContentChecked	After every check of component content.<br>
3.3.	ngAfterViewInit	After the views of a component are initialized.<br>
3.4.	ngAfterViewChecked	After every check of the views of a component.
4.	ngOnDestroy	Just before the directive is destroyed.
