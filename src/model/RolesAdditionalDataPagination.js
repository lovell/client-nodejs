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
 * The RolesAdditionalDataPagination model module.
 * @module model/RolesAdditionalDataPagination
 * @version 1.0.0
 */
class RolesAdditionalDataPagination {
    /**
     * Constructs a new <code>RolesAdditionalDataPagination</code>.
     * The pagination details in the Role list
     * @alias module:model/RolesAdditionalDataPagination
     */
    constructor() { 
        
        RolesAdditionalDataPagination.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RolesAdditionalDataPagination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RolesAdditionalDataPagination} obj Optional instance to populate.
     * @return {module:model/RolesAdditionalDataPagination} The populated <code>RolesAdditionalDataPagination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RolesAdditionalDataPagination();

            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Number');

                delete data['start'];
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');

                delete data['limit'];
            }
            if (data.hasOwnProperty('more_items_in_collection')) {
                obj['more_items_in_collection'] = ApiClient.convertToType(data['more_items_in_collection'], 'Boolean');

                delete data['more_items_in_collection'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * Pagination start
 * @member {Number} start
 */
RolesAdditionalDataPagination.prototype['start'] = undefined;

/**
 * Items shown per page
 * @member {Number} limit
 */
RolesAdditionalDataPagination.prototype['limit'] = undefined;

/**
 * Whether there are more list items in the collection than displayed
 * @member {Boolean} more_items_in_collection
 */
RolesAdditionalDataPagination.prototype['more_items_in_collection'] = undefined;






export default RolesAdditionalDataPagination;

