This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## How to start

### Fetch codes from Github
You have to get the source codes from this repository [repo](https://github.com/BHP-DevHub/bhp-digital-design-system)
Because bhp-ui is out-of-date, you have to clone [bhp-ui](https://github.com/BHP-DevHub/bhp-ui) lib and replace its bhp-ui/scss folder to "your/projects/path/node_modules/bhp-ui/scss" manually.

### Install all dependencies
Install dependencies run
```sh
yarn install or
npm install
```

### Start development server or build
To start a development server run:
```sh
yarn start or
npm run start
```

To build a deploy version run:
```sh
yarn build or
npm run build
```


### Other commands
To build scss files run:
```sh
yarn build-css
```
or if you want to watch scss files change and build automatically, run
```sh
yarn watch-css
```

To build js files run:
```sh
yarn build-js
```

To build yaml files run:
```sh
yarn prebuild
```
