/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { DisbursementMode, disbursementModeSchema } from './disbursementMode';
import { PlatformFee, platformFeeSchema } from './platformFee';

/** Any additional payment instructions to be consider during payment processing. This processing instruction is applicable for Capturing an order or Authorizing an Order. */
export interface PaymentInstruction {
  /** An array of various fees, commissions, tips, or donations. This field is only applicable to merchants that been enabled for PayPal Complete Payments Platform for Marketplaces and Platforms capability. */
  platformFees?: PlatformFee[];
  /** The funds that are held on behalf of the merchant. */
  disbursementMode?: DisbursementMode;
  /** This field is only enabled for selected merchants/partners to use and provides the ability to trigger a specific pricing rate/plan for a payment transaction. The list of eligible 'payee_pricing_tier_id' would be provided to you by your Account Manager. Specifying values other than the one provided to you by your account manager would result in an error. */
  payeePricingTierId?: string;
  /** FX identifier generated returned by PayPal to be used for payment processing in order to honor FX rate (for eligible integrations) to be used when amount is settled/received into the payee account. */
  payeeReceivableFxRateId?: string;
}

export const paymentInstructionSchema: Schema<PaymentInstruction> = object({
  platformFees: [
    'platform_fees',
    optional(array(lazy(() => platformFeeSchema))),
  ],
  disbursementMode: ['disbursement_mode', optional(disbursementModeSchema)],
  payeePricingTierId: ['payee_pricing_tier_id', optional(string())],
  payeeReceivableFxRateId: ['payee_receivable_fx_rate_id', optional(string())],
});