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
 * The ItemSearchItem model module.
 * @module model/ItemSearchItem
 * @version 1.0.0
 */
class ItemSearchItem {
    /**
     * Constructs a new <code>ItemSearchItem</code>.
     * @alias module:model/ItemSearchItem
     */
    constructor() { 
        
        ItemSearchItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemSearchItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ItemSearchItem} obj Optional instance to populate.
     * @return {module:model/ItemSearchItem} The populated <code>ItemSearchItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemSearchItem();

            if (data.hasOwnProperty('result_score')) {
                obj['result_score'] = ApiClient.convertToType(data['result_score'], 'Number');

                delete data['result_score'];
            }
            if (data.hasOwnProperty('item')) {
                obj['item'] = ApiClient.convertToType(data['item'], Object);

                delete data['item'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * Search result relevancy
 * @member {Number} result_score
 */
ItemSearchItem.prototype['result_score'] = undefined;

/**
 * Item
 * @member {Object} item
 */
ItemSearchItem.prototype['item'] = undefined;






export default ItemSearchItem;

