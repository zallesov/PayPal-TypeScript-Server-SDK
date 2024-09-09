/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { CardBrand, cardBrandSchema } from './cardBrand';
import {
  CardVerificationProcessorResponse,
  cardVerificationProcessorResponseSchema,
} from './cardVerificationProcessorResponse';
import { Money, moneySchema } from './money';

/** Card Verification details including the authorization details and 3D SECURE details. */
export interface CardVerificationDetails {
  /** Transaction Identifier as given by the network to indicate a previously executed CIT authorization. Only present when authorization is successful for a verification. */
  networkTransactionId?: string;
  /** The date that the transaction was authorized by the scheme. This field may not be returned for all networks. MasterCard refers to this field as "BankNet reference date". */
  date?: string;
  /** The card network or brand. Applies to credit, debit, gift, and payment cards. */
  network?: CardBrand;
  /** The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote> */
  time?: string;
  /** The currency and amount for a financial transaction, such as a balance or payment due. */
  amount?: Money;
  /** The processor response information for payment requests, such as direct credit card transactions. */
  processorResponse?: CardVerificationProcessorResponse;
}

export const cardVerificationDetailsSchema: Schema<CardVerificationDetails> = object(
  {
    networkTransactionId: ['network_transaction_id', optional(string())],
    date: ['date', optional(string())],
    network: ['network', optional(cardBrandSchema)],
    time: ['time', optional(string())],
    amount: ['amount', optional(lazy(() => moneySchema))],
    processorResponse: [
      'processor_response',
      optional(lazy(() => cardVerificationProcessorResponseSchema)),
    ],
  }
);