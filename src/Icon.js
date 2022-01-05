import React, { useState } from 'react';

import OriginalIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Icon(props) {
    const [size, setSize] = useState(0);

    function onLayout({ nativeEvent }) {
        const { width, height } = nativeEvent.layout;
        setSize(Math.min(width, height));
        if (props.onLayout) {
            props.onLayout({ nativeEvent });
        }
    }

    return (
        <OriginalIcon
            {...props}
            size={size}
            style={{
                flexGrow: 1,
                alignSelf: 'stretch',
                ...props.style,
            }}
            onLayout={onLayout}
        />
    );
}
