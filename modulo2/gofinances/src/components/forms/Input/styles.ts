import {StyleSheet} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import theme from '../../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 18,
        paddingVertical: 16,
        fontSize: RFValue(14),
        fontFamily: `${theme.fonts.regular}`,
        backgroundColor: `${theme.colors.shape}`,
        color: `${theme.colors.text_dark}`,
        borderRadius: 5,
        marginBottom: 8,
    }
})