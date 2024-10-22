/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { dict, lazy, object, optional, Schema, unknown } from '../schema';
import {
  ApplePayPaymentToken,
  applePayPaymentTokenSchema,
} from './applePayPaymentToken';
import { CardPaymentToken, cardPaymentTokenSchema } from './cardPaymentToken';
import {
  PaypalPaymentToken,
  paypalPaymentTokenSchema,
} from './paypalPaymentToken';
import {
  VenmoPaymentToken,
  venmoPaymentTokenSchema,
} from './venmoPaymentToken';

/** The vaulted payment method details. */
export interface PaymentTokenResponsePaymentSource {
  /** Full representation of a Card Payment Token including network token. */
  card?: CardPaymentToken;
  paypal?: PaypalPaymentToken;
  venmo?: VenmoPaymentToken;
  /** A resource representing a response for Apple Pay. */
  applePay?: ApplePayPaymentToken;
  /** Full representation of a Bank Payment Token. */
  bank?: Record<string, unknown>;
}

export const paymentTokenResponsePaymentSourceSchema: Schema<PaymentTokenResponsePaymentSource> = object(
  {
    card: ['card', optional(lazy(() => cardPaymentTokenSchema))],
    paypal: ['paypal', optional(lazy(() => paypalPaymentTokenSchema))],
    venmo: ['venmo', optional(lazy(() => venmoPaymentTokenSchema))],
    applePay: ['apple_pay', optional(lazy(() => applePayPaymentTokenSchema))],
    bank: ['bank', optional(dict(unknown()))],
  }
);
