import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import {styles} from './styles'
import {Feather} from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../../global/styles/theme";


interface Props  {
    title: string;
}

export function CategorySelectButton({title}: Props) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7}>
            <Text style={styles.category}>{title}</Text>
            <Feather name="chevron-down" size={RFValue(20)} color={theme.colors.text}/>
        </TouchableOpacity>
    )
}