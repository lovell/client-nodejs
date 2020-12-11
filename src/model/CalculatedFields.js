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
 * The CalculatedFields model module.
 * @module model/CalculatedFields
 * @version 1.0.0
 */
class CalculatedFields {
    /**
     * Constructs a new <code>CalculatedFields</code>.
     * @alias module:model/CalculatedFields
     */
    constructor() { 
        
        CalculatedFields.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CalculatedFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CalculatedFields} obj Optional instance to populate.
     * @return {module:model/CalculatedFields} The populated <code>CalculatedFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CalculatedFields();

            if (data.hasOwnProperty('calculated_type')) {
                obj['calculated_type'] = ApiClient.convertToType(data['calculated_type'], 'String');

                delete data['calculated_type'];
            }
            if (data.hasOwnProperty('calculated_related_org_id')) {
                obj['calculated_related_org_id'] = ApiClient.convertToType(data['calculated_related_org_id'], 'Number');

                delete data['calculated_related_org_id'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * The calculated type of the Relationship with the linked Organization
 * @member {String} calculated_type
 */
CalculatedFields.prototype['calculated_type'] = undefined;

/**
 * The ID of the linked Organization
 * @member {Number} calculated_related_org_id
 */
CalculatedFields.prototype['calculated_related_org_id'] = undefined;






export default CalculatedFields;

