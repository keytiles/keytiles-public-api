/*
 * Keytiles Reporting API
 * API endpoints to manage / query / use Keytiles Reporting. 
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.keytiles.api.model.reports.v1;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
/**
* OneOfDataTableColumn
*/
@JsonTypeInfo(
  use = JsonTypeInfo.Id.NAME,
  include = JsonTypeInfo.As.PROPERTY,
  property = "type")
@JsonSubTypes({
  @JsonSubTypes.Type(value = DataTableAxisColumn.class, name = "DataTableAxisColumn"),
  @JsonSubTypes.Type(value = DataTableDataColumn.class, name = "DataTableDataColumn")
})
public interface OneOfDataTableColumn {

}
