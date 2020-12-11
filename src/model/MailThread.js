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
import BaseMailThread from './BaseMailThread';
import BaseResponse from './BaseResponse';
import MailThreadAllOf from './MailThreadAllOf';

/**
 * The MailThread model module.
 * @module model/MailThread
 * @version 1.0.0
 */
class MailThread {
    /**
     * Constructs a new <code>MailThread</code>.
     * @alias module:model/MailThread
     * @implements module:model/BaseResponse
     * @implements module:model/MailThreadAllOf
     */
    constructor() { 
        BaseResponse.initialize(this);MailThreadAllOf.initialize(this);
        MailThread.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MailThread</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MailThread} obj Optional instance to populate.
     * @return {module:model/MailThread} The populated <code>MailThread</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MailThread();
            BaseResponse.constructFromObject(data, obj);
            MailThreadAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [BaseMailThread]);

                delete data['data'];
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
MailThread.prototype['success'] = undefined;

/**
 * The array of mail threads
 * @member {Array.<module:model/BaseMailThread>} data
 */
MailThread.prototype['data'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement MailThreadAllOf interface:
/**
 * The array of mail threads
 * @member {Array.<module:model/BaseMailThread>} data
 */
MailThreadAllOf.prototype['data'] = undefined;




export default MailThread;

