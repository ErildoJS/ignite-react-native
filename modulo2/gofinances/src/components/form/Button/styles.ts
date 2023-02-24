import {StyleSheet} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import theme from '../../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: `${theme.colors.secondary}`,

        padding: 18,
        borderRadius: 5,
        alignItems: 'center',

    },
    title: {
        fontFamily: `${theme.fonts.medium}`,
        fontSize: RFValue(14),
        color: `${theme.colors.shape}`
    }
})