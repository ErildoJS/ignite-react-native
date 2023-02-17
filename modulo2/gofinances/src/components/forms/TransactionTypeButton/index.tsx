import React from "react";
import { Text, TextInputProps, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import {styles} from './styles'
import {Feather} from '@expo/vector-icons'
import theme from "../../../global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

interface Props extends TouchableOpacityProps {
    title: string;
    type: 'up' | 'down';
    isActive: boolean;
}

const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
}

export function TransactionTypeButton({title, type,  isActive,...rest}: Props) {
    return (
        <TouchableOpacity style={[styles.container, isActive && type === 'up' ? {backgroundColor: theme.colors.success, borderWidth: 0} : isActive && type === 'down' ? {backgroundColor: theme.colors.attention_light, borderWidth: 0} : {borderWidth: 1.5}]} {...rest}>
            <Feather name={icons[type]} size={RFValue(24)} style={{marginRight: 12}} color={type === 'up' ? theme.colors.success : theme.colors.attention}/>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}