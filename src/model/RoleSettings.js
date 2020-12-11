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
 * The RoleSettings model module.
 * @module model/RoleSettings
 * @version 1.0.0
 */
class RoleSettings {
    /**
     * Constructs a new <code>RoleSettings</code>.
     * The settings for the Role
     * @alias module:model/RoleSettings
     */
    constructor() { 
        
        RoleSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RoleSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RoleSettings} obj Optional instance to populate.
     * @return {module:model/RoleSettings} The populated <code>RoleSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RoleSettings();

            if (data.hasOwnProperty('deal_default_visibility')) {
                obj['deal_default_visibility'] = ApiClient.convertToType(data['deal_default_visibility'], 'Number');

                delete data['deal_default_visibility'];
            }
            if (data.hasOwnProperty('org_default_visibility')) {
                obj['org_default_visibility'] = ApiClient.convertToType(data['org_default_visibility'], 'Number');

                delete data['org_default_visibility'];
            }
            if (data.hasOwnProperty('person_default_visibility')) {
                obj['person_default_visibility'] = ApiClient.convertToType(data['person_default_visibility'], 'Number');

                delete data['person_default_visibility'];
            }
            if (data.hasOwnProperty('product_default_visibility')) {
                obj['product_default_visibility'] = ApiClient.convertToType(data['product_default_visibility'], 'Number');

                delete data['product_default_visibility'];
            }
            if (data.hasOwnProperty('deal_access_level')) {
                obj['deal_access_level'] = ApiClient.convertToType(data['deal_access_level'], 'Number');

                delete data['deal_access_level'];
            }
            if (data.hasOwnProperty('org_access_level')) {
                obj['org_access_level'] = ApiClient.convertToType(data['org_access_level'], 'Number');

                delete data['org_access_level'];
            }
            if (data.hasOwnProperty('person_access_level')) {
                obj['person_access_level'] = ApiClient.convertToType(data['person_access_level'], 'Number');

                delete data['person_access_level'];
            }
            if (data.hasOwnProperty('product_access_level')) {
                obj['product_access_level'] = ApiClient.convertToType(data['product_access_level'], 'Number');

                delete data['product_access_level'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * The default visibility level of the Deals for the Role
 * @member {Number} deal_default_visibility
 */
RoleSettings.prototype['deal_default_visibility'] = undefined;

/**
 * The default visibility level of the Organizations for the Role
 * @member {Number} org_default_visibility
 */
RoleSettings.prototype['org_default_visibility'] = undefined;

/**
 * The default visibility level of the People for the Role
 * @member {Number} person_default_visibility
 */
RoleSettings.prototype['person_default_visibility'] = undefined;

/**
 * The default visibility level of the Products for the Role
 * @member {Number} product_default_visibility
 */
RoleSettings.prototype['product_default_visibility'] = undefined;

/**
 * The access level of the Deals for the Role (only for default Role)
 * @member {Number} deal_access_level
 */
RoleSettings.prototype['deal_access_level'] = undefined;

/**
 * The access level of the Organizations for the Role (only for default Role)
 * @member {Number} org_access_level
 */
RoleSettings.prototype['org_access_level'] = undefined;

/**
 * The access level of the People for the Role (only for default Role)
 * @member {Number} person_access_level
 */
RoleSettings.prototype['person_access_level'] = undefined;

/**
 * The access level of the Products for the Role (only for default Role)
 * @member {Number} product_access_level
 */
RoleSettings.prototype['product_access_level'] = undefined;






export default RoleSettings;

