import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { styles } from './styles';
interface Props extends TextInputProps {}

export function Input({...rest}: Props) {
    return (
        <TextInput {...rest} style={styles.container}/>
    )
}