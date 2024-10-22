/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for VenmoPaymentTokenUsageType
 */
export enum VenmoPaymentTokenUsageType {
  Merchant = 'MERCHANT',
  Platform = 'PLATFORM',
}

/**
 * Schema for VenmoPaymentTokenUsageType
 */
export const venmoPaymentTokenUsageTypeSchema: Schema<VenmoPaymentTokenUsageType> = stringEnum(
  VenmoPaymentTokenUsageType,
  true
);
