import enMessages from '../../content/locales/en.json';

export enum Language {
  EN = 'en',
}

export const defaultLanguage = Language.EN;

export const translations: Record<Language, Record<string, string>> = {
  [Language.EN]: enMessages,
};
