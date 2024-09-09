/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CardBrand
 */
export enum CardBrand {
  VISA = 'VISA',
  MASTERCARD = 'MASTERCARD',
  DISCOVER = 'DISCOVER',
  AMEX = 'AMEX',
  SOLO = 'SOLO',
  JCB = 'JCB',
  STAR = 'STAR',
  DELTA = 'DELTA',
  SWITCH = 'SWITCH',
  MAESTRO = 'MAESTRO',
  CBNATIONALE = 'CB_NATIONALE',
  CONFIGOGA = 'CONFIGOGA',
  CONFIDIS = 'CONFIDIS',
  ELECTRON = 'ELECTRON',
  CETELEM = 'CETELEM',
  CHINAUNIONPAY = 'CHINA_UNION_PAY',
  DINERS = 'DINERS',
  ELO = 'ELO',
  HIPER = 'HIPER',
  HIPERCARD = 'HIPERCARD',
  RUPAY = 'RUPAY',
  GE = 'GE',
  SYNCHRONY = 'SYNCHRONY',
  EFTPOS = 'EFTPOS',
  UNKNOWN = 'UNKNOWN',
}

/**
 * Schema for CardBrand
 */
export const cardBrandSchema: Schema<CardBrand> = stringEnum(CardBrand, true);