import React from "react";
import { Control, Controller, ControllerProps,  } from "react-hook-form";
import { Text, TextInputProps, View } from "react-native";
import { Input } from "../Input";
import { styles } from './styles';

interface Props extends TextInputProps {
    control: Control;
    name: string;
    error: string;
}

export function InputForm({control, name, error, ...rest}: Props) {
    return (
        <View {...rest} style={styles.container}>
            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <Input {...rest} onChangeText={onChange} value={value}/>
                )}
                name={name}
            />
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}