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
 * The Unauthorized model module.
 * @module model/Unauthorized
 * @version 1.0.0
 */
class Unauthorized {
    /**
     * Constructs a new <code>Unauthorized</code>.
     * @alias module:model/Unauthorized
     */
    constructor() { 
        
        Unauthorized.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Unauthorized</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Unauthorized} obj Optional instance to populate.
     * @return {module:model/Unauthorized} The populated <code>Unauthorized</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Unauthorized();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');

                delete data['error'];
            }
            if (data.hasOwnProperty('errorCode')) {
                obj['errorCode'] = ApiClient.convertToType(data['errorCode'], 'Number');

                delete data['errorCode'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * If the response is successful or not
 * @member {Boolean} success
 */
Unauthorized.prototype['success'] = undefined;

/**
 * The error message
 * @member {String} error
 */
Unauthorized.prototype['error'] = undefined;

/**
 * The response error code
 * @member {Number} errorCode
 */
Unauthorized.prototype['errorCode'] = undefined;






export default Unauthorized;

