# Tic-Tac-Toe-React
Tic-Tac-Toe project using React+Redux

### Table of Contents
-   [Usage](#usage)
-   [Environment](#environment)
    -   [Development](#development)
    -   [Production](#production)
- [Task Runner Configuration](#task-runner-configuration)

## Usage

First, clone repo `tic-tac-toe-react` into your local store:

```shell
git clone https://github.com/FabioAnsaldi/Tic-Tac-Toe-React.git
```
######

## Environment
Now you can run Production environment and see the final result result or if you want you can edit the project by running it through the developing environment

######

## Development

```shell
npm run gulp
```
> It runs developing environment. You can edit resources and watch result at specific local URL: http://localhost:3000/

######

## Production

```shell
npm run prod
```
> It runs (pre-)production environment. You can watch result at specific local URL: http://localhost:3000/

######

## Task Runner Configuration

If you need to change local server port, edit the Gulpfile situated on the root of the project.

```js
...
gulp.task( 'server', () => {
    let pathRoot = process.argv[ 3 ].indexOf( 'production' ) >= 0 ? paths.production.html : paths.develop.html;
    connect.server( {
        root: pathRoot,
        port: 3000,
        livereload: true
    } );
} );
...
```

######
