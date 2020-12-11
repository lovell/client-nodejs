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
 * The AddAProductToTheDealAllOf1 model module.
 * @module model/AddAProductToTheDealAllOf1
 * @version 1.0.0
 */
class AddAProductToTheDealAllOf1 {
    /**
     * Constructs a new <code>AddAProductToTheDealAllOf1</code>.
     * @alias module:model/AddAProductToTheDealAllOf1
     * @param productId {Number} ID of the product that will be attached
     */
    constructor(productId) { 
        
        AddAProductToTheDealAllOf1.initialize(this, productId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, productId) { 
        obj['product_id'] = productId;
    }

    /**
     * Constructs a <code>AddAProductToTheDealAllOf1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddAProductToTheDealAllOf1} obj Optional instance to populate.
     * @return {module:model/AddAProductToTheDealAllOf1} The populated <code>AddAProductToTheDealAllOf1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddAProductToTheDealAllOf1();

            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * ID of the product that will be attached
 * @member {Number} product_id
 */
AddAProductToTheDealAllOf1.prototype['product_id'] = undefined;






export default AddAProductToTheDealAllOf1;

