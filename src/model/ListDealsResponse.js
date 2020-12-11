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
import DealNonStrict from './DealNonStrict';
import ListDealsResponseAllOf from './ListDealsResponseAllOf';
import ListDealsResponseAllOfRelatedObjects from './ListDealsResponseAllOfRelatedObjects';

/**
 * The ListDealsResponse model module.
 * @module model/ListDealsResponse
 * @version 1.0.0
 */
class ListDealsResponse {
    /**
     * Constructs a new <code>ListDealsResponse</code>.
     * @alias module:model/ListDealsResponse
     * @implements module:model/BaseResponse
     * @implements module:model/ListDealsResponseAllOf
     */
    constructor() { 
        BaseResponse.initialize(this);ListDealsResponseAllOf.initialize(this);
        ListDealsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListDealsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListDealsResponse} obj Optional instance to populate.
     * @return {module:model/ListDealsResponse} The populated <code>ListDealsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListDealsResponse();
            BaseResponse.constructFromObject(data, obj);
            ListDealsResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [DealNonStrict]);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = AdditionalData.constructFromObject(data['additional_data']);

                delete data['additional_data'];
            }
            if (data.hasOwnProperty('related_objects')) {
                obj['related_objects'] = ListDealsResponseAllOfRelatedObjects.constructFromObject(data['related_objects']);

                delete data['related_objects'];
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
ListDealsResponse.prototype['success'] = undefined;

/**
 * The array of Deals
 * @member {Array.<module:model/DealNonStrict>} data
 */
ListDealsResponse.prototype['data'] = undefined;

/**
 * @member {module:model/AdditionalData} additional_data
 */
ListDealsResponse.prototype['additional_data'] = undefined;

/**
 * @member {module:model/ListDealsResponseAllOfRelatedObjects} related_objects
 */
ListDealsResponse.prototype['related_objects'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement ListDealsResponseAllOf interface:
/**
 * The array of Deals
 * @member {Array.<module:model/DealNonStrict>} data
 */
ListDealsResponseAllOf.prototype['data'] = undefined;
/**
 * @member {module:model/AdditionalData} additional_data
 */
ListDealsResponseAllOf.prototype['additional_data'] = undefined;
/**
 * @member {module:model/ListDealsResponseAllOfRelatedObjects} related_objects
 */
ListDealsResponseAllOf.prototype['related_objects'] = undefined;




export default ListDealsResponse;

