import { Feather } from '@expo/vector-icons';
import React from "react";
import { Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../../global/styles/theme";
import { styles } from './styles';


interface Props  extends RectButtonProps{
    title: string;
}

export function CategorySelectButton({title, ...rest}: Props) {
    return (
        <RectButton {...rest} style={styles.container} activeOpacity={0.7}>
            <Text style={styles.category}>{title}</Text>
            <Feather name="chevron-down" size={RFValue(20)} color={theme.colors.text}/>
        </RectButton>
    )
}