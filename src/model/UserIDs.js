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
import BaseResponse from './BaseResponse';
import UserIDsAllOf from './UserIDsAllOf';

/**
 * The UserIDs model module.
 * @module model/UserIDs
 * @version 1.0.0
 */
class UserIDs {
    /**
     * Constructs a new <code>UserIDs</code>.
     * @alias module:model/UserIDs
     * @implements module:model/BaseResponse
     * @implements module:model/UserIDsAllOf
     */
    constructor() { 
        BaseResponse.initialize(this);UserIDsAllOf.initialize(this);
        UserIDs.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserIDs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserIDs} obj Optional instance to populate.
     * @return {module:model/UserIDs} The populated <code>UserIDs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserIDs();
            BaseResponse.constructFromObject(data, obj);
            UserIDsAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], ['Number']);

                delete data['data'];
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
UserIDs.prototype['success'] = undefined;

/**
 * List of User IDs
 * @member {Array.<Number>} data
 */
UserIDs.prototype['data'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement UserIDsAllOf interface:
/**
 * List of User IDs
 * @member {Array.<Number>} data
 */
UserIDsAllOf.prototype['data'] = undefined;




export default UserIDs;

