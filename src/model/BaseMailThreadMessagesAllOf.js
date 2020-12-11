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
import MailThreadParticipant from './MailThreadParticipant';
import NumberBooleanDefault02 from './NumberBooleanDefault02';

/**
 * The BaseMailThreadMessagesAllOf model module.
 * @module model/BaseMailThreadMessagesAllOf
 * @version 1.0.0
 */
class BaseMailThreadMessagesAllOf {
    /**
     * Constructs a new <code>BaseMailThreadMessagesAllOf</code>.
     * @alias module:model/BaseMailThreadMessagesAllOf
     */
    constructor() { 
        
        BaseMailThreadMessagesAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BaseMailThreadMessagesAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseMailThreadMessagesAllOf} obj Optional instance to populate.
     * @return {module:model/BaseMailThreadMessagesAllOf} The populated <code>BaseMailThreadMessagesAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseMailThreadMessagesAllOf();

            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], [MailThreadParticipant]);

                delete data['from'];
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], [MailThreadParticipant]);

                delete data['to'];
            }
            if (data.hasOwnProperty('cc')) {
                obj['cc'] = ApiClient.convertToType(data['cc'], [MailThreadParticipant]);

                delete data['cc'];
            }
            if (data.hasOwnProperty('bcc')) {
                obj['bcc'] = ApiClient.convertToType(data['bcc'], [MailThreadParticipant]);

                delete data['bcc'];
            }
            if (data.hasOwnProperty('body_url')) {
                obj['body_url'] = ApiClient.convertToType(data['body_url'], 'String');

                delete data['body_url'];
            }
            if (data.hasOwnProperty('mail_thread_id')) {
                obj['mail_thread_id'] = ApiClient.convertToType(data['mail_thread_id'], 'Number');

                delete data['mail_thread_id'];
            }
            if (data.hasOwnProperty('draft')) {
                obj['draft'] = ApiClient.convertToType(data['draft'], 'String');

                delete data['draft'];
            }
            if (data.hasOwnProperty('has_body_flag')) {
                obj['has_body_flag'] = ApiClient.convertToType(data['has_body_flag'], NumberBooleanDefault02);

                delete data['has_body_flag'];
            }
            if (data.hasOwnProperty('sent_flag')) {
                obj['sent_flag'] = ApiClient.convertToType(data['sent_flag'], NumberBooleanDefault02);

                delete data['sent_flag'];
            }
            if (data.hasOwnProperty('sent_from_pipedrive_flag')) {
                obj['sent_from_pipedrive_flag'] = ApiClient.convertToType(data['sent_from_pipedrive_flag'], NumberBooleanDefault02);

                delete data['sent_from_pipedrive_flag'];
            }
            if (data.hasOwnProperty('message_time')) {
                obj['message_time'] = ApiClient.convertToType(data['message_time'], 'Date');

                delete data['message_time'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'Date');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'Date');

                delete data['update_time'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * Senders of the mail thread
 * @member {Array.<module:model/MailThreadParticipant>} from
 */
BaseMailThreadMessagesAllOf.prototype['from'] = undefined;

/**
 * Recipients of the mail thread
 * @member {Array.<module:model/MailThreadParticipant>} to
 */
BaseMailThreadMessagesAllOf.prototype['to'] = undefined;

/**
 * Participants of the Cc
 * @member {Array.<module:model/MailThreadParticipant>} cc
 */
BaseMailThreadMessagesAllOf.prototype['cc'] = undefined;

/**
 * Participants of the Bcc
 * @member {Array.<module:model/MailThreadParticipant>} bcc
 */
BaseMailThreadMessagesAllOf.prototype['bcc'] = undefined;

/**
 * A link to the mail thread message
 * @member {String} body_url
 */
BaseMailThreadMessagesAllOf.prototype['body_url'] = undefined;

/**
 * ID of the mail thread
 * @member {Number} mail_thread_id
 */
BaseMailThreadMessagesAllOf.prototype['mail_thread_id'] = undefined;

/**
 * If the mail message has a draft status then the value is the mail message object as JSON formatted string, otherwise null.
 * @member {String} draft
 */
BaseMailThreadMessagesAllOf.prototype['draft'] = undefined;

/**
 * Whether the mail thread message has a body
 * @member {module:model/NumberBooleanDefault02} has_body_flag
 */
BaseMailThreadMessagesAllOf.prototype['has_body_flag'] = undefined;

/**
 * Whether the mail thread message is sent
 * @member {module:model/NumberBooleanDefault02} sent_flag
 */
BaseMailThreadMessagesAllOf.prototype['sent_flag'] = undefined;

/**
 * Whether the mail thread message is sent from Pipedrive
 * @member {module:model/NumberBooleanDefault02} sent_from_pipedrive_flag
 */
BaseMailThreadMessagesAllOf.prototype['sent_from_pipedrive_flag'] = undefined;

/**
 * The time when the mail message was received or created
 * @member {Date} message_time
 */
BaseMailThreadMessagesAllOf.prototype['message_time'] = undefined;

/**
 * The time when the mail message was inserted to database
 * @member {Date} add_time
 */
BaseMailThreadMessagesAllOf.prototype['add_time'] = undefined;

/**
 * The time when the mail message was updated in database received
 * @member {Date} update_time
 */
BaseMailThreadMessagesAllOf.prototype['update_time'] = undefined;






export default BaseMailThreadMessagesAllOf;

