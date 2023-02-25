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

    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  userWrapper: {
    width: '100%',
    paddingVertical: 0,
    paddingHorizontal: 24,
    marginTop: RFValue(40),//era 28
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  logoutButton: {
    
  },
  highLightCards: {
    width: '100%',
    position: 'absolute',
    marginTop: RFPercentage(20),
  },
  transactions: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: RFPercentage(12),
  },
  title: {
    fontSize: RFValue(18),
    fontFamily: `${theme.fonts.regular}`,
    marginBottom: 16,
  },
  transactionsList: {
    
  }
});

//densidade de pixel - e um numero total de pixel que existe dentro de uma area da tela
//independencia de pixel - renderizar os elementos de uma forma independente das caracteristicas exactas
//da densidade de saida
