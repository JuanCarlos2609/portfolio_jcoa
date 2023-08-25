import { useTranslation as useTranslationI18n } from 'react-i18next';

export const useTranslation = () => {
  const { t, i18n } = useTranslationI18n();

  const translationHandler = (message: string): string => t(message);

  const language = i18n.language.split('-')[0];

  return {
    t: translationHandler,
    changeLanguage: i18n.changeLanguage,
    language: ['en', 'es'].includes(language) ? language : 'es',
  };
};
