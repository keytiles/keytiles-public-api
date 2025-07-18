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

import java.util.Objects;
import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import com.keytiles.api.model.common.v2.ProblemBaseClass;
import com.keytiles.api.model.common.v2.ProblemPlaceEnum;
import com.keytiles.api.model.reports.v1.ReportsEndpointErrorCodes;
import java.util.ArrayList;
import java.util.List;

import java.io.Serializable;

public class ReportsEndpointProblemClass extends ProblemBaseClass implements Serializable{
  private static final long serialVersionUID = 1L;



  // @Generator: overriding 'ProblemBaseClass.errorCodes' 
  // @Generator: becomes public - as nullable (no need to null-check) and not readonly 
  @JsonProperty("errorCodes")
  public List<ReportsEndpointErrorCodes> errorCodes = new ArrayList<>();

  
  @JsonCreator
  public ReportsEndpointProblemClass(@JsonProperty("severity") SeverityEnum severity, @JsonProperty("message") String message) {
    super(severity, message);
  }
  
  
 


  // @Generator: builder style helper method to add values to not-readonly array field
  public ReportsEndpointProblemClass addErrorCodesItem(ReportsEndpointErrorCodes errorCodesItem) {
    if (this.errorCodes == null) {
 		this.errorCodes = new ArrayList<>();
    }
    this.errorCodes.add(errorCodesItem);
    return this;
  }

  // @Generator: builder style helper method to remove values from not-readonly array field
  public ReportsEndpointProblemClass removeErrorCodesItem(ReportsEndpointErrorCodes errorCodesItem) {
    if (this.errorCodes != null) {
    	this.errorCodes.remove(errorCodesItem);
    }
    return this;
  }

  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ReportsEndpointProblemClass reportsEndpointProblemClass = (ReportsEndpointProblemClass) o;
    return Objects.equals(this.errorCodes, reportsEndpointProblemClass.errorCodes) &&
        super.equals(o);
  }

  @Override
  public int hashCode() {
    return Objects.hash(errorCodes, super.hashCode());
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ReportsEndpointProblemClass {\n");
    sb.append("    ").append(toIndentedString(super.toString())).append("\n");
    sb.append("    errorCodes: ").append(toIndentedString(errorCodes)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}
