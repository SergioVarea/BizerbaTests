import { DefaultLangChangeEvent, LangChangeEvent } from '@ngx-translate/core';

export interface LanguageProps {
  languageCombo: string;
  rtl: boolean;
  currency: string;
}


export interface LanguageChangeHandler {
  languageChangeHandler(event: LangChangeEvent): void;
}
