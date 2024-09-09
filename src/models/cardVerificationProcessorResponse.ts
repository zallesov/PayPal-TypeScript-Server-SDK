/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import { AVSCode, aVSCodeSchema } from './aVSCode';
import { CVVCode, cVVCodeSchema } from './cVVCode';

/** The processor response information for payment requests, such as direct credit card transactions. */
export interface CardVerificationProcessorResponse {
  /** The address verification code for Visa, Discover, Mastercard, or American Express transactions. */
  avsCode?: AVSCode;
  /** The card verification value code for for Visa, Discover, Mastercard, or American Express. */
  cvvCode?: CVVCode;
}

export const cardVerificationProcessorResponseSchema: Schema<CardVerificationProcessorResponse> = object(
  {
    avsCode: ['avs_code', optional(aVSCodeSchema)],
    cvvCode: ['cvv_code', optional(cVVCodeSchema)],
  }
);