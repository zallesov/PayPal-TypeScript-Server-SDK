/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { ApplePayCard, applePayCardSchema } from './applePayCard';

/** A resource representing a response for Apple Pay. */
export interface ApplePayPaymentToken {
  /** The payment card to be used to fund a payment. Can be a credit or debit card. */
  card?: ApplePayCard;
}

export const applePayPaymentTokenSchema: Schema<ApplePayPaymentToken> = object({
  card: ['card', optional(lazy(() => applePayCardSchema))],
});