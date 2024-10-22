/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { Name, nameSchema } from './name';
import { Phone, phoneSchema } from './phone';

/** Address request details. */
export interface AddressDetails {
  /** The first line of the address, such as number and street, for example, `173 Drury Lane`. Needed for data entry, and Compliance and Risk checks. This field needs to pass the full address. */
  addressLine1?: string;
  /** The second line of the address, for example, a suite or apartment number. */
  addressLine2?: string;
  /** A city, town, or village. Smaller than `admin_area_level_1`. */
  adminArea2?: string;
  /** The highest-level sub-division in a country, which is usually a province, state, or ISO-3166-2 subdivision. This data is formatted for postal delivery, for example, `CA` and not `California`. Value, by country, is:<ul><li>UK. A county.</li><li>US. A state.</li><li>Canada. A province.</li><li>Japan. A prefecture.</li><li>Switzerland. A *kanton*.</li></ul> */
  adminArea1?: string;
  /** The postal code, which is the ZIP code or equivalent. Typically required for countries with a postal code or an equivalent. See [postal code](https://en.wikipedia.org/wiki/Postal_code). */
  postalCode?: string;
  /** The [2-character ISO 3166-1 code](/api/rest/reference/country-codes/) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote> */
  countryCode: string;
  /** The name of the party. */
  name?: Name;
  /** The resource ID of the address. */
  id?: string;
  /** The name of the company or business associated to the address. */
  company?: string;
  /** The phone number that can go on the mailing label with the address to track the shipping. Phone number is in E.164 format. */
  phone?: string;
  /** The phone number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). */
  phoneNumber?: Phone;
}

export const addressDetailsSchema: Schema<AddressDetails> = object({
  addressLine1: ['address_line_1', optional(string())],
  addressLine2: ['address_line_2', optional(string())],
  adminArea2: ['admin_area_2', optional(string())],
  adminArea1: ['admin_area_1', optional(string())],
  postalCode: ['postal_code', optional(string())],
  countryCode: ['country_code', string()],
  name: ['name', optional(lazy(() => nameSchema))],
  id: ['id', optional(string())],
  company: ['company', optional(string())],
  phone: ['phone', optional(string())],
  phoneNumber: ['phone_number', optional(lazy(() => phoneSchema))],
});
