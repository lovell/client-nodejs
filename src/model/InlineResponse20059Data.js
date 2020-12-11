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
 * The InlineResponse20059Data model module.
 * @module model/InlineResponse20059Data
 * @version 1.0.0
 */
class InlineResponse20059Data {
    /**
     * Constructs a new <code>InlineResponse20059Data</code>.
     * @alias module:model/InlineResponse20059Data
     */
    constructor() { 
        
        InlineResponse20059Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20059Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20059Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse20059Data} The populated <code>InlineResponse20059Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20059Data();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * The list of deleted Stage IDs
 * @member {Array.<Number>} id
 */
InlineResponse20059Data.prototype['id'] = undefined;






export default InlineResponse20059Data;

