// Package kt_pubapi_gen_common_metadatav1 provides primitives to interact with the openapi HTTP API.
//
// Code generated by github.com/oapi-codegen/oapi-codegen/v2 version v2.4.1 DO NOT EDIT.
package kt_pubapi_gen_common_metadatav1

// ChangelogEntry Defines a change - who changed what, when?
type ChangelogEntry struct {
	// Comment Some description added to this change. Can be generated and/or amended with user input too.
	Comment *string `json:"comment,omitempty"`

	// Time The time of the change as UNIX timestamp in UTC (seconds since Epoch).
	Time int32 `json:"time"`

	// Who This is the nickname of the Keytiles user who made the change. So no hard user link here - just take it easy...
	Who string `json:"who"`
}

// MetaData defines model for MetaData.
type MetaData struct {
	// Changelog Changes which were made. Append only log - in time ascending order.
	Changelog *[]ChangelogEntry `json:"changelog,omitempty"`

	// Description Optional field. This is a longer description of what this entity is about.
	Description *string `json:"description,omitempty"`

	// MajorVersion The major version of the MetaData schema which was used when this object was created. This helps to evolve MetaData over time.
	MajorVersion int `json:"majorVersion"`

	// Title Mandatory field. The title of the entity.
	Title string `json:"title"`
}
