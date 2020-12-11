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
 * The InlineResponse4041 model module.
 * @module model/InlineResponse4041
 * @version 1.0.0
 */
class InlineResponse4041 {
    /**
     * Constructs a new <code>InlineResponse4041</code>.
     * @alias module:model/InlineResponse4041
     */
    constructor() { 
        
        InlineResponse4041.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse4041</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse4041} obj Optional instance to populate.
     * @return {module:model/InlineResponse4041} The populated <code>InlineResponse4041</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse4041();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('error_info')) {
                obj['error_info'] = ApiClient.convertToType(data['error_info'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], Object);
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = ApiClient.convertToType(data['additional_data'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} success
 */
InlineResponse4041.prototype['success'] = undefined;

/**
 * The description of the error
 * @member {String} error
 */
InlineResponse4041.prototype['error'] = undefined;

/**
 * A message describing how to solve the problem
 * @member {String} error_info
 */
InlineResponse4041.prototype['error_info'] = undefined;

/**
 * @member {Object} data
 */
InlineResponse4041.prototype['data'] = undefined;

/**
 * @member {Object} additional_data
 */
InlineResponse4041.prototype['additional_data'] = undefined;






export default InlineResponse4041;

