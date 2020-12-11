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
import AdditionalData from './AdditionalData';
import BaseResponse from './BaseResponse';
import OrganizationFlowResponseAllOf from './OrganizationFlowResponseAllOf';
import OrganizationFlowResponseAllOfData from './OrganizationFlowResponseAllOfData';
import OrganizationFlowResponseAllOfRelatedObjects from './OrganizationFlowResponseAllOfRelatedObjects';

/**
 * The OrganizationFlowResponse model module.
 * @module model/OrganizationFlowResponse
 * @version 1.0.0
 */
class OrganizationFlowResponse {
    /**
     * Constructs a new <code>OrganizationFlowResponse</code>.
     * @alias module:model/OrganizationFlowResponse
     * @implements module:model/BaseResponse
     * @implements module:model/OrganizationFlowResponseAllOf
     */
    constructor() { 
        BaseResponse.initialize(this);OrganizationFlowResponseAllOf.initialize(this);
        OrganizationFlowResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationFlowResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationFlowResponse} obj Optional instance to populate.
     * @return {module:model/OrganizationFlowResponse} The populated <code>OrganizationFlowResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationFlowResponse();
            BaseResponse.constructFromObject(data, obj);
            OrganizationFlowResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [OrganizationFlowResponseAllOfData]);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = AdditionalData.constructFromObject(data['additional_data']);

                delete data['additional_data'];
            }
            if (data.hasOwnProperty('related_objects')) {
                obj['related_objects'] = OrganizationFlowResponseAllOfRelatedObjects.constructFromObject(data['related_objects']);

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
OrganizationFlowResponse.prototype['success'] = undefined;

/**
 * @member {Array.<module:model/OrganizationFlowResponseAllOfData>} data
 */
OrganizationFlowResponse.prototype['data'] = undefined;

/**
 * @member {module:model/AdditionalData} additional_data
 */
OrganizationFlowResponse.prototype['additional_data'] = undefined;

/**
 * @member {module:model/OrganizationFlowResponseAllOfRelatedObjects} related_objects
 */
OrganizationFlowResponse.prototype['related_objects'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement OrganizationFlowResponseAllOf interface:
/**
 * @member {Array.<module:model/OrganizationFlowResponseAllOfData>} data
 */
OrganizationFlowResponseAllOf.prototype['data'] = undefined;
/**
 * @member {module:model/AdditionalData} additional_data
 */
OrganizationFlowResponseAllOf.prototype['additional_data'] = undefined;
/**
 * @member {module:model/OrganizationFlowResponseAllOfRelatedObjects} related_objects
 */
OrganizationFlowResponseAllOf.prototype['related_objects'] = undefined;




export default OrganizationFlowResponse;

