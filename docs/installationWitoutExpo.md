---
id: installation-without-expo
title: Installation without Expo
sidebar_label: Installation without Expo
---

1. **Install the required packages in your React Native project:**

   `$ npm install react-native-rapi-ui`

2. **Install react-native-unimodules**

   [Follow the instructions here](https://docs.expo.io/bare/installing-unimodules/)

3. **Install these dependencies**

   `$ npm install react-native-safe-area-context expo-font @expo/vector-icons expo-asset`

4. **Import the ThemeProvider**

   In version 0.2 all you need to do is use the ThemeProvider to wrap your application to control the theme, because Rapi UI now have dark mode!

   ```jsx
   import { ThemeProvider } from "react-native-rapi-ui";

   const App = () => {
     return (
       <ThemeProvider theme="light">
         <Navigator />
       </ThemeProvider>
     );
   };

   export default App;
   ```
