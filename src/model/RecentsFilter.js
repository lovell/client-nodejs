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
import FilterGetItem from './FilterGetItem';

/**
 * The RecentsFilter model module.
 * @module model/RecentsFilter
 * @version 1.0.0
 */
class RecentsFilter {
    /**
     * Constructs a new <code>RecentsFilter</code>.
     * @alias module:model/RecentsFilter
     */
    constructor() { 
        
        RecentsFilter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RecentsFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RecentsFilter} obj Optional instance to populate.
     * @return {module:model/RecentsFilter} The populated <code>RecentsFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecentsFilter();

            if (data.hasOwnProperty('item')) {
                obj['item'] = ApiClient.convertToType(data['item'], 'String');

                delete data['item'];
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = FilterGetItem.constructFromObject(data['data']);

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
 * @member {module:model/RecentsFilter.ItemEnum} item
 */
RecentsFilter.prototype['item'] = undefined;

/**
 * @member {Number} id
 */
RecentsFilter.prototype['id'] = undefined;

/**
 * @member {module:model/FilterGetItem} data
 */
RecentsFilter.prototype['data'] = undefined;





/**
 * Allowed values for the <code>item</code> property.
 * @enum {String}
 * @readonly
 */
RecentsFilter['ItemEnum'] = {

    /**
     * value: "filter"
     * @const
     */
    "filter": "filter"
};



export default RecentsFilter;

