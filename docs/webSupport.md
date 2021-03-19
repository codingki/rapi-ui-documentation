---
id: web-support
title: Web Support
sidebar_label: Web Support
---

:::caution

These components are designed for mobile devices, you can use it on web but not the best design yet.

:::

If you want to use this library on the web you should wrap your app with `<SafeAreaProvider/>` from `react-native-safe-area-context` on the root component of the application.

```jsx
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { YourApp } from './src/App';
export default function App() {
	return (
		<SafeAreaProvider>
			<YourApp />
		</SafeAreaProvider>
	);
}
```
