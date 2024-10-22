/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  CapturedPayment,
  capturedPaymentSchema,
} from '../models/capturedPayment';
import { CaptureRequest, captureRequestSchema } from '../models/captureRequest';
import {
  PaymentAuthorization,
  paymentAuthorizationSchema,
} from '../models/paymentAuthorization';
import {
  ReauthorizeRequest,
  reauthorizeRequestSchema,
} from '../models/reauthorizeRequest';
import { Refund, refundSchema } from '../models/refund';
import { RefundRequest, refundRequestSchema } from '../models/refundRequest';
import { nullable, optional, string } from '../schema';
import { BaseController } from './baseController';
import { ApiError } from '@apimatic/core';
import { CustomError } from '../errors/customError';

export class PaymentsController extends BaseController {
  /**
   * Shows details for an authorized payment, by ID.
   *
   * @param authorizationId  The ID of the authorized payment for which to show details.
   * @return Response from the API call
   */
  async authorizationsGet(
    authorizationId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PaymentAuthorization>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      authorizationId: [authorizationId, string()],
    });
    req.appendTemplatePath`/v2/payments/authorizations/${mapped.authorizationId}`;
    req.throwOn(
      401,
      CustomError,
      'Authentication failed due to missing authorization header, or invalid authentication credentials.'
    );
    req.throwOn(
      403,
      CustomError,
      'The request failed because the caller has insufficient permissions.'
    );
    req.throwOn(
      404,
      CustomError,
      'The request failed because the resource does not exist.'
    );
    req.throwOn(
      500,
      ApiError,
      'The request failed because an internal server error occurred.'
    );
    req.defaultToError(CustomError, 'The error response.');
    req.authenticate([{ oauth2: true }]);
    return req.callAsJson(paymentAuthorizationSchema, requestOptions);
  }

  /**
   * Captures an authorized payment, by ID.
   *
   * @param authorizationId   The PayPal-generated ID for the authorized payment to capture.
   * @param paypalRequestId   The server stores keys for 45 days.
   * @param prefer            The preferred server response upon successful completion of the
   *                                                   request. Value is:<ul><li><code>return=minimal</code>. The
   *                                                   server returns a minimal response to optimize communication
   *                                                   between the API caller and the server. A minimal response
   *                                                   includes the <code>id</code>, <code>status</code> and HATEOAS
   *                                                   links.</li><li><code>return=representation</code>. The server
   *                                                   returns a complete resource representation, including the
   *                                                   current state of the resource.</li></ul>
   * @param body
   * @return Response from the API call
   */
  async authorizationsCapture(
    {
      authorizationId,
      paypalRequestId,
      prefer,
      body,
    }: {
      authorizationId: string;
      paypalRequestId?: string;
      prefer?: string;
      body?: CaptureRequest;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CapturedPayment>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      authorizationId: [authorizationId, string()],
      paypalRequestId: [paypalRequestId, optional(string())],
      prefer: [prefer, optional(string())],
      body: [body, optional(captureRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('PayPal-Request-Id', mapped.paypalRequestId);
    req.header('Prefer', mapped.prefer);
    req.json(mapped.body);
    req.appendTemplatePath`/v2/payments/authorizations/${mapped.authorizationId}/capture`;
    req.throwOn(
      400,
      CustomError,
      'The request failed because it is not well-formed or is syntactically incorrect or violates schema.'
    );
    req.throwOn(
      401,
      CustomError,
      'Authentication failed due to missing authorization header, or invalid authentication credentials.'
    );
    req.throwOn(
      403,
      CustomError,
      'The request failed because the caller has insufficient permissions.'
    );
    req.throwOn(
      404,
      CustomError,
      'The request failed because the resource does not exist.'
    );
    req.throwOn(
      409,
      CustomError,
      'The server has detected a conflict while processing this request.'
    );
    req.throwOn(
      422,
      CustomError,
      'The request failed because it is semantically incorrect or failed business validation.'
    );
    req.throwOn(
      500,
      ApiError,
      'The request failed because an internal server error occurred.'
    );
    req.defaultToError(CustomError, 'The error response.');
    req.authenticate([{ oauth2: true }]);
    return req.callAsJson(capturedPaymentSchema, requestOptions);
  }

  /**
   * Voids, or cancels, an authorized payment, by ID. You cannot void an authorized payment that has been
   * fully captured.
   *
   * @param authorizationId       The PayPal-generated ID for the authorized payment to void.
   * @param paypalAuthAssertion   An API-caller-provided JSON Web Token (JWT) assertion that identifies the
   *                                        merchant. For details, see [PayPal-Auth-Assertion](/docs/api/reference/api-
   *                                        requests/#paypal-auth-assertion).<blockquote><strong>Note:</strong>For
   *                                        three party transactions in which a partner is managing the API calls on
   *                                        behalf of a merchant, the partner must identify the merchant using either a
   *                                        PayPal-Auth-Assertion header or an access token with target_subject.
   *                                        </blockquote>
   * @param prefer                The preferred server response upon successful completion of the request.
   *                                        Value is:<ul><li><code>return=minimal</code>. The server returns a minimal
   *                                        response to optimize communication between the API caller and the server. A
   *                                        minimal response includes the <code>id</code>, <code>status</code> and
   *                                        HATEOAS links.</li><li><code>return=representation</code>. The server
   *                                        returns a complete resource representation, including the current state of
   *                                        the resource.</li></ul>
   * @return Response from the API call
   */
  async authorizationsVoid(
    {
      authorizationId,
      paypalAuthAssertion,
      prefer,
    }: {
      authorizationId: string;
      paypalAuthAssertion?: string;
      prefer?: string;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PaymentAuthorization | null>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      authorizationId: [authorizationId, string()],
      paypalAuthAssertion: [paypalAuthAssertion, optional(string())],
      prefer: [prefer, optional(string())],
    });
    req.header('PayPal-Auth-Assertion', mapped.paypalAuthAssertion);
    req.header('Prefer', mapped.prefer);
    req.appendTemplatePath`/v2/payments/authorizations/${mapped.authorizationId}/void`;
    req.throwOn(
      400,
      CustomError,
      'The request failed because it is not well-formed or is syntactically incorrect or violates schema.'
    );
    req.throwOn(
      401,
      CustomError,
      'Authentication failed due to missing authorization header, or invalid authentication credentials.'
    );
    req.throwOn(
      403,
      CustomError,
      'The request failed because the caller has insufficient permissions.'
    );
    req.throwOn(
      404,
      CustomError,
      'The request failed because the resource does not exist.'
    );
    req.throwOn(
      409,
      CustomError,
      'The request failed because a previous call for the given resource is in progress.'
    );
    req.throwOn(
      422,
      CustomError,
      'The request failed because it either is semantically incorrect or failed business validation.'
    );
    req.throwOn(
      500,
      ApiError,
      'The request failed because an internal server error occurred.'
    );
    req.defaultToError(CustomError, 'The error response.');
    req.authenticate([{ oauth2: true }]);
    return req.callAsJson(nullable(paymentAuthorizationSchema), requestOptions);
  }

  /**
   * Reauthorizes an authorized PayPal account payment, by ID. To ensure that funds are still available,
   * reauthorize a payment after its initial three-day honor period expires. Within the 29-day
   * authorization period, you can issue multiple re-authorizations after the honor period expires.
   * <br/><br/>If 30 days have transpired since the date of the original authorization, you must create
   * an authorized payment instead of reauthorizing the original authorized payment.<br/><br/>A
   * reauthorized payment itself has a new honor period of three days.<br/><br/>You can reauthorize an
   * authorized payment from 4 to 29 days after the 3-day honor period. The allowed amount depends on
   * context and geography, for example in US it is up to 115% of the original authorized amount, not to
   * exceed an increase of $75 USD.<br/><br/>Supports only the `amount` request parameter.
   * <blockquote><strong>Note:</strong> This request is currently not supported for Partner use cases.
   * </blockquote>
   *
   * @param authorizationId   The PayPal-generated ID for the authorized payment to
   *                                                       reauthorize.
   * @param paypalRequestId   The server stores keys for 45 days.
   * @param prefer            The preferred server response upon successful completion of
   *                                                       the request. Value is:<ul><li><code>return=minimal</code>.
   *                                                       The server returns a minimal response to optimize
   *                                                       communication between the API caller and the server. A
   *                                                       minimal response includes the <code>id</code>,
   *                                                       <code>status</code> and HATEOAS links.
   *                                                       </li><li><code>return=representation</code>. The server
   *                                                       returns a complete resource representation, including the
   *                                                       current state of the resource.</li></ul>
   * @param body
   * @return Response from the API call
   */
  async authorizationsReauthorize(
    {
      authorizationId,
      paypalRequestId,
      prefer,
      body,
    }: {
      authorizationId: string;
      paypalRequestId?: string;
      prefer?: string;
      body?: ReauthorizeRequest;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PaymentAuthorization>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      authorizationId: [authorizationId, string()],
      paypalRequestId: [paypalRequestId, optional(string())],
      prefer: [prefer, optional(string())],
      body: [body, optional(reauthorizeRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('PayPal-Request-Id', mapped.paypalRequestId);
    req.header('Prefer', mapped.prefer);
    req.json(mapped.body);
    req.appendTemplatePath`/v2/payments/authorizations/${mapped.authorizationId}/reauthorize`;
    req.throwOn(
      400,
      CustomError,
      'The request failed because it is not well-formed or is syntactically incorrect or violates schema.'
    );
    req.throwOn(
      401,
      CustomError,
      'Authentication failed due to missing authorization header, or invalid authentication credentials.'
    );
    req.throwOn(
      403,
      CustomError,
      'The request failed because the caller has insufficient permissions.'
    );
    req.throwOn(
      404,
      CustomError,
      'The request failed because the resource does not exist.'
    );
    req.throwOn(
      422,
      CustomError,
      'The request failed because it either is semantically incorrect or failed business validation.'
    );
    req.throwOn(
      500,
      ApiError,
      'The request failed because an internal server error occurred.'
    );
    req.defaultToError(CustomError, 'The error response.');
    req.authenticate([{ oauth2: true }]);
    return req.callAsJson(paymentAuthorizationSchema, requestOptions);
  }

  /**
   * Shows details for a captured payment, by ID.
   *
   * @param captureId  The PayPal-generated ID for the captured payment for which to show details.
   * @return Response from the API call
   */
  async capturesGet(
    captureId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CapturedPayment>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ captureId: [captureId, string()] });
    req.appendTemplatePath`/v2/payments/captures/${mapped.captureId}`;
    req.throwOn(
      401,
      CustomError,
      'Authentication failed due to missing authorization header, or invalid authentication credentials.'
    );
    req.throwOn(
      403,
      CustomError,
      'The request failed because the caller has insufficient permissions.'
    );
    req.throwOn(
      404,
      CustomError,
      'The request failed because the resource does not exist.'
    );
    req.throwOn(
      500,
      ApiError,
      'The request failed because an internal server error occurred.'
    );
    req.defaultToError(CustomError, 'The error response.');
    req.authenticate([{ oauth2: true }]);
    return req.callAsJson(capturedPaymentSchema, requestOptions);
  }

  /**
   * Refunds a captured payment, by ID. For a full refund, include an empty payload in the JSON request
   * body. For a partial refund, include an <code>amount</code> object in the JSON request body.
   *
   * @param captureId             The PayPal-generated ID for the captured payment to refund.
   * @param paypalRequestId       The server stores keys for 45 days.
   * @param prefer                The preferred server response upon successful completion of
   *                                                      the request. Value is:<ul><li><code>return=minimal</code>.
   *                                                      The server returns a minimal response to optimize
   *                                                      communication between the API caller and the server. A
   *                                                      minimal response includes the <code>id</code>,
   *                                                      <code>status</code> and HATEOAS links.
   *                                                      </li><li><code>return=representation</code>. The server
   *                                                      returns a complete resource representation, including the
   *                                                      current state of the resource.</li></ul>
   * @param paypalAuthAssertion   An API-caller-provided JSON Web Token (JWT) assertion that
   *                                                      identifies the merchant. For details, see [PayPal-Auth-
   *                                                      Assertion](/docs/api/reference/api-requests/#paypal-auth-
   *                                                      assertion).<blockquote><strong>Note:</strong>For three party
   *                                                      transactions in which a partner is managing the API calls on
   *                                                      behalf of a merchant, the partner must identify the merchant
   *                                                      using either a PayPal-Auth-Assertion header or an access
   *                                                      token with target_subject.</blockquote>
   * @param body
   * @return Response from the API call
   */
  async capturesRefund(
    {
      captureId,
      paypalRequestId,
      prefer,
      paypalAuthAssertion,
      body,
    }: {
      captureId: string;
      paypalRequestId?: string;
      prefer?: string;
      paypalAuthAssertion?: string;
      body?: RefundRequest;
    },
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Refund>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      captureId: [captureId, string()],
      paypalRequestId: [paypalRequestId, optional(string())],
      prefer: [prefer, optional(string())],
      paypalAuthAssertion: [paypalAuthAssertion, optional(string())],
      body: [body, optional(refundRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('PayPal-Request-Id', mapped.paypalRequestId);
    req.header('Prefer', mapped.prefer);
    req.header('PayPal-Auth-Assertion', mapped.paypalAuthAssertion);
    req.json(mapped.body);
    req.appendTemplatePath`/v2/payments/captures/${mapped.captureId}/refund`;
    req.throwOn(
      400,
      CustomError,
      'The request failed because it is not well-formed or is syntactically incorrect or violates schema.'
    );
    req.throwOn(
      401,
      CustomError,
      'Authentication failed due to missing authorization header, or invalid authentication credentials.'
    );
    req.throwOn(
      403,
      CustomError,
      'The request failed because the caller has insufficient permissions.'
    );
    req.throwOn(
      404,
      CustomError,
      'The request failed because the resource does not exist.'
    );
    req.throwOn(
      409,
      CustomError,
      'The request failed because a previous call for the given resource is in progress.'
    );
    req.throwOn(
      422,
      CustomError,
      'The request failed because it either is semantically incorrect or failed business validation.'
    );
    req.throwOn(
      500,
      ApiError,
      'The request failed because an internal server error occurred.'
    );
    req.defaultToError(CustomError, 'The error response.');
    req.authenticate([{ oauth2: true }]);
    return req.callAsJson(refundSchema, requestOptions);
  }

  /**
   * Shows details for a refund, by ID.
   *
   * @param refundId  The PayPal-generated ID for the refund for which to show details.
   * @return Response from the API call
   */
  async refundsGet(
    refundId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Refund>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ refundId: [refundId, string()] });
    req.appendTemplatePath`/v2/payments/refunds/${mapped.refundId}`;
    req.throwOn(
      401,
      CustomError,
      'Authentication failed due to missing authorization header, or invalid authentication credentials.'
    );
    req.throwOn(
      403,
      CustomError,
      'The request failed because the caller has insufficient permissions.'
    );
    req.throwOn(
      404,
      CustomError,
      'The request failed because the resource does not exist.'
    );
    req.throwOn(
      500,
      ApiError,
      'The request failed because an internal server error occurred.'
    );
    req.defaultToError(CustomError, 'The error response.');
    req.authenticate([{ oauth2: true }]);
    return req.callAsJson(refundSchema, requestOptions);
  }
}
