import {StyleSheet} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import theme from '../../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: '48%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.5,
        borderStyle: 'solid',
        borderColor: `${theme.colors.text}`,
        borderRadius: 5,

        padding: 16,
        //paddingVertical: 16,
    },
    title: {
        fontFamily: `${theme.fonts.regular}`,
        fontSize: RFValue(14),
    }
})