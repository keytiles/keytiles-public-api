import { CommonErrorCodesV3, MessageResponseV3Class, ContainerResponseV3Class } from './common-types-v3';
import { MetaData } from './common-metadata-v1';
import { Schedule } from './common-schedule-v1';
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
/**
 * By default returned `changelog` in meta data only contains the very first and last entries upon query - but you can request to return full changelog.
  
**Default value:** false

 */
export type ReturnFullChangelogParameter = boolean;
/**
 * Short user message which if sent then added to the changelog entry created by the server.

 */
export type ChangelogCommentParameter = string;
export type ReportsEndpointLocalErrorCodes = typeof ReportsEndpointLocalErrorCodes[keyof typeof ReportsEndpointLocalErrorCodes];
export declare const ReportsEndpointLocalErrorCodes: {
    readonly containerId_missing: "containerId_missing";
    readonly containerId_invalid: "containerId_invalid";
    readonly reportSetupId_invalid: "reportSetupId_invalid";
    readonly reportInstanceId_invalid: "reportInstanceId_invalid";
    readonly reportSetup_exists: "reportSetup_exists";
};
/**
 * NOTE! Error codes is an Enum. Unfortunately in OpenApi (so far) there is no possibility to provide description for Enum values. But we have detailed description of each error codes! Please check the OpenApi file in our Github repo - you find them as comments for each Enum values!
 */
export type ReportsEndpointErrorCodes = ReportsEndpointLocalErrorCodes & CommonErrorCodesV3;
/**
 * Overview of all avaiable report setups.
 */
export type ListContainerReportSetupsResponseClass = ReportSetupOverview[];
export type GetContainerReportSetupResponseClass = ContainerResponseV3Class & {
    reportSetup?: ReportSetup;
};
export type ReportRecipientsRoles = typeof ReportRecipientsRoles[keyof typeof ReportRecipientsRoles];
export declare const ReportRecipientsRoles: {
    readonly view: "view";
    readonly admin: "admin";
    readonly developer: "developer";
};
/**
 * This is an optional setup - controlls who will receive these reports.
  
If not given at all then ALL Data Container users will get the report. Otherwise if given then Keytiles users who are matching to ANY of the given criteria will receive the report.

 * @nullable
 */
export type ReportRecipients = {
    /** Optional entry. List of specific Keytiles users (email or ID) to send the reports to. The users who are listed here will get the reports for sure if
   * they are not disabled in Keytiles (can not log in)
   * they are not associated with the Data Container anyhow
   */
    users?: string[];
    /** Optional entry. All Data Container users who has ANY of the listed roles will receive this report. */
    roles?: ReportRecipientsRoles[];
} | null;
export type ReportQueryPlugin = typeof ReportQueryPlugin[keyof typeof ReportQueryPlugin];
export declare const ReportQueryPlugin: {
    readonly eventCountPlugin: "eventCountPlugin";
    readonly campaignPerformancePlugin: "campaignPerformancePlugin";
    readonly socialPerformancePlugin: "socialPerformancePlugin";
    readonly linksPerformancePlugin: "linksPerformancePlugin";
    readonly tagsPerformancePlugin: "tagsPerformancePlugin";
    readonly visitorBehaviorPlugin: "visitorBehaviorPlugin";
};
/**
 * The parameters a query plugin needs depends on the plugin. These key-value pairs provide the setup how the query plugin will generate this part of the report.
 */
export type ReportQueryParameters = {
    /** If set to TRUE then you get a break-down in time interval. The interval is driven by your schedule.
   * Hourly schedule: you get 15 minutes break-down
   * Daily schedule: you get an hourly breakdown
   * Weekly schedule: you get a daily breakdown
   * Monthly schedule: you get a weekly breakdown
   */
    groupByTime?: boolean;
    /** Which event counts to include into the report? E.g. "pageview", or custom events e.g. "30 seconds passed". These will be the columns in your report. You can also construct formulas using the pure eventNames.
   */
    eventsIncluded?: string[];
    /** If set to TRUE then you get a break-down on Tile level - otherwise just sum of the traffic of all Tiles.
   */
    groupByTiles?: boolean;
    /** If set to TRUE then you get a break-down based on content structure (=tileGroupPath). Can not be used together with 'groupByTiles'!
   */
    groupByTileGroupPaths?: boolean;
    /** You can limit how deep you want the report to go down in the content structure. E.g. if you set it to 1 that means you get a break down only for first level.
   */
    groupByTileGroupPathMaxDepth?: number;
    /** Optional param. How many rows you want to display maximum? Only makes sense if 'groupByTiles=true' or 'groupByTileGroupPaths=true'. Using the 'performanceDescendingOrder' basically you can see the top performing ones, or the worst performing ones - up to you.
   */
    limit?: number;
    /** Sort the list based on these "eventsIncluded"
   */
    sortBy?: string[];
    performanceDescendingOrder?: boolean;
    /** Data filter option. Comma separated list of tile types you want to limit the query for. If you list more values here then they are interpreted with an OR operator.
    
  IMPORTANT! You can not use this together with `tileTypeIsNot` parameter! You can only use this or that but not both.
    
  In the list you can either use: * The name of the type ('frontpage', 'page', 'article', ...), or * The numeric ID of the tile type - returned by `/v2/stat/webhits/{containerId}/idmappings` endpoint - using the format `id:<numeric ID>`, e.g. **"id:123"**
   */
    tileTypesOnly?: string;
    /** Data filter option. Comma separated list of matchers (see below) which returns counters only for those Tiles who's tileGroupPath is matching to one of the listed matchers. So if you list more values here then they are interpreted with an OR operator.
    
  note: if you have comma in your matcher (strange, but ok...) you can escape that with `\\` character!
    
  You can use the **'\*'** character to match any substring. But where and how you put this Asterisk character matters! Let us show you how through an example!
  Let's assume you have articles and pages (Tiles) in the following content areas:
    
  * /auto * /tech * /tech/mobile-rumours * /tech/mobile * /tech/mobile/android * /tech/mobile/ios * /politics
    
  And now you execute queries with two different **tileGroupPathMatchingOnly** settings: 1. **"/tech/mobile\*"** and 1. **"/tech/mobile/\*"**
  In the first query **"/tech/mobile\*"** would match for everything begins with "/tech/mobile" string. So this would include *"/tech/mobile/android"*, *"/tech/mobile/ios"* Tiles but also would include *"/tech/mobile-rumours"* Tiles. Which are clearly two different areas right?
    
  But what if you want to really limit for Tiles under the *"/tech/mobile"* area?
    
  Well then you can use the second query value: **"/tech/mobile/\*"**. This would include *"/tech/mobile/android"*, *"/tech/mobile/ios"* but would NOT include *"/tech/mobile-rumours"* anymore - as that is not a match anymore. But we are not done yet! Please note: this would also include Tiles under *"/tech/mobile/"* group itself. Because **"/\*"** means "everything which is under this group"
   */
    tileGroupPathMatchingOnly?: string;
    [key: string]: unknown;
};
/**
 * A report can contain multiple queries. This object describes one query of those.
 */
export interface ReportQuery {
    /** The unique ID (within the report) of this query - UUID style. In concrete report instances this helps to identify the result of this query within the whole report. */
    id?: string;
    /** Title, description - of this query of the report. */
    metaData: MetaData;
    /** It is possible to temporarily disable a query. This way you do not lose its setup, so you can re-enable it later again. */
    isDisabled?: boolean;
    /** Which query plugin to use for this query? Each plugin provides different possibilities. */
    plugin: ReportQueryPlugin;
    /** The parameters a query plugin needs depends on the plugin. These key-value pairs provide the setup how the query plugin will generate this part of the report. */
    parameters?: ReportQueryParameters;
}
/**
 * Contains minimalistic information about an existing report setup - like its ID, title, description, creation time, schedule. It is a quick overview.
By default the `changelog` within `metaData` only contains the first and very last item. You might request more - see request parameters!

 */
export interface ReportSetupOverview {
    /** The unique ID of this report setup - UUID style */
    id: string;
    /** Title, description and changelog - of this report. */
    metaData: MetaData;
    /** The server time in UNIX timestamp in UTC (seconds since Epoch) when this instance was created */
    createdAt: number;
    /** It is possible to temporarily disable a report. The report is still generatable manually but automatic schedules will not be executed. */
    isDisabled: boolean;
    /**
     * Controlls when will the report run automatically. If you do not schedule the report then the report is only generated when you manually trigger it.
     * @nullable
     */
    schedule?: Schedule;
}
export interface ReportSetup {
    /** The unique ID of this report setup - UUID style */
    id: string;
    /** Title, description and changelog - of this report. */
    metaData: MetaData;
    /** The server time in UNIX timestamp in UTC (seconds since Epoch) when this setup was created */
    createdAt: number;
    /** It is possible to temporarily disable a report. The report is still generatable manually but automatic schedules will not be executed. */
    isDisabled: boolean;
    /**
     * Controlls when will the report run automatically. If you do not schedule the report then the report is only generated when you manually trigger it.
     * @nullable
     */
    schedule?: Schedule;
    /** Optionally you can fine grain which Data Container users will receive this report when generated. */
    recipients?: ReportRecipients;
    /**
     * Queries of this report.
     * @nullable
     */
    queries?: ReportQuery[] | null;
    /**
     * This is the resource version (which is automatically incremented by every change). When you do an update (PUT) you need to send it back! The server will check if it is matching with the resource version he has. If not then that means someone else already did an update in the meantime therefore your request can not be accepted - otherwise you may overwrite the changes someone did.
     */
    resourceVersion: number;
}
/**
 * It takes time for a report instance until it is fully generated. So every report instance is going through a lifecycle.
This is maintained by the server.

 */
export type ReportInstanceState = typeof ReportInstanceState[keyof typeof ReportInstanceState];
export declare const ReportInstanceState: {
    readonly created: "created";
    readonly generating: "generating";
    readonly complete: "complete";
};
export interface DataTableDataColumn {
    label?: string;
    collapseFunction?: string;
}
export interface DataTableAxisColumn {
    label?: string;
}
export type DataTableColumn = DataTableAxisColumn | DataTableDataColumn;
export type DataTableCell = string | number;
export type DataTableRow = DataTableCell[];
/**
 * DataTable is the output of queries - a self contained table of data with Axis columns (optional) and >1 Data columns. Plus of course the data rows.
 */
export interface DataTable {
    /**
     * List of "Axis" columns. Order in array is important as the index of the entry tells the position.
     */
    columns: DataTableColumn[];
    /** */
    rows?: DataTableRow[];
}
/**
 * It takes time for a report until it is fully generated. Report sections are going through a lifecycle and these are their states.

 */
export type ReportInstanceSectionState = typeof ReportInstanceSectionState[keyof typeof ReportInstanceSectionState];
export declare const ReportInstanceSectionState: {
    readonly created: "created";
    readonly generating: "generating";
    readonly complete: "complete";
};
export interface ReportInstanceSection {
    /** The title and description of this section. This is copied from the corresponding Query of the ReportSetup this section represents.
   */
    metaData: MetaData;
    /**
     * Number of milliseconds the processing took on server side
     * @nullable
     */
    generationTookMillis?: number | null;
    /** */
    dataTables: DataTable[];
    /**
     * In case the generation failed for any reason here is the human readable error message. This can be a multi-line text as well.
     * @nullable
     */
    errorMessage?: string | null;
}
/**
 * This is a specific instance of a ReportSetup which was generated at a certain point in time. Keytiles stores these reports for a while.
A report instance consists of sections - each section is generated by a query.

 */
export interface ReportInstance {
    /** The unique ID of this report setup - UUID style */
    id: string;
    /** The ID of the ReportSetup this instance belongs to. */
    parentReportSetupId: string;
    /** The server time in UNIX timestamp in UTC (seconds since Epoch) when this instance was created */
    createdAt: number;
    /** Number of milliseconds took to generate this report instance. */
    creationTookMillis?: number;
    state: ReportInstanceState;
    /** Tells if this report instance is a result of a test generation only or not. */
    isTestOnly: boolean;
    /** Tells if this report instance was generated manually or not. Inheritedly TRUE if `isTestOnly=true`. */
    wasManuallyGenerated?: boolean;
    /** The title of the report is copied from the ReportSetup metaData when this instance was generated. As well as the description. It is good as Report setup can be changed any time.
  In case the report generation was triggered manually by someone then you find info in the history part of meta data about whom did it.
   */
    metaData: MetaData;
    /** Query range - starting from this timestamp. This is a UNIX timestamp in UTC (seconds since Epoch) e.g.: 1657261221 - means 2022-07-08 6:20:21 GMT
   */
    fromTimestamp?: number;
    /** Query range - until this timestamp. This is a UNIX timestamp in UTC (seconds since Epoch) e.g.: 1657261221 - means 2022-07-08 6:20:21 GMT
   */
    toTimestamp?: number;
    /** */
    sections?: ReportInstanceSection[];
    /**
     * This is the resource version (which is automatically incremented by every change). When you do an update (PUT) you need to send it back! The server will check if it is matching with the resource version he has. If not then that means someone else already did an update in the meantime therefore your request can not be accepted - otherwise you may overwrite the changes someone did.
     */
    resourceVersion: number;
}
/**
 * Contains minimalistic information about an existing instance of a report setup - like its ID, creation time, parent report setup ID, etc. It is a quick overview.
 */
export interface ReportInstanceOverview {
    id: string;
    /** The ID of the report setup this instance belongs to */
    parentReportSetupId: string;
    /** Title, description and changelog - of this report. */
    metaData: MetaData;
    /** The server time in UNIX timestamp in UTC (seconds since Epoch) when this instance was created */
    createdAt: number;
    state: ReportInstanceState;
    /** Tells if this report instance is marked as 'test only' or not. */
    isTestOnly: boolean;
    /** Tells if this report instance was generated manually or not. Inheritedly TRUE if `isTestOnly=true`. */
    wasManuallyGenerated?: boolean;
    /** Query range - starting from this timestamp. This is a UNIX timestamp in UTC (seconds since Epoch) e.g.: 1657261221 - means 2022-07-08 6:20:21 GMT
   */
    fromTimestamp?: number;
    /** Query range - until this timestamp. This is a UNIX timestamp in UTC (seconds since Epoch) e.g.: 1657261221 - means 2022-07-08 6:20:21 GMT
   */
    toTimestamp?: number;
}
/**
 * You can fine tune how the list is generated with the attributes of this request. As you see paging is supported too.

 */
export interface ListReportInstancesRequestClass {
    /** By default the request excludes the "test only" instances - unless you request here to include them */
    includeTestOnlyInstances?: boolean;
    /** By default the request includes normal (not "test only") instances - unless you request here to exclude them */
    excludeNotTestOnlyInstances?: boolean;
    /**
     * For paging - you can limit the number of returned instances.
     * @nullable
     */
    limit?: number | null;
    /** For paging - you can specify UNIX timestamp in UTC (seconds since Epoch). We return instances in creation time descending order and if you specify this then only those instances returned who's creation time is smaller than this timestamp. */
    untilCreationTimestamp?: number;
}
export interface ListContainerReportInstancesResponseClass {
    /** The number of all instances matching the request specs. */
    countOfAllInstances?: number;
    /**
     * Returned report instances of the report setup matching the request specs - in creation time descending order.
     */
    reportInstances?: ReportInstanceOverview[];
}
export interface GenerateReportRequestClass {
    /** Set it to TRUE if you just want to test the report generation.
  In this case the recipients (if set in report setup) will not be notified about this report at all. And only the user who generated it will receive a notification when report is ready to view. But apart from this the full report will be generated.
   */
    isTestOnly?: boolean;
    /** A report might contain multiple ReportQuery parts, all of them has its unique ID within the report.
  It is possible to generate only specific queries instead of the full report - by providing a list of those ReportQuery IDs here.
  **BUT** if you do this, then this also sets 'isTestOnly' to TRUE! So the generated ReportInstance considered to be a test only.
   */
    executeQueryIdsOnly?: string[];
    /** If this is set to TRUE then recipients will not receive any notification from Keytiles when this Report Instance is created.
  **IMPORTANT!** Use this with caution! This option was introduced mostly because of internal reasons under certain circumstances.
   */
    skipNotifications?: boolean;
    groupByTime?: string;
    /** When executed manually (not scheduled way) defines the beginning of the query range - you are interested in data which time is >= than this timestamp.
    
  Format is mixed. It can be * a UNIX timestamp in UTC (seconds since Epoch) e.g.: `1657261221` - means 2022-07-08 6:20:21 GMT
    (note: server and client clock might be different! see: /v2/system/clock endpoint to query server time)
  * a relative time spec compared to current time in form of 'now[-X<m|h|d>]' where 'm' means minutes, 'h' means hours and 'd' means days,
    e.g.: `now-10m` means 10 minutes earlier compared to current time,
    `now-2h` means 2 hours earlier and so on
    
  This must point to the past!   (note: server validates according to his own clock!)
   */
    fromTimestamp?: string;
    /** When executed manually (not scheduled way) defines the end of the query range - you are interested in data which time is <= than this timestamp.
    
  **Default value:** the current timestamp, so 'now' if you do not specify this parameter.
    
  Format is mixed. It can be * a UNIX timestamp in UTC (seconds since Epoch) e.g.: `1657261221` - means 2022-07-08 6:20:21 GMT
    (note: server and client clock might be different! see: /v2/system/clock endpoint to query server time)
  * a relative time spec compared to current time in form of 'now[-X<m|h|d>]' where 'm' means minutes, 'h' means hours and 'd' means days,
    e.g.: `now-10m` means 10 minutes earlier compared to current time,
    `now-2h` means 2 hours earlier and so on
    
  Can not point to the future!   (note: server validates according to his own clock!)
   */
    toTimestamp?: string;
}
export type GetV1ReportsContainersRestContainerIdReportSetupOverviewParams = {
    /**
     * By default returned `changelog` in meta data only contains the very first and last entries upon query - but you can request to return full changelog.
      
    **Default value:** false
    
     */
    returnFullChangelog?: ReturnFullChangelogParameter;
};
export type PostV1ReportsContainersRestContainerIdReportSetupParams = {
    /**
     * Short user message which if sent then added to the changelog entry created by the server.
    
     */
    changelogComment?: ChangelogCommentParameter;
};
export type GetV1ReportsContainersRestContainerIdReportSetupReportSetupIdParams = {
    /**
     * By default returned `changelog` in meta data only contains the very first and last entries upon query - but you can request to return full changelog.
      
    **Default value:** false
    
     */
    returnFullChangelog?: ReturnFullChangelogParameter;
};
export type PutV1ReportsContainersRestContainerIdReportSetupReportSetupIdParams = {
    /**
     * Short user message which if sent then added to the changelog entry created by the server.
    
     */
    changelogComment?: ChangelogCommentParameter;
    /**
     * By default returned `changelog` in meta data only contains the very first and last entries upon query - but you can request to return full changelog.
      
    **Default value:** false
    
     */
    returnFullChangelog?: ReturnFullChangelogParameter;
};
/**
 * Anyone with "view" or "admin" role in Data Container can query.
By default `changelog` in

 * @summary To query (list) the overview of all existing report setups belong to the Container
 */
export declare const getV1ReportsContainersRestContainerIdReportSetupOverview: <TData = AxiosResponse<ListContainerReportSetupsResponseClass>>(containerId: string, params?: GetV1ReportsContainersRestContainerIdReportSetupOverviewParams, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Anyone with "view" or "admin" role in Data Container can query.

 * @summary To query the overview of a specific existing report setup belongs to the Container
 */
export declare const getV1ReportsContainersRestContainerIdReportSetupOverviewReportSetupId: <TData = AxiosResponse<ReportSetupOverview>>(containerId: string, reportSetupId: string, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * You can assign an ID for this setup on client side as well but if you don't then a new ID will be generated (and returned in response header).
  
Only users with "admin" role in Data Container can create a report setup.

 * @summary To create a new report setup belongs to the Container
 */
export declare const postV1ReportsContainersRestContainerIdReportSetup: <TData = AxiosResponse<ReportSetup>>(containerId: string, reportSetup: ReportSetup, params?: PostV1ReportsContainersRestContainerIdReportSetupParams, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Anyone with "view" or "admin" role in Data Container can query.

 * @summary To query a specific report setup of the Container
 */
export declare const getV1ReportsContainersRestContainerIdReportSetupReportSetupId: <TData = AxiosResponse<ReportSetup>>(containerId: string, reportSetupId: string, params?: GetV1ReportsContainersRestContainerIdReportSetupReportSetupIdParams, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * The 'resourceVersion' field is very important here - it must match with the version the server currently has otherwise you will get a 409 error. This mechanism helps to detect possible race conditions.
  
Only users with "admin" role in the Data Container can modify a report setup.

 * @summary To modify an existing report setup.
 */
export declare const putV1ReportsContainersRestContainerIdReportSetupReportSetupId: <TData = AxiosResponse<ReportSetup>>(containerId: string, reportSetupId: string, reportSetup: ReportSetup, params?: PutV1ReportsContainersRestContainerIdReportSetupReportSetupIdParams, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * In case you do not want to lose all previous instances consider simply just remove the 'schedule' of the report instead of deleting it! If you do so then the report will not run automatically anymore.
  
Only users with "admin" role in the Data Container can delete a report setup.

 * @summary To delete a specific report setup of the Container as well as all previously generated report instances.
 */
export declare const deleteV1ReportsContainersRestContainerIdReportSetupReportSetupId: <TData = AxiosResponse<ReportSetup>>(containerId: string, reportSetupId: string, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Anyone with "view" or "admin" role in Data Container can list.

 * @summary To query (list) all availale report instances of a given ReportSetup - available in the Data Container
 */
export declare const postV1ReportsContainersActionsContainerIdReportSetupReportSetupIdListReportInstanceOverviews: <TData = AxiosResponse<ListContainerReportInstancesResponseClass>>(containerId: string, reportSetupId: string, listReportInstancesRequestClass: ListReportInstancesRequestClass, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * When triggered manually then the report generation starts immediately. You can fine tune the report generation (mostly for testing purposes) - see request body!
Please note that a report generation might take time.
  
Only with "admin" role in Data Container can trigger a generation manually for now.

 * @summary To generate (create) a new report instance of a report setup manually.
 */
export declare const postV1ReportsContainersActionsContainerIdReportSetupReportSetupIdGenerate: <TData = AxiosResponse<MessageResponseV3Class>>(containerId: string, reportSetupId: string, generateReportRequestClass: GenerateReportRequestClass, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Anyone with "view" or "admin" role in Data Container can query.

 * @summary To query a specific report instance with the given ID of the Data Container
 */
export declare const getV1ReportsContainersRestContainerIdReportInstanceReportInstanceId: <TData = AxiosResponse<ReportInstance>>(containerId: string, reportInstanceId: string, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Only users with "admin" role in Data Container can do this.

 * @summary To permanently delete a specific report instance - after this this report is not available anymore.
 */
export declare const deleteV1ReportsContainersRestContainerIdReportInstanceReportInstanceId: <TData = AxiosResponse<MessageResponseV3Class>>(containerId: string, reportInstanceId: string, options?: AxiosRequestConfig) => Promise<TData>;
export type GetV1ReportsContainersRestContainerIdReportSetupOverviewResult = AxiosResponse<ListContainerReportSetupsResponseClass>;
export type GetV1ReportsContainersRestContainerIdReportSetupOverviewReportSetupIdResult = AxiosResponse<ReportSetupOverview>;
export type PostV1ReportsContainersRestContainerIdReportSetupResult = AxiosResponse<ReportSetup>;
export type GetV1ReportsContainersRestContainerIdReportSetupReportSetupIdResult = AxiosResponse<ReportSetup>;
export type PutV1ReportsContainersRestContainerIdReportSetupReportSetupIdResult = AxiosResponse<ReportSetup>;
export type DeleteV1ReportsContainersRestContainerIdReportSetupReportSetupIdResult = AxiosResponse<ReportSetup>;
export type PostV1ReportsContainersActionsContainerIdReportSetupReportSetupIdListReportInstanceOverviewsResult = AxiosResponse<ListContainerReportInstancesResponseClass>;
export type PostV1ReportsContainersActionsContainerIdReportSetupReportSetupIdGenerateResult = AxiosResponse<MessageResponseV3Class>;
export type GetV1ReportsContainersRestContainerIdReportInstanceReportInstanceIdResult = AxiosResponse<ReportInstance>;
export type DeleteV1ReportsContainersRestContainerIdReportInstanceReportInstanceIdResult = AxiosResponse<MessageResponseV3Class>;
