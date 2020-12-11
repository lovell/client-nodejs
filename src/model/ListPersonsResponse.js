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
import ListPersonsResponseAllOf from './ListPersonsResponseAllOf';
import ListPersonsResponseAllOfRelatedObjects from './ListPersonsResponseAllOfRelatedObjects';
import PersonItem from './PersonItem';

/**
 * The ListPersonsResponse model module.
 * @module model/ListPersonsResponse
 * @version 1.0.0
 */
class ListPersonsResponse {
    /**
     * Constructs a new <code>ListPersonsResponse</code>.
     * @alias module:model/ListPersonsResponse
     * @implements module:model/BaseResponse
     * @implements module:model/ListPersonsResponseAllOf
     */
    constructor() { 
        BaseResponse.initialize(this);ListPersonsResponseAllOf.initialize(this);
        ListPersonsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListPersonsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListPersonsResponse} obj Optional instance to populate.
     * @return {module:model/ListPersonsResponse} The populated <code>ListPersonsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListPersonsResponse();
            BaseResponse.constructFromObject(data, obj);
            ListPersonsResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [PersonItem]);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = AdditionalData.constructFromObject(data['additional_data']);

                delete data['additional_data'];
            }
            if (data.hasOwnProperty('related_objects')) {
                obj['related_objects'] = ListPersonsResponseAllOfRelatedObjects.constructFromObject(data['related_objects']);

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
ListPersonsResponse.prototype['success'] = undefined;

/**
 * The array of Persons
 * @member {Array.<module:model/PersonItem>} data
 */
ListPersonsResponse.prototype['data'] = undefined;

/**
 * @member {module:model/AdditionalData} additional_data
 */
ListPersonsResponse.prototype['additional_data'] = undefined;

/**
 * @member {module:model/ListPersonsResponseAllOfRelatedObjects} related_objects
 */
ListPersonsResponse.prototype['related_objects'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement ListPersonsResponseAllOf interface:
/**
 * The array of Persons
 * @member {Array.<module:model/PersonItem>} data
 */
ListPersonsResponseAllOf.prototype['data'] = undefined;
/**
 * @member {module:model/AdditionalData} additional_data
 */
ListPersonsResponseAllOf.prototype['additional_data'] = undefined;
/**
 * @member {module:model/ListPersonsResponseAllOfRelatedObjects} related_objects
 */
ListPersonsResponseAllOf.prototype['related_objects'] = undefined;




export default ListPersonsResponse;

