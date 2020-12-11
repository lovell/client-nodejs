/**
 * Pipedrive API v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DealSummaryPerCurrencyFullCURRENCYID model module.
 * @module model/DealSummaryPerCurrencyFullCURRENCYID
 * @version 1.0.0
 */
class DealSummaryPerCurrencyFullCURRENCYID {
    /**
     * Constructs a new <code>DealSummaryPerCurrencyFullCURRENCYID</code>.
     * The currency summary. This parameter is dynamic and changes according to currency_id value.
     * @alias module:model/DealSummaryPerCurrencyFullCURRENCYID
     */
    constructor() { 
        
        DealSummaryPerCurrencyFullCURRENCYID.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DealSummaryPerCurrencyFullCURRENCYID</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DealSummaryPerCurrencyFullCURRENCYID} obj Optional instance to populate.
     * @return {module:model/DealSummaryPerCurrencyFullCURRENCYID} The populated <code>DealSummaryPerCurrencyFullCURRENCYID</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DealSummaryPerCurrencyFullCURRENCYID();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');

                delete data['count'];
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');

                delete data['value'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * Deals count per currency
 * @member {Number} count
 */
DealSummaryPerCurrencyFullCURRENCYID.prototype['count'] = undefined;

/**
 * Deals value per currency
 * @member {Number} value
 */
DealSummaryPerCurrencyFullCURRENCYID.prototype['value'] = undefined;






export default DealSummaryPerCurrencyFullCURRENCYID;

