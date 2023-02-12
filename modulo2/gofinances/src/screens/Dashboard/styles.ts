import {StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: `${theme.colors.background}`,
  },
  header: {
    width: '100%',
    height: RFPercentage(42),
    backgroundColor: `${theme.colors.primary}`,
  },
  userWrapper: {
    width: '100%',
    paddingHorizontal: 24,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  photo: {
    width: RFValue(48),
    height: RFValue(48),
    borderRadius: 10,
  },
  user: {
    marginLeft: 17,
  },
  userGreeting: {
    color: `${theme.colors.shape}`,
    fontSize: RFValue(18),
    fontFamily: `${theme.fonts.regular}`,
  },
  userName: {
    color: `${theme.colors.shape}`,
    fontSize: RFValue(18),
    fontFamily: `${theme.fonts.bold}`,
  },
});

//densidade de pixel - e um numero total de pixel que existe dentro de uma area da tela
//independencia de pixel - renderizar os elementos de uma forma independente das caracteristicas exactas
//da densidade de saida
