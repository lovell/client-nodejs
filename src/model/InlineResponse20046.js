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
import InlineResponse2007AdditionalData from './InlineResponse2007AdditionalData';

/**
 * The InlineResponse20046 model module.
 * @module model/InlineResponse20046
 * @version 1.0.0
 */
class InlineResponse20046 {
    /**
     * Constructs a new <code>InlineResponse20046</code>.
     * @alias module:model/InlineResponse20046
     */
    constructor() { 
        
        InlineResponse20046.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20046</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20046} obj Optional instance to populate.
     * @return {module:model/InlineResponse20046} The populated <code>InlineResponse20046</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20046();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Object]);
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = InlineResponse2007AdditionalData.constructFromObject(data['additional_data']);
            }
        }
        return obj;
    }


}

/**
 * If the request was successful or not
 * @member {Boolean} success
 */
InlineResponse20046.prototype['success'] = undefined;

/**
 * The array of Deals
 * @member {Array.<Object>} data
 */
InlineResponse20046.prototype['data'] = undefined;

/**
 * @member {module:model/InlineResponse2007AdditionalData} additional_data
 */
InlineResponse20046.prototype['additional_data'] = undefined;






export default InlineResponse20046;

