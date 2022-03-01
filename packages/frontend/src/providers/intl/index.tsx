import React from 'react';
import { IntlProvider as IntlProviderLib } from 'react-intl';
import { defaultLanguage, Language, translations } from './const';

const IntlProvider: React.FC = ({ children }) => {
  const locale = (navigator.language as Language) || defaultLanguage;
  const messages = translations[locale];

  return (
    <IntlProviderLib locale={locale} {...{ messages }} onError={() => null}>
      {children}
    </IntlProviderLib>
  );
};

export default IntlProvider;
