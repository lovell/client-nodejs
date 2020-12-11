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
 * The AddFileAndLinkItRequest model module.
 * @module model/AddFileAndLinkItRequest
 * @version 1.0.0
 */
class AddFileAndLinkItRequest {
    /**
     * Constructs a new <code>AddFileAndLinkItRequest</code>.
     * @alias module:model/AddFileAndLinkItRequest
     * @param fileType {module:model/AddFileAndLinkItRequest.FileTypeEnum} The file type
     * @param title {String} The title of the file
     * @param itemType {module:model/AddFileAndLinkItRequest.ItemTypeEnum} The item type
     * @param itemId {Number} ID of the item to associate the file with
     * @param remoteLocation {module:model/AddFileAndLinkItRequest.RemoteLocationEnum} The location type to send the file to. Only googledrive is supported at the moment.
     */
    constructor(fileType, title, itemType, itemId, remoteLocation) { 
        
        AddFileAndLinkItRequest.initialize(this, fileType, title, itemType, itemId, remoteLocation);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fileType, title, itemType, itemId, remoteLocation) { 
        obj['file_type'] = fileType;
        obj['title'] = title;
        obj['item_type'] = itemType;
        obj['item_id'] = itemId;
        obj['remote_location'] = remoteLocation;
    }

    /**
     * Constructs a <code>AddFileAndLinkItRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddFileAndLinkItRequest} obj Optional instance to populate.
     * @return {module:model/AddFileAndLinkItRequest} The populated <code>AddFileAndLinkItRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddFileAndLinkItRequest();

            if (data.hasOwnProperty('file_type')) {
                obj['file_type'] = ApiClient.convertToType(data['file_type'], 'String');

                delete data['file_type'];
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');

                delete data['title'];
            }
            if (data.hasOwnProperty('item_type')) {
                obj['item_type'] = ApiClient.convertToType(data['item_type'], 'String');

                delete data['item_type'];
            }
            if (data.hasOwnProperty('item_id')) {
                obj['item_id'] = ApiClient.convertToType(data['item_id'], 'Number');

                delete data['item_id'];
            }
            if (data.hasOwnProperty('remote_location')) {
                obj['remote_location'] = ApiClient.convertToType(data['remote_location'], 'String');

                delete data['remote_location'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * The file type
 * @member {module:model/AddFileAndLinkItRequest.FileTypeEnum} file_type
 */
AddFileAndLinkItRequest.prototype['file_type'] = undefined;

/**
 * The title of the file
 * @member {String} title
 */
AddFileAndLinkItRequest.prototype['title'] = undefined;

/**
 * The item type
 * @member {module:model/AddFileAndLinkItRequest.ItemTypeEnum} item_type
 */
AddFileAndLinkItRequest.prototype['item_type'] = undefined;

/**
 * ID of the item to associate the file with
 * @member {Number} item_id
 */
AddFileAndLinkItRequest.prototype['item_id'] = undefined;

/**
 * The location type to send the file to. Only googledrive is supported at the moment.
 * @member {module:model/AddFileAndLinkItRequest.RemoteLocationEnum} remote_location
 */
AddFileAndLinkItRequest.prototype['remote_location'] = undefined;





/**
 * Allowed values for the <code>file_type</code> property.
 * @enum {String}
 * @readonly
 */
AddFileAndLinkItRequest['FileTypeEnum'] = {

    /**
     * value: "gdoc"
     * @const
     */
    "gdoc": "gdoc",

    /**
     * value: "gslides"
     * @const
     */
    "gslides": "gslides",

    /**
     * value: "gsheet"
     * @const
     */
    "gsheet": "gsheet",

    /**
     * value: "gform"
     * @const
     */
    "gform": "gform",

    /**
     * value: "gdraw"
     * @const
     */
    "gdraw": "gdraw"
};


/**
 * Allowed values for the <code>item_type</code> property.
 * @enum {String}
 * @readonly
 */
AddFileAndLinkItRequest['ItemTypeEnum'] = {

    /**
     * value: "deal"
     * @const
     */
    "deal": "deal",

    /**
     * value: "organization"
     * @const
     */
    "organization": "organization",

    /**
     * value: "person"
     * @const
     */
    "person": "person"
};


/**
 * Allowed values for the <code>remote_location</code> property.
 * @enum {String}
 * @readonly
 */
AddFileAndLinkItRequest['RemoteLocationEnum'] = {

    /**
     * value: "googledrive"
     * @const
     */
    "googledrive": "googledrive"
};



export default AddFileAndLinkItRequest;

