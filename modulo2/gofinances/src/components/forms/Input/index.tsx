import React from "react";
import { TextInputProps, View } from "react-native";
import {styles} from './styles'
interface Props extends TextInputProps {}

export function Input({...rest}: Props) {
    return (
        <View {...rest} style={styles.container}/>
    )
}