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
import PostRolesAllOf from './PostRolesAllOf';
import PostRolesAllOfData from './PostRolesAllOfData';

/**
 * The PostRoles model module.
 * @module model/PostRoles
 * @version 1.0.0
 */
class PostRoles {
    /**
     * Constructs a new <code>PostRoles</code>.
     * @alias module:model/PostRoles
     * @implements module:model/BaseResponse
     * @implements module:model/PostRolesAllOf
     */
    constructor() { 
        BaseResponse.initialize(this);PostRolesAllOf.initialize(this);
        PostRoles.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostRoles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostRoles} obj Optional instance to populate.
     * @return {module:model/PostRoles} The populated <code>PostRoles</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostRoles();
            BaseResponse.constructFromObject(data, obj);
            PostRolesAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = PostRolesAllOfData.constructFromObject(data['data']);

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
PostRoles.prototype['success'] = undefined;

/**
 * @member {module:model/PostRolesAllOfData} data
 */
PostRoles.prototype['data'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement PostRolesAllOf interface:
/**
 * @member {module:model/PostRolesAllOfData} data
 */
PostRolesAllOf.prototype['data'] = undefined;




export default PostRoles;

