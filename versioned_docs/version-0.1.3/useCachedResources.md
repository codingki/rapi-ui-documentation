---
id: useCachedResources
title: useCachedResources
sidebar_label: useCachedResources
---

Assets are cached differently depending on where they're stored and how they're used. This guide offers best practices for making sure you only download assets when you need to. In order to keep the loading screen visible while caching assets, it's also a good idea to render `AppLoading` and only that component until everything is ready.

## Usage

### Basic Usage

This function will preload the Ubuntu Fonts and `@expo/vector-icons` put this in your App.js or your root component, and will return a `boolean` to tell you if your assets are ready or not.

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

### Caching Images and fonts

You can preload your images and any other fonts too, this function have 2 arguments `useCachedResources(images, fonts)`

|    args    |      value       |
| :--------: | :--------------: |
| **images** | [image,image...] |
| **fonts**  | {font, font...}  |

```jsx
import { useCachedResources } from 'react-native-rapi-ui';

const App = () => {
	const isLoadingComplete = useCachedResources(
		//images
		[require('./assets/logo'), require('./assets/headerImage')],

		//fonts
		{
			otherFont1: require('../fonts/otherFont1.ttf'),
			otherFont2: require('../fonts/otherFont2.ttf'),
			otherFont3: require('../fonts/otherFont3.ttf'),
		}
	);
	if (!isLoadingComplete) {
		return <Loading />;
	} else {
		return <HomeScreen />;
	}
};

export default App;
```
