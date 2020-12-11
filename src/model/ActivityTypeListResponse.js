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
import ActivityTypeObjectResponse from './ActivityTypeObjectResponse';
import BaseResponse from './BaseResponse';

/**
 * The ActivityTypeListResponse model module.
 * @module model/ActivityTypeListResponse
 * @version 1.0.0
 */
class ActivityTypeListResponse {
    /**
     * Constructs a new <code>ActivityTypeListResponse</code>.
     * @alias module:model/ActivityTypeListResponse
     * @extends module:model/BaseResponse
     * @implements module:model/BaseResponse
     */
    constructor() { 
        BaseResponse.initialize(this);
        ActivityTypeListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActivityTypeListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActivityTypeListResponse} obj Optional instance to populate.
     * @return {module:model/ActivityTypeListResponse} The populated <code>ActivityTypeListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivityTypeListResponse();
            BaseResponse.constructFromObject(data, obj);
            BaseResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ActivityTypeObjectResponse]);

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
 * The array of ActivityTypes
 * @member {Array.<module:model/ActivityTypeObjectResponse>} data
 */
ActivityTypeListResponse.prototype['data'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;




export default ActivityTypeListResponse;

