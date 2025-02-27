/*
 * Common object definitions
 * These object definitions are shared among multiple contracts
 *
 * OpenAPI spec version: 1.2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.keytiles.api.model.common.v2;

import java.util.Objects;
import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import com.keytiles.api.model.common.v2.BaseResponseClass;
import com.keytiles.api.model.common.v2.ProblemBaseClass;
import java.util.List;
import java.util.Map;

import java.io.Serializable;

public class MessageResponseClass extends BaseResponseClass implements Serializable{
  private static final long serialVersionUID = 1L;


  // @Generator: becomes private - as non-nullable so we need to protect it with setter and null-check 
  private String message = null;


  
  // @Generator: arg 'message': non-nullable and does not have default value - we must enforce a non-null initial value 
  @JsonCreator
  public MessageResponseClass(@JsonProperty("requestReceivedAt") Integer requestReceivedAt, @JsonProperty("message") String message) {
    super(requestReceivedAt);
    if(message == null) {
      throw new IllegalArgumentException("'message' value can not be NULL");
    }
    this.message = message;
  }
  
  
 
  @JsonProperty("message")
  public String getMessage() {
    return message;
  }  

  // @Generator: added to protect field 'message' against null-value assignment 
  @JsonProperty("message")
  public void setMessage(String message) {
    if(message == null) {
      throw new IllegalArgumentException("'message' value can not be NULL");
    }
    this.message = message;
  }



  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MessageResponseClass messageResponseClass = (MessageResponseClass) o;
    return Objects.equals(this.message, messageResponseClass.message) &&
        super.equals(o);
  }

  @Override
  public int hashCode() {
    return Objects.hash(message, super.hashCode());
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MessageResponseClass {\n");
    sb.append("    ").append(toIndentedString(super.toString())).append("\n");
    sb.append("    message: ").append(toIndentedString(message)).append("\n");
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
