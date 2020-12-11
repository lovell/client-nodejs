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
import FieldTypeAsString from './FieldTypeAsString';

/**
 * The FieldType model module.
 * @module model/FieldType
 * @version 1.0.0
 */
class FieldType {
    /**
     * Constructs a new <code>FieldType</code>.
     * @alias module:model/FieldType
     * @param fieldType {module:model/FieldTypeAsString} 
     */
    constructor(fieldType) { 
        
        FieldType.initialize(this, fieldType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fieldType) { 
        obj['field_type'] = fieldType;
    }

    /**
     * Constructs a <code>FieldType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FieldType} obj Optional instance to populate.
     * @return {module:model/FieldType} The populated <code>FieldType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FieldType();

            if (data.hasOwnProperty('field_type')) {
                obj['field_type'] = FieldTypeAsString.constructFromObject(data['field_type']);

                delete data['field_type'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * @member {module:model/FieldTypeAsString} field_type
 */
FieldType.prototype['field_type'] = undefined;






export default FieldType;

