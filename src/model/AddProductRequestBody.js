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
import NumberBooleanDefault12 from './NumberBooleanDefault12';
import ProductRequest from './ProductRequest';
import VisibleTo from './VisibleTo';

/**
 * The AddProductRequestBody model module.
 * @module model/AddProductRequestBody
 * @version 1.0.0
 */
class AddProductRequestBody {
    /**
     * Constructs a new <code>AddProductRequestBody</code>.
     * @alias module:model/AddProductRequestBody
     * @implements module:model/ProductRequest
     */
    constructor() { 
        ProductRequest.initialize(this);
        AddProductRequestBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddProductRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddProductRequestBody} obj Optional instance to populate.
     * @return {module:model/AddProductRequestBody} The populated <code>AddProductRequestBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddProductRequestBody();
            ProductRequest.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');

                delete data['code'];
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');

                delete data['unit'];
            }
            if (data.hasOwnProperty('tax')) {
                obj['tax'] = ApiClient.convertToType(data['tax'], 'Number');

                delete data['tax'];
            }
            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], NumberBooleanDefault12);

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('selectable')) {
                obj['selectable'] = ApiClient.convertToType(data['selectable'], NumberBooleanDefault12);

                delete data['selectable'];
            }
            if (data.hasOwnProperty('visible_to')) {
                obj['visible_to'] = ApiClient.convertToType(data['visible_to'], VisibleTo);

                delete data['visible_to'];
            }
            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'Number');

                delete data['owner_id'];
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
 * Name of the product.
 * @member {String} name
 */
AddProductRequestBody.prototype['name'] = undefined;

/**
 * Product code.
 * @member {String} code
 */
AddProductRequestBody.prototype['code'] = undefined;

/**
 * Unit in which this product is sold
 * @member {String} unit
 */
AddProductRequestBody.prototype['unit'] = undefined;

/**
 * Tax percentage
 * @member {Number} tax
 * @default 0
 */
AddProductRequestBody.prototype['tax'] = 0;

/**
 * Whether this product will be made active or not.
 * @member {module:model/NumberBooleanDefault12} active_flag
 */
AddProductRequestBody.prototype['active_flag'] = undefined;

/**
 * Whether this product can be selected in Deals or not.
 * @member {module:model/NumberBooleanDefault12} selectable
 */
AddProductRequestBody.prototype['selectable'] = undefined;

/**
 * Visibility of the product. If omitted, visibility will be set to the default visibility setting of this item type for the authorized user.<dl class=\"fields-list\"><dt>1</dt><dd>Owner &amp; followers (private)</dd><dt>3</dt><dd>Entire company (shared)</dd></dl>
 * @member {module:model/VisibleTo} visible_to
 */
AddProductRequestBody.prototype['visible_to'] = undefined;

/**
 * ID of the user who will be marked as the owner of this product. When omitted, the authorized user ID will be used.
 * @member {Number} owner_id
 */
AddProductRequestBody.prototype['owner_id'] = undefined;

/**
 * Array of objects, each containing: currency (string), price (number), cost (number, optional), overhead_cost (number, optional). Note that there can only be one price per product per currency. When 'prices' is omitted altogether, no prices will be set up for the product
 * @member {Array.<Object>} prices
 */
AddProductRequestBody.prototype['prices'] = undefined;


// Implement ProductRequest interface:
/**
 * Name of the product.
 * @member {String} name
 */
ProductRequest.prototype['name'] = undefined;
/**
 * Product code.
 * @member {String} code
 */
ProductRequest.prototype['code'] = undefined;
/**
 * Unit in which this product is sold
 * @member {String} unit
 */
ProductRequest.prototype['unit'] = undefined;
/**
 * Tax percentage
 * @member {Number} tax
 * @default 0
 */
ProductRequest.prototype['tax'] = 0;
/**
 * Whether this product will be made active or not.
 * @member {module:model/NumberBooleanDefault12} active_flag
 */
ProductRequest.prototype['active_flag'] = undefined;
/**
 * Whether this product can be selected in Deals or not.
 * @member {module:model/NumberBooleanDefault12} selectable
 */
ProductRequest.prototype['selectable'] = undefined;
/**
 * Visibility of the product. If omitted, visibility will be set to the default visibility setting of this item type for the authorized user.<dl class=\"fields-list\"><dt>1</dt><dd>Owner &amp; followers (private)</dd><dt>3</dt><dd>Entire company (shared)</dd></dl>
 * @member {module:model/VisibleTo} visible_to
 */
ProductRequest.prototype['visible_to'] = undefined;
/**
 * ID of the user who will be marked as the owner of this product. When omitted, the authorized user ID will be used.
 * @member {Number} owner_id
 */
ProductRequest.prototype['owner_id'] = undefined;
/**
 * Array of objects, each containing: currency (string), price (number), cost (number, optional), overhead_cost (number, optional). Note that there can only be one price per product per currency. When 'prices' is omitted altogether, no prices will be set up for the product
 * @member {Array.<Object>} prices
 */
ProductRequest.prototype['prices'] = undefined;




export default AddProductRequestBody;

