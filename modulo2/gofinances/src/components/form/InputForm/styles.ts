import {StyleSheet} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import theme from '../../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    error: {
        fontFamily: theme.fonts.regular,
        fontSize: RFValue(14),
        color: theme.colors.attention,
        marginVertical: 7,
        marginHorizontal: 0,
    }
})