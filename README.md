react-native-paper-icon
=======================

**A React Native Paper Icon with size inferred from style**

The `Icon` component displays a [Material
Community](https://materialdesignicons.com/) icon and:

* uses the minimum between its width and height as the icon size;

* has `flexGrow: 1` and `alignSelf: 'stretch'` by default.

This avoids the need for explicitly defining an icon size, and is particularly
convenient when the parent component already has the desired dimensions.


Peer dependencies
-----------------

``` json
{
    "react": "^17.0.1",
    "react-native": ">=0.64.3",
    "react-native-paper": "^4.11.1"
}
```


Install
-------

With npm:

```
npm install @hashiprobr/react-native-paper-icon
```

With yarn:

```
yarn add @hashiprobr/react-native-paper-icon
```

If using Expo, add the module to `webpack.config.js`:

``` js
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync({
        ...env,
        babel: {
            dangerouslyAddModulePathsToTranspile: [
                '@hashiprobr/react-native-paper-icon',
            ],
        },
    }, argv);
    return config;
};
```

If `webpack.config.js` does not exist, create it with:

```
expo customize:web
```


Props
-----

| name  | description |
|-------|-------------|
| name  | name of the icon ([supported names](https://callstack.github.io/react-native-paper/icons.html)) |
| color | color of the icon |

[...Text props](https://reactnative.dev/docs/text#props)


Example
-------

``` js
import React from 'react';

import { View } from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';

import Icon from '@hashiprobr/react-native-paper-icon';

export default function Main() {
    return (
        <PaperProvider>
            <View style={{ flexGrow: 1, padding: 10 }}>
                <Icon name="camera" />
            </View>
        </PaperProvider>
    );
}
```
