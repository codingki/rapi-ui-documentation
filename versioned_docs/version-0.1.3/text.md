---
id: text
title: Text
sidebar_label: Text
---

Basic text writing.
This Text component use [Ubuntu font](https://fonts.google.com/specimen/Ubuntu?preview.text_type=custom)

![typorgraphy](./assets/typography.png)

## Usage

### Simple Usage

```jsx
import { Text } from 'react-native-rapi-ui';

<Text>Hello World</Text>;
```

### Text Size

![textSize](./assets/textSize.png)

```jsx
import { Text } from 'react-native-rapi-ui';

<Text size="h1">Hello World</Text>;
<Text size="h2">Hello World</Text>;
<Text size="h3">Hello World</Text>;
<Text size="xl">Hello World</Text>;
<Text size="lg">Hello World</Text>;
<Text size="md">Hello World</Text>;
<Text size="sm">Hello World</Text>;
```

| Size | value |
| :--: | :---: |
| `h1` |  36   |
| `h2` |  30   |
| `h3` |  24   |
| `xl` |  20   |
| `lg` |  16   |
| `md` |  14   |
| `sm` |  13   |

### Text Font Weight

![fontWeight](./assets/fontWeight.png)

```jsx
import { Text } from 'react-native-rapi-ui';

<Text fontWeight="bold">Hello World</Text>;
<Text fontWeight="medium">Hello World</Text>;
<Text fontWeight="regular">Hello World</Text>;
<Text fontWeight="light">Hello World</Text>;
```

## Properties

|                          props                           | required |                           value                            | Default Value |
| :------------------------------------------------------: | :------: | :--------------------------------------------------------: | ------------- |
| **[TextProps](https://reactnative.dev/docs/text#props)** |          |                                                            |               |
|                         **size**                         |    No    |             `h1` `h2` `h3` `xl` `lg` `md` `sm`             | `lg`          |
|                      **fontWeight**                      |    No    |             `light` `regular` `medium` `bold`              | `regular`     |
|                        **status**                        |    No    |       `primary` `success` `warning` `info` `danger`        | `null `       |
|                        **italic**                        |    No    |                         `boolean`                          | `false`       |
|                        **style**                         |    No    | [TextStyle](https://reactnative.dev/docs/text-style-props) |               |
