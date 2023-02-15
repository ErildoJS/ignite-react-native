import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
  Container: {
    backgroundColor: `${theme.colors.shape}`,
    width: RFValue(300),
    borderRadius: 5,
    paddingVertical: 19,
    paddingHorizontal: 23,
    paddingBottom: RFValue(42),
    marginRight: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: `${theme.fonts.regular}`,
    fontSize: RFValue(14),
    color: `${theme.colors.text_dark}`,
  },
  footer: {},
  amount: {
    fontFamily: `${theme.fonts.medium}`,
    fontSize: RFValue(32),
    color: `${theme.colors.text_dark}`,
    marginTop: 38,
  },
  lastTransaction: {
    fontFamily: `${theme.fonts.regular}`,
    fontSize: RFValue(12),
    color: `${theme.colors.text}`,
  },
});
