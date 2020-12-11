# Pipedrive.BaseMailThreadAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parties** | [**BaseMailThreadAllOfParties**](BaseMailThreadAllOfParties.md) |  | [optional] 
**draftsParties** | **[Object]** | Parties of the drafted mail thread | [optional] 
**folders** | **[String]** | Folders in which messages from thread are being stored | [optional] 
**version** | **Number** | Version | [optional] 
**snippetDraft** | **String** | A snippet from a draft | [optional] 
**snippetSent** | **String** | A snippet from a message sent | [optional] 
**messageCount** | **Number** | An amount of messages | [optional] 
**hasDraftFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread has any drafts | [optional] 
**hasSentFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread has messages sent | [optional] 
**archivedFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread is archived | [optional] 
**sharedFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread is shared | [optional] 
**externalDeletedFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread has been deleted externally | [optional] 
**firstMessageToMeFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether the mail thread was initialized by others | [optional] 
**lastMessageTimestamp** | **Date** | Last message timestamp | [optional] 
**firstMessageTimestamp** | **Date** | The time when the mail thread has had the first message received or created | [optional] 
**lastMessageSentTimestamp** | **Date** | The last time when the mail thread has had a message sent | [optional] 
**lastMessageReceivedTimestamp** | **Date** | The last time when the mail thread has had a message received | [optional] 
**addTime** | **Date** | The time when the mail thread was inserted to database | [optional] 
**updateTime** | **Date** | The time when the mail thread was updated in database received | [optional] 
**dealId** | **Number** | ID of the deal | [optional] 
**dealStatus** | **String** | Status of the deal | [optional] 
**allMessagesSentFlag** | [**NumberBooleanDefault0**](NumberBooleanDefault0.md) | Whether all the mail thread messages have been sent | [optional] 

