---
id: darkmode
title: Dark mode
sidebar_label: Dark mode
---

## Default Theme

Once you set `ThemeProvider` the default theme is a `light` theme, you can set your default theme on your `ThemeProvider`

```jsx
import { ThemeProvider } from "react-native-rapi-ui";

const App = () => {
  return (
    <ThemeProvider theme="dark">
      <Navigator />
    </ThemeProvider>
  );
};

export default App;
```

## Control theme

You can change your theme using `useTheme()`

```jsx
import { useTheme } from "react-native-rapi-ui";

const HomeScreen = () => {
  const { setTheme } = useTheme();
  return <Button onClick={() => setTheme("dark")}>change to dark mode</Button>;
};

export default HomeScreen;
```

## Check current theme

You can check your theme using these two ways, using `theme` and `isDarkmode`

```jsx
import { useTheme } from "react-native-rapi-ui";

const HomeScreen = () => {
  const { theme, isDarkmode } = useTheme();
  console.log(theme); // print out 'light' or 'dark'
  console.log(isDarkmode); // print out a boolean value checking is the current theme is 'dark' or not
};
```

- `theme` return a string value between `light` or `dark`
- `isDarkmode` return a boolean value
