/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** The exchange rate that determines the amount to convert from one currency to another currency. */
export interface ExchangeRate {
  /** The [three-character ISO-4217 currency code](/api/rest/reference/currency-codes/) that identifies the currency. */
  sourceCurrency?: string;
  /** The [three-character ISO-4217 currency code](/api/rest/reference/currency-codes/) that identifies the currency. */
  targetCurrency?: string;
  /** The target currency amount. Equivalent to one unit of the source currency. Formatted as integer or decimal value with one to 15 digits to the right of the decimal point. */
  value?: string;
}

export const exchangeRateSchema: Schema<ExchangeRate> = object({
  sourceCurrency: ['source_currency', optional(string())],
  targetCurrency: ['target_currency', optional(string())],
  value: ['value', optional(string())],
});