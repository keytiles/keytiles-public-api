import { CommonErrorCodes, ContainerResponseClass, ContainerQueryRangeResponseClass } from './common-types-v3';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
/**
 * Defines the beginning of the query range - you are interested in data which time is >= than this timestamp.
  
Format is mixed. It can be
 * a UNIX timestamp in UTC (seconds since Epoch) e.g.: `1657261221` - means 2022-07-08 6:20:21 GMT
   (note: server and client clock might be different! see: /v2/system/clock endpoint to query server time)
 * a relative time spec compared to current time in form of 'now[-X<m|h|d>]' where 'm' means minutes, 'h' means hours and 'd' means days,
   e.g.: `now-10m` means 10 minutes earlier compared to current time,
   `now-2h` means 2 hours earlier and so on

   
This must point to the past!   (note: server validates according to his own clock!)

 */
export type FromTimestampParameter = string;
/**
 * Defines the end of the query range - you are interested in data which time is <= than this timestamp.
  
**Default value:** the current timestamp, so 'now' if you do not specify this parameter.
  
Format is mixed. It can be
 * a UNIX timestamp in UTC (seconds since Epoch) e.g.: `1657261221` - means 2022-07-08 6:20:21 GMT
   (note: server and client clock might be different! see: /v2/system/clock endpoint to query server time)
 * a relative time spec compared to current time in form of 'now[-X<m|h|d>]' where 'm' means minutes, 'h' means hours and 'd' means days,
   e.g.: `now-10m` means 10 minutes earlier compared to current time,
   `now-2h` means 2 hours earlier and so on

   
Can not point to the future!   (note: server validates according to his own clock!)

 */
export type ToTimestampParameter = string;
export type StatApiEndpointLocalErrorCodes = typeof StatApiEndpointLocalErrorCodes[keyof typeof StatApiEndpointLocalErrorCodes];
export declare const StatApiEndpointLocalErrorCodes: {
    readonly queryRange_from_extended: "queryRange_from_extended";
    readonly queryRange_to_extended: "queryRange_to_extended";
    readonly queryRange_extended: "queryRange_extended";
    readonly queryRange_corrected: "queryRange_corrected";
    readonly queryRange_from_corrected: "queryRange_from_corrected";
    readonly queryRange_to_corrected: "queryRange_to_corrected";
    readonly containerId_missing: "containerId_missing";
    readonly containerId_invalid: "containerId_invalid";
    readonly containerSetup_invalid: "containerSetup_invalid";
    readonly filter_not_supported: "filter_not_supported";
    readonly sorting_column_not_in_interest: "sorting_column_not_in_interest";
    readonly groupBy_eventType_not_set: "groupBy_eventType_not_set";
};
/**
 * NOTE! Error codes is an Enum. Unfortunately in OpenApi (so far) there is no possibility to provide description for Enum values. But we have detailed description of each error codes! Please check the OpenApi file in our Github repo - you find them as comments for each Enum values!
 */
export type StatApiEndpointErrorCodes = StatApiEndpointLocalErrorCodes & CommonErrorCodes;
export type EventCountersResponseClassAllOf = {
    keyColumnsMappings?: KeyColumnsIntIdMappingsClass;
    resultColumns?: EventCountersHeaderClass;
    /** These are the rows of the data - each row represented by an array of Integer values.
    
  In rows the number of columns and the index of each colum is identical to the description you find in `/resultColumns` entry!
   */
    aggregatedCounterRows?: number[][];
};
export type EventCountersResponseClass = ContainerQueryRangeResponseClass & EventCountersResponseClassAllOf;
/**
 * Containes Tile counters and Tile details. This is a map. Keys are tileIds.
 */
export type TileEventCountersResponseClassAllOfTiles = {
    [key: string]: TileClass;
};
export type TileEventCountersResponseClassAllOf = {
    /** Containes Tile counters and Tile details. This is a map. Keys are tileIds. */
    tiles?: TileEventCountersResponseClassAllOfTiles;
};
export type TileEventCountersResponseClass = EventCountersResponseClass & TileEventCountersResponseClassAllOf;
/**
 * Containes Tile details. This is a map. Keys are tileIds.
 */
export type GetTilesResponseClassAllOfTiles = {
    [key: string]: TileDataClass;
};
export type GetTilesResponseClassAllOf = {
    /** Containes Tile details. This is a map. Keys are tileIds. */
    tiles?: GetTilesResponseClassAllOfTiles;
};
export type GetTilesResponseClass = ContainerResponseClass & GetTilesResponseClassAllOf;
/**
 * Contains information about under which tileGroupPaths this Tile showed up in the query range. This is a map. Keys are IDs assigned to tileGroupPath - you can resolve them with entried in `/keyColumnsMappings/tileGroupPath`
  
note: this info you just get if you have NOT executed the request with `?includeTileDetails=false`!

 * @nullable
 */
export type TileDataClassTileGroupPaths = {
    [key: string]: TileGroupPathClass;
} | null;
export interface TileDataClass {
    /** Gives you the type of the tile.
   */
    typeName?: string;
    /**
     * You can store some labels - key-value pairs - for Tiles. They are collected during hit collection (see: Hit Collection API - [https://www.keytiles.com/developer-area/hit-attributes](https://www.keytiles.com/developer-area/hit-attributes#tileLabelsJSON)).
    
  If you do so you get back the JSON string representation of these labels in this field - or you get NULL if there are no labels stored.
  
     * @nullable
     */
    labelsJSON?: string | null;
    /**
     * When did we register the first event for this tile? Basically: publish time of this tile. UNIX timestamp (seconds since Epoch) in UTC.
    
  note: this info you just get if you have NOT executed the request with `?includeTileDetails=false`!
  
     * @nullable
     */
    firstSeen?: number | null;
    /**
     * When did we register the last event for this tile? UNIX timestamp (seconds since Epoch) in UTC.
    
  note: this info you just get if you have NOT executed the request with `?includeTileDetails=false`!
  
     * @nullable
     */
    lastSeen?: number | null;
    /**
     * Contains information about under which tileGroupPaths this Tile showed up in the query range. This is a map. Keys are IDs assigned to tileGroupPath - you can resolve them with entried in `/keyColumnsMappings/tileGroupPath`
    
  note: this info you just get if you have NOT executed the request with `?includeTileDetails=false`!
  
     * @nullable
     */
    tileGroupPaths?: TileDataClassTileGroupPaths;
}
/**
 * Contains information about under which tileGroupPaths this Tile showed up in the query range. This is a map. Keys are IDs assigned to tileGroupPath - you can resolve them with entried in `/keyColumnsMappings/tileGroupPath`
  
note: this info you just get if you have NOT executed the request with `?includeTileDetails=false`!

 * @nullable
 */
export type TileClassTileGroupPaths = {
    [key: string]: TileGroupPathClass;
} | null;
export interface TileClass {
    /** Gives you the type of the tile. The integer is the ID of the tile type which you can get back from `/keyColumnsMappings/tileType` part
    
  note: this value is always present
   */
    type?: number;
    /**
     * You can store some labels - key-value pairs - for Tiles. They are collected during hit collection (see: Hit Collection API - [https://www.keytiles.com/developer-area/hit-attributes](https://www.keytiles.com/developer-area/hit-attributes#tileLabelsJSON)).
    
  If you do so you get back the JSON string representation of these labels in this field - or you get NULL if there are no labels stored.
  
     * @nullable
     */
    labelsJSON?: string | null;
    /**
     * When did we register the first event for this tile? Basically: publish time of this tile. UNIX timestamp (seconds since Epoch) in UTC.
    
  note: this info you just get if you have NOT executed the request with `?includeTileDetails=false`!
  
     * @nullable
     */
    firstSeen?: number | null;
    /**
     * When did we register the last event for this tile? UNIX timestamp (seconds since Epoch) in UTC.
    
  note: this info you just get if you have NOT executed the request with `?includeTileDetails=false`!
  
     * @nullable
     */
    lastSeen?: number | null;
    /**
     * Contains information about under which tileGroupPaths this Tile showed up in the query range. This is a map. Keys are IDs assigned to tileGroupPath - you can resolve them with entried in `/keyColumnsMappings/tileGroupPath`
    
  note: this info you just get if you have NOT executed the request with `?includeTileDetails=false`!
  
     * @nullable
     */
    tileGroupPaths?: TileClassTileGroupPaths;
    counterRows?: number[][];
}
export interface TileGroupPathClass {
    /** The list of (cleaned, means: removed query arguments, anchors) URLs we captured for this tile under this tileGroupPath */
    urls?: string[];
    /** The list of titles we captured for this tile under this tileGroupPath. Please note: normally this should just be one title! If you see more than it is against our recommended best practices and you should take actions! */
    titles?: string[];
}
export interface TimeIntervalClass {
    /** Beginning of interval in seconds relative to the returned global data time-frame. If you want to know absolute timestamp then add this to `/dataFromTimestamp` attribute value */
    starts?: number;
    /** Length of this interval in seconds */
    length?: number;
}
/**
 * To save lots of space Keytiles maps Strings to unique Integers (acting as IDs) - this way can return counter rows  as just Integer arrays. Of course to make it readable again you need the reverse mapping: which Integer encodes which Strings? This is this mapping.

 * @nullable
 */
export type IntIdToStrMappingClass = {
    [key: string]: string;
} | null;
/**
 * This entry is present only if you requested `groupBy=time:x` - so break down by time intervals - in your request. The keys in this object are numerical IDs of time intervals while values giving you attributes of each intervals.
 * @nullable
 */
export type TimeColumnIntIdToIntervalMappingClassTime = {
    [key: string]: TimeIntervalClass;
} | null;
/**
 * @nullable
 */
export type TimeColumnIntIdToIntervalMappingClass = {
    /**
     * This entry is present only if you requested `groupBy=time:x` - so break down by time intervals - in your request. The keys in this object are numerical IDs of time intervals while values giving you attributes of each intervals.
     * @nullable
     */
    time?: TimeColumnIntIdToIntervalMappingClassTime;
} | null;
/**
 * @nullable
 */
export type KeyColumnsIntIdMappingsClassAllOf = {
    eventType?: IntIdToStrMappingClass;
    visitorType?: IntIdToStrMappingClass;
    userAgentType?: IntIdToStrMappingClass;
    tileLanguage?: IntIdToStrMappingClass;
    tileType?: IntIdToStrMappingClass;
    tileGroupPath?: IntIdToStrMappingClass;
    eventSourceType?: IntIdToStrMappingClass;
    eventSourceName?: IntIdToStrMappingClass;
    visitSourceType?: IntIdToStrMappingClass;
    visitSourceName?: IntIdToStrMappingClass;
    trafficSourceType?: IntIdToStrMappingClass;
    trafficSourceName?: IntIdToStrMappingClass;
    campaign?: IntIdToStrMappingClass;
    campaignMedium?: IntIdToStrMappingClass;
    campaignContent?: IntIdToStrMappingClass;
    primaryTags?: IntIdToStrMappingClass;
    secondaryTags?: IntIdToStrMappingClass;
} | null;
/**
 * This object gives you concrete values for "groupBy" criteria if you requested data groups using the `groupBy` parameter.

 * @nullable
 */
export type KeyColumnsIntIdMappingsClass = TimeColumnIntIdToIntervalMappingClass & KeyColumnsIntIdMappingsClassAllOf | null;
/**
 * You will get data as an array of Integer values - like in a .csv file. This object gives you the name of the columns. So the `headers` so to speak.
  
In the data rows (int array) you will always have `keyColumns` + `counterColumns` number of integers and you need to interpret them in this order.
  
Possible counter columns are the following:

 */
export interface EventCountersHeaderClass {
    /**
     * This array tells you the names of key columns - in an index maintained form. This just has values if you request `groupBy` setup.
    
  Possible key columns are the following:
   * time
   * eventType
   * userAgentType
   * visitorType
   * tileType
   * tileGroupPath
   * tileLanguage
   * trafficSourceType (deprecated, `eventSourceType` and `visitSourceType` took over)
   * trafficSourceName (deprecated, `eventSourceName` and `visitSourceName` took over)
   * eventSourceType
   * eventSourceName
   * visitSourceType
   * visitSourceName
  
     */
    keyColumns?: string[];
    /**
     * This array tells you the names of counter columns - in an index maintained form. But please keep in mind: these are always placed after the `keyColumns`!
    
  Please note: what you get here depends on what you request using the `?interest=` parameter. See 'interest' parameter description for more details!
  
     */
    counterColumns?: string[];
}
export interface MappingRecordClass {
    /** */
    strId?: string;
    /** */
    intId?: number;
    /** @nullable */
    firstSeenTs?: number | null;
    /** @nullable */
    lastSeenTs?: number | null;
}
export type GetIdMappingsResponseClassAllOf = {
    /** @nullable */
    eventTypes?: MappingRecordClass[] | null;
    /** @nullable */
    visitorTypes?: MappingRecordClass[] | null;
    /** @nullable */
    userAgentTypes?: MappingRecordClass[] | null;
    /** @nullable */
    tileLanguages?: MappingRecordClass[] | null;
    /** @nullable */
    tileTypes?: MappingRecordClass[] | null;
    /** @nullable */
    tileGroupPaths?: MappingRecordClass[] | null;
    /** @nullable */
    trafficSourceNames?: MappingRecordClass[] | null;
    /** @nullable */
    campaigns?: MappingRecordClass[] | null;
    /** @nullable */
    campaignMediums?: MappingRecordClass[] | null;
    /** @nullable */
    campaignContents?: MappingRecordClass[] | null;
    /** @nullable */
    primaryTags?: MappingRecordClass[] | null;
    /** @nullable */
    secondaryTags?: MappingRecordClass[] | null;
};
export type GetIdMappingsResponseClass = ContainerQueryRangeResponseClass & GetIdMappingsResponseClassAllOf;
export interface SystemClockResponseClass {
    /** Current server time in UNIX timestamp in UTC (seconds since Epoch) when this response was generated */
    serverTime?: number;
}
/**
 * Data filter option. Comma separated list of event types you want to limit the query for. If you list more values here then they are interpreted with an OR operator.
  
note: if you have comma in your event names (strange, but ok...) you can escape that with `\\` character!

 */
export type EventTypesOnlyParameter = string;
/**
 * Data filter option. Comma separated list of tileIds you want to limit the query for - of course in this case only the counters of these tiles are returned.  If you list more values here then they are interpreted with an OR operator.
  
note: if you have comma in your tileIds (strange, but ok...) you can escape that with `\\` character!

 */
export type TileIdsOnlyParameter = string;
/**
 * Data filter option. Comma separated list of tile types you want to limit the query for. If you list more values here then they are interpreted with an OR operator.
  
IMPORTANT! You can not use this together with `tileTypeIsNot` parameter! You can only use this or that but not both.
  
In the list you can either use:
 * The name of the type ('frontpage', 'page', 'article', ...), or
 * The numeric ID of the tile type - returned by `/v2/stat/webhits/{containerId}/idmappings` endpoint - using the format `id:<numeric ID>`, e.g. **"id:123"**

 */
export type TileTypesOnlyParameter = string;
/**
 * Data filter option. Comma separated list of tile types you want the query to be excluded from. If you list more values here then they are interpreted with an OR operator.
  
IMPORTANT! You can not use this together with `tileTypesOnly` parameter! You can only use this or that but not both.
  
In the list you can either use:
 * The name of the type ('frontpage', 'page', 'article', ...), or
 * The numeric ID of the tile type - returned by `/v2/stat/webhits/{containerId}/idmappings` endpoint - using the format `id:<numeric ID>`, e.g. **"id:123"**

 */
export type TileTypeIsNotParameter = string;
/**
 * Data filter option. Comma separated list of matchers (see below) which returns counters only for those Tiles who's tileGroupPath is matching to one of the listed matchers. So if you list more values here then they are interpreted with an OR operator.
  
note: if you have comma in your matcher (strange, but ok...) you can escape that with `\\` character!
  
You can use the **'\*'** character to match any substring. But where and how you put this Asterisk character matters! Let us show you how through an example!
Let's assume you have articles and pages (Tiles) in the following content areas:
  
 * /auto
 * /tech
 * /tech/mobile-rumours
 * /tech/mobile
 * /tech/mobile/android
 * /tech/mobile/ios
 * /politics
  
And now you execute queries with two different **tileGroupPathMatchingOnly** settings:
 1. **"/tech/mobile\*"** and
 1. **"/tech/mobile/\*"**

In the first query **"/tech/mobile\*"** would match for everything begins with "/tech/mobile" string. So this would include *"/tech/mobile/android"*, *"/tech/mobile/ios"* Tiles but also would include *"/tech/mobile-rumours"* Tiles. Which are clearly two different areas right?
  
But what if you want to really limit for Tiles under the *"/tech/mobile"* area?
  
Well then you can use the second query value: **"/tech/mobile/\*"**. This would include *"/tech/mobile/android"*, *"/tech/mobile/ios"* but would NOT include *"/tech/mobile-rumours"* anymore - as that is not a match anymore. But we are not done yet! Please note: this would also include Tiles under *"/tech/mobile/"* group itself. Because **"/\*"** means "everything which is under this group"
 

 */
export type TileGroupPathMatchingOnlyParameter = string;
/**
 * Data filter option. Comma separated list of *userAgentType*s you want to limit the query for. If you list more values here then they are interpreted with an OR operator.
  
In the list you can either use:
 * The name of the UserAgent type (see below), or
 * The numeric ID of the UserAgent type - returned by `/v2/stat/webhits/{containerId}/idmappings` endpoint - using the format `id:<numeric ID>`, e.g. **"id:123"**
  
note: if you have comma in your userAgent types (strange, but ok...) you can escape that with `\\` character!
  
The built-in values are the following:
 * **browser-desktop** - visitor is using a standard web browser running on a desktop computer
 * **browser-mobile** - visitor is using a standard web browser running on a mobile device
 * **bot** - visitor was a known bot
 * **unknown** - if during hit-collection (see Hit Collection API!) *userAgentType* was not given or was NULL
then Keytiles system will fall back to this value
  
tip: see [/v2/stat/webhits/{containerId}/idmappings](#/WebHits%20-%20Event%20counters/get_v2_stat_webhits__containerId__eventcounts) endpoint docs! With that you can query which userAgentTypes Keytiles have seen.

 */
export type UserAgentTypesOnlyParameter = string;
/**
 * Data filter option. Comma separated list of *visitorType*s you want to limit the query for. If you list more values here then they are interpreted with an OR operator.
  
In the list you can either use:
 * The name of the visitor type, or
 * The numeric ID of the visitor type - returned by `/v2/stat/webhits/{containerId}/idmappings` endpoint - using the format `id:<numeric ID>`, e.g. **"id:123"**
  
note: if you have comma in your visitor types (strange, but ok...) you can escape that with `\\` character!
  
**NULL** is a special value indicating cases where *visitorType* was not set.
  
Please note that visitorTypes is something you introduce for your Container tracking! If you do not do this then all your traffic falls under "NULL" value here.

 */
export type VisitorTypesOnlyParameter = string;
/**
 * Data filter option. Comma separated list of ISO-639-2 languages codes (e.g. 'en', 'de', ...). Only data captured on the given languages is returned if you apply this filter. If you list more values here then they are interpreted with an OR operator.
  
**NULL** is a special value indicating cases where *tileLanguage* was not identified/captured.

 */
export type TileLanguagesOnlyParameter = string;
/**
 * Data filter option. Comma separated list of "link", "search", "social", "direct" or "internal" strings - indicating from which source the events came. If you list more values here then they are interpreted with an OR operator so sending in e.g. "link, search" would return everything which came from "link" or "search".

 */
export type EventSourceTypesOnlyParameter = string;
/**
 * Data filter option. Comma separated list of "link", "search", "social", "direct" or "internal" strings - indicating from which source the events came. If you list more values here then they are interpreted with an OR operator so sending in e.g. "link, search" would return everything which came from "link" or "search".

 */
export type TagValuesOnlyParameter = string;
/**
 * Data filter option. Comma separated list of external source names - indicating from which exact source the events came. If you list more values here then they are interpreted with an OR operator.
  
In the list you can either use:
 * The name of the external source, or
 * The numeric ID of the external source - returned by `/v2/stat/webhits/{containerId}/idmappings` endpoint - using the format `id:<numeric ID>`, e.g. **"id:123"**
  
Note: the names you specify here are definitely correlating with source type (we mentioned in 'eventSourceTypesOnly' description) "link", "search", "social", "direct" or "internal"!
The correlation looks like this:
 * "link": then the name is basically the hostname of the website which sent the visitor to your website. Like "abc.com".
 * "social": then the name is the name how Keytiles classified it for Social sources - here please take a look at [How does referrer grouping work?](https://www.keytiles.com/docs/how-does-referrer-grouping-work#The-referrer-classifying-configuration)
 * "search": then the name is the name how Keytiles classified it for Search sources - here please take a look at [How does referrer grouping work?](https://www.keytiles.com/docs/how-does-referrer-grouping-work#The-referrer-classifying-configuration)
 * "direct" or "internal": they do not have a name, name is always NULL for these

So be careful when you are using this filter how you set up `eventSourceTypesOnly` if you use it!
For example:
 * If you are curious about events came from "Facebook" then you can send `eventSourceNamesOnly=Facebook`. (note: this belongs to source type "social" - see 'eventSourceTypesOnly')
 * If you are curious about events came from another website "abc.com" which is an external link then you can send `eventSourceNamesOnly=abc.com`. (note: this belongs to source type "link" - see 'eventSourceTypesOnly')
 * If you send `eventSourceNamesOnly=Facebook,abc.com` that would give you all events came from "Facebook" OR "abc.com". (note: and then this would belong to source types "link" and "social" - see 'eventSourceTypesOnly')
 * If you would send `eventSourceNamesOnly=abc.com & eventSourceTypesOnly=direct` you would receive 0 as a result - because for sure nothing comes in from "abc.com" which events came from a "direct" visit ...
  

 */
export type EventSourceNamesOnlyParameter = string;
/**
 * This is **deprecated!** Please use `eventSourceNamesOnly` or `visitSourceNamesOnly` instead to specify your interest precisely!
If you do use this option then to maintain backward compatibility this is an alias for `eventSourceNamesOnly`.

 * @deprecated
 */
export type TrafficSourceNamesOnlyParameter = string;
/**
 * This is **deprecated!** Please use `eventSourceTypesOnly` or `visitSourceTypesOnly` instead to specify your interest precisely!
If you do use this option then to maintain backward compatibility this is an alias for `eventSourceTypesOnly`.

 * @deprecated
 */
export type TrafficSourceTypesOnlyParameter = string;
/**
 * Data filter option.
  
Either
 * Comma separated list of campaigns - indicating from which campaigns the visitor arrived to your website. If you list more values here then they are interpreted with an OR operator.
 * A simple `*` value which tells Keytiles to return counters belong to *any* Campaign regardless which one it is.
  
In the comma separated list you can either use:
 * The name of the Campaign, or
 * The numeric ID of the Campaign - returned by `/v2/stat/webhits/{containerId}/idmappings` endpoint - using the format `id:<numeric ID>`, e.g. **"id:123"**
  
Campaign tracking in Keytiles works based on Urchin Tracking Module (UTM) parameters specification. For more info visit: [Wikipedia - UTM parameters](https://en.wikipedia.org/wiki/UTM_parameters)

 */
export type CampaignsOnlyParameter = string;
/**
 * Data filter option. Comma separated list of campaign mediums - indicating from which campaign mediums the visitor arrived to your website.
  
In the list you can either use:
 * The name of the Campaign Medium, or
 * The numeric ID of the Campaign Medium - returned by `/v2/stat/webhits/{containerId}/idmappings` endpoint - using the format `id:<numeric ID>`, e.g. **"id:123"**
  
Campaign tracking in Keytiles works based on Urchin Tracking Module (UTM) parameters specification. For more info visit: [Wikipedia - UTM parameters](https://en.wikipedia.org/wiki/UTM_parameters)

 */
export type CampaignMediumsOnlyParameter = string;
/**
 * Data filter option. Comma separated list of campaign contents - indicating from which campaign contents the visitor arrived to your website.
  
In the list you can either use:
 * The name of the Campaign Content, or
 * The numeric ID of the Campaign Content - returned by `/v2/stat/webhits/{containerId}/idmappings` endpoint - using the format `id:<numeric ID>`, e.g. **"id:123"**
  
Campaign tracking in Keytiles works based on Urchin Tracking Module (UTM) parameters specification. For more info visit: [Wikipedia - UTM parameters](https://en.wikipedia.org/wiki/UTM_parameters)

 */
export type CampaignContentsOnlyParameter = string;
/**
 * Data filter option. Comma separated list of matching primary custom tags.
  
This is the pair of `primaryTags` in our [Hit Collection API](https://www.keytiles.com/developer-area/keytiles-apis#hit-collection-api). If you use them to segment your traffic your custom way then now you can filter for them with this prameter.
  
To understand it better what these "tags" are doing and how you can use it for your own goals please check our article: [Custom segmentation of traffic](https://keytiles.com/developer-area/custom-segmentation-of-traffic)!
  
**Good to know!** If you are curious about traffic where there was no primary cutom tag at all you have a special option here! You can encode the "no tags at all" by adding "id:0" to this param so `primaryTagsOnly=id:0` encodes exactly this.

 */
export type PrimaryTagsOnlyParameter = string;
/**
 * Data filter option. Comma separated list of matching secondary custom tags.
It works the same way as `primaryTagsOnly` - please read info there!

 */
export type SecondaryTagsOnlyParameter = string;
/**
 * Comma separated list of your extra interest.
  
It is "extra interest" because by default only the `eventCountTotal` counter is returned. But with extending your interest you can get more counters.
  
The possible values are the following:
 * **newVisitors**
   You will get the `eventCountUnknownNewVsRetVisitor` and `eventCountNewVisitor` counters additionally. You can compute the number of
   "returning" visitors with the formula `eventCountTotal - eventCountUnknownNewVsRetVisitor - eventCountNewVisitor`.
 * **bounceVisitors**
   You will get the `eventCountNoSession` and `eventCountBounceVisitor` counters additionally. You can compute the number of "non-bounce" visitors
   with the formula `eventCountTotal - eventCountNoSession - eventCountBounceVisitor`.
 * **newVisitors,bounceVisitors**
   If you request both together then you do not simply get union of counters but actually a few more too. You would get `eventCountNoSession`, `eventCountUnknownNewVsRetVisitor`,
   `eventCountNewVisitor`, `eventCountBounceVisitor`, `eventCountBounceNewVisitor` and `eventCountBounceUnknownNewVsRetVisitor`.
   We *really recommend* to check and read our article (see below) explaining things!
 * **referrerCounts**
   You will get the `eventCountDirect`, `eventCountSearchReferrer`, `eventCountSocialReferrer`, `eventCountLinkReferrer`
   and `eventCountCampaignReferrer` counters additionally. If you are curious about how many internal (visitor is visiting a certain article coming
   from another page on your website already) click happened you can compute this with formula `eventCountTotal - eventCountDirect - eventCountSearchReferrer - eventCountSocialReferrer - eventCountLinkReferrer` easily.
 * **visitSession**
   You will get the `eventCountNoSession`, `visitSessionStartedCount` and `visitSessionEventFirstOfTypeCount` counters additionally.
   
 You can find more information about the available event counters in our website Developer Area here:
 [Returned event counters and their meaning](https://www.keytiles.com/developer-area/query-api-v2/webhits-event-counter-queries#event-counters-reference)

 */
export type InterestParameter = string;
/**
 * This is a boolean parameter so you can send `true` or `false` here as a value. By default the value is `true`.
  
When you query the tile counters apart from the counters in the response Keytiles also returns information about the tiles like `firstSeen`, `lastSeen` (see: *TileClass*) and `titles` and `urls` (see: *TileGroupPathClass*). The fact is that due to server side storage logic returning this information happens in an extra step making the query more expensive and slower.
  
However there are scenarios when you do not really need this data (you might know these from an earlier query) so to speed up the query you can tell Keytiles to save this effort.

 */
export type IncludeTileDetailsParameter = string;
/**
 * Comma separated list of criteria you want to have the data grouped by.
  
Normally without using this option you just get the requested counters (fine grained by *interest* parameter) aggregated into sum values in the query range. This will tell you "your site received 1242 events in this time range" without any further break down. However if you for example want to see "ok but how many different events did I get" you need a way to tell this wish to Keytiles.
  
In this case you could send in `groupBy=eventType` and as a result in the response instead of the one 1242 (sum) number you will see this came together from view 846, download 129 and contact-form-sent 267 times. So you get a break down by `eventType` in this case. This is useful if your goal is to show on a bar chart for example the different event types ratio.
  
And if you want to get this data in an - let's say - hourly resolution then you can go further and send in `groupBy=eventType,time:1h` in this parameter.
  
There are more criteria not just `eventType` or `time` and you can combine them.
  
**But BE AWARE!** More criteria you request makes the response bigger and bigger as the returned counters are broke down into more and more groups so you have to keep an eye on what you really need!
   
The possible values are the following:
 * **time:x<m|h|d|w>** - you can specify a time window like `2h` which means 2 hours groups (`m`=minutes, `h`=hours, `d`=days, `w`=weeks) with this - you get the counters aggregated per time window in the response
 * **eventType** - you get the counters aggregated per event types in the response
 See also: `eventTypesOnly` filter option!
 * **userAgentType** - you get the counters aggregated per userAgent types in the response
 See also: `userAgentTypesOnly` filter option!
 * **visitorType** - you get the counters aggregated per visitor types in the response
 See also: `visitorTypesOnly` filter option!
 * **tileType** - you get the counters aggregated per tileTypes in the response
 See also: `tileTypesOnly` filter option!
 * **tileGroupPath** - you get the counters aggregated per tileGroupPaths in the response
 See also: `tileGroupPathsOnly` filter option!
 * **tileLanguage** - you get the counters aggregated per languages in the response
 See also: `tileLanguagesOnly` filter option!
 * **primaryTags[:max]** - you get the counters aggregated per primary (custom) tags in the response
 but since there could be a lot you can optionally specify let's say "max top 10" in which case you get your top 10 plus all `other` as one group.
 See also: `primaryTagsOnly` filter option for more details!
 * **secondaryTags[:max]** - you get the counters aggregated per secondary (custom) tags in the response
 but since there could be a lot you can optionally specify let's say "max top 10" in which case you get your top 10 plus all `other` as one group.
 See also: `secondaryTagsOnly` filter option for more details!
 * **eventSourceType** - you get the counters aggregated per event source types in the response like `search`, `social`, etc.
 See also: `eventSourceTypesOnly` filter option!
 * **eventSourceName[:max]** - you get the counters aggregated per event sources in the response like `Facebook`, etc
                                 but since there could be a lot you can optionally specify "max top 10" in which case you get your
                                 top 10 plus all `other` as one group
 See also: `eventSourceNamesOnly` filter option!
 * **visitSourceType** - you get the counters aggregated per types of source of the visit in the response like `search`, `social`, etc.
 See also: `visitSourceTypesOnly` filter option!
 * **visitSourceName[:max]** - you get the counters aggregated per names of source of the visit in the response like `Facebook`, etc
                                 but since there could be a lot you can optionally specify "max top 10" in which case you get your
                                 top 10 plus all `other` as one group
 See also: `visitSourceNamesOnly` filter option!
 * **campaign[:max]** - you get the counters aggregated per campaigns in the response
                        but since there could be a lot you can optionally specify "max top 10" in which case you get your
                        top 10 plus all `other` as one group
 See also: `campaignsOnly` filter option!
 * **campaignMedium[:max]** - you get the counters aggregated per campaign mediums in the response
                        but since there could be a lot you can optionally specify "max top 10" in which case you get your
                        top 10 plus all `other` as one group
 See also: `campaignMediumsOnly` filter option!
 * **campaignContent[:max]** - you get the counters aggregated per campaign contents in the response
                        but since there could be a lot you can optionally specify "max top 10" in which case you get your
                        top 10 plus all `other` as one group
 See also: `campaignContentsOnly` filter option!
 * **trafficSourceType** - **deprecated!** Please use `eventSourceType` or `visitSourceType` instead!
 * **trafficSourceName[:max]** - **deprecated!** Please use `eventSourceName` or `visitSourceName` instead!

 */
export type GroupByParameter = string;
/**
 * Maximum number of tiles in the response. By saying `limit=100` you will get back the top 100 tiles only who received the most event counts alltogether during the query range.

 */
export type LimitParameter = number;
/**
 * In this parameter you can setup a threshold either with absolute value or with percentage.
  
If you use
 * absolute value, like `threshold=10` then you will get back only those tiles and their details who received at least 10 hits
   during the query range
 * percentage value, like `threshold=3.5%` then you will get back only those tiles and their details who received at least 3.5% of the
   hits got by the tile which received the most hits during the query range

 */
export type ThresholdParameter = string;
/**
 * When you use `limit` or `threshold` parameters you can optionally define which Counter column should be used to order the records so term like 'top 100 Tiles' becomes well defined. Sorts the tiles in desc order based on the returned event counter field you specify here.
  
**note:** This parameter is only used if you use `?limit=` or `?threshold=` parameters! Otherwise query will fail. Reason: server will not sort the tiles anyhow without reason as this is extra effort to do it on server side.
  
You can use any event counter (see `?interest` parameter!) which is in the response for this.
  
By default the `eventCountTotal` field is used - if you omit this parameter. But maybe you actually want something different... Maybe you want to sort the 'top 100' tiles based on `visitSessionStartedCount` because you are curious about the top landing pages?
  
In some cases you also have extra options here which are the following:
 * `eventCountTotal[:eventType1,eventType2,...,eventTypeN]`
   If you use `eventCountTotal` then you also have the possibility to provide a comma separated list of event types. If you do then
   only the SUM of those event types are used to form up the `eventCountTotal` and participate in the sorting.
     
   Some notes to consider:
     * This possibility can be only used together with using `?groupBy=eventType` - otherwise your query will fail
     * If you also use `?eventTypesOnly` filter then you can only use those event types which are part of the filter too - otherwise your
     query will fail.
     * In the event type list instead of name of the event type you can also use its numeric ID - returned by `/v2/stat/webhits/{containerId}/idmappings`
     endpoint - using the format `id:<numeric ID>`, e.g. **"id:123"**. So alltogether you send in something looks like this: `eventCountTotal:id:123,id:456`
  

 */
export type SortByParameter = string;
/**
 * Comma separated list - at least one element - of the following:
 * eventType
 * userAgentType
 * visitorType
 * tileType
 * tileGroupPath
 * referrerName
 * campaign
 * campaignMedium
 * campaignContent
 * primaryTag
 * secondaryTag

 */
export type MappingTypesParameter = string;
/**
 * This is a boolean parameter so you can send `true` or `false` here as a value. By default the value is `false`.
  
This controls whether to add first/last seen timetamps to each record or not. In most of the cases this is irrelevant so to save response size by default we do not do this

 */
export type IncludeFirstLastSeenTsParameter = string;
export type GetV2StatWebhitsContainerIdIdmappingsParams = {
    /**
     * Defines the beginning of the query range - you are interested in data which time is >= than this timestamp.
      
    Format is mixed. It can be
     * a UNIX timestamp in UTC (seconds since Epoch) e.g.: `1657261221` - means 2022-07-08 6:20:21 GMT
       (note: server and client clock might be different! see: /v2/system/clock endpoint to query server time)
     * a relative time spec compared to current time in form of 'now[-X<m|h|d>]' where 'm' means minutes, 'h' means hours and 'd' means days,
       e.g.: `now-10m` means 10 minutes earlier compared to current time,
       `now-2h` means 2 hours earlier and so on
    
       
    This must point to the past!   (note: server validates according to his own clock!)
    
     */
    fromTimestamp: FromTimestampParameter;
    /**
     * Defines the end of the query range - you are interested in data which time is <= than this timestamp.
      
    **Default value:** the current timestamp, so 'now' if you do not specify this parameter.
      
    Format is mixed. It can be
     * a UNIX timestamp in UTC (seconds since Epoch) e.g.: `1657261221` - means 2022-07-08 6:20:21 GMT
       (note: server and client clock might be different! see: /v2/system/clock endpoint to query server time)
     * a relative time spec compared to current time in form of 'now[-X<m|h|d>]' where 'm' means minutes, 'h' means hours and 'd' means days,
       e.g.: `now-10m` means 10 minutes earlier compared to current time,
       `now-2h` means 2 hours earlier and so on
    
       
    Can not point to the future!   (note: server validates according to his own clock!)
    
     */
    toTimestamp?: ToTimestampParameter;
    /**
     * Comma separated list - at least one element - of the following:
     * eventType
     * userAgentType
     * visitorType
     * tileType
     * tileGroupPath
     * referrerName
     * campaign
     * campaignMedium
     * campaignContent
     * primaryTag
     * secondaryTag
    
     */
    mappingTypes: MappingTypesParameter;
    /**
     * This is a boolean parameter so you can send `true` or `false` here as a value. By default the value is `false`.
      
    This controls whether to add first/last seen timetamps to each record or not. In most of the cases this is irrelevant so to save response size by default we do not do this
    
     */
    includeFirstLastSeenTs?: IncludeFirstLastSeenTsParameter;
};
export type GetV2StatWebhitsContainerIdTilesParams = {
    /**
     * Comma separated list of tileIds you want to limit the query for.
      
    note: if you have comma in your tileIds (strange, but ok...) you can escape that with `\\` character!
    
     */
    tileIdsOnly: string;
};
export type GetV2StatWebhitsContainerIdEventcountsParams = {
    /**
     * Defines the beginning of the query range - you are interested in data which time is >= than this timestamp.
      
    Format is mixed. It can be
     * a UNIX timestamp in UTC (seconds since Epoch) e.g.: `1657261221` - means 2022-07-08 6:20:21 GMT
       (note: server and client clock might be different! see: /v2/system/clock endpoint to query server time)
     * a relative time spec compared to current time in form of 'now[-X<m|h|d>]' where 'm' means minutes, 'h' means hours and 'd' means days,
       e.g.: `now-10m` means 10 minutes earlier compared to current time,
       `now-2h` means 2 hours earlier and so on
    
       
    This must point to the past!   (note: server validates according to his own clock!)
    
     */
    fromTimestamp: FromTimestampParameter;
    /**
     * Defines the end of the query range - you are interested in data which time is <= than this timestamp.
      
    **Default value:** the current timestamp, so 'now' if you do not specify this parameter.
      
    Format is mixed. It can be
     * a UNIX timestamp in UTC (seconds since Epoch) e.g.: `1657261221` - means 2022-07-08 6:20:21 GMT
       (note: server and client clock might be different! see: /v2/system/clock endpoint to query server time)
     * a relative time spec compared to current time in form of 'now[-X<m|h|d>]' where 'm' means minutes, 'h' means hours and 'd' means days,
       e.g.: `now-10m` means 10 minutes earlier compared to current time,
       `now-2h` means 2 hours earlier and so on
    
       
    Can not point to the future!   (note: server validates according to his own clock!)
    
     */
    toTimestamp?: ToTimestampParameter;
    /**
     * Comma separated list of your extra interest.
      
    It is "extra interest" because by default only the `eventCountTotal` counter is returned. But with extending your interest you can get more counters.
      
    The possible values are the following:
     * **newVisitors**
       You will get the `eventCountUnknownNewVsRetVisitor` and `eventCountNewVisitor` counters additionally. You can compute the number of
       "returning" visitors with the formula `eventCountTotal - eventCountUnknownNewVsRetVisitor - eventCountNewVisitor`.
     * **bounceVisitors**
       You will get the `eventCountNoSession` and `eventCountBounceVisitor` counters additionally. You can compute the number of "non-bounce" visitors
       with the formula `eventCountTotal - eventCountNoSession - eventCountBounceVisitor`.
     * **newVisitors,bounceVisitors**
       If you request both together then you do not simply get union of counters but actually a few more too. You would get `eventCountNoSession`, `eventCountUnknownNewVsRetVisitor`,
       `eventCountNewVisitor`, `eventCountBounceVisitor`, `eventCountBounceNewVisitor` and `eventCountBounceUnknownNewVsRetVisitor`.
       We *really recommend* to check and read our article (see below) explaining things!
     * **referrerCounts**
       You will get the `eventCountDirect`, `eventCountSearchReferrer`, `eventCountSocialReferrer`, `eventCountLinkReferrer`
       and `eventCountCampaignReferrer` counters additionally. If you are curious about how many internal (visitor is visiting a certain article coming
       from another page on your website already) click happened you can compute this with formula `eventCountTotal - eventCountDirect - eventCountSearchReferrer - eventCountSocialReferrer - eventCountLinkReferrer` easily.
     * **visitSession**
       You will get the `eventCountNoSession`, `visitSessionStartedCount` and `visitSessionEventFirstOfTypeCount` counters additionally.
       
     You can find more information about the available event counters in our website Developer Area here:
     [Returned event counters and their meaning](https://www.keytiles.com/developer-area/query-api-v2/webhits-event-counter-queries#event-counters-reference)
    
     */
    interest?: InterestParameter;
    /**
     * Comma separated list of criteria you want to have the data grouped by.
      
    Normally without using this option you just get the requested counters (fine grained by *interest* parameter) aggregated into sum values in the query range. This will tell you "your site received 1242 events in this time range" without any further break down. However if you for example want to see "ok but how many different events did I get" you need a way to tell this wish to Keytiles.
      
    In this case you could send in `groupBy=eventType` and as a result in the response instead of the one 1242 (sum) number you will see this came together from view 846, download 129 and contact-form-sent 267 times. So you get a break down by `eventType` in this case. This is useful if your goal is to show on a bar chart for example the different event types ratio.
      
    And if you want to get this data in an - let's say - hourly resolution then you can go further and send in `groupBy=eventType,time:1h` in this parameter.
      
    There are more criteria not just `eventType` or `time` and you can combine them.
      
    **But BE AWARE!** More criteria you request makes the response bigger and bigger as the returned counters are broke down into more and more groups so you have to keep an eye on what you really need!
       
    The possible values are the following:
     * **time:x<m|h|d|w>** - you can specify a time window like `2h` which means 2 hours groups (`m`=minutes, `h`=hours, `d`=days, `w`=weeks) with this - you get the counters aggregated per time window in the response
     * **eventType** - you get the counters aggregated per event types in the response
     See also: `eventTypesOnly` filter option!
     * **userAgentType** - you get the counters aggregated per userAgent types in the response
     See also: `userAgentTypesOnly` filter option!
     * **visitorType** - you get the counters aggregated per visitor types in the response
     See also: `visitorTypesOnly` filter option!
     * **tileType** - you get the counters aggregated per tileTypes in the response
     See also: `tileTypesOnly` filter option!
     * **tileGroupPath** - you get the counters aggregated per tileGroupPaths in the response
     See also: `tileGroupPathsOnly` filter option!
     * **tileLanguage** - you get the counters aggregated per languages in the response
     See also: `tileLanguagesOnly` filter option!
     * **primaryTags[:max]** - you get the counters aggregated per primary (custom) tags in the response
     but since there could be a lot you can optionally specify let's say "max top 10" in which case you get your top 10 plus all `other` as one group.
     See also: `primaryTagsOnly` filter option for more details!
     * **secondaryTags[:max]** - you get the counters aggregated per secondary (custom) tags in the response
     but since there could be a lot you can optionally specify let's say "max top 10" in which case you get your top 10 plus all `other` as one group.
     See also: `secondaryTagsOnly` filter option for more details!
     * **eventSourceType** - you get the counters aggregated per event source types in the response like `search`, `social`, etc.
     See also: `eventSourceTypesOnly` filter option!
     * **eventSourceName[:max]** - you get the counters aggregated per event sources in the response like `Facebook`, etc
                                     but since there could be a lot you can optionally specify "max top 10" in which case you get your
                                     top 10 plus all `other` as one group
     See also: `eventSourceNamesOnly` filter option!
     * **visitSourceType** - you get the counters aggregated per types of source of the visit in the response like `search`, `social`, etc.
     See also: `visitSourceTypesOnly` filter option!
     * **visitSourceName[:max]** - you get the counters aggregated per names of source of the visit in the response like `Facebook`, etc
                                     but since there could be a lot you can optionally specify "max top 10" in which case you get your
                                     top 10 plus all `other` as one group
     See also: `visitSourceNamesOnly` filter option!
     * **campaign[:max]** - you get the counters aggregated per campaigns in the response
                            but since there could be a lot you can optionally specify "max top 10" in which case you get your
                            top 10 plus all `other` as one group
     See also: `campaignsOnly` filter option!
     * **campaignMedium[:max]** - you get the counters aggregated per campaign mediums in the response
                            but since there could be a lot you can optionally specify "max top 10" in which case you get your
                            top 10 plus all `other` as one group
     See also: `campaignMediumsOnly` filter option!
     * **campaignContent[:max]** - you get the counters aggregated per campaign contents in the response
                            but since there could be a lot you can optionally specify "max top 10" in which case you get your
                            top 10 plus all `other` as one group
     See also: `campaignContentsOnly` filter option!
     * **trafficSourceType** - **deprecated!** Please use `eventSourceType` or `visitSourceType` instead!
     * **trafficSourceName[:max]** - **deprecated!** Please use `eventSourceName` or `visitSourceName` instead!
    
     */
    groupBy?: GroupByParameter;
    /**
     * Data filter option. Comma separated list of event types you want to limit the query for. If you list more values here then they are interpreted with an OR operator.
      
    note: if you have comma in your event names (strange, but ok...) you can escape that with `\\` character!
    
     */
    eventTypesOnly?: EventTypesOnlyParameter;
    /**
     * Data filter option. Comma separated list of tile types you want to limit the query for. If you list more values here then they are interpreted with an OR operator.
      
    IMPORTANT! You can not use this together with `tileTypeIsNot` parameter! You can only use this or that but not both.
      
    In the list you can either use:
     * The name of the type ('frontpage', 'page', 'article', ...), or
     * The numeric ID of the tile type - returned by `/v2/stat/webhits/{containerId}/idmappings` endpoint - using the format `id:<numeric ID>`, e.g. **"id:123"**
    
     */
    tileTypesOnly?: TileTypesOnlyParameter;
    /**
     * Data filter option. Comma separated list of tile types you want the query to be excluded from. If you list more values here then they are interpreted with an OR operator.
      
    IMPORTANT! You can not use this together with `tileTypesOnly` parameter! You can only use this or that but not both.
      
    In the list you can either use:
     * The name of the type ('frontpage', 'page', 'article', ...), or
     * The numeric ID of the tile type - returned by `/v2/stat/webhits/{containerId}/idmappings` endpoint - using the format `id:<numeric ID>`, e.g. **"id:123"**
    
     */
    tileTypeIsNot?: TileTypeIsNotParameter;
    /**
     * Data filter option. Comma separated list of *userAgentType*s you want to limit the query for. If you list more values here then they are interpreted with an OR operator.
      
    In the list you can either use:
     * The name of the UserAgent type (see below), or
     * The numeric ID of the UserAgent type - returned by `/v2/stat/webhits/{containerId}/idmappings` endpoint - using the format `id:<numeric ID>`, e.g. **"id:123"**
      
    note: if you have comma in your userAgent types (strange, but ok...) you can escape that with `\\` character!
      
    The built-in values are the following:
     * **browser-desktop** - visitor is using a standard web browser running on a desktop computer
     * **browser-mobile** - visitor is using a standard web browser running on a mobile device
     * **bot** - visitor was a known bot
     * **unknown** - if during hit-collection (see Hit Collection API!) *userAgentType* was not given or was NULL
    then Keytiles system will fall back to this value
      
    tip: see [/v2/stat/webhits/{containerId}/idmappings](#/WebHits%20-%20Event%20counters/get_v2_stat_webhits__containerId__eventcounts) endpoint docs! With that you can query which userAgentTypes Keytiles have seen.
    
     */
    userAgentTypesOnly?: UserAgentTypesOnlyParameter;
    /**
     * Data filter option. Comma separated list of matchers (see below) which returns counters only for those Tiles who's tileGroupPath is matching to one of the listed matchers. So if you list more values here then they are interpreted with an OR operator.
      
    note: if you have comma in your matcher (strange, but ok...) you can escape that with `\\` character!
      
    You can use the **'\*'** character to match any substring. But where and how you put this Asterisk character matters! Let us show you how through an example!
    Let's assume you have articles and pages (Tiles) in the following content areas:
      
     * /auto
     * /tech
     * /tech/mobile-rumours
     * /tech/mobile
     * /tech/mobile/android
     * /tech/mobile/ios
     * /politics
      
    And now you execute queries with two different **tileGroupPathMatchingOnly** settings:
     1. **"/tech/mobile\*"** and
     1. **"/tech/mobile/\*"**
    
    In the first query **"/tech/mobile\*"** would match for everything begins with "/tech/mobile" string. So this would include *"/tech/mobile/android"*, *"/tech/mobile/ios"* Tiles but also would include *"/tech/mobile-rumours"* Tiles. Which are clearly two different areas right?
      
    But what if you want to really limit for Tiles under the *"/tech/mobile"* area?
      
    Well then you can use the second query value: **"/tech/mobile/\*"**. This would include *"/tech/mobile/android"*, *"/tech/mobile/ios"* but would NOT include *"/tech/mobile-rumours"* anymore - as that is not a match anymore. But we are not done yet! Please note: this would also include Tiles under *"/tech/mobile/"* group itself. Because **"/\*"** means "everything which is under this group"
     
    
     */
    tileGroupPathMatchingOnly?: TileGroupPathMatchingOnlyParameter;
    /**
     * Data filter option. Comma separated list of *visitorType*s you want to limit the query for. If you list more values here then they are interpreted with an OR operator.
      
    In the list you can either use:
     * The name of the visitor type, or
     * The numeric ID of the visitor type - returned by `/v2/stat/webhits/{containerId}/idmappings` endpoint - using the format `id:<numeric ID>`, e.g. **"id:123"**
      
    note: if you have comma in your visitor types (strange, but ok...) you can escape that with `\\` character!
      
    **NULL** is a special value indicating cases where *visitorType* was not set.
      
    Please note that visitorTypes is something you introduce for your Container tracking! If you do not do this then all your traffic falls under "NULL" value here.
    
     */
    visitorTypesOnly?: VisitorTypesOnlyParameter;
    /**
     * Data filter option. Comma separated list of ISO-639-2 languages codes (e.g. 'en', 'de', ...). Only data captured on the given languages is returned if you apply this filter. If you list more values here then they are interpreted with an OR operator.
      
    **NULL** is a special value indicating cases where *tileLanguage* was not identified/captured.
    
     */
    tileLanguagesOnly?: TileLanguagesOnlyParameter;
    /**
     * Data filter option. Comma separated list of matching primary custom tags.
      
    This is the pair of `primaryTags` in our [Hit Collection API](https://www.keytiles.com/developer-area/keytiles-apis#hit-collection-api). If you use them to segment your traffic your custom way then now you can filter for them with this prameter.
      
    To understand it better what these "tags" are doing and how you can use it for your own goals please check our article: [Custom segmentation of traffic](https://keytiles.com/developer-area/custom-segmentation-of-traffic)!
      
    **Good to know!** If you are curious about traffic where there was no primary cutom tag at all you have a special option here! You can encode the "no tags at all" by adding "id:0" to this param so `primaryTagsOnly=id:0` encodes exactly this.
    
     */
    primaryTagsOnly?: PrimaryTagsOnlyParameter;
    /**
     * Data filter option. Comma separated list of matching secondary custom tags.
    It works the same way as `primaryTagsOnly` - please read info there!
    
     */
    secondaryTagsOnly?: SecondaryTagsOnlyParameter;
    /**
     * Data filter option. Comma separated list of "link", "search", "social", "direct" or "internal" strings - indicating from which source the events came. If you list more values here then they are interpreted with an OR operator so sending in e.g. "link, search" would return everything which came from "link" or "search".
    
     */
    eventSourceTypesOnly?: EventSourceTypesOnlyParameter;
    /**
     * Data filter option. Comma separated list of external source names - indicating from which exact source the events came. If you list more values here then they are interpreted with an OR operator.
      
    In the list you can either use:
     * The name of the external source, or
     * The numeric ID of the external source - returned by `/v2/stat/webhits/{containerId}/idmappings` endpoint - using the format `id:<numeric ID>`, e.g. **"id:123"**
      
    Note: the names you specify here are definitely correlating with source type (we mentioned in 'eventSourceTypesOnly' description) "link", "search", "social", "direct" or "internal"!
    The correlation looks like this:
     * "link": then the name is basically the hostname of the website which sent the visitor to your website. Like "abc.com".
     * "social": then the name is the name how Keytiles classified it for Social sources - here please take a look at [How does referrer grouping work?](https://www.keytiles.com/docs/how-does-referrer-grouping-work#The-referrer-classifying-configuration)
     * "search": then the name is the name how Keytiles classified it for Search sources - here please take a look at [How does referrer grouping work?](https://www.keytiles.com/docs/how-does-referrer-grouping-work#The-referrer-classifying-configuration)
     * "direct" or "internal": they do not have a name, name is always NULL for these
    
    So be careful when you are using this filter how you set up `eventSourceTypesOnly` if you use it!
    For example:
     * If you are curious about events came from "Facebook" then you can send `eventSourceNamesOnly=Facebook`. (note: this belongs to source type "social" - see 'eventSourceTypesOnly')
     * If you are curious about events came from another website "abc.com" which is an external link then you can send `eventSourceNamesOnly=abc.com`. (note: this belongs to source type "link" - see 'eventSourceTypesOnly')
     * If you send `eventSourceNamesOnly=Facebook,abc.com` that would give you all events came from "Facebook" OR "abc.com". (note: and then this would belong to source types "link" and "social" - see 'eventSourceTypesOnly')
     * If you would send `eventSourceNamesOnly=abc.com & eventSourceTypesOnly=direct` you would receive 0 as a result - because for sure nothing comes in from "abc.com" which events came from a "direct" visit ...
      
    
     */
    eventSourceNamesOnly?: EventSourceNamesOnlyParameter;
    /**
     * This is **deprecated!** Please use `eventSourceTypesOnly` or `visitSourceTypesOnly` instead to specify your interest precisely!
    If you do use this option then to maintain backward compatibility this is an alias for `eventSourceTypesOnly`.
    
     */
    trafficSourceTypesOnly?: TrafficSourceTypesOnlyParameter;
    /**
     * This is **deprecated!** Please use `eventSourceNamesOnly` or `visitSourceNamesOnly` instead to specify your interest precisely!
    If you do use this option then to maintain backward compatibility this is an alias for `eventSourceNamesOnly`.
    
     */
    trafficSourceNamesOnly?: TrafficSourceNamesOnlyParameter;
    /**
     * Data filter option.
      
    Either
     * Comma separated list of campaigns - indicating from which campaigns the visitor arrived to your website. If you list more values here then they are interpreted with an OR operator.
     * A simple `*` value which tells Keytiles to return counters belong to *any* Campaign regardless which one it is.
      
    In the comma separated list you can either use:
     * The name of the Campaign, or
     * The numeric ID of the Campaign - returned by `/v2/stat/webhits/{containerId}/idmappings` endpoint - using the format `id:<numeric ID>`, e.g. **"id:123"**
      
    Campaign tracking in Keytiles works based on Urchin Tracking Module (UTM) parameters specification. For more info visit: [Wikipedia - UTM parameters](https://en.wikipedia.org/wiki/UTM_parameters)
    
     */
    campaignsOnly?: CampaignsOnlyParameter;
    /**
     * Data filter option. Comma separated list of campaign mediums - indicating from which campaign mediums the visitor arrived to your website.
      
    In the list you can either use:
     * The name of the Campaign Medium, or
     * The numeric ID of the Campaign Medium - returned by `/v2/stat/webhits/{containerId}/idmappings` endpoint - using the format `id:<numeric ID>`, e.g. **"id:123"**
      
    Campaign tracking in Keytiles works based on Urchin Tracking Module (UTM) parameters specification. For more info visit: [Wikipedia - UTM parameters](https://en.wikipedia.org/wiki/UTM_parameters)
    
     */
    campaignMediumsOnly?: CampaignMediumsOnlyParameter;
    /**
     * Data filter option. Comma separated list of campaign contents - indicating from which campaign contents the visitor arrived to your website.
      
    In the list you can either use:
     * The name of the Campaign Content, or
     * The numeric ID of the Campaign Content - returned by `/v2/stat/webhits/{containerId}/idmappings` endpoint - using the format `id:<numeric ID>`, e.g. **"id:123"**
      
    Campaign tracking in Keytiles works based on Urchin Tracking Module (UTM) parameters specification. For more info visit: [Wikipedia - UTM parameters](https://en.wikipedia.org/wiki/UTM_parameters)
    
     */
    campaignContentsOnly?: CampaignContentsOnlyParameter;
};
export type GetV2StatWebhitsContainerIdEventcountsTilesParams = {
    /**
     * Defines the beginning of the query range - you are interested in data which time is >= than this timestamp.
      
    Format is mixed. It can be
     * a UNIX timestamp in UTC (seconds since Epoch) e.g.: `1657261221` - means 2022-07-08 6:20:21 GMT
       (note: server and client clock might be different! see: /v2/system/clock endpoint to query server time)
     * a relative time spec compared to current time in form of 'now[-X<m|h|d>]' where 'm' means minutes, 'h' means hours and 'd' means days,
       e.g.: `now-10m` means 10 minutes earlier compared to current time,
       `now-2h` means 2 hours earlier and so on
    
       
    This must point to the past!   (note: server validates according to his own clock!)
    
     */
    fromTimestamp: FromTimestampParameter;
    /**
     * Defines the end of the query range - you are interested in data which time is <= than this timestamp.
      
    **Default value:** the current timestamp, so 'now' if you do not specify this parameter.
      
    Format is mixed. It can be
     * a UNIX timestamp in UTC (seconds since Epoch) e.g.: `1657261221` - means 2022-07-08 6:20:21 GMT
       (note: server and client clock might be different! see: /v2/system/clock endpoint to query server time)
     * a relative time spec compared to current time in form of 'now[-X<m|h|d>]' where 'm' means minutes, 'h' means hours and 'd' means days,
       e.g.: `now-10m` means 10 minutes earlier compared to current time,
       `now-2h` means 2 hours earlier and so on
    
       
    Can not point to the future!   (note: server validates according to his own clock!)
    
     */
    toTimestamp?: ToTimestampParameter;
    /**
     * Comma separated list of your extra interest.
      
    It is "extra interest" because by default only the `eventCountTotal` counter is returned. But with extending your interest you can get more counters.
      
    The possible values are the following:
     * **newVisitors**
       You will get the `eventCountUnknownNewVsRetVisitor` and `eventCountNewVisitor` counters additionally. You can compute the number of
       "returning" visitors with the formula `eventCountTotal - eventCountUnknownNewVsRetVisitor - eventCountNewVisitor`.
     * **bounceVisitors**
       You will get the `eventCountNoSession` and `eventCountBounceVisitor` counters additionally. You can compute the number of "non-bounce" visitors
       with the formula `eventCountTotal - eventCountNoSession - eventCountBounceVisitor`.
     * **newVisitors,bounceVisitors**
       If you request both together then you do not simply get union of counters but actually a few more too. You would get `eventCountNoSession`, `eventCountUnknownNewVsRetVisitor`,
       `eventCountNewVisitor`, `eventCountBounceVisitor`, `eventCountBounceNewVisitor` and `eventCountBounceUnknownNewVsRetVisitor`.
       We *really recommend* to check and read our article (see below) explaining things!
     * **referrerCounts**
       You will get the `eventCountDirect`, `eventCountSearchReferrer`, `eventCountSocialReferrer`, `eventCountLinkReferrer`
       and `eventCountCampaignReferrer` counters additionally. If you are curious about how many internal (visitor is visiting a certain article coming
       from another page on your website already) click happened you can compute this with formula `eventCountTotal - eventCountDirect - eventCountSearchReferrer - eventCountSocialReferrer - eventCountLinkReferrer` easily.
     * **visitSession**
       You will get the `eventCountNoSession`, `visitSessionStartedCount` and `visitSessionEventFirstOfTypeCount` counters additionally.
       
     You can find more information about the available event counters in our website Developer Area here:
     [Returned event counters and their meaning](https://www.keytiles.com/developer-area/query-api-v2/webhits-event-counter-queries#event-counters-reference)
    
     */
    interest?: InterestParameter;
    /**
     * Comma separated list of criteria you want to have the data grouped by.
      
    Normally without using this option you just get the requested counters (fine grained by *interest* parameter) aggregated into sum values in the query range. This will tell you "your site received 1242 events in this time range" without any further break down. However if you for example want to see "ok but how many different events did I get" you need a way to tell this wish to Keytiles.
      
    In this case you could send in `groupBy=eventType` and as a result in the response instead of the one 1242 (sum) number you will see this came together from view 846, download 129 and contact-form-sent 267 times. So you get a break down by `eventType` in this case. This is useful if your goal is to show on a bar chart for example the different event types ratio.
      
    And if you want to get this data in an - let's say - hourly resolution then you can go further and send in `groupBy=eventType,time:1h` in this parameter.
      
    There are more criteria not just `eventType` or `time` and you can combine them.
      
    **But BE AWARE!** More criteria you request makes the response bigger and bigger as the returned counters are broke down into more and more groups so you have to keep an eye on what you really need!
       
    The possible values are the following:
     * **time:x<m|h|d|w>** - you can specify a time window like `2h` which means 2 hours groups (`m`=minutes, `h`=hours, `d`=days, `w`=weeks) with this - you get the counters aggregated per time window in the response
     * **eventType** - you get the counters aggregated per event types in the response
     See also: `eventTypesOnly` filter option!
     * **userAgentType** - you get the counters aggregated per userAgent types in the response
     See also: `userAgentTypesOnly` filter option!
     * **visitorType** - you get the counters aggregated per visitor types in the response
     See also: `visitorTypesOnly` filter option!
     * **tileType** - you get the counters aggregated per tileTypes in the response
     See also: `tileTypesOnly` filter option!
     * **tileGroupPath** - you get the counters aggregated per tileGroupPaths in the response
     See also: `tileGroupPathsOnly` filter option!
     * **tileLanguage** - you get the counters aggregated per languages in the response
     See also: `tileLanguagesOnly` filter option!
     * **primaryTags[:max]** - you get the counters aggregated per primary (custom) tags in the response
     but since there could be a lot you can optionally specify let's say "max top 10" in which case you get your top 10 plus all `other` as one group.
     See also: `primaryTagsOnly` filter option for more details!
     * **secondaryTags[:max]** - you get the counters aggregated per secondary (custom) tags in the response
     but since there could be a lot you can optionally specify let's say "max top 10" in which case you get your top 10 plus all `other` as one group.
     See also: `secondaryTagsOnly` filter option for more details!
     * **eventSourceType** - you get the counters aggregated per event source types in the response like `search`, `social`, etc.
     See also: `eventSourceTypesOnly` filter option!
     * **eventSourceName[:max]** - you get the counters aggregated per event sources in the response like `Facebook`, etc
                                     but since there could be a lot you can optionally specify "max top 10" in which case you get your
                                     top 10 plus all `other` as one group
     See also: `eventSourceNamesOnly` filter option!
     * **visitSourceType** - you get the counters aggregated per types of source of the visit in the response like `search`, `social`, etc.
     See also: `visitSourceTypesOnly` filter option!
     * **visitSourceName[:max]** - you get the counters aggregated per names of source of the visit in the response like `Facebook`, etc
                                     but since there could be a lot you can optionally specify "max top 10" in which case you get your
                                     top 10 plus all `other` as one group
     See also: `visitSourceNamesOnly` filter option!
     * **campaign[:max]** - you get the counters aggregated per campaigns in the response
                            but since there could be a lot you can optionally specify "max top 10" in which case you get your
                            top 10 plus all `other` as one group
     See also: `campaignsOnly` filter option!
     * **campaignMedium[:max]** - you get the counters aggregated per campaign mediums in the response
                            but since there could be a lot you can optionally specify "max top 10" in which case you get your
                            top 10 plus all `other` as one group
     See also: `campaignMediumsOnly` filter option!
     * **campaignContent[:max]** - you get the counters aggregated per campaign contents in the response
                            but since there could be a lot you can optionally specify "max top 10" in which case you get your
                            top 10 plus all `other` as one group
     See also: `campaignContentsOnly` filter option!
     * **trafficSourceType** - **deprecated!** Please use `eventSourceType` or `visitSourceType` instead!
     * **trafficSourceName[:max]** - **deprecated!** Please use `eventSourceName` or `visitSourceName` instead!
    
     */
    groupBy?: GroupByParameter;
    /**
     * This is a boolean parameter so you can send `true` or `false` here as a value. By default the value is `true`.
      
    When you query the tile counters apart from the counters in the response Keytiles also returns information about the tiles like `firstSeen`, `lastSeen` (see: *TileClass*) and `titles` and `urls` (see: *TileGroupPathClass*). The fact is that due to server side storage logic returning this information happens in an extra step making the query more expensive and slower.
      
    However there are scenarios when you do not really need this data (you might know these from an earlier query) so to speed up the query you can tell Keytiles to save this effort.
    
     */
    includeTileDetails?: IncludeTileDetailsParameter;
    /**
     * Maximum number of tiles in the response. By saying `limit=100` you will get back the top 100 tiles only who received the most event counts alltogether during the query range.
    
     */
    limit?: LimitParameter;
    /**
     * In this parameter you can setup a threshold either with absolute value or with percentage.
      
    If you use
     * absolute value, like `threshold=10` then you will get back only those tiles and their details who received at least 10 hits
       during the query range
     * percentage value, like `threshold=3.5%` then you will get back only those tiles and their details who received at least 3.5% of the
       hits got by the tile which received the most hits during the query range
    
     */
    threshold?: ThresholdParameter;
    /**
     * When you use `limit` or `threshold` parameters you can optionally define which Counter column should be used to order the records so term like 'top 100 Tiles' becomes well defined. Sorts the tiles in desc order based on the returned event counter field you specify here.
      
    **note:** This parameter is only used if you use `?limit=` or `?threshold=` parameters! Otherwise query will fail. Reason: server will not sort the tiles anyhow without reason as this is extra effort to do it on server side.
      
    You can use any event counter (see `?interest` parameter!) which is in the response for this.
      
    By default the `eventCountTotal` field is used - if you omit this parameter. But maybe you actually want something different... Maybe you want to sort the 'top 100' tiles based on `visitSessionStartedCount` because you are curious about the top landing pages?
      
    In some cases you also have extra options here which are the following:
     * `eventCountTotal[:eventType1,eventType2,...,eventTypeN]`
       If you use `eventCountTotal` then you also have the possibility to provide a comma separated list of event types. If you do then
       only the SUM of those event types are used to form up the `eventCountTotal` and participate in the sorting.
         
       Some notes to consider:
         * This possibility can be only used together with using `?groupBy=eventType` - otherwise your query will fail
         * If you also use `?eventTypesOnly` filter then you can only use those event types which are part of the filter too - otherwise your
         query will fail.
         * In the event type list instead of name of the event type you can also use its numeric ID - returned by `/v2/stat/webhits/{containerId}/idmappings`
         endpoint - using the format `id:<numeric ID>`, e.g. **"id:123"**. So alltogether you send in something looks like this: `eventCountTotal:id:123,id:456`
      
    
     */
    sortBy?: SortByParameter;
    /**
     * Data filter option. Comma separated list of event types you want to limit the query for. If you list more values here then they are interpreted with an OR operator.
      
    note: if you have comma in your event names (strange, but ok...) you can escape that with `\\` character!
    
     */
    eventTypesOnly?: EventTypesOnlyParameter;
    /**
     * Data filter option. Comma separated list of tileIds you want to limit the query for - of course in this case only the counters of these tiles are returned.  If you list more values here then they are interpreted with an OR operator.
      
    note: if you have comma in your tileIds (strange, but ok...) you can escape that with `\\` character!
    
     */
    tileIdsOnly?: TileIdsOnlyParameter;
    /**
     * Data filter option. Comma separated list of tile types you want to limit the query for. If you list more values here then they are interpreted with an OR operator.
      
    IMPORTANT! You can not use this together with `tileTypeIsNot` parameter! You can only use this or that but not both.
      
    In the list you can either use:
     * The name of the type ('frontpage', 'page', 'article', ...), or
     * The numeric ID of the tile type - returned by `/v2/stat/webhits/{containerId}/idmappings` endpoint - using the format `id:<numeric ID>`, e.g. **"id:123"**
    
     */
    tileTypesOnly?: TileTypesOnlyParameter;
    /**
     * Data filter option. Comma separated list of tile types you want the query to be excluded from. If you list more values here then they are interpreted with an OR operator.
      
    IMPORTANT! You can not use this together with `tileTypesOnly` parameter! You can only use this or that but not both.
      
    In the list you can either use:
     * The name of the type ('frontpage', 'page', 'article', ...), or
     * The numeric ID of the tile type - returned by `/v2/stat/webhits/{containerId}/idmappings` endpoint - using the format `id:<numeric ID>`, e.g. **"id:123"**
    
     */
    tileTypeIsNot?: TileTypeIsNotParameter;
    /**
     * Data filter option. Comma separated list of *userAgentType*s you want to limit the query for. If you list more values here then they are interpreted with an OR operator.
      
    In the list you can either use:
     * The name of the UserAgent type (see below), or
     * The numeric ID of the UserAgent type - returned by `/v2/stat/webhits/{containerId}/idmappings` endpoint - using the format `id:<numeric ID>`, e.g. **"id:123"**
      
    note: if you have comma in your userAgent types (strange, but ok...) you can escape that with `\\` character!
      
    The built-in values are the following:
     * **browser-desktop** - visitor is using a standard web browser running on a desktop computer
     * **browser-mobile** - visitor is using a standard web browser running on a mobile device
     * **bot** - visitor was a known bot
     * **unknown** - if during hit-collection (see Hit Collection API!) *userAgentType* was not given or was NULL
    then Keytiles system will fall back to this value
      
    tip: see [/v2/stat/webhits/{containerId}/idmappings](#/WebHits%20-%20Event%20counters/get_v2_stat_webhits__containerId__eventcounts) endpoint docs! With that you can query which userAgentTypes Keytiles have seen.
    
     */
    userAgentTypesOnly?: UserAgentTypesOnlyParameter;
    /**
     * Data filter option. Comma separated list of matchers (see below) which returns counters only for those Tiles who's tileGroupPath is matching to one of the listed matchers. So if you list more values here then they are interpreted with an OR operator.
      
    note: if you have comma in your matcher (strange, but ok...) you can escape that with `\\` character!
      
    You can use the **'\*'** character to match any substring. But where and how you put this Asterisk character matters! Let us show you how through an example!
    Let's assume you have articles and pages (Tiles) in the following content areas:
      
     * /auto
     * /tech
     * /tech/mobile-rumours
     * /tech/mobile
     * /tech/mobile/android
     * /tech/mobile/ios
     * /politics
      
    And now you execute queries with two different **tileGroupPathMatchingOnly** settings:
     1. **"/tech/mobile\*"** and
     1. **"/tech/mobile/\*"**
    
    In the first query **"/tech/mobile\*"** would match for everything begins with "/tech/mobile" string. So this would include *"/tech/mobile/android"*, *"/tech/mobile/ios"* Tiles but also would include *"/tech/mobile-rumours"* Tiles. Which are clearly two different areas right?
      
    But what if you want to really limit for Tiles under the *"/tech/mobile"* area?
      
    Well then you can use the second query value: **"/tech/mobile/\*"**. This would include *"/tech/mobile/android"*, *"/tech/mobile/ios"* but would NOT include *"/tech/mobile-rumours"* anymore - as that is not a match anymore. But we are not done yet! Please note: this would also include Tiles under *"/tech/mobile/"* group itself. Because **"/\*"** means "everything which is under this group"
     
    
     */
    tileGroupPathMatchingOnly?: TileGroupPathMatchingOnlyParameter;
    /**
     * Data filter option. Comma separated list of *visitorType*s you want to limit the query for. If you list more values here then they are interpreted with an OR operator.
      
    In the list you can either use:
     * The name of the visitor type, or
     * The numeric ID of the visitor type - returned by `/v2/stat/webhits/{containerId}/idmappings` endpoint - using the format `id:<numeric ID>`, e.g. **"id:123"**
      
    note: if you have comma in your visitor types (strange, but ok...) you can escape that with `\\` character!
      
    **NULL** is a special value indicating cases where *visitorType* was not set.
      
    Please note that visitorTypes is something you introduce for your Container tracking! If you do not do this then all your traffic falls under "NULL" value here.
    
     */
    visitorTypesOnly?: VisitorTypesOnlyParameter;
    /**
     * Data filter option. Comma separated list of ISO-639-2 languages codes (e.g. 'en', 'de', ...). Only data captured on the given languages is returned if you apply this filter. If you list more values here then they are interpreted with an OR operator.
      
    **NULL** is a special value indicating cases where *tileLanguage* was not identified/captured.
    
     */
    tileLanguagesOnly?: TileLanguagesOnlyParameter;
    /**
     * Data filter option. Comma separated list of matching primary custom tags.
      
    This is the pair of `primaryTags` in our [Hit Collection API](https://www.keytiles.com/developer-area/keytiles-apis#hit-collection-api). If you use them to segment your traffic your custom way then now you can filter for them with this prameter.
      
    To understand it better what these "tags" are doing and how you can use it for your own goals please check our article: [Custom segmentation of traffic](https://keytiles.com/developer-area/custom-segmentation-of-traffic)!
      
    **Good to know!** If you are curious about traffic where there was no primary cutom tag at all you have a special option here! You can encode the "no tags at all" by adding "id:0" to this param so `primaryTagsOnly=id:0` encodes exactly this.
    
     */
    primaryTagsOnly?: PrimaryTagsOnlyParameter;
    /**
     * Data filter option. Comma separated list of matching secondary custom tags.
    It works the same way as `primaryTagsOnly` - please read info there!
    
     */
    secondaryTagsOnly?: SecondaryTagsOnlyParameter;
    /**
     * Data filter option. Comma separated list of "link", "search", "social", "direct" or "internal" strings - indicating from which source the events came. If you list more values here then they are interpreted with an OR operator so sending in e.g. "link, search" would return everything which came from "link" or "search".
    
     */
    eventSourceTypesOnly?: EventSourceTypesOnlyParameter;
    /**
     * Data filter option. Comma separated list of external source names - indicating from which exact source the events came. If you list more values here then they are interpreted with an OR operator.
      
    In the list you can either use:
     * The name of the external source, or
     * The numeric ID of the external source - returned by `/v2/stat/webhits/{containerId}/idmappings` endpoint - using the format `id:<numeric ID>`, e.g. **"id:123"**
      
    Note: the names you specify here are definitely correlating with source type (we mentioned in 'eventSourceTypesOnly' description) "link", "search", "social", "direct" or "internal"!
    The correlation looks like this:
     * "link": then the name is basically the hostname of the website which sent the visitor to your website. Like "abc.com".
     * "social": then the name is the name how Keytiles classified it for Social sources - here please take a look at [How does referrer grouping work?](https://www.keytiles.com/docs/how-does-referrer-grouping-work#The-referrer-classifying-configuration)
     * "search": then the name is the name how Keytiles classified it for Search sources - here please take a look at [How does referrer grouping work?](https://www.keytiles.com/docs/how-does-referrer-grouping-work#The-referrer-classifying-configuration)
     * "direct" or "internal": they do not have a name, name is always NULL for these
    
    So be careful when you are using this filter how you set up `eventSourceTypesOnly` if you use it!
    For example:
     * If you are curious about events came from "Facebook" then you can send `eventSourceNamesOnly=Facebook`. (note: this belongs to source type "social" - see 'eventSourceTypesOnly')
     * If you are curious about events came from another website "abc.com" which is an external link then you can send `eventSourceNamesOnly=abc.com`. (note: this belongs to source type "link" - see 'eventSourceTypesOnly')
     * If you send `eventSourceNamesOnly=Facebook,abc.com` that would give you all events came from "Facebook" OR "abc.com". (note: and then this would belong to source types "link" and "social" - see 'eventSourceTypesOnly')
     * If you would send `eventSourceNamesOnly=abc.com & eventSourceTypesOnly=direct` you would receive 0 as a result - because for sure nothing comes in from "abc.com" which events came from a "direct" visit ...
      
    
     */
    eventSourceNamesOnly?: EventSourceNamesOnlyParameter;
    /**
     * This is **deprecated!** Please use `eventSourceTypesOnly` or `visitSourceTypesOnly` instead to specify your interest precisely!
    If you do use this option then to maintain backward compatibility this is an alias for `eventSourceTypesOnly`.
    
     */
    trafficSourceTypesOnly?: TrafficSourceTypesOnlyParameter;
    /**
     * This is **deprecated!** Please use `eventSourceNamesOnly` or `visitSourceNamesOnly` instead to specify your interest precisely!
    If you do use this option then to maintain backward compatibility this is an alias for `eventSourceNamesOnly`.
    
     */
    trafficSourceNamesOnly?: TrafficSourceNamesOnlyParameter;
    /**
     * Data filter option.
      
    Either
     * Comma separated list of campaigns - indicating from which campaigns the visitor arrived to your website. If you list more values here then they are interpreted with an OR operator.
     * A simple `*` value which tells Keytiles to return counters belong to *any* Campaign regardless which one it is.
      
    In the comma separated list you can either use:
     * The name of the Campaign, or
     * The numeric ID of the Campaign - returned by `/v2/stat/webhits/{containerId}/idmappings` endpoint - using the format `id:<numeric ID>`, e.g. **"id:123"**
      
    Campaign tracking in Keytiles works based on Urchin Tracking Module (UTM) parameters specification. For more info visit: [Wikipedia - UTM parameters](https://en.wikipedia.org/wiki/UTM_parameters)
    
     */
    campaignsOnly?: CampaignsOnlyParameter;
    /**
     * Data filter option. Comma separated list of campaign mediums - indicating from which campaign mediums the visitor arrived to your website.
      
    In the list you can either use:
     * The name of the Campaign Medium, or
     * The numeric ID of the Campaign Medium - returned by `/v2/stat/webhits/{containerId}/idmappings` endpoint - using the format `id:<numeric ID>`, e.g. **"id:123"**
      
    Campaign tracking in Keytiles works based on Urchin Tracking Module (UTM) parameters specification. For more info visit: [Wikipedia - UTM parameters](https://en.wikipedia.org/wiki/UTM_parameters)
    
     */
    campaignMediumsOnly?: CampaignMediumsOnlyParameter;
    /**
     * Data filter option. Comma separated list of campaign contents - indicating from which campaign contents the visitor arrived to your website.
      
    In the list you can either use:
     * The name of the Campaign Content, or
     * The numeric ID of the Campaign Content - returned by `/v2/stat/webhits/{containerId}/idmappings` endpoint - using the format `id:<numeric ID>`, e.g. **"id:123"**
      
    Campaign tracking in Keytiles works based on Urchin Tracking Module (UTM) parameters specification. For more info visit: [Wikipedia - UTM parameters](https://en.wikipedia.org/wiki/UTM_parameters)
    
     */
    campaignContentsOnly?: CampaignContentsOnlyParameter;
};
/**
 * To optimize storage and response size Keytiles maps String identifiers to Numerical IDs. These are things like `eventType` or `userAgentType` etc.
These mapping records also keep track on when did we see first or last time the given incoming String.
  
With this endpoint you have the possibility to query these mappings - even for a specific time range - so you can use them as parameters for *Only filters in Event counter queries

 * @summary To query String => numericalId mapping records belong to the Container
 */
export declare const getV2StatWebhitsContainerIdIdmappings: <TData = AxiosResponse<GetIdMappingsResponseClass>>(containerId: string, params: GetV2StatWebhitsContainerIdIdmappingsParams, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * If you use this "mass query" endpoint then you have to tell explicitly which Tiles data you are curious about - it will not return all Tile data ever (of course, could be millions!)

 * @summary To query data Keytiles stores about content - Tiles.
 */
export declare const getV2StatWebhitsContainerIdTiles: <TData = AxiosResponse<GetTilesResponseClass>>(containerId: string, params: GetV2StatWebhitsContainerIdTilesParams, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * If you are interested in measured traffic regardless which tiles received them then this is the endpoint you should use. It aggregates everything from all tiles.
  
Ideal to display global graphs.
  
You might fine tune the query with the parameters.

 * @summary To query aggregated event counts measured by the Container
 */
export declare const getV2StatWebhitsContainerIdEventcounts: <TData = AxiosResponse<EventCountersResponseClass>>(containerId: string, params: GetV2StatWebhitsContainerIdEventcountsParams, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Returns the measured event counts segregated by tiles and also information about the tiles themselves.
  
Although you also receive the aggregated counts in the response for comfort you should not use this endpoint if you are not interested in tile level segregation! Then simply use the `/eventcounts` one! This query is more expensive and thus can be significantly slower too.
  
You might fine tune the query with the parameters.

 * @summary To query event counts measure on a tile level basis
 */
export declare const getV2StatWebhitsContainerIdEventcountsTiles: <TData = AxiosResponse<TileEventCountersResponseClass>>(containerId: string, params: GetV2StatWebhitsContainerIdEventcountsTilesParams, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Returns the system clock
  
Since you often phrase queries when you need to include timestamps it makes sense to be able to query the system clock which you can use to calculate potential diff in between your local (machine) clock and the server time. Considering this into queries might help a lot to significantly improve your server queries
  
*note:* This endpoint is actually still coming from API v1 as you can see - we added it here for better visbility only.

 * @summary To query the system clock
 */
export declare const getV1SystemClock: <TData = AxiosResponse<SystemClockResponseClass>>(options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Returns the break down for external referrers
  
*note:* This endpoint is actually still coming from API v1 as you can see - we added it here for better visbility only.
  
**IMPORTANT!** You find details in our [query-api v1.0](/swagger-ui/?url=https%3A%2F%2Fraw.githubusercontent.com%2Fkeytiles%2Fkeytiles-public-api%2Fmain%2Fsrc%2Fmain%2Fopenapi%2Fquery-api-v1.yaml#/Referrer%20counters/get_v1_stat_counters__containerId__external_referrers) contract!

 * @summary To query the external referrer distribution counters
 */
export declare const getV1StatCountersContainerIdExternalReferrers: <TData = AxiosResponse<unknown>>(containerId: string, options?: AxiosRequestConfig) => Promise<TData>;
export type GetV2StatWebhitsContainerIdIdmappingsResult = AxiosResponse<GetIdMappingsResponseClass>;
export type GetV2StatWebhitsContainerIdTilesResult = AxiosResponse<GetTilesResponseClass>;
export type GetV2StatWebhitsContainerIdEventcountsResult = AxiosResponse<EventCountersResponseClass>;
export type GetV2StatWebhitsContainerIdEventcountsTilesResult = AxiosResponse<TileEventCountersResponseClass>;
export type GetV1SystemClockResult = AxiosResponse<SystemClockResponseClass>;
export type GetV1StatCountersContainerIdExternalReferrersResult = AxiosResponse<unknown>;
