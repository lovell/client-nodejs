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
 * The MailMessageItemForListAllOf model module.
 * @module model/MailMessageItemForListAllOf
 * @version 1.0.0
 */
class MailMessageItemForListAllOf {
    /**
     * Constructs a new <code>MailMessageItemForListAllOf</code>.
     * @alias module:model/MailMessageItemForListAllOf
     */
    constructor() { 
        
        MailMessageItemForListAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MailMessageItemForListAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MailMessageItemForListAllOf} obj Optional instance to populate.
     * @return {module:model/MailMessageItemForListAllOf} The populated <code>MailMessageItemForListAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MailMessageItemForListAllOf();

            if (data.hasOwnProperty('nylas_id')) {
                obj['nylas_id'] = ApiClient.convertToType(data['nylas_id'], 'String');

                delete data['nylas_id'];
            }
            if (data.hasOwnProperty('s3_bucket')) {
                obj['s3_bucket'] = ApiClient.convertToType(data['s3_bucket'], 'String');

                delete data['s3_bucket'];
            }
            if (data.hasOwnProperty('s3_bucket_path')) {
                obj['s3_bucket_path'] = ApiClient.convertToType(data['s3_bucket_path'], 'String');

                delete data['s3_bucket_path'];
            }
            if (data.hasOwnProperty('external_deleted_flag')) {
                obj['external_deleted_flag'] = ApiClient.convertToType(data['external_deleted_flag'], 'Boolean');

                delete data['external_deleted_flag'];
            }
            if (data.hasOwnProperty('mua_message_id')) {
                obj['mua_message_id'] = ApiClient.convertToType(data['mua_message_id'], 'String');

                delete data['mua_message_id'];
            }
            if (data.hasOwnProperty('template_id')) {
                obj['template_id'] = ApiClient.convertToType(data['template_id'], 'Number');

                delete data['template_id'];
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'String');

                delete data['timestamp'];
            }
            if (data.hasOwnProperty('item_type')) {
                obj['item_type'] = ApiClient.convertToType(data['item_type'], 'String');

                delete data['item_type'];
            }
            if (data.hasOwnProperty('company_id')) {
                obj['company_id'] = ApiClient.convertToType(data['company_id'], 'Number');

                delete data['company_id'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * The Mail Message ID assigned by the sync provider
 * @member {String} nylas_id
 */
MailMessageItemForListAllOf.prototype['nylas_id'] = undefined;

/**
 * The name of the S3 bucket
 * @member {String} s3_bucket
 */
MailMessageItemForListAllOf.prototype['s3_bucket'] = undefined;

/**
 * The path of the S3 bucket
 * @member {String} s3_bucket_path
 */
MailMessageItemForListAllOf.prototype['s3_bucket_path'] = undefined;

/**
 * If the Mail Message has been deleted on the provider side or not
 * @member {Boolean} external_deleted_flag
 */
MailMessageItemForListAllOf.prototype['external_deleted_flag'] = undefined;

/**
 * The Mail Message ID assigned by the mail user agent
 * @member {String} mua_message_id
 */
MailMessageItemForListAllOf.prototype['mua_message_id'] = undefined;

/**
 * The ID of the mail template
 * @member {Number} template_id
 */
MailMessageItemForListAllOf.prototype['template_id'] = undefined;

/**
 * The add date and time of the Mail Message
 * @member {String} timestamp
 */
MailMessageItemForListAllOf.prototype['timestamp'] = undefined;

/**
 * The type of the data item
 * @member {String} item_type
 */
MailMessageItemForListAllOf.prototype['item_type'] = undefined;

/**
 * The ID of the company
 * @member {Number} company_id
 */
MailMessageItemForListAllOf.prototype['company_id'] = undefined;






export default MailMessageItemForListAllOf;

