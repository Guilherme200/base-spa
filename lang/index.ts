import en from '../lang/en'
import pt_br from '../lang/pt_br'

export const I18N = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English'
    },
    {
      code: 'pt_br',
      iso: 'pt-BR',
      name: 'Português'
    },
  ],
  defaultLocale: 'pt_br',
  vueI18n: {
    fallbackLocale: 'en',
    messages: {en, pt_br}
  }
}
