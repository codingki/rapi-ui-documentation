---
id: themeProvider
title: ThemeProvider
sidebar_label: ThemeProvider
---

In version 0.2 all you need to do is use the `ThemeProvider` to wrap your application to control the theme, because Rapi UI now have dark mode!

This component will preload the Ubuntu Fonts and `@expo/vector-icons` put this in your App.js or your root component, and will return a `boolean` to tell you if your assets are ready or not.

## Usage

Note: this component already have `<SafeAreaProvider/>` wrapper

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

### Caching Images and fonts

Assets are cached differently depending on where they're stored and how they're used. This guide offers best practices for making sure you only download assets when you need to. In order to keep the loading screen visible while caching assets, it's also a good idea to render `AppLoading` and only that component until everything is ready.

```jsx
const images = [require('./assets/logo'), require('./assets/headerImage')];
const fonts = {
	otherFont1: require('../fonts/otherFont1.ttf'),
	otherFont2: require('../fonts/otherFont2.ttf'),
	otherFont3: require('../fonts/otherFont3.ttf'),
};

<ThemeProvider theme="light" setTheme={setTheme} images={images} fonts={fonts}>
	<Navigator />
</ThemeProvider>;
```

### Properties

## Properties

|                          props                           | required |      value       | Default Value |
| :------------------------------------------------------: | :------: | :--------------: | ------------- |
| **[ViewProps](https://reactnative.dev/docs/view#props)** |          |                  |               |
|                        **theme**                         |    No    | `light`/ `dark`  | `light`       |
|                       **setTheme**                       |   Yes    |    `setTheme`    |               |
|                        **images**                        |    No    | [image,image...] |               |
|                        **fonts**                         |    No    | {font, font...}  |               |
