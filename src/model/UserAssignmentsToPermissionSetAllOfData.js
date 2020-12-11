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
 * The UserAssignmentsToPermissionSetAllOfData model module.
 * @module model/UserAssignmentsToPermissionSetAllOfData
 * @version 1.0.0
 */
class UserAssignmentsToPermissionSetAllOfData {
    /**
     * Constructs a new <code>UserAssignmentsToPermissionSetAllOfData</code>.
     * @alias module:model/UserAssignmentsToPermissionSetAllOfData
     */
    constructor() { 
        
        UserAssignmentsToPermissionSetAllOfData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserAssignmentsToPermissionSetAllOfData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserAssignmentsToPermissionSetAllOfData} obj Optional instance to populate.
     * @return {module:model/UserAssignmentsToPermissionSetAllOfData} The populated <code>UserAssignmentsToPermissionSetAllOfData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserAssignmentsToPermissionSetAllOfData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
            }
            if (data.hasOwnProperty('permission_set_id')) {
                obj['permission_set_id'] = ApiClient.convertToType(data['permission_set_id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The ID of the assignment of the Permission Set
 * @member {Number} id
 */
UserAssignmentsToPermissionSetAllOfData.prototype['id'] = undefined;

/**
 * The ID of the User in the Permission Set
 * @member {Number} user_id
 */
UserAssignmentsToPermissionSetAllOfData.prototype['user_id'] = undefined;

/**
 * The ID of the Permission Set
 * @member {Number} permission_set_id
 */
UserAssignmentsToPermissionSetAllOfData.prototype['permission_set_id'] = undefined;

/**
 * The name of the Permission Set
 * @member {String} name
 */
UserAssignmentsToPermissionSetAllOfData.prototype['name'] = undefined;






export default UserAssignmentsToPermissionSetAllOfData;

