import {  LanguageProps } from './definitions';

export const LANGUAGES: Map<string, LanguageProps> = new Map([
  ['ar', { languageCombo: 'header.arabic', rtl: true, currency: 'AED' }],
  ['zh',  { languageCombo: 'header.chineese', rtl: false, currency: 'CNY'  }],
  ['en',  { languageCombo: 'header.english', rtl: false, currency: 'USD' }],
  ['de',  { languageCombo: 'header.german', rtl: false, currency: 'EUR' }],
  ['he',  { languageCombo: 'header.hebrew', rtl: true, currency: 'ILS' }],
  ['es',  { languageCombo: 'header.spanish', rtl: false, currency: 'EUR' }],
]);



