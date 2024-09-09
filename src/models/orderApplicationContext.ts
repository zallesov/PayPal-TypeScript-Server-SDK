/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import {
  OrderApplicationContextLandingPage,
  orderApplicationContextLandingPageSchema,
} from './orderApplicationContextLandingPage';
import {
  OrderApplicationContextShippingPreference,
  orderApplicationContextShippingPreferenceSchema,
} from './orderApplicationContextShippingPreference';
import {
  OrderApplicationContextUserAction,
  orderApplicationContextUserActionSchema,
} from './orderApplicationContextUserAction';
import {
  PaymentMethodPreference,
  paymentMethodPreferenceSchema,
} from './paymentMethodPreference';
import {
  StoredPaymentSource,
  storedPaymentSourceSchema,
} from './storedPaymentSource';

/** Customizes the payer experience during the approval process for the payment with PayPal.<blockquote><strong>Note:</strong> Partners and Marketplaces might configure <code>brand_name</code> and <code>shipping_preference</code> during partner account setup, which overrides the request values.</blockquote> */
export interface OrderApplicationContext {
  /** DEPRECATED. The label that overrides the business name in the PayPal account on the PayPal site. The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.brand_name`). Please specify this field in the `experience_context` object instead of the `application_context` object. */
  brandName?: string;
  /** The [language tag](https://tools.ietf.org/html/bcp47#section-2) for the language in which to localize the error-related strings, such as messages, issues, and suggested actions. The tag is made up of the [ISO 639-2 language code](https://www.loc.gov/standards/iso639-2/php/code_list.php), the optional [ISO-15924 script tag](https://www.unicode.org/iso15924/codelists.html), and the [ISO-3166 alpha-2 country code](/api/rest/reference/country-codes/) or [M49 region code](https://unstats.un.org/unsd/methodology/m49/). */
  locale?: string;
  /** DEPRECATED. DEPRECATED. The type of landing page to show on the PayPal site for customer checkout.  The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.landing_page`). Please specify this field in the `experience_context` object instead of the `application_context` object. */
  landingPage?: OrderApplicationContextLandingPage;
  /** DEPRECATED. DEPRECATED. The shipping preference:<ul><li>Displays the shipping address to the customer.</li><li>Enables the customer to choose an address on the PayPal site.</li><li>Restricts the customer from changing the address during the payment-approval process.</li></ul>.  The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.shipping_preference`). Please specify this field in the `experience_context` object instead of the `application_context` object. */
  shippingPreference?: OrderApplicationContextShippingPreference;
  /** DEPRECATED. Configures a <strong>Continue</strong> or <strong>Pay Now</strong> checkout flow.  The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.user_action`). Please specify this field in the `experience_context` object instead of the `application_context` object. */
  userAction?: OrderApplicationContextUserAction;
  /** The customer and merchant payment preferences. */
  paymentMethod?: PaymentMethodPreference;
  /** DEPRECATED. The URL where the customer is redirected after the customer approves the payment. The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.return_url`). Please specify this field in the `experience_context` object instead of the `application_context` object. */
  returnUrl?: string;
  /** DEPRECATED. The URL where the customer is redirected after the customer cancels the payment. The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.cancel_url`). Please specify this field in the `experience_context` object instead of the `application_context` object. */
  cancelUrl?: string;
  /** Provides additional details to process a payment using a `payment_source` that has been stored or is intended to be stored (also referred to as stored_credential or card-on-file).<br/>Parameter compatibility:<br/><ul><li>`payment_type=ONE_TIME` is compatible only with `payment_initiator=CUSTOMER`.</li><li>`usage=FIRST` is compatible only with `payment_initiator=CUSTOMER`.</li><li>`previous_transaction_reference` or `previous_network_transaction_reference` is compatible only with `payment_initiator=MERCHANT`.</li><li>Only one of the parameters - `previous_transaction_reference` and `previous_network_transaction_reference` - can be present in the request.</li></ul> */
  storedPaymentSource?: StoredPaymentSource;
}

export const orderApplicationContextSchema: Schema<OrderApplicationContext> = object(
  {
    brandName: ['brand_name', optional(string())],
    locale: ['locale', optional(string())],
    landingPage: [
      'landing_page',
      optional(orderApplicationContextLandingPageSchema),
    ],
    shippingPreference: [
      'shipping_preference',
      optional(orderApplicationContextShippingPreferenceSchema),
    ],
    userAction: [
      'user_action',
      optional(orderApplicationContextUserActionSchema),
    ],
    paymentMethod: [
      'payment_method',
      optional(lazy(() => paymentMethodPreferenceSchema)),
    ],
    returnUrl: ['return_url', optional(string())],
    cancelUrl: ['cancel_url', optional(string())],
    storedPaymentSource: [
      'stored_payment_source',
      optional(lazy(() => storedPaymentSourceSchema)),
    ],
  }
);