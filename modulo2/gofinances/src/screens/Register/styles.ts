import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: `${theme.colors.background}`
  },
  header: {
    backgroundColor: `${theme.colors.primary}`,
    width: '100%',
    height: RFValue(113),

    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 19,
  },
  title: {
    fontFamily: `${theme.fonts.regular}`,
    fontSize: RFValue(18),
    color: `${theme.colors.shape}`
  },
  form: {
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',

    padding: 24,
  },
  fields: {},
  transactionsTypes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 16,
  },
});

//densidade de pixel - e um numero total de pixel que existe dentro de uma area da tela
//independencia de pixel - renderizar os elementos de uma forma independente das caracteristicas exactas
//da densidade de saida
