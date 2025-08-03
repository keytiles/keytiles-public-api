import { CommonErrorCodes, MessageResponseClass, ContainerQueryRangeResponseClass } from './common-types-v3';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? A : B;
type WritableKeys<T> = {
    [P in keyof T]-?: IfEquals<{
        [Q in P]: T[P];
    }, {
        -readonly [Q in P]: T[P];
    }, P>;
}[keyof T];
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
type DistributeReadOnlyOverUnions<T> = T extends any ? NonReadonly<T> : never;
type Writable<T> = Pick<T, WritableKeys<T>>;
type NonReadonly<T> = [T] extends [UnionToIntersection<T>] ? {
    [P in keyof Writable<T>]: T[P] extends object ? NonReadonly<NonNullable<T[P]>> : T[P];
} : DistributeReadOnlyOverUnions<T>;
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
export type ManagementEndpointLocalErrorCodes = typeof ManagementEndpointLocalErrorCodes[keyof typeof ManagementEndpointLocalErrorCodes];
export declare const ManagementEndpointLocalErrorCodes: {
    readonly containerId_missing: "containerId_missing";
    readonly containerId_invalid: "containerId_invalid";
    readonly containerData_missing: "containerData_missing";
    readonly containerData_invalid: "containerData_invalid";
    readonly containerData_jsonDecodeFailed: "containerData_jsonDecodeFailed";
    readonly containerData_admin_missing: "containerData_admin_missing";
    readonly containerData_finance_missing: "containerData_finance_missing";
    readonly userIdTerm_missing: "userIdTerm_missing";
    readonly userIdTerm_invalid: "userIdTerm_invalid";
    readonly userData_missing: "userData_missing";
    readonly userData_invalid: "userData_invalid";
    readonly userData_jsonDecodeFailed: "userData_jsonDecodeFailed";
    readonly passwordData_missing: "passwordData_missing";
    readonly passwordData_invalid: "passwordData_invalid";
    readonly userData_nickname_invalid: "userData_nickname_invalid";
    readonly userData_email_invalid: "userData_email_invalid";
    readonly userData_email_alreadyTaken: "userData_email_alreadyTaken";
    readonly readonlyField_changed: "readonlyField_changed";
    readonly protectedField_changed: "protectedField_changed";
    readonly requiredField_missing: "requiredField_missing";
    readonly key_missing: "key_missing";
    readonly key_invalid: "key_invalid";
    readonly keyValueData_invalid: "keyValueData_invalid";
    readonly queryRange_corrected: "queryRange_corrected";
    readonly queryRange_from_corrected: "queryRange_from_corrected";
    readonly queryRange_to_corrected: "queryRange_to_corrected";
};
/**
 * NOTE! Error codes is an Enum. Unfortunately in OpenApi (so far) there is no possibility to provide description for Enum values. But we have detailed description of each error codes! Please check the OpenApi file in our Github repo - you find them as comments for each Enum values!
 */
export type ManagementEndpointErrorCodes = ManagementEndpointLocalErrorCodes & CommonErrorCodes;
export interface UserContainerLink {
    /** The alpha-numeric unique id of the Container */
    containerId: string;
    role?: UserContainerRoleClass;
    roles: UserContainerRoleClassV2[];
}
export interface UserCreationClass {
    /** The desired e-mail address of the user (also this will be the username used during login later) */
    email: string;
    /**
     * The nickname of the user. This will appear for other users and also the system will use this in notifications. But of course you do not need to use your real name... Single line plain string so any linefeed or tab or other characters will lead to request failure.
     * @minLength 3
     * @maxLength 32
     */
    nickname: string;
    /**
     * The password to set after successful e-mail validation flow. Single line plain string so any linefeed or tab or other characters will lead to request failure.
     * @minLength 8
     * @maxLength 32
     */
    password: string;
}
/**
 * Extra data of the user - key-value pairs. For internal use only so far - only visible to and manageable by Keytiles Admins.
 * @nullable
 */
export type UserClassData = {
    [key: string]: string;
} | null;
export interface UserClass {
    /** Randomly generated alpha-numeric unique id of the user */
    readonly id: string;
    /** This is the resource version (which is automatically incremented by every change). When you do an update (PUT) you need to send it back! The server will check if it is matching with the resource version he has. If not then that means someone else already did an update in the meantime therefore your request can not be accepted - otherwise you may overwrite the changes someone did. */
    version: number;
    /** The validated e-mail address of the user (also this is his username used during login).
    
  Please note that it is possible this attribute is not returned but returns 'secret' as value for confidentiality reasons! This may depend on the credentials and/or the request parameters you use to query this resource!
    
  It is possible to change the e-mail address via a PUT request (so the login name basically) but depending on who is executing the request it may behave differently. If the user himself is initating the e-mail change then it will require a confirmation of the new e-mail address - a Token will be generated and sent out to the new e-mail address to complete the request.
   */
    email: string;
    /** The password of the user used only for updating it but never shown. */
    password?: string;
    /**
     * The nickname of the user. This will appear for other users and also the system will use this in notifications. But of course you do not need to use your real name...
     * @minLength 3
     * @maxLength 32
     */
    nickname: string;
    /**
     * When did this user log in recently? UNIX timestamp in UTC (seconds since Epoch)
     * @nullable
     */
    readonly lastLoginTimestamp?: number | null;
    /** When was this user created? UNIX timestamp in UTC (seconds since Epoch) */
    readonly createdTimestamp: number;
    /** If FALSE then user account is disabled. Requires Keytiles Admin privilige to be able to modify this - read only otherwise */
    isEnabled: boolean;
    /** Tells if the user is a Keytiles Admin or not. Requires Keytiles Admin privilige to be able to modify this - read only otherwise */
    isKeytilesAdmin: boolean;
    /** List of Containers this user has access to.
    
  This list is only visible if the resource is queried by the user himself or a Keytiles Admin. For all others this list comes empty as nobody else should see this information.
   */
    containers?: UserContainerLink[];
    /**
     * Extra data of the user - key-value pairs. For internal use only so far - only visible to and manageable by Keytiles Admins.
     * @nullable
     */
    data?: UserClassData;
}
/**
 * DEPRECATED! Older representation of the roles of this link affecting what the User can do with this Container - please use UserContainerRoleClassV2 instead
 * @deprecated
 * @nullable
 */
export type UserContainerRoleClass = typeof UserContainerRoleClass[keyof typeof UserContainerRoleClass] | null;
export declare const UserContainerRoleClass: {
    readonly view: "view";
    readonly admin: "admin";
};
/**
 * Newer definition of the roles of this link affecting what the User can do with this Container
 */
export type UserContainerRoleClassV2 = typeof UserContainerRoleClassV2[keyof typeof UserContainerRoleClassV2];
export declare const UserContainerRoleClassV2: {
    readonly view: "view";
    readonly admin: "admin";
    readonly finance: "finance";
    readonly developer: "developer";
};
/**
 * Containers have settings - options is the object represents a collection of settings. For creating a container it is enough to start with the mandatory settings. They can be tweaked later via PUT.
  
The following options are available:
 * **trackedDomains** : Array - Mandatory setting. List of domain names the tracking in this Container will accept as hit origin.
 * **lookBackTimeWindowSeconds** : Integer - Optional setting. When the real time UI is started this is the default "look back" time period for queries for your users
 * **visitSessionTimeoutSeconds** : Integer - Optional setting. Controls the visitSession length for your tracking. If not set then the system default value is used which is 20 minutes.
 * **preservedQueryParams** : Array - Optional setting. Normally Keytiles is cleaning the URLs the hits are coming from and as a part of this procedure all query parameters are also removed. Except the ones you list here in this array...
 * **trialEndsAt** : Integer - Optional setting. Gives the time in UNIX timestamp when the trial period of this container ends. If null that means the container is not in trial period. Note: this can not be modified directly!
 * **writeTrafficLimit** : Integer - Controlls the daily write traffic (number of inbound hits) limit. Note: this can not be modified directly!
 * **readTrafficLimit** : Integer - Controlls the daily read traffic limit. Note: this can not be modified directly!

 */
export interface ContainerOptionsClass {
    [key: string]: unknown;
}
export interface ContainerUserLink {
    /** The alpha-numeric unique id of the User */
    userId: string;
    role?: UserContainerRoleClass;
    roles: UserContainerRoleClassV2[];
}
export interface ContainerUserDetails {
    /** The ID of the User */
    userId: string;
    nickname?: string;
    /** The e-mail address of the user. BUT it is possible this field is masked out due to data protection rules and only returns 'secret' as value */
    email?: string;
}
/**
 * Partial class of the ContainerClass - can be used in the REST POST endpoint during creating a container.
  
Any registered User of Keytiles has the possibility to create a Container and establish tracking.

 */
export interface ContainerCreationClass {
    /**
     * An informative name of your Container. Single line plain string so any linefeed or tab or other characters will lead to request failure.
     * @minLength 3
     * @maxLength 64
     */
    name: string;
    /** Name of the Keytiles business domain this Container belongs to */
    businessDomain: string;
    options: ContainerOptionsClass;
}
export type ContainerClassAllOf = {
    /** Randomly generated alpha-numeric unique id of the Container */
    readonly id: string;
    /** This is the resource version (which is automatically incremented by every change). When you do an update (PUT) you need to send it back! The server will check if it is matching with the resource version he has. If not then that means someone else already did an update in the meantime therefore your request can not be accepted - otherwise you may overwrite the changes someone did. */
    version: number;
    /** When was this Container created? UNIX timestamp in UTC (seconds since Epoch) */
    readonly createdTimestamp: number;
    /** If FALSE then tracking is disabled. Requires Keytiles Admin privilige to be able to modify this - read only otherwise */
    isEnabled: boolean;
    /** List of user IDs has access over this Container.
    
  This list is only visible if the resource is queried by a Container Admin or a Keytiles Admin. For all others this list comes empty as nobody else should see this information.
   */
    users?: ContainerUserLink[];
    /** Provides more details about Users who has access over this Container - but there are some restrictions.
    
  First of all - by default this list comes empty - you need to request this using the *includeUserDetails=true* query argument.
    
  Furthermore * If the resource is queried by a Container Admin or a Keytiles Admin then it contains full info about every users so no restrictions * But if the resource is queried by a normal member of the Container then limited the way it only exposes e-mail addresses of the Container Admins - others mail address is kept in secret
   */
    readonly userDetails?: readonly ContainerUserDetails[];
};
/**
 * Container is the basic object for data collection (a.k.a. tracking).
  
In order to establish tracking with Keytiles you need to create a "container" for the tracking data.
  
Any registered User of Keytiles has the possibility to create a Container and establish tracking.

 */
export type ContainerClass = ContainerCreationClass & ContainerClassAllOf;
export interface ReferrerClassifierConfigClass {
    name?: string;
    /** Regex pattern matched against the domain name */
    domainRegex?: string;
    /** Regex pattern - if given then matched against the URI path part of the url */
    pathRegex?: string;
    /** Name of the plugin responsible for doing the classification. We have 'SearchReferrer', 'SocialReferrer' and 'LinkReferrer' plugins (basically) */
    classifierClassName?: string;
    /** Options are plugin dependent key:value pairs - encoded into a string format. */
    options?: string;
}
export type HitFaultReportResponseAllOf = {
    faults?: HitFaultClass[];
};
export type HitFaultReportResponse = ContainerQueryRangeResponseClass & HitFaultReportResponseAllOf;
export interface HitFaultClass {
    /** Timestamp of the fault - UNIX timestamp in UTC (seconds since Epoch) */
    faultTimestamp: number;
    faultType: HitFaultType;
    /** The textual error code describes the problem. This is a machine readable error. */
    errorCode: string;
    /**
     * The ID of the associated Tile. This comes from the 'tileId' attribute of the inbound hit.
     * @nullable
     */
    tileId?: string | null;
    /**
     * The URL associated with this fault. This comes from the 'tileUrl' attribute of the inbound hit.
     * @nullable
     */
    faultUrl?: string | null;
    /**
     * The agent which sent this the hit in. This comes from the 'hitProducer' attribute of the inbound hit.
     * @nullable
     */
    hitProducer?: string | null;
    /**
     * The human readable error description.
     * @nullable
     */
    errorDescription?: string | null;
}
export type HitFaultType = typeof HitFaultType[keyof typeof HitFaultType];
export declare const HitFaultType: {
    readonly error: "error";
    readonly warn: "warn";
    readonly unknown: "unknown";
};
/**
 * Whether to include the *userDetails* list into the Container resource or not - default is: FALSE. Valid values are natural values encoding a boolean so e.g. "true" or "false" or 0 or 1 etc.
 */
export type IncludeUserDetailsParameter = boolean;
export type GetV1ManagementContainersRestParams = {
    /**
     * A comma separated list of Container IDs to query.
      
    Please note! The method returns only Containers the user has at least 'view' permission to. So it is possible that in the response you do not get back all the Containers you requested if this rule is not fulfilled.
    
     */
    containerIds?: string;
    /**
     * Whether to include the *userDetails* list into the Container resource or not - default is: FALSE. Valid values are natural values encoding a boolean so e.g. "true" or "false" or 0 or 1 etc.
     */
    includeUserDetails?: IncludeUserDetailsParameter;
};
export type GetV1ManagementContainersRestContainerIdParams = {
    /**
     * Whether to include the *userDetails* list into the Container resource or not - default is: FALSE. Valid values are natural values encoding a boolean so e.g. "true" or "false" or 0 or 1 etc.
     */
    includeUserDetails?: IncludeUserDetailsParameter;
};
export type GetV1ManagementContainersReportsContainerIdHitfaultParams = {
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
     * You can provide a comma separated list of tileIds. If given then only those Faults are returned whos related Tile is matching to the list.
     */
    tileIdsOnly?: string;
    /**
     * You can limit how many Faults are returned in the response maximum. Please note that since there is no time order guarantee in this request - so if you limit the number of items they might come in random order from the full time query range.
     */
    limit?: number;
    /**
     * Faults are associated with URLs where they happened. Here you can provide a list of comma separated URL matcher strings. If you do so then only those Faults are returned whos associated URL is matching any of the matchers.
      
    For example:
     * '*\/politics/*' will return only those Faults where "/politics/" as substring is found in the URL
     * '*\/politics/*, *\/tags/*\/visit*' will return Faults where either "/politics/" is in the URL or the URL is has the "/tags/<anything here>/visit" substring in it
    
     */
    faultUrlMatchingOnly?: string;
};
/**
 * This endpoint can be used without authentication too to start a registration process. (Authentication can be added to authenticate as Keytiles Administrator who has more priviliges)
  
By sending in a pre-filled partial User resource you initiate the registration process. To complete the registration flow a Token will be generated and sent to the given e-mail address. Flow can be completed by executing that Token - see '/v1/management/tokens/actions/{tokenId}/execute' endpoint!

 * @summary Create a new user (registration)
 */
export declare const postV1ManagementUsersRest: <TData = AxiosResponse<MessageResponseClass>>(userCreationClass: UserCreationClass, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Please note! However if a User account is disabled (isEnabled=false) the user can still query himself. This is required because he could not even realize his account is in a disabled state...

 * @summary Query a specific user with one of its IDs
 */
export declare const getV1ManagementUsersRestUserIdTerm: <TData = AxiosResponse<UserClass>>(userIdTerm: string, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Only the User himself or a Keytiles administrator can trigger this request!
  
Some fields can be modified only by Keytiles administrators. (See field descriptions for more details!) If you try to modify a field like that it might result in a 403 response!

 * @summary Update the user data
 */
export declare const putV1ManagementUsersRestUserIdTerm: <TData = AxiosResponse<MessageResponseClass>>(userIdTerm: string, userClass: NonReadonly<UserClass>, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * **Important!** This action can not be undone!
  
Only the User himself or a Keytiles administrator can trigger this request!
  
Please note! However if a User account is disabled (isEnabled=false) the user can still unregister. So this call will also work for disabled users if he wants to remove himself.

 * @summary Remove the given User from the system
 */
export declare const deleteV1ManagementUsersRestUserIdTerm: <TData = AxiosResponse<MessageResponseClass>>(userIdTerm: string, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Password is - however due to its nature is a secret - subresource of the User object. With this call you can set a new value.
  
Please note: To successfully authenticate you can either send user credentials (when you do know the current password you just want to change it) OR a one-time usable token you previously got via initiating the password reset action.

 * @summary Change the password of the user
 */
export declare const putV1ManagementUsersRestUserIdTermPassword: <TData = AxiosResponse<MessageResponseClass>>(userIdTerm: string, putV1ManagementUsersRestUserIdTermPasswordBody: string, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * To initiate password reset procedure you just send a GET call on this endpoint. The system will generate a one-time usable token for you which is sent to the e-mail address of the user. Using this token you can one-time authenticate for using the password change endpoint (see in the REST API part!)
  
If you invoke this method again will generate a new one-time token and will invalidate the previously generated one!
  
Please note: Invoking this action does not require any credentials (no auth is needed)

 * @summary Triggers password reset procedure
 */
export declare const getV1ManagementUsersActionsUserIdTermPasswordReset: <TData = AxiosResponse<MessageResponseClass>>(userIdTerm: string, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * If you build a login functionality anywhere you can use this action to check if the password the user entered on the UI is correct or not

 * @summary To verify if a password sent in the request body matches with the User's password or not
 */
export declare const postV1ManagementUsersActionsUserIdTermPasswordCheck: <TData = AxiosResponse<MessageResponseClass>>(userIdTerm: string, postV1ManagementUsersActionsUserIdTermPasswordCheckBody: string, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Please note: Invoking this action does not require any credentials (no auth is needed)

 * @summary Triggers execution of the action identified by the given Token
 */
export declare const getV1ManagementTokensActionsTokenIdExecute: <TData = AxiosResponse<MessageResponseClass>>(tokenId: string, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * If executed without the 'containerIds' query param then returns all Containers in a list the user has at least 'view' permission.
  
You can limit the request to only a specific set of Containers by using the 'containerIds' query param.

 * @summary To query multiple Containers at once.
 */
export declare const getV1ManagementContainersRest: <TData = AxiosResponse<ContainerClass[]>>(params?: GetV1ManagementContainersRestParams, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Any registered User can initiate creating a Container.
  
If the user is Keytiles Admin then the Container is immediatelly created and usable. If the user is a normal user then extra validation step (via Token mechanism) is required to really create the Container

 * @summary To create a Container resource in order to establish tracking in Keytiles
 */
export declare const postV1ManagementContainersRest: <TData = AxiosResponse<MessageResponseClass>>(containerCreationClass: ContainerCreationClass, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Only a user with effective "admin" role (over the Container) or a Keytiles Admin can execute this request.
 * @summary Query a Container resource
 */
export declare const getV1ManagementContainersRestContainerId: <TData = AxiosResponse<ContainerClass>>(containerId: string, params?: GetV1ManagementContainersRestContainerIdParams, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Only Keytiles Admins or users with active "admin" role of the Container is allowed to execute this request

 * @summary To update a Container
 */
export declare const putV1ManagementContainersRestContainerId: <TData = AxiosResponse<MessageResponseClass>>(containerId: string, containerClass: NonReadonly<ContainerClass>, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * **Important!** This action can not be undone!
  
The removal will also delete all tracking data associated with the Container!
  
Only a user with effective "admin" role (over the Container) or a Keytiles Admin can execute this request.

 * @summary Remove the given Container from the system
 */
export declare const deleteV1ManagementContainersRestContainerId: <TData = AxiosResponse<MessageResponseClass>>(containerId: string, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * You can query Faults Keytiles have seen during processing incoming Hits.
  
Please note:
 * Faults returned are not ordered by timestamp! They might come in random order so you might need to sort on Client side!
 * Only a user with effective "admin" or "developer" role (over the Container) can execute this request.

 * @summary Query Container hit collection faults
 */
export declare const getV1ManagementContainersReportsContainerIdHitfault: <TData = AxiosResponse<HitFaultReportResponse>>(containerId: string, params: GetV1ManagementContainersReportsContainerIdHitfaultParams, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Returns the current Keytiles server side configuration which is used to classify traffic sources (aka Referrers)
   
More info: [https://www.keytiles.com/docs/how-does-referrer-grouping-work](https://www.keytiles.com/docs/how-does-referrer-grouping-work)

 * @summary Query Keytiles Referrer Classification config
 */
export declare const getV1ManagementConfigReferrerclassification: <TData = AxiosResponse<ReferrerClassifierConfigClass[]>>(options?: AxiosRequestConfig) => Promise<TData>;
export type PostV1ManagementUsersRestResult = AxiosResponse<MessageResponseClass>;
export type GetV1ManagementUsersRestUserIdTermResult = AxiosResponse<UserClass>;
export type PutV1ManagementUsersRestUserIdTermResult = AxiosResponse<MessageResponseClass>;
export type DeleteV1ManagementUsersRestUserIdTermResult = AxiosResponse<MessageResponseClass>;
export type PutV1ManagementUsersRestUserIdTermPasswordResult = AxiosResponse<MessageResponseClass>;
export type GetV1ManagementUsersActionsUserIdTermPasswordResetResult = AxiosResponse<MessageResponseClass>;
export type PostV1ManagementUsersActionsUserIdTermPasswordCheckResult = AxiosResponse<MessageResponseClass>;
export type GetV1ManagementTokensActionsTokenIdExecuteResult = AxiosResponse<MessageResponseClass>;
export type GetV1ManagementContainersRestResult = AxiosResponse<ContainerClass[]>;
export type PostV1ManagementContainersRestResult = AxiosResponse<MessageResponseClass>;
export type GetV1ManagementContainersRestContainerIdResult = AxiosResponse<ContainerClass>;
export type PutV1ManagementContainersRestContainerIdResult = AxiosResponse<MessageResponseClass>;
export type DeleteV1ManagementContainersRestContainerIdResult = AxiosResponse<MessageResponseClass>;
export type GetV1ManagementContainersReportsContainerIdHitfaultResult = AxiosResponse<HitFaultReportResponse>;
export type GetV1ManagementConfigReferrerclassificationResult = AxiosResponse<ReferrerClassifierConfigClass[]>;
export {};
