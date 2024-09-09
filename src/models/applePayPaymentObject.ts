/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import {
  ApplePayAttributesResponse,
  applePayAttributesResponseSchema,
} from './applePayAttributesResponse';
import {
  ApplePayCardResponse,
  applePayCardResponseSchema,
} from './applePayCardResponse';
import { PhoneNumber, phoneNumberSchema } from './phoneNumber';

/** Information needed to pay using ApplePay. */
export interface ApplePayPaymentObject {
  /** ApplePay transaction identifier, this will be the unique identifier for this transaction provided by Apple. The pattern is defined by an external party and supports Unicode. */
  id?: string;
  /** Encrypted ApplePay token, containing card information. This token would be base64encoded. The pattern is defined by an external party and supports Unicode. */
  token?: string;
  /** The full name representation like Mr J Smith. */
  name?: string;
  /** The internationalized email address.<blockquote><strong>Note:</strong> Up to 64 characters are allowed before and 255 characters are allowed after the <code>@</code> sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted <code>@</code> sign exists.</blockquote> */
  emailAddress?: string;
  /** The phone number in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). */
  phoneNumber?: PhoneNumber;
  /** The Card from Apple Pay Wallet used to fund the payment. */
  card?: ApplePayCardResponse;
  /** Additional attributes associated with the use of Apple Pay. */
  attributes?: ApplePayAttributesResponse;
}

export const applePayPaymentObjectSchema: Schema<ApplePayPaymentObject> = object(
  {
    id: ['id', optional(string())],
    token: ['token', optional(string())],
    name: ['name', optional(string())],
    emailAddress: ['email_address', optional(string())],
    phoneNumber: ['phone_number', optional(lazy(() => phoneNumberSchema))],
    card: ['card', optional(lazy(() => applePayCardResponseSchema))],
    attributes: [
      'attributes',
      optional(lazy(() => applePayAttributesResponseSchema)),
    ],
  }
);