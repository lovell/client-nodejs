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
import GetActivitiesResponse200RelatedObjects from './GetActivitiesResponse200RelatedObjects';
import Product from './Product';

/**
 * The ProductResponse model module.
 * @module model/ProductResponse
 * @version 1.0.0
 */
class ProductResponse {
    /**
     * Constructs a new <code>ProductResponse</code>.
     * @alias module:model/ProductResponse
     */
    constructor() { 
        
        ProductResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductResponse} obj Optional instance to populate.
     * @return {module:model/ProductResponse} The populated <code>ProductResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductResponse();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = Product.constructFromObject(data['data']);

                delete data['data'];
            }
            if (data.hasOwnProperty('related_objects')) {
                obj['related_objects'] = GetActivitiesResponse200RelatedObjects.constructFromObject(data['related_objects']);

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
ProductResponse.prototype['success'] = undefined;

/**
 * @member {module:model/Product} data
 */
ProductResponse.prototype['data'] = undefined;

/**
 * @member {module:model/GetActivitiesResponse200RelatedObjects} related_objects
 */
ProductResponse.prototype['related_objects'] = undefined;






export default ProductResponse;

