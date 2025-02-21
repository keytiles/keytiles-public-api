// Package kt_pubapi_gen_reportsv1 provides primitives to interact with the openapi HTTP API.
//
// Code generated by unknown module path version unknown version DO NOT EDIT.
package kt_pubapi_gen_reportsv1

import (
	"encoding/json"
	"fmt"

	externalRef0 "github.com/keytiles/keytiles-public-api/gopkg/model/generated/common/metadata_v1"
	externalRef1 "github.com/keytiles/keytiles-public-api/gopkg/model/generated/common/schedule_v1"
	externalRef2 "github.com/keytiles/keytiles-public-api/gopkg/model/generated/common/types_v2"
)

const (
	BasicAuthScopes = "basicAuth.Scopes"
)

// Defines values for ReportQueryPlugin.
const (
	CampaignPerformancePlugin ReportQueryPlugin = "campaignPerformancePlugin"
	EventCountPlugin          ReportQueryPlugin = "eventCountPlugin"
	LinksPerformancePlugin    ReportQueryPlugin = "linksPerformancePlugin"
	SocialPerformancePlugin   ReportQueryPlugin = "socialPerformancePlugin"
	TagsPerformancePlugin     ReportQueryPlugin = "tagsPerformancePlugin"
)

// Defines values for ReportRecipientsRoles.
const (
	Admin     ReportRecipientsRoles = "admin"
	Developer ReportRecipientsRoles = "developer"
	View      ReportRecipientsRoles = "view"
)

// Defines values for ReportsEndpointErrorCodes.
const (
	ReportsEndpointErrorCodesActionTokenInternalError         ReportsEndpointErrorCodes = "actionToken_internalError"
	ReportsEndpointErrorCodesActionTokenInvalid               ReportsEndpointErrorCodes = "actionToken_invalid"
	ReportsEndpointErrorCodesActionTokenMissing               ReportsEndpointErrorCodes = "actionToken_missing"
	ReportsEndpointErrorCodesActionTokenUnknownType           ReportsEndpointErrorCodes = "actionToken_unknownType"
	ReportsEndpointErrorCodesAuthenticationBase64DecodeFailed ReportsEndpointErrorCodes = "authentication_base64DecodeFailed"
	ReportsEndpointErrorCodesAuthenticationInternalError      ReportsEndpointErrorCodes = "authentication_internalError"
	ReportsEndpointErrorCodesAuthenticationInvalidCredentials ReportsEndpointErrorCodes = "authentication_invalid_credentials"
	ReportsEndpointErrorCodesAuthenticationMethodNotSupported ReportsEndpointErrorCodes = "authentication_methodNotSupported"
	ReportsEndpointErrorCodesAuthenticationMissing            ReportsEndpointErrorCodes = "authentication_missing"
	ReportsEndpointErrorCodesAuthenticationUserDisabled       ReportsEndpointErrorCodes = "authentication_userDisabled"
	ReportsEndpointErrorCodesAuthorizationNoPermission        ReportsEndpointErrorCodes = "authorization_noPermission"
	ReportsEndpointErrorCodesContainerIdInvalid               ReportsEndpointErrorCodes = "containerId_invalid"
	ReportsEndpointErrorCodesContainerIdMissing               ReportsEndpointErrorCodes = "containerId_missing"
	ReportsEndpointErrorCodesFieldDeprecated                  ReportsEndpointErrorCodes = "field_deprecated"
	ReportsEndpointErrorCodesMandatoryEmailSendingFailed      ReportsEndpointErrorCodes = "mandatoryEmailSending_failed"
	ReportsEndpointErrorCodesQueryLimitReached                ReportsEndpointErrorCodes = "query_limit_reached"
	ReportsEndpointErrorCodesReportSetupIdInvalid             ReportsEndpointErrorCodes = "reportSetupId_invalid"
	ReportsEndpointErrorCodesRequestDataContradicting         ReportsEndpointErrorCodes = "requestData_contradicting"
	ReportsEndpointErrorCodesRequestDataInvalid               ReportsEndpointErrorCodes = "requestData_invalid"
	ReportsEndpointErrorCodesRequestDataMissing               ReportsEndpointErrorCodes = "requestData_missing"
	ReportsEndpointErrorCodesRequestDataNotSupported          ReportsEndpointErrorCodes = "requestData_not_supported"
	ReportsEndpointErrorCodesRequestDataWrongFormat           ReportsEndpointErrorCodes = "requestData_wrongFormat"
	ReportsEndpointErrorCodesRequestParameterConflict         ReportsEndpointErrorCodes = "requestParameter_conflict"
	ReportsEndpointErrorCodesRequestParameterContradicting    ReportsEndpointErrorCodes = "requestParameter_contradicting"
	ReportsEndpointErrorCodesRequestParameterInvalid          ReportsEndpointErrorCodes = "requestParameter_invalid"
	ReportsEndpointErrorCodesRequestParameterMissing          ReportsEndpointErrorCodes = "requestParameter_missing"
	ReportsEndpointErrorCodesRequestParameterNotSupported     ReportsEndpointErrorCodes = "requestParameter_not_supported"
	ReportsEndpointErrorCodesRequestParameterPointless        ReportsEndpointErrorCodes = "requestParameter_pointless"
	ReportsEndpointErrorCodesRequestParameterWrongFormat      ReportsEndpointErrorCodes = "requestParameter_wrongFormat"
	ReportsEndpointErrorCodesResourceDataConflict             ReportsEndpointErrorCodes = "resourceData_conflict"
	ReportsEndpointErrorCodesResourceDataContradicting        ReportsEndpointErrorCodes = "resourceData_contradicting"
	ReportsEndpointErrorCodesResourceDataInvalid              ReportsEndpointErrorCodes = "resourceData_invalid"
	ReportsEndpointErrorCodesResourceDataMissing              ReportsEndpointErrorCodes = "resourceData_missing"
	ReportsEndpointErrorCodesResourceDataNotSupported         ReportsEndpointErrorCodes = "resourceData_not_supported"
	ReportsEndpointErrorCodesResourceDataPointless            ReportsEndpointErrorCodes = "resourceData_pointless"
	ReportsEndpointErrorCodesResourceDataWrongFormat          ReportsEndpointErrorCodes = "resourceData_wrongFormat"
	ReportsEndpointErrorCodesResourceVersionMismatch          ReportsEndpointErrorCodes = "resourceVersion_mismatch"
	ReportsEndpointErrorCodesUnderlyingResourceUnavailable    ReportsEndpointErrorCodes = "underlying_resource_unavailable"
	ReportsEndpointErrorCodesUrlInvalid                       ReportsEndpointErrorCodes = "url_invalid"
)

// Defines values for ReportsEndpointLocalErrorCodes.
const (
	ReportsEndpointLocalErrorCodesContainerIdInvalid   ReportsEndpointLocalErrorCodes = "containerId_invalid"
	ReportsEndpointLocalErrorCodesContainerIdMissing   ReportsEndpointLocalErrorCodes = "containerId_missing"
	ReportsEndpointLocalErrorCodesReportSetupIdInvalid ReportsEndpointLocalErrorCodes = "reportSetupId_invalid"
)

// Defines values for ReportsEndpointProblemClassSeverity.
const (
	Error   ReportsEndpointProblemClassSeverity = "error"
	Warning ReportsEndpointProblemClassSeverity = "warning"
)

// GetContainerReportSetupsResponseClass defines model for GetContainerReportSetupsResponseClass.
type GetContainerReportSetupsResponseClass = externalRef2.ContainerResponseClass

// MachineReadableReportsEndpointMessageResponseClass defines model for MachineReadableReportsEndpointMessageResponseClass.
type MachineReadableReportsEndpointMessageResponseClass struct {
	// Message The human readable message
	Message *string `json:"message,omitempty" yaml:"message,omitempty"`

	// Problems List of errors/warnings
	Problems *[]ReportsEndpointProblemClass `json:"problems,omitempty" yaml:"problems,omitempty"`

	// ProcessingTookMillis Number of milliseconds the processing took on server side
	ProcessingTookMillis *int32 `json:"processingTookMillis" yaml:"processingTookMillis"`

	// RequestReceivedAt The server time in UNIX timestamp in UTC (seconds since Epoch) when this response was received and processing was started
	RequestReceivedAt int32 `json:"requestReceivedAt" yaml:"requestReceivedAt"`

	// Vars Extra data (variables) the endpoint wants to return for programmatic processing.
	Vars *map[string]interface{} `json:"vars" yaml:"vars"`
}

// ReportQuery A report can contain multiple queries. This object describes one query of those.
type ReportQuery struct {
	// Id The unique ID (within the report) of this query - UUID style. In concrete report instances this helps to identify the result of this query within the whole report.
	Id       *string               `json:"id,omitempty" yaml:"id,omitempty"`
	MetaData externalRef0.MetaData `json:"metaData" yaml:"metaData"`

	// Parameters The parameters a query plugin needs depends on the plugin. These key-value pairs provide the setup how the query plugin will generate this part of the report.
	Parameters *ReportQuery_Parameters `json:"parameters,omitempty" yaml:"parameters,omitempty"`
	Plugin     ReportQueryPlugin       `json:"plugin" yaml:"plugin"`
}

// ReportQuery_Parameters The parameters a query plugin needs depends on the plugin. These key-value pairs provide the setup how the query plugin will generate this part of the report.
type ReportQuery_Parameters struct {
	// EventsIncluded Which event counts to include into the report? E.g. "pageview", or custom events e.g. "30 seconds passed". These will be the columns in your report. You can also construct formulas using the pure eventNames.
	EventsIncluded *[]string `json:"eventsIncluded,omitempty" yaml:"eventsIncluded,omitempty"`

	// GroupByTileGroupPathMaxDepth You can limit how deep you want the report to go down in the content structure. E.g. if you set it to 1 that means you get a break down only for first level.
	GroupByTileGroupPathMaxDepth *int `json:"groupByTileGroupPathMaxDepth,omitempty" yaml:"groupByTileGroupPathMaxDepth,omitempty"`

	// GroupByTileGroupPaths If set to TRUE then you get a break-down based on content structure (=tileGroupPath). Can not be used together with 'groupByTiles'!
	GroupByTileGroupPaths *bool `json:"groupByTileGroupPaths,omitempty" yaml:"groupByTileGroupPaths,omitempty"`

	// GroupByTiles If set to TRUE then you get a break-down on Tile level - otherwise just sum of the traffic of all Tiles.
	GroupByTiles *bool `json:"groupByTiles,omitempty" yaml:"groupByTiles,omitempty"`

	// GroupByTime If set to TRUE then you get a break-down in time interval. The interval is driven by your schedule.
	//  * Hourly schedule: you get 15 minutes break-down
	//  * Daily schedule: you get an hourly breakdown
	//  * Weekly schedule: you get a daily breakdown
	//  * Monthly schedule: you get a weekly breakdown
	GroupByTime                *bool `json:"groupByTime,omitempty" yaml:"groupByTime,omitempty"`
	PerformanceDescendingOrder *bool `json:"performanceDescendingOrder,omitempty" yaml:"performanceDescendingOrder,omitempty"`

	// TileCountLimit How many tiles you want to display maximum? Only makes sense if 'groupByTiles=true'. Using the 'performanceDescendingOrder' basically you can see the top performing ones, or the worst performing ones - up to you.
	TileCountLimit *int `json:"tileCountLimit,omitempty" yaml:"tileCountLimit,omitempty"`

	// TileGroupPathMatchingOnly Data filter option. Comma separated list of matchers (see below) which returns counters only for those Tiles who's tileGroupPath is matching to one of the listed matchers. So if you list more values here then they are interpreted with an OR operator.
	//
	// note: if you have comma in your matcher (strange, but ok...) you can escape that with `\\` character!
	//
	// You can use the **'\*'** character to match any substring. But where and how you put this Asterisk character matters! Let us show you how through an example!
	// Let's assume you have articles and pages (Tiles) in the following content areas:
	//
	// * /auto * /tech * /tech/mobile-rumours * /tech/mobile * /tech/mobile/android * /tech/mobile/ios * /politics
	//
	// And now you execute queries with two different **tileGroupPathMatchingOnly** settings: 1. **"/tech/mobile\*"** and 1. **"/tech/mobile/\*"**
	// In the first query **"/tech/mobile\*"** would match for everything begins with "/tech/mobile" string. So this would include *"/tech/mobile/android"*, *"/tech/mobile/ios"* Tiles but also would include *"/tech/mobile-rumours"* Tiles. Which are clearly two different areas right?
	//
	// But what if you want to really limit for Tiles under the *"/tech/mobile"* area?
	//
	// Well then you can use the second query value: **"/tech/mobile/\*"**. This would include *"/tech/mobile/android"*, *"/tech/mobile/ios"* but would NOT include *"/tech/mobile-rumours"* anymore - as that is not a match anymore. But we are not done yet! Please note: this would also include Tiles under *"/tech/mobile/"* group itself. Because **"/\*"** means "everything which is under this group"
	TileGroupPathMatchingOnly *string `json:"tileGroupPathMatchingOnly,omitempty" yaml:"tileGroupPathMatchingOnly,omitempty"`

	// TileTypesOnly Data filter option. Comma separated list of tile types you want to limit the query for. If you list more values here then they are interpreted with an OR operator.
	//
	// IMPORTANT! You can not use this together with `tileTypeIsNot` parameter! You can only use this or that but not both.
	//
	// In the list you can either use: * The name of the type ('frontpage', 'page', 'article', ...), or * The numeric ID of the tile type - returned by `/v2/stat/webhits/{containerId}/idmappings` endpoint - using the format `id:<numeric ID>`, e.g. **"id:123"**
	TileTypesOnly        *string                `json:"tileTypesOnly,omitempty" yaml:"tileTypesOnly,omitempty"`
	AdditionalProperties map[string]interface{} `json:"-"`
}

// ReportQueryPlugin defines model for ReportQueryPlugin.
type ReportQueryPlugin string

// ReportRecipients This is an optional setup - controlls who will receive these reports.
//
// If not given at all then ALL Data Container users will get the report. Otherwise if given then Keytiles users who are matching to ANY of the given criteria will receive the report.
type ReportRecipients struct {
	// Roles Optional entry. All Data Container users who has ANY of the listed roles will receive this report.
	Roles *[]ReportRecipientsRoles `json:"roles,omitempty" yaml:"roles,omitempty"`

	// Users Optional entry. List of specific Keytiles users (email or ID) to send the reports to. The users who are listed here will get the reports for sure if
	//  * they are not disabled in Keytiles (can not log in)
	//  * they are not associated with the Data Container anyhow
	Users *[]string `json:"users,omitempty" yaml:"users,omitempty"`
}

// ReportRecipientsRoles defines model for ReportRecipientsRoles.
type ReportRecipientsRoles string

// ReportSetup defines model for ReportSetup.
type ReportSetup struct {
	// Id The unique ID of this report setup - UUID style
	Id       string                `json:"id" yaml:"id"`
	MetaData externalRef0.MetaData `json:"metaData" yaml:"metaData"`

	// Queries Queries of this report.
	Queries []ReportQuery `json:"queries" yaml:"queries"`

	// Recipients This is an optional setup - controlls who will receive these reports.
	//
	// If not given at all then ALL Data Container users will get the report. Otherwise if given then Keytiles users who are matching to ANY of the given criteria will receive the report.
	Recipients *ReportRecipients `json:"recipients" yaml:"recipients"`

	// ResourceVersion This is the resource version (which is automatically incremented by every change). When you do an update (PUT) you need to send it back! The server will check if it is matching with the resource version he has. If not then that means someone else already did an update in the meantime therefore your request can not be accepted - otherwise you may overwrite the changes someone did.
	ResourceVersion int `json:"resourceVersion" yaml:"resourceVersion"`

	// Schedule Describes a Schedule of something. As of now you have basically 4 types: hourly, daily, weekly and Monthly schedules.
	Schedule *externalRef1.Schedule `json:"schedule,omitempty" yaml:"schedule,omitempty"`
}

// ReportsEndpointErrorCodes defines model for ReportsEndpointErrorCodes.
type ReportsEndpointErrorCodes string

// ReportsEndpointLocalErrorCodes defines model for ReportsEndpointLocalErrorCodes.
type ReportsEndpointLocalErrorCodes string

// ReportsEndpointProblemClass defines model for ReportsEndpointProblemClass.
type ReportsEndpointProblemClass struct {
	ErrorCodes *[]ReportsEndpointErrorCodes `json:"errorCodes" yaml:"errorCodes"`

	// Message The problem in human readable form
	Message string `json:"message" yaml:"message"`

	// Place This info piece is most useful for 400 - "Bad Request" problems but can be meaningful of course in other scenarios too. It marks the place which has the problem.
	Place *externalRef2.ProblemPlaceEnum `json:"place" yaml:"place"`

	// PlaceName If it makes sense it tells you which place was problematic. E.g. if a request parameter should be an Integer but you send in something wrong then "placeName" will tell you exactly which request parameter was wrong.
	PlaceName *string                             `json:"placeName" yaml:"placeName"`
	Severity  ReportsEndpointProblemClassSeverity `json:"severity" yaml:"severity"`
}

// ReportsEndpointProblemClassSeverity defines model for ReportsEndpointProblemClass.Severity.
type ReportsEndpointProblemClassSeverity string

// ReportSetupId defines model for reportSetupId.
type ReportSetupId = string

// PostV1ReportsContainersSetupRestContainerIdJSONRequestBody defines body for PostV1ReportsContainersSetupRestContainerId for application/json ContentType.
type PostV1ReportsContainersSetupRestContainerIdJSONRequestBody = ReportSetup

// PutV1ReportsContainersSetupRestContainerIdReportSetupIdJSONRequestBody defines body for PutV1ReportsContainersSetupRestContainerIdReportSetupId for application/json ContentType.
type PutV1ReportsContainersSetupRestContainerIdReportSetupIdJSONRequestBody = ReportSetup

// Getter for additional properties for ReportQuery_Parameters. Returns the specified
// element and whether it was found
func (a ReportQuery_Parameters) Get(fieldName string) (value interface{}, found bool) {
	if a.AdditionalProperties != nil {
		value, found = a.AdditionalProperties[fieldName]
	}
	return
}

// Setter for additional properties for ReportQuery_Parameters
func (a *ReportQuery_Parameters) Set(fieldName string, value interface{}) {
	if a.AdditionalProperties == nil {
		a.AdditionalProperties = make(map[string]interface{})
	}
	a.AdditionalProperties[fieldName] = value
}

// Override default JSON handling for ReportQuery_Parameters to handle AdditionalProperties
func (a *ReportQuery_Parameters) UnmarshalJSON(b []byte) error {
	object := make(map[string]json.RawMessage)
	err := json.Unmarshal(b, &object)
	if err != nil {
		return err
	}

	if raw, found := object["eventsIncluded"]; found {
		err = json.Unmarshal(raw, &a.EventsIncluded)
		if err != nil {
			return fmt.Errorf("error reading 'eventsIncluded': %w", err)
		}
		delete(object, "eventsIncluded")
	}

	if raw, found := object["groupByTileGroupPathMaxDepth"]; found {
		err = json.Unmarshal(raw, &a.GroupByTileGroupPathMaxDepth)
		if err != nil {
			return fmt.Errorf("error reading 'groupByTileGroupPathMaxDepth': %w", err)
		}
		delete(object, "groupByTileGroupPathMaxDepth")
	}

	if raw, found := object["groupByTileGroupPaths"]; found {
		err = json.Unmarshal(raw, &a.GroupByTileGroupPaths)
		if err != nil {
			return fmt.Errorf("error reading 'groupByTileGroupPaths': %w", err)
		}
		delete(object, "groupByTileGroupPaths")
	}

	if raw, found := object["groupByTiles"]; found {
		err = json.Unmarshal(raw, &a.GroupByTiles)
		if err != nil {
			return fmt.Errorf("error reading 'groupByTiles': %w", err)
		}
		delete(object, "groupByTiles")
	}

	if raw, found := object["groupByTime"]; found {
		err = json.Unmarshal(raw, &a.GroupByTime)
		if err != nil {
			return fmt.Errorf("error reading 'groupByTime': %w", err)
		}
		delete(object, "groupByTime")
	}

	if raw, found := object["performanceDescendingOrder"]; found {
		err = json.Unmarshal(raw, &a.PerformanceDescendingOrder)
		if err != nil {
			return fmt.Errorf("error reading 'performanceDescendingOrder': %w", err)
		}
		delete(object, "performanceDescendingOrder")
	}

	if raw, found := object["tileCountLimit"]; found {
		err = json.Unmarshal(raw, &a.TileCountLimit)
		if err != nil {
			return fmt.Errorf("error reading 'tileCountLimit': %w", err)
		}
		delete(object, "tileCountLimit")
	}

	if raw, found := object["tileGroupPathMatchingOnly"]; found {
		err = json.Unmarshal(raw, &a.TileGroupPathMatchingOnly)
		if err != nil {
			return fmt.Errorf("error reading 'tileGroupPathMatchingOnly': %w", err)
		}
		delete(object, "tileGroupPathMatchingOnly")
	}

	if raw, found := object["tileTypesOnly"]; found {
		err = json.Unmarshal(raw, &a.TileTypesOnly)
		if err != nil {
			return fmt.Errorf("error reading 'tileTypesOnly': %w", err)
		}
		delete(object, "tileTypesOnly")
	}

	if len(object) != 0 {
		a.AdditionalProperties = make(map[string]interface{})
		for fieldName, fieldBuf := range object {
			var fieldVal interface{}
			err := json.Unmarshal(fieldBuf, &fieldVal)
			if err != nil {
				return fmt.Errorf("error unmarshaling field %s: %w", fieldName, err)
			}
			a.AdditionalProperties[fieldName] = fieldVal
		}
	}
	return nil
}

// Override default JSON handling for ReportQuery_Parameters to handle AdditionalProperties
func (a ReportQuery_Parameters) MarshalJSON() ([]byte, error) {
	var err error
	object := make(map[string]json.RawMessage)

	if a.EventsIncluded != nil {
		object["eventsIncluded"], err = json.Marshal(a.EventsIncluded)
		if err != nil {
			return nil, fmt.Errorf("error marshaling 'eventsIncluded': %w", err)
		}
	}

	if a.GroupByTileGroupPathMaxDepth != nil {
		object["groupByTileGroupPathMaxDepth"], err = json.Marshal(a.GroupByTileGroupPathMaxDepth)
		if err != nil {
			return nil, fmt.Errorf("error marshaling 'groupByTileGroupPathMaxDepth': %w", err)
		}
	}

	if a.GroupByTileGroupPaths != nil {
		object["groupByTileGroupPaths"], err = json.Marshal(a.GroupByTileGroupPaths)
		if err != nil {
			return nil, fmt.Errorf("error marshaling 'groupByTileGroupPaths': %w", err)
		}
	}

	if a.GroupByTiles != nil {
		object["groupByTiles"], err = json.Marshal(a.GroupByTiles)
		if err != nil {
			return nil, fmt.Errorf("error marshaling 'groupByTiles': %w", err)
		}
	}

	if a.GroupByTime != nil {
		object["groupByTime"], err = json.Marshal(a.GroupByTime)
		if err != nil {
			return nil, fmt.Errorf("error marshaling 'groupByTime': %w", err)
		}
	}

	if a.PerformanceDescendingOrder != nil {
		object["performanceDescendingOrder"], err = json.Marshal(a.PerformanceDescendingOrder)
		if err != nil {
			return nil, fmt.Errorf("error marshaling 'performanceDescendingOrder': %w", err)
		}
	}

	if a.TileCountLimit != nil {
		object["tileCountLimit"], err = json.Marshal(a.TileCountLimit)
		if err != nil {
			return nil, fmt.Errorf("error marshaling 'tileCountLimit': %w", err)
		}
	}

	if a.TileGroupPathMatchingOnly != nil {
		object["tileGroupPathMatchingOnly"], err = json.Marshal(a.TileGroupPathMatchingOnly)
		if err != nil {
			return nil, fmt.Errorf("error marshaling 'tileGroupPathMatchingOnly': %w", err)
		}
	}

	if a.TileTypesOnly != nil {
		object["tileTypesOnly"], err = json.Marshal(a.TileTypesOnly)
		if err != nil {
			return nil, fmt.Errorf("error marshaling 'tileTypesOnly': %w", err)
		}
	}

	for fieldName, field := range a.AdditionalProperties {
		object[fieldName], err = json.Marshal(field)
		if err != nil {
			return nil, fmt.Errorf("error marshaling '%s': %w", fieldName, err)
		}
	}
	return json.Marshal(object)
}
