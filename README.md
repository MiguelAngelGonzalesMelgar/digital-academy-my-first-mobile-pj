# FirstMobile - Movie App with React Native

This repository contains "FirstMobile," a movie application developed using React Native. This project was created as part of the Mobile Development Training Module at Digital Academy, serving as my very first mobile application built with React Native.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Step 1: Install Dependencies](#step-1-install-dependencies)
  - [Step 2: Start Metro](#step-2-start-metro)
  - [Step 3: Build and Run Your App](#step-3-build-and-run-your-app)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)
- [Troubleshooting](#troubleshooting)
  - [Android - Cleaning Gradle Cache](#android---cleaning-gradle-cache)

---

## Getting Started

> **Note**: Before you begin, ensure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide. This guide will walk you through installing Node, Watchman, React Native CLI, JDK, Android Studio, Xcode, and CocoaPods.

### Prerequisites

- Node.js (>=22)
- Yarn or npm
- React Native development environment configured (Android Studio, Xcode.)
- Repository cloned.

```sh
  git clone git@github.com:MiguelAngelGonzalesMelgar/digital-academy-my-first-mobile-pj.git
```

### Step 1: Install Dependencies

Navigate to the root of the project and install the necessary JavaScript dependencies:

```sh
  cd digital-academy-my-first-mobile-pj.git

  # Using npm
  npm install

  # OR using Yarn
  yarninstall
```

### Step 2: Start Metro

First, you will need to run Metro, the JavaScript build tool for React Native. Metro bundles all your JavaScript code into a single file and serves it to your app.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
  # Using npm
  npm start

  # OR using Yarn
  yarn start
```

### Step 3: Build and Run Your App

### Android

```sh
  # Using npm
  npm run android

  # OR using Yarn
  yarn android
```

### IOS

For iOS, remember to install CocoaPods dependencies. This only needs to be run on the first clone or after updating native dependencies.

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
  cd ios
  bundle install
```

Then, and every time you update your native dependencies (e.g., after npm install or yarn install if new native modules are added), run:

```sh
  bundle exec pod install
```

For more information on CocoaPods, please visit the [CocoaPods Getting Started guide.](https://guides.cocoapods.org/using/getting-started.html)

Now, you can run your iOS app:

```sh
  # Using npm
  npm run ios

  # OR using Yarn
  yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

You can also build your app directly from Android Studio or Xcode if you prefer.

### Available Scripts

In the project directory, you can run the following scripts:

- `npm start` or `yarn start`: Starts the Metro development server.

- `` npm run android` or  ``yarn android```: Runs the app on a connected Android device or emulator.

\*`npm run ios` or `yarn ios`: Runs the app on an iOS simulator or connected iOS device.

- `npm run reset` or `yarn reset`: Starts the Metro server and resets its cache. Useful for resolving caching issues.

### Dependencies

This project utilizes a variety of libraries to enhance its functionality and user interface.

**Core Dependencies**

\*`react`: The core JavaScript library for building user interfaces.

\*`react-native`: The framework for building native mobile apps using React.

### Troubleshooting

**Android - Cleaning Gradle Cache**
Occasionally, after adding new native dependencies, updating libraries, or encountering unexpected build errors on Android, you might need to clean the Gradle cache.
This can resolve issues related to outdated or corrupted build artifacts.

To clean your Android project's Gradle cache, navigate to the android directory within your project and run the following command:

```sh
  cd android
  ./gradlew clean
  cd ..
```

After cleaning, try building and running your Android app again:

```sh
  # Using npm
  npm run android

  # OR using Yarn
  yarn android
```

If issues persist, consider rebuilding the project from Android Studio.

_It is recommended to delete the app from your device or emulator everytime you clean the cache or clean gradle._

This app is getting all Movies info thanks to TMDB API.

For more detail visit [TMDB-docs](https://developer.themoviedb.org/docs/getting-started).

**Remember to add your .env variables**, check the .env.example

Please feel free to contribute to this project.


# Releases

If you would like to test or debug the app I've published a release with the .aab file and also included the apk.

[click here: v.0.0.1](https://github.com/MiguelAngelGonzalesMelgar/digital-academy-my-first-mobile-pj/releases/tag/v.0.0.1)
