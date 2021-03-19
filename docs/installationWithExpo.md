---
id: installation-with-expo
title: Installation with Expo
sidebar_label: Installation with Expo
slug: /
---

1. **Install the required packages in your React Native project:**

   `$ npm install react-native-rapi-ui`

2. **Install these dependencies**

   `$ expo install react-native-safe-area-context expo-font @expo/vector-icons expo-asset`

   if you create a project with expo, you should have these packages on your `package.json` but just install again just to make sure.

3. **Pre-loading and Caching Assets**

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
