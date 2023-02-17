import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';

interface prop {
  type: 'positive' | 'negative'
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: `${theme.colors.shape}`,

    borderRadius: 5,
    paddingVertical: 17,
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  title: {
    fontFamily: `${theme.fonts.regular}`,
    fontSize: RFValue(14),
  },
  amount: {
    fontFamily: `${theme.fonts.regular}`,
    fontSize: RFValue(20),
    marginTop: 2
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 19,
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryName: {
    fontSize: RFValue(14),
    color: `${theme.colors.text}`,
    marginLeft: 17
  },
  date: {
    fontSize: RFValue(14),
    color: `${theme.colors.text}`,
  }
});
