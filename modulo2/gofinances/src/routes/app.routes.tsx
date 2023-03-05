import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import theme from '../global/styles/theme'
import {MaterialIcons} from '@expo/vector-icons'
import { Dashboard } from '../screens/Dashboard'
import { Register } from '../screens/Register'
import { Platform } from 'react-native'

const {Navigator, Screen} = createBottomTabNavigator()

export function AppRoutes() {
    return (
        <Navigator

            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.secondary,
                tabBarInactiveTintColor: theme.colors.text,
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {paddingVertical: Platform.OS === 'ios' ? 20 : 0, height: 50}
            }}
            
        >
            <Screen name='Listagem' component={Dashboard}
                options={{tabBarIcon: (({size, color}) => (
                    <MaterialIcons name='format-list-bulleted' size={size} color={color}/>
                ))}}
            />
            <Screen name='Cadastrar' component={Register}
                options={{tabBarIcon: (({size, color}) => (
                    <MaterialIcons name='attach-money' size={size} color={color}/>
                ))}}
            />
            <Screen name='Resumo' component={Register}
                options={{tabBarIcon: (({size, color}) => (
                    <MaterialIcons name='pie-chart' size={size} color={color}/>
                ))}}
            />
        </Navigator>
    )
}