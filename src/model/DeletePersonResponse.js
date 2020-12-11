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
import DeletePersonResponseAllOf from './DeletePersonResponseAllOf';
import DeletePersonResponseAllOfData from './DeletePersonResponseAllOfData';

/**
 * The DeletePersonResponse model module.
 * @module model/DeletePersonResponse
 * @version 1.0.0
 */
class DeletePersonResponse {
    /**
     * Constructs a new <code>DeletePersonResponse</code>.
     * @alias module:model/DeletePersonResponse
     * @implements module:model/BaseResponse
     * @implements module:model/DeletePersonResponseAllOf
     */
    constructor() { 
        BaseResponse.initialize(this);DeletePersonResponseAllOf.initialize(this);
        DeletePersonResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeletePersonResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeletePersonResponse} obj Optional instance to populate.
     * @return {module:model/DeletePersonResponse} The populated <code>DeletePersonResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeletePersonResponse();
            BaseResponse.constructFromObject(data, obj);
            DeletePersonResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = DeletePersonResponseAllOfData.constructFromObject(data['data']);

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
DeletePersonResponse.prototype['success'] = undefined;

/**
 * @member {module:model/DeletePersonResponseAllOfData} data
 */
DeletePersonResponse.prototype['data'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement DeletePersonResponseAllOf interface:
/**
 * @member {module:model/DeletePersonResponseAllOfData} data
 */
DeletePersonResponseAllOf.prototype['data'] = undefined;




export default DeletePersonResponse;

