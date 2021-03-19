---
id: layout
title: Layout
sidebar_label: Layout
---

Layout should be used as a root component of the screen, Layout is use for the container of the screen.

## Usage

```jsx
import { Layout } from 'react-native-rapi-ui';

export default function () {
	return <Layout>Your content here</Layout>;
}
```

## Properties

|                                           props                                            | required |         value          | Default Value                      |
| :----------------------------------------------------------------------------------------: | :------: | :--------------------: | ---------------------------------- |
| **[SafeAreaViewProps](https://github.com/th3rdwave/react-native-safe-area-context#props)** |          | Accepts all View props | Has a default style of `{flex: 1}` |
|                                    **backgroundColor**                                     |    No    | `string` `colorValue`  | `#f7f7f7`                          |
