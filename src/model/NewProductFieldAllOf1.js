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
 * The NewProductFieldAllOf1 model module.
 * @module model/NewProductFieldAllOf1
 * @version 1.0.0
 */
class NewProductFieldAllOf1 {
    /**
     * Constructs a new <code>NewProductFieldAllOf1</code>.
     * @alias module:model/NewProductFieldAllOf1
     * @param name {String} Name of the field
     * @param fieldType {module:model/NewProductFieldAllOf1.FieldTypeEnum} Type of the field.<dl class=\"fields-list\"><dt>varchar</dt><dd>Text (up to 255 characters)</dd><dt>varchar_auto</dt><dd>Autocomplete text (up to 255 characters)</dd><dt>text</dt><dd>Long text (up to 65k characters)</dd><dt>double</dt><dd>Numeric value</dd><dt>monetary</dt><dd>Monetary field (has a numeric value and a currency value)</dd><dt>date</dt><dd>Date (format YYYY-MM-DD)</dd><dt>set</dt><dd>Options field with a possibility of having multiple chosen options</dd><dt>enum</dt><dd>Options field with a single possible chosen option</dd><dt>user</dt><dd>User field (contains a user ID of another Pipedrive user)</dd><dt>org</dt><dd>Organization field (contains an organization ID which is stored on the same account)</dd><dt>people</dt><dd>Person field (contains a product ID which is stored on the same account)</dd><dt>phone</dt><dd>Phone field (up to 255 numbers and/or characters)</dd><dt>time</dt><dd>Time field (format HH:MM:SS)</dd><dt>timerange</dt><dd>Time-range field (has a start time and end time value, both HH:MM:SS)</dd><dt>daterange</dt><dd>Date-range field (has a start date and end date value, both YYYY-MM-DD)</dd><dt>address</dt><dd>Address field (autocompleted by Google Maps)</dd></dl>
     */
    constructor(name, fieldType) { 
        
        NewProductFieldAllOf1.initialize(this, name, fieldType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, fieldType) { 
        obj['name'] = name;
        obj['field_type'] = fieldType;
    }

    /**
     * Constructs a <code>NewProductFieldAllOf1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewProductFieldAllOf1} obj Optional instance to populate.
     * @return {module:model/NewProductFieldAllOf1} The populated <code>NewProductFieldAllOf1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewProductFieldAllOf1();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('field_type')) {
                obj['field_type'] = ApiClient.convertToType(data['field_type'], 'String');
            }
            if (data.hasOwnProperty('pdOptions')) {
                obj['pdOptions'] = ApiClient.convertToType(data['pdOptions'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * Name of the field
 * @member {String} name
 */
NewProductFieldAllOf1.prototype['name'] = undefined;

/**
 * Type of the field.<dl class=\"fields-list\"><dt>varchar</dt><dd>Text (up to 255 characters)</dd><dt>varchar_auto</dt><dd>Autocomplete text (up to 255 characters)</dd><dt>text</dt><dd>Long text (up to 65k characters)</dd><dt>double</dt><dd>Numeric value</dd><dt>monetary</dt><dd>Monetary field (has a numeric value and a currency value)</dd><dt>date</dt><dd>Date (format YYYY-MM-DD)</dd><dt>set</dt><dd>Options field with a possibility of having multiple chosen options</dd><dt>enum</dt><dd>Options field with a single possible chosen option</dd><dt>user</dt><dd>User field (contains a user ID of another Pipedrive user)</dd><dt>org</dt><dd>Organization field (contains an organization ID which is stored on the same account)</dd><dt>people</dt><dd>Person field (contains a product ID which is stored on the same account)</dd><dt>phone</dt><dd>Phone field (up to 255 numbers and/or characters)</dd><dt>time</dt><dd>Time field (format HH:MM:SS)</dd><dt>timerange</dt><dd>Time-range field (has a start time and end time value, both HH:MM:SS)</dd><dt>daterange</dt><dd>Date-range field (has a start date and end date value, both YYYY-MM-DD)</dd><dt>address</dt><dd>Address field (autocompleted by Google Maps)</dd></dl>
 * @member {module:model/NewProductFieldAllOf1.FieldTypeEnum} field_type
 */
NewProductFieldAllOf1.prototype['field_type'] = undefined;

/**
 * When field_type is either set or enum, possible options must be supplied as a JSON-encoded sequential array, for example: [\"red\",\"blue\",\"lilac\"]
 * @member {Array.<Object>} pdOptions
 */
NewProductFieldAllOf1.prototype['pdOptions'] = undefined;





/**
 * Allowed values for the <code>field_type</code> property.
 * @enum {String}
 * @readonly
 */
NewProductFieldAllOf1['FieldTypeEnum'] = {

    /**
     * value: "varchar"
     * @const
     */
    "varchar": "varchar",

    /**
     * value: "varchar_auto"
     * @const
     */
    "varchar_auto": "varchar_auto",

    /**
     * value: "text"
     * @const
     */
    "text": "text",

    /**
     * value: "double"
     * @const
     */
    "double": "double",

    /**
     * value: "monetary"
     * @const
     */
    "monetary": "monetary",

    /**
     * value: "date"
     * @const
     */
    "date": "date",

    /**
     * value: "set"
     * @const
     */
    "set": "set",

    /**
     * value: "enum"
     * @const
     */
    "enum": "enum",

    /**
     * value: "user"
     * @const
     */
    "user": "user",

    /**
     * value: "org"
     * @const
     */
    "org": "org",

    /**
     * value: "people"
     * @const
     */
    "people": "people",

    /**
     * value: "phone"
     * @const
     */
    "phone": "phone",

    /**
     * value: "time"
     * @const
     */
    "time": "time",

    /**
     * value: "timerange"
     * @const
     */
    "timerange": "timerange",

    /**
     * value: "daterange"
     * @const
     */
    "daterange": "daterange",

    /**
     * value: "address"
     * @const
     */
    "address": "address"
};



export default NewProductFieldAllOf1;

