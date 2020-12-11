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
 * The DeleteFileData model module.
 * @module model/DeleteFileData
 * @version 1.0.0
 */
class DeleteFileData {
    /**
     * Constructs a new <code>DeleteFileData</code>.
     * @alias module:model/DeleteFileData
     */
    constructor() { 
        
        DeleteFileData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteFileData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteFileData} obj Optional instance to populate.
     * @return {module:model/DeleteFileData} The populated <code>DeleteFileData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteFileData();

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
 * The ID of the File
 * @member {Number} id
 */
DeleteFileData.prototype['id'] = undefined;






export default DeleteFileData;

