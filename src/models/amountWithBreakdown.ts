/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { AmountBreakdown, amountBreakdownSchema } from './amountBreakdown';

/** The total order amount with an optional breakdown that provides details, such as the total item amount, total tax amount, shipping, handling, insurance, and discounts, if any.<br/>If you specify `amount.breakdown`, the amount equals `item_total` plus `tax_total` plus `shipping` plus `handling` plus `insurance` minus `shipping_discount` minus discount.<br/>The amount must be a positive number. For listed of supported currencies and decimal precision, see the PayPal REST APIs <a href="/docs/integration/direct/rest/currency-codes/">Currency Codes</a>. */
export interface AmountWithBreakdown {
  /** The [three-character ISO-4217 currency code](/api/rest/reference/currency-codes/) that identifies the currency. */
  currencyCode: string;
  /** The value, which might be:<ul><li>An integer for currencies like `JPY` that are not typically fractional.</li><li>A decimal fraction for currencies like `TND` that are subdivided into thousandths.</li></ul>For the required number of decimal places for a currency code, see [Currency Codes](/api/rest/reference/currency-codes/). */
  value: string;
  /** The breakdown of the amount. Breakdown provides details such as total item amount, total tax amount, shipping, handling, insurance, and discounts, if any. */
  breakdown?: AmountBreakdown;
}

export const amountWithBreakdownSchema: Schema<AmountWithBreakdown> = object({
  currencyCode: ['currency_code', string()],
  value: ['value', string()],
  breakdown: ['breakdown', optional(lazy(() => amountBreakdownSchema))],
});