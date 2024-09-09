/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CaptureIncompleteReason
 */
export enum CaptureIncompleteReason {
  BUYERCOMPLAINT = 'BUYER_COMPLAINT',
  CHARGEBACK = 'CHARGEBACK',
  ECHECK = 'ECHECK',
  INTERNATIONALWITHDRAWAL = 'INTERNATIONAL_WITHDRAWAL',
  OTHER = 'OTHER',
  PENDINGREVIEW = 'PENDING_REVIEW',
  RECEIVINGPREFERENCEMANDATESMANUALACTION = 'RECEIVING_PREFERENCE_MANDATES_MANUAL_ACTION',
  REFUNDED = 'REFUNDED',
  TRANSACTIONAPPROVEDAWAITINGFUNDING = 'TRANSACTION_APPROVED_AWAITING_FUNDING',
  UNILATERAL = 'UNILATERAL',
  VERIFICATIONREQUIRED = 'VERIFICATION_REQUIRED',
  DECLINEDBYRISKFRAUDFILTERS = 'DECLINED_BY_RISK_FRAUD_FILTERS',
}

/**
 * Schema for CaptureIncompleteReason
 */
export const captureIncompleteReasonSchema: Schema<CaptureIncompleteReason> = stringEnum(
  CaptureIncompleteReason,
  true
);