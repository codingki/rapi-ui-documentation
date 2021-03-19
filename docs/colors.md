---
id: colors
title: Colors
sidebar_label: Colors
---

You can use the theme colors
![colors](./assets/colors.png)

:::note

`primary`, `success`, `info`, `warning`, `danger` have a custom value from `100` to `900`

`white` have a custom value `100` and `200`

`gray` and `black` have a custom value from `100` to `500`

:::

## Usage

```jsx
import { theme } from 'react-native-rapi-ui';

<View style={{ backgroundColor: theme.primary }} />;
<View style={{ backgroundColor: theme.primary300 }} />;
```
