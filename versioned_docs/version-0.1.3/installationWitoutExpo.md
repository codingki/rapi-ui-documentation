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

4. **Pre-loading and Caching Assets**

   You should load the Icons and Fonts first before, this library uses `@expo/vector-icons` Ionicons and "Ubuntu" google font.

   This library have the custom hooks for pre-load and caching assets you can use `useCachedResources()` put this in your App.js or your root component

   ```jsx
   import { useCachedResources } from 'react-native-rapi-ui';

   const App = () => {
   	const isLoadingComplete = useCachedResources();
   	if (!isLoadingComplete) {
   		return <Loading />;
   	} else {
   		return <HomeScreen />;
   	}
   };

   export default App;
   ```
