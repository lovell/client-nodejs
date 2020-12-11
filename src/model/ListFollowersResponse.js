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
import AdditionalData from './AdditionalData';
import BaseResponse from './BaseResponse';
import ListFollowersResponseAllOf from './ListFollowersResponseAllOf';
import ListFollowersResponseAllOfData from './ListFollowersResponseAllOfData';

/**
 * The ListFollowersResponse model module.
 * @module model/ListFollowersResponse
 * @version 1.0.0
 */
class ListFollowersResponse {
    /**
     * Constructs a new <code>ListFollowersResponse</code>.
     * @alias module:model/ListFollowersResponse
     * @implements module:model/BaseResponse
     * @implements module:model/ListFollowersResponseAllOf
     */
    constructor() { 
        BaseResponse.initialize(this);ListFollowersResponseAllOf.initialize(this);
        ListFollowersResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListFollowersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListFollowersResponse} obj Optional instance to populate.
     * @return {module:model/ListFollowersResponse} The populated <code>ListFollowersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListFollowersResponse();
            BaseResponse.constructFromObject(data, obj);
            ListFollowersResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ListFollowersResponseAllOfData]);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = AdditionalData.constructFromObject(data['additional_data']);

                delete data['additional_data'];
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
ListFollowersResponse.prototype['success'] = undefined;

/**
 * The list of Followers
 * @member {Array.<module:model/ListFollowersResponseAllOfData>} data
 */
ListFollowersResponse.prototype['data'] = undefined;

/**
 * @member {module:model/AdditionalData} additional_data
 */
ListFollowersResponse.prototype['additional_data'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement ListFollowersResponseAllOf interface:
/**
 * The list of Followers
 * @member {Array.<module:model/ListFollowersResponseAllOfData>} data
 */
ListFollowersResponseAllOf.prototype['data'] = undefined;
/**
 * @member {module:model/AdditionalData} additional_data
 */
ListFollowersResponseAllOf.prototype['additional_data'] = undefined;




export default ListFollowersResponse;

