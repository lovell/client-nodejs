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
import AllOrganizationsGetResponseAllOfRelatedObjects from './AllOrganizationsGetResponseAllOfRelatedObjects';
import BaseOrganizationItem from './BaseOrganizationItem';
import BaseResponse from './BaseResponse';
import OrganizationUpdateResponseAllOf from './OrganizationUpdateResponseAllOf';

/**
 * The OrganizationUpdateResponse model module.
 * @module model/OrganizationUpdateResponse
 * @version 1.0.0
 */
class OrganizationUpdateResponse {
    /**
     * Constructs a new <code>OrganizationUpdateResponse</code>.
     * @alias module:model/OrganizationUpdateResponse
     * @implements module:model/BaseResponse
     * @implements module:model/OrganizationUpdateResponseAllOf
     */
    constructor() { 
        BaseResponse.initialize(this);OrganizationUpdateResponseAllOf.initialize(this);
        OrganizationUpdateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationUpdateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationUpdateResponse} obj Optional instance to populate.
     * @return {module:model/OrganizationUpdateResponse} The populated <code>OrganizationUpdateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationUpdateResponse();
            BaseResponse.constructFromObject(data, obj);
            OrganizationUpdateResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = BaseOrganizationItem.constructFromObject(data['data']);

                delete data['data'];
            }
            if (data.hasOwnProperty('related_objects')) {
                obj['related_objects'] = AllOrganizationsGetResponseAllOfRelatedObjects.constructFromObject(data['related_objects']);

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
OrganizationUpdateResponse.prototype['success'] = undefined;

/**
 * @member {module:model/BaseOrganizationItem} data
 */
OrganizationUpdateResponse.prototype['data'] = undefined;

/**
 * @member {module:model/AllOrganizationsGetResponseAllOfRelatedObjects} related_objects
 */
OrganizationUpdateResponse.prototype['related_objects'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement OrganizationUpdateResponseAllOf interface:
/**
 * @member {module:model/BaseOrganizationItem} data
 */
OrganizationUpdateResponseAllOf.prototype['data'] = undefined;
/**
 * @member {module:model/AllOrganizationsGetResponseAllOfRelatedObjects} related_objects
 */
OrganizationUpdateResponseAllOf.prototype['related_objects'] = undefined;




export default OrganizationUpdateResponse;

