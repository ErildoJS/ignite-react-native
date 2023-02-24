import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import {styles} from './styles'

interface Props extends TouchableOpacityProps {
    title: string;
}

export function Button({title, ...rest}: Props) {
    return (
        <TouchableOpacity {...rest} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}