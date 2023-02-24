import {StyleSheet} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import theme from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: `${theme.colors.background}`,
        
    },
    header: {
        width: '100%',
        height: RFValue(113),
        backgroundColor: `${theme.colors.primary}`,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 19,

    },
    title: {
        fontFamily: `${theme.fonts.regular}`,
        color: `${theme.colors.shape}`,
        fontSize: RFValue(18),
    },
    category: {
        width: '100%',
        padding: RFValue(15),

        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontFamily: `${theme.fonts.regular}`,
        fontSize: RFValue(14),
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: `${theme.colors.text}`,
    },
    footer: {
        width: '100%',
        padding: 24,
    },
})