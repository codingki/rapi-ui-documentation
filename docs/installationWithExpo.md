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

3. **Import the ThemeProvider**

   In version 0.2 all you need to do is use the ThemeProvider to wrap your application to control the theme, because Rapi UI now have dark mode!

   ```jsx
   import { ThemeProvider, useTheme } from 'react-native-rapi-ui';

   const App = () => {
   	const { setTheme } = useTheme();
   	return (
   		<ThemeProvider theme="light" setTheme={setTheme}>
   			<Navigator />
   		</ThemeProvider>
   	);
   };

   export default App;
   ```
