---
id: buttons
title: Buttons
sidebar_label: Buttons
---

Buttons allow users to take actions, and make choices, with a single tap.
Button is basicly a Touchable component I customized

![buttons](./assets/buttons.png)

`<Button/>` have three behaviour :

- `TouchableOpacity`
- `TouchableHighlight`
- `TouchableWithoutFeedback`

## Usage

### Simple Usage

The default behaviour of `Button` is `TouchableOpacity`

![buttonSimple](./assets/buttonSimple.png)

If the parent component of the button have `flexDirection:'column'` the button width will have follow the parent component

```jsx
import { Button } from 'react-native-rapi-ui';

<Button text="Tap me" onPress={()=> console.log('Button tapped')}>
```

### Button Color Status

![buttonStatus](./assets/buttonStatus.png)

```jsx
import { Button } from 'react-native-rapi-ui';

<Button text="Primary" status="primary" />
<Button text="Success" status="success" />
<Button text="Info" status="info" />
<Button text="Warning" status="warning" />
<Button text="Danger" status="danger" />
```

### Outline Button

![outlineButton](./assets/outlineButton.png)

```jsx
import { Button } from 'react-native-rapi-ui';

<Button text="Primary" status="primary" outline/>
<Button text="Success" status="success" outline/>
<Button text="Info" status="info" outline/>
<Button text="Warning" status="warning" outline/>
<Button text="Danger" status="danger" outline/>
```

### Button Size

![buttonSize](./assets/buttonSize.png)

```jsx
import { Button } from 'react-native-rapi-ui';

<Button text="Large lg" size="lg" />
<Button text="Medium md" size="md" />
<Button text="Small sm" size="sm" />

```

### With Left or Right Content

You can fill the left or right side of the text with components. ex:`Icons` or `Image`
![buttonContent](./assets/buttonContent.png)

```jsx
import { Button } from 'react-native-rapi-ui';
import { Ionicons } from '@expo/vector-icons';

// Left Content

<Button
    text="Continue with twitter"
    leftContent={
        <Ionicons name="logo-twitter" size={20} color={theme.white} />
    }
    status="primary"
    type="TouchableOpacity"
/>

// Right Content

<Button
    text="Continue"
    rightContent={
        <Ionicons
            name="arrow-forward"
            size={20}
            color={theme.white}
        />
    }
    status="primary"
    type="TouchableOpacity"
/>
```

## Properties

|                                              props                                               | required |                                                     value                                                     | Default Value      |
| :----------------------------------------------------------------------------------------------: | :------: | :-----------------------------------------------------------------------------------------------------------: | ------------------ |
| **[TouchableWithoutFeedbackProps](https://reactnative.dev/docs/touchablewithoutfeedback#props)** |          |                                                                                                               |                    |
|                              **type** <br/> The Touchable behaviour                              |    No    |                      `TouchableOpacity` `TouchableHighlight` `TouchableWithoutFeedback`                       | `TouchableOpacity` |
|                                             **text**                                             |    No    |                                                   `string`                                                    | `null`             |
|                         **color** <br/> The primary color of the button                          |    No    |                                                   `string`                                                    | #3366FF            |
|                     **inverseColor** <br/> The secondary color of the button                     |    No    |                                                   `string`                                                    | #FFFFFF            |
|                   **status** <br/> You can set the color button from this prop                   |    No    |                                 `primary` `success` `warning` `info` `danger`                                 |                    |
|                                           **outline**                                            |    No    |                                                   `boolean`                                                   | `false`            |
|                                         **outlineWidth**                                         |    No    |                                                   `number`                                                    | 2                  |
|                                         **leftContent**                                          |    No    |                                                 `React.Node`                                                  |                    |
|                                         **rightContent**                                         |    No    |                                                 `React.Node`                                                  |                    |
|                                             **size**                                             |    No    |                                                `lg` `md` `sm`                                                 | `lg`               |
|                                           **disabled**                                           |    No    |                                                   `boolean`                                                   | `false`            |
|                                            **width**                                             |    No    | `number` <br/>If the parent component have `flexDirection:'row'` the width of the button will follow the text |                    |
|                                          **textStyle**                                           |    No    |                          [TextStyle](https://reactnative.dev/docs/text-style-props)                           |                    |
|                                            **style**                                             |    No    |                       [ViewStyle](https://reactnative.dev/docs/view-style-props#props)                        |                    |
