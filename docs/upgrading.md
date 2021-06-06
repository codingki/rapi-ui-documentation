---
id: upgrading02
title: Upgrading from 0.1.x to 0.2.x
sidebar_label: Upgrading from 0.1.x to 0.2.x
---

### Basic upgrade

1. Remove useCachedResource from root
2. Wrap your root component with `<ThemeProvider />`

from this

```jsx
import { useCachedResources } from "react-native-rapi-ui";

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

to this

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

### Preload and caching assets

put your images and font into the `<ThemeProvider />` props

from this

```jsx
const isLoadingComplete = useCachedResources(
    [
        require('./assets/logo'),
        require('./assets/headerImage')
    ],
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

```

to this

```jsx
const images = [require("./assets/logo"), require("./assets/headerImage")];
const fonts = {
  otherFont1: require("../fonts/otherFont1.ttf"),
  otherFont2: require("../fonts/otherFont2.ttf"),
  otherFont3: require("../fonts/otherFont3.ttf"),
};

<ThemeProvider theme="light" images={images} fonts={fonts}>
  <Navigator />
</ThemeProvider>;
```
