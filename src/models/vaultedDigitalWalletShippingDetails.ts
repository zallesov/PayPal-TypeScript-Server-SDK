/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Address, addressSchema } from './address';
import { FullfillmentType, fullfillmentTypeSchema } from './fullfillmentType';
import { ShippingName, shippingNameSchema } from './shippingName';

/** The shipping details. */
export interface VaultedDigitalWalletShippingDetails {
  /** The name of the party. */
  name?: ShippingName;
  /** A classification for the method of purchase fulfillment (e.g shipping, in-store pickup, etc). Either `type` or `options` may be present, but not both. */
  type?: FullfillmentType;
  /** The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute). */
  address?: Address;
}

export const vaultedDigitalWalletShippingDetailsSchema: Schema<VaultedDigitalWalletShippingDetails> = object(
  {
    name: ['name', optional(lazy(() => shippingNameSchema))],
    type: ['type', optional(fullfillmentTypeSchema)],
    address: ['address', optional(lazy(() => addressSchema))],
  }
);