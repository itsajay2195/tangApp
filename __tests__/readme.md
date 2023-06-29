# My TangApp React-Native Assignment


## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [react-navigation](https://reactnavigation.org/) navigation library.
- [jest](https://facebook.github.io/jest/) and [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) for testing.

## Installation
1. Clone the repository:
 git clone https://github.com/itsajay2195/tangApp.git

2. Navigate to the project directory:
 cd <folder>

3. Install dependencies:
  npm install 

## Running the App

1. For iOS:
   npx react-native run-ios

2. For Android:
  npx react-native run-android






## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `assets`: Asset folder to store all images, etc
  - `components`: Folder to store any common component that can be used throughout the app (such as a generic button)
  - `constants`: Folder to store any kind of constant that we have.
  - `context`: Folder to store and maintain the context that we have.
  - `screens`: Folder that contains all your application screens/features.
    - `Screen`: Each screen should be stored inside its folder and each Screen will comprise of a seperate component folder that will contain only the compononts that are specific to that screen and not generic.
      - `HomeScreen`--> Folder
            --> `components`->Folder
                <wil contain components sepecifc to this screen>
      - `HomeScreen.js`-->File
    - `ContactScreen`--> Folder
            --> `components`->Folder
                <wil contain components sepecifc to this screen>
      - `ContactScreen.js`-->File
  - `style`: Folder to store all the styling concerns related to the application theme.
  - `utils`: Folder to store all the helpers.
  - `navigation.js`-> which comprises of stack and acts as the root navigator.
  - `App.js`: Main component that starts your whole app.
  - `index.js`: Entry point of your application as per React-Native standards.

