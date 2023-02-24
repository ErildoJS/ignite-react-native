import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { categories } from "../../utils/Categories";
import { styles } from './styles';
import {Feather} from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize";
import { Button } from "../../components/form/Button";



interface Category  {
    key: string;
    name: string;
}

interface Props {
    category: Category;
    setCategory: (category: Category) => void;
    closeSelectCategory: () => void;
}

export function CategorySelect({category, setCategory, closeSelectCategory}: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>category</Text>
            </View>
            <FlatList 
            data={categories}
            keyExtractor={(item) => item.key}
            renderItem={({item}) => (
                <View style={styles.category}>
                    <Feather name={item.icon} style={{marginRight: 16}} size={RFValue(20)}/>
                    <Text style={styles.name}>{item.name}</Text>
                </View>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
            <View style={styles.footer}>
                <Button title="Selecionar" onPress={closeSelectCategory}/>
            </View>
        </View>
    )
}