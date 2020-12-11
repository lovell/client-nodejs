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
 * The RecentDataProduct model module.
 * @module model/RecentDataProduct
 * @version 1.0.0
 */
class RecentDataProduct {
    /**
     * Constructs a new <code>RecentDataProduct</code>.
     * @alias module:model/RecentDataProduct
     */
    constructor() { 
        
        RecentDataProduct.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RecentDataProduct</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RecentDataProduct} obj Optional instance to populate.
     * @return {module:model/RecentDataProduct} The populated <code>RecentDataProduct</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecentDataProduct();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');

                delete data['code'];
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');

                delete data['description'];
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');

                delete data['unit'];
            }
            if (data.hasOwnProperty('tax')) {
                obj['tax'] = ApiClient.convertToType(data['tax'], 'Number');

                delete data['tax'];
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');

                delete data['category'];
            }
            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'Boolean');

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('selectable')) {
                obj['selectable'] = ApiClient.convertToType(data['selectable'], 'Boolean');

                delete data['selectable'];
            }
            if (data.hasOwnProperty('first_char')) {
                obj['first_char'] = ApiClient.convertToType(data['first_char'], 'String');

                delete data['first_char'];
            }
            if (data.hasOwnProperty('visible_to')) {
                obj['visible_to'] = ApiClient.convertToType(data['visible_to'], 'Number');

                delete data['visible_to'];
            }
            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'Number');

                delete data['owner_id'];
            }
            if (data.hasOwnProperty('files_count')) {
                obj['files_count'] = ApiClient.convertToType(data['files_count'], 'Number');

                delete data['files_count'];
            }
            if (data.hasOwnProperty('followers_count')) {
                obj['followers_count'] = ApiClient.convertToType(data['followers_count'], 'Number');

                delete data['followers_count'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'String');

                delete data['update_time'];
            }
            if (data.hasOwnProperty('prices')) {
                obj['prices'] = ApiClient.convertToType(data['prices'], [Object]);

                delete data['prices'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * ID of the Product
 * @member {Number} id
 */
RecentDataProduct.prototype['id'] = undefined;

/**
 * Name of the product
 * @member {String} name
 */
RecentDataProduct.prototype['name'] = undefined;

/**
 * Product code
 * @member {String} code
 */
RecentDataProduct.prototype['code'] = undefined;

/**
 * Description of the Product
 * @member {String} description
 */
RecentDataProduct.prototype['description'] = undefined;

/**
 * Unit in which this product is sold
 * @member {String} unit
 */
RecentDataProduct.prototype['unit'] = undefined;

/**
 * Tax percentage
 * @member {Number} tax
 * @default 0
 */
RecentDataProduct.prototype['tax'] = 0;

/**
 * Category of the Product
 * @member {String} category
 */
RecentDataProduct.prototype['category'] = undefined;

/**
 * Whether this product will be made active or not
 * @member {Boolean} active_flag
 */
RecentDataProduct.prototype['active_flag'] = undefined;

/**
 * Whether this product can be selected in Deals or not
 * @member {Boolean} selectable
 */
RecentDataProduct.prototype['selectable'] = undefined;

/**
 * First letter of the Product name
 * @member {String} first_char
 */
RecentDataProduct.prototype['first_char'] = undefined;

/**
 * Visibility of the product. If omitted, visibility will be set to the default visibility setting of this item type for the authorized user.
 * @member {Number} visible_to
 */
RecentDataProduct.prototype['visible_to'] = undefined;

/**
 * ID of the user who will be marked as the owner of this product. When omitted, authorized user ID will be used
 * @member {Number} owner_id
 */
RecentDataProduct.prototype['owner_id'] = undefined;

/**
 * Files count
 * @member {Number} files_count
 */
RecentDataProduct.prototype['files_count'] = undefined;

/**
 * Followers count
 * @member {Number} followers_count
 */
RecentDataProduct.prototype['followers_count'] = undefined;

/**
 * Date and time when the Product was added to the Deal
 * @member {String} add_time
 */
RecentDataProduct.prototype['add_time'] = undefined;

/**
 * Date and time when the Product was updated to the Deal
 * @member {String} update_time
 */
RecentDataProduct.prototype['update_time'] = undefined;

/**
 * Array of objects, each containing: currency (string), price (number), cost (number, optional), overhead_cost (number, optional). Note that there can only be one price per product per currency. When 'prices' is omitted altogether, no prices will be set up for the product.
 * @member {Array.<Object>} prices
 */
RecentDataProduct.prototype['prices'] = undefined;






export default RecentDataProduct;

