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
 * The DeleteProductResponseData model module.
 * @module model/DeleteProductResponseData
 * @version 1.0.0
 */
class DeleteProductResponseData {
    /**
     * Constructs a new <code>DeleteProductResponseData</code>.
     * @alias module:model/DeleteProductResponseData
     */
    constructor() { 
        
        DeleteProductResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteProductResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteProductResponseData} obj Optional instance to populate.
     * @return {module:model/DeleteProductResponseData} The populated <code>DeleteProductResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteProductResponseData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * The ID of removed Product
 * @member {Number} id
 */
DeleteProductResponseData.prototype['id'] = undefined;






export default DeleteProductResponseData;

