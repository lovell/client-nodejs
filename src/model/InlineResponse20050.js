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
import InlineResponse20050Data from './InlineResponse20050Data';

/**
 * The InlineResponse20050 model module.
 * @module model/InlineResponse20050
 * @version 1.0.0
 */
class InlineResponse20050 {
    /**
     * Constructs a new <code>InlineResponse20050</code>.
     * @alias module:model/InlineResponse20050
     */
    constructor() { 
        
        InlineResponse20050.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20050</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20050} obj Optional instance to populate.
     * @return {module:model/InlineResponse20050} The populated <code>InlineResponse20050</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20050();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = InlineResponse20050Data.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * If the response is successful or not
 * @member {Boolean} success
 */
InlineResponse20050.prototype['success'] = undefined;

/**
 * @member {module:model/InlineResponse20050Data} data
 */
InlineResponse20050.prototype['data'] = undefined;






export default InlineResponse20050;

