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
import RelatedDealData from './RelatedDealData';
import RelatedOrganizationDataWithActiveFlag from './RelatedOrganizationDataWithActiveFlag';
import RelatedPersonDataWithActiveFlag from './RelatedPersonDataWithActiveFlag';
import RelatedUserData from './RelatedUserData';

/**
 * The DealListActivitiesResponseAllOfRelatedObjects model module.
 * @module model/DealListActivitiesResponseAllOfRelatedObjects
 * @version 1.0.0
 */
class DealListActivitiesResponseAllOfRelatedObjects {
    /**
     * Constructs a new <code>DealListActivitiesResponseAllOfRelatedObjects</code>.
     * @alias module:model/DealListActivitiesResponseAllOfRelatedObjects
     */
    constructor() { 
        
        DealListActivitiesResponseAllOfRelatedObjects.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DealListActivitiesResponseAllOfRelatedObjects</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DealListActivitiesResponseAllOfRelatedObjects} obj Optional instance to populate.
     * @return {module:model/DealListActivitiesResponseAllOfRelatedObjects} The populated <code>DealListActivitiesResponseAllOfRelatedObjects</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DealListActivitiesResponseAllOfRelatedObjects();

            if (data.hasOwnProperty('organization')) {
                obj['organization'] = RelatedOrganizationDataWithActiveFlag.constructFromObject(data['organization']);

                delete data['organization'];
            }
            if (data.hasOwnProperty('person')) {
                obj['person'] = RelatedPersonDataWithActiveFlag.constructFromObject(data['person']);

                delete data['person'];
            }
            if (data.hasOwnProperty('deal')) {
                obj['deal'] = RelatedDealData.constructFromObject(data['deal']);

                delete data['deal'];
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = RelatedUserData.constructFromObject(data['user']);

                delete data['user'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * @member {module:model/RelatedOrganizationDataWithActiveFlag} organization
 */
DealListActivitiesResponseAllOfRelatedObjects.prototype['organization'] = undefined;

/**
 * @member {module:model/RelatedPersonDataWithActiveFlag} person
 */
DealListActivitiesResponseAllOfRelatedObjects.prototype['person'] = undefined;

/**
 * @member {module:model/RelatedDealData} deal
 */
DealListActivitiesResponseAllOfRelatedObjects.prototype['deal'] = undefined;

/**
 * @member {module:model/RelatedUserData} user
 */
DealListActivitiesResponseAllOfRelatedObjects.prototype['user'] = undefined;






export default DealListActivitiesResponseAllOfRelatedObjects;

