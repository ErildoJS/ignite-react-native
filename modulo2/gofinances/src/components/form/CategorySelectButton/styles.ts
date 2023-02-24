import {StyleSheet} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import theme from '../../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: `${theme.colors.shape}`,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        borderRadius: 5,
        paddingVertical: 18,
        paddingHorizontal: 16,

    },
    category: {
        fontFamily: `${theme.fonts.regular}`,
        fontSize: RFValue(14),
    }
})