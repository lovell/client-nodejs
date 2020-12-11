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
 * The InlineResponse20049Data model module.
 * @module model/InlineResponse20049Data
 * @version 1.0.0
 */
class InlineResponse20049Data {
    /**
     * Constructs a new <code>InlineResponse20049Data</code>.
     * @alias module:model/InlineResponse20049Data
     */
    constructor() { 
        
        InlineResponse20049Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20049Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20049Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse20049Data} The populated <code>InlineResponse20049Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20049Data();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The ID of removed Product
 * @member {Number} id
 */
InlineResponse20049Data.prototype['id'] = undefined;






export default InlineResponse20049Data;

