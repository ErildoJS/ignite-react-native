import React from "react";
import { Control, Controller } from "react-hook-form";
import { TextInput, TextInputProps, View } from "react-native";
import { Input } from "../Input";
import { styles } from './styles';
interface Props extends TextInputProps {
    control: Control;
    name: string;
}

export function InputForm({control, name, ...rest}: Props) {
    return (
        <View {...rest} style={styles.container}>
            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <Input {...rest} onChangeText={onChange} value={value}/>
                )}
                name={name}
            />
        </View>
    )
}