import React from "react";
import { Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from './styles';

interface Props extends RectButtonProps {
    title: string;
    onPress: () => void;
}

export function Button({title, onPress, ...rest}: Props) {
    return (
        <RectButton onPress={onPress} {...rest} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </RectButton>
    )
}