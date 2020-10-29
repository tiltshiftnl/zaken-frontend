// tslint:disable
/**
 * Zaken Backend Gateway API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    Address,
    CaseState
} from "./"

/**
 * @export
 * @interface Case
 */
export type Case = {
    /**
     * @type {number}
     * @memberof Case
     */
    readonly id: number
    /**
     * @type {Address}
     * @memberof Case
     */
    address: Address
    /**
     * @type {Array<CaseState>}
     * @memberof Case
     */
    case_states: Array<CaseState>
    /**
     * @type {CaseState}
     * @memberof Case
     */
    readonly current_state: CaseState
    /**
     * @type {string}
     * @memberof Case
     */
    identification?: string | null
    /**
     * @type {string}
     * @memberof Case
     */
    start_date?: string | null
    /**
     * @type {string}
     * @memberof Case
     */
    end_date?: string | null
}
