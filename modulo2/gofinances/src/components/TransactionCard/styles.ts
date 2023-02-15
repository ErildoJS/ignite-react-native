import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
  Container: {
    backgroundColor: `${theme.colors.shape}`,
    width: `${RFValue(300)}`,
    borderRadius: 5,
    padding: 19 23,
    paddingBottom: `${RFValue(42)}`,
    marginRight: 16,
  }
});
