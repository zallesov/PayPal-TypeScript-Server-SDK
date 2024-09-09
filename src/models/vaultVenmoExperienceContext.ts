/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Customizes the Vault creation flow experience for your customers. */
export interface VaultVenmoExperienceContext {
  /** The label that overrides the business name in the PayPal account on the PayPal site. The pattern is defined by an external party and supports Unicode. */
  brandName?: string;
  /** The shipping preference. This only applies to PayPal payment source. */
  shippingPreference?: string;
  /** Vault Instruction on action to be performed after a successful payer approval. */
  vaultInstruction?: string;
}

export const vaultVenmoExperienceContextSchema: Schema<VaultVenmoExperienceContext> = object(
  {
    brandName: ['brand_name', optional(string())],
    shippingPreference: ['shipping_preference', optional(string())],
    vaultInstruction: ['vault_instruction', optional(string())],
  }
);