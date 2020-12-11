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
 * The ActivityRecordAdditionalData model module.
 * @module model/ActivityRecordAdditionalData
 * @version 1.0.0
 */
class ActivityRecordAdditionalData {
    /**
     * Constructs a new <code>ActivityRecordAdditionalData</code>.
     * @alias module:model/ActivityRecordAdditionalData
     */
    constructor() { 
        
        ActivityRecordAdditionalData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActivityRecordAdditionalData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActivityRecordAdditionalData} obj Optional instance to populate.
     * @return {module:model/ActivityRecordAdditionalData} The populated <code>ActivityRecordAdditionalData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivityRecordAdditionalData();

            if (data.hasOwnProperty('updates_story_id')) {
                obj['updates_story_id'] = ApiClient.convertToType(data['updates_story_id'], 'Number');

                delete data['updates_story_id'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * This field will be deprecated
 * @member {Number} updates_story_id
 */
ActivityRecordAdditionalData.prototype['updates_story_id'] = undefined;






export default ActivityRecordAdditionalData;

