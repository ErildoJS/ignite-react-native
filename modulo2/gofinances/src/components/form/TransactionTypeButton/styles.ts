import {StyleSheet} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import theme from '../../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: '48%',
        
        borderWidth: 1.5,
        borderStyle: 'solid',
        borderColor: `${theme.colors.text}`,
        borderRadius: 5,

        
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontFamily: `${theme.fonts.regular}`,
        fontSize: RFValue(14),
    }
})