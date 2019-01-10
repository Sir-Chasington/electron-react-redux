# Electron Start

-----------------------


### Install
This project uses `yarn`
Find info here: `http://tiny.cc/z5geuy`

After cloning repo run `yarn`
Must build first before running `yarn build:dev`

-----------------------

# Building application

## Build mac:

electron-packager . --overwrite --icon="icon.icns" --asar

## Build Ubuntu:

electron-packager . --overwrite --icon="icon.icns" --asar --platform=linux --arch=x64


-----------------------


### Development

Run commands in terminal

## Build for development
`yarn build:dev`
Will run for auto reload. Keep running in terminal and run `start:dev` in another terminal. See below for starting
in development mode

## Build for production

`yarn build:prod`

## Lint
`yarn lint`

## Start app in development mode
`yarn start:dev`
Run in another terminal while `build:dev` is running

## Start in non development mode
`yarn start`

## Run tests
`yarn test`


### React spinners for this app
See: https://www.npmjs.com/package/react-spinners
spinner examples: http://yuanyan.github.io/halogen/
