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
import ActivityResponseObject from './ActivityResponseObject';
import InlineResponse2001RelatedObjects from './InlineResponse2001RelatedObjects';

/**
 * The InlineResponse2004 model module.
 * @module model/InlineResponse2004
 * @version 1.0.0
 */
class InlineResponse2004 {
    /**
     * Constructs a new <code>InlineResponse2004</code>.
     * @alias module:model/InlineResponse2004
     */
    constructor() { 
        
        InlineResponse2004.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2004</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004} The populated <code>InlineResponse2004</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ActivityResponseObject.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('related_objects')) {
                obj['related_objects'] = InlineResponse2001RelatedObjects.constructFromObject(data['related_objects']);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} success
 */
InlineResponse2004.prototype['success'] = undefined;

/**
 * @member {module:model/ActivityResponseObject} data
 */
InlineResponse2004.prototype['data'] = undefined;

/**
 * @member {module:model/InlineResponse2001RelatedObjects} related_objects
 */
InlineResponse2004.prototype['related_objects'] = undefined;






export default InlineResponse2004;
