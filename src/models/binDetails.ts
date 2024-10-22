/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';

/** Bank Identification Number (BIN) details used to fund a payment. */
export interface BinDetails {
  /** The Bank Identification Number (BIN) signifies the number that is being used to identify the granular level details (except the PII information) of the card. */
  bin?: string;
  /** The issuer of the card instrument. */
  issuingBank?: string;
  /** The [two-character ISO 3166-1 code](/api/rest/reference/country-codes/) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote> */
  binCountryCode?: string;
  /** The type of card product assigned to the BIN by the issuer. These values are defined by the issuer and may change over time. Some examples include: PREPAID_GIFT, CONSUMER, CORPORATE. */
  products?: string[];
}

export const binDetailsSchema: Schema<BinDetails> = object({
  bin: ['bin', optional(string())],
  issuingBank: ['issuing_bank', optional(string())],
  binCountryCode: ['bin_country_code', optional(string())],
  products: ['products', optional(array(string()))],
});
