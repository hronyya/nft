'use client';

import { I18nextProvider } from 'react-i18next';
import initTranslations from '@/app/i18n';
import { Resource, createInstance } from 'i18next';
import { ReactNode, useState } from 'react';

interface TranslationsProviderProps {
  children: ReactNode;
  locale: string;
  namespaces: string[];
  resources?: Resource;
}

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources,
}: TranslationsProviderProps) {
  const [i18nInstance, setI18nInstance] = useState(createInstance());

  const i18n = createInstance();

  initTranslations(locale, namespaces, i18n, resources).then((result) => {
    setI18nInstance(result.i18n);
  });

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
