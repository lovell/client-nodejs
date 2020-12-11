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
 * The InlineResponse2009AdditionalData model module.
 * @module model/InlineResponse2009AdditionalData
 * @version 1.0.0
 */
class InlineResponse2009AdditionalData {
    /**
     * Constructs a new <code>InlineResponse2009AdditionalData</code>.
     * @alias module:model/InlineResponse2009AdditionalData
     */
    constructor() { 
        
        InlineResponse2009AdditionalData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2009AdditionalData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2009AdditionalData} obj Optional instance to populate.
     * @return {module:model/InlineResponse2009AdditionalData} The populated <code>InlineResponse2009AdditionalData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2009AdditionalData();

            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = InlineResponse2007AdditionalData.constructFromObject(data['pagination']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2007AdditionalData} pagination
 */
InlineResponse2009AdditionalData.prototype['pagination'] = undefined;






export default InlineResponse2009AdditionalData;

