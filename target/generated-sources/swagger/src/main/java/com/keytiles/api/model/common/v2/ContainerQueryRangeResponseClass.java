/*
 * Common object definitions
 * These object definitions are shared among multiple contracts
 *
 * OpenAPI spec version: 1.0
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
import com.keytiles.api.model.common.v2.ContainerResponseClass;
import com.keytiles.api.model.common.v2.ResponseContainerInfoClass;

import java.io.Serializable;

public class ContainerQueryRangeResponseClass extends ContainerResponseClass implements Serializable{
  private static final long serialVersionUID = 1L;


  // @Generator: becomes private - as non-nullable so we need to protect it with setter and null-check 
  private Integer requestedFromTimestamp = null;

  // @Generator: becomes private - as non-nullable so we need to protect it with setter and null-check 
  private Integer requestedToTimestamp = null;

  // @Generator: becomes private - as non-nullable so we need to protect it with setter and null-check 
  private Integer dataFromTimestamp = null;

  // @Generator: becomes private - as non-nullable so we need to protect it with setter and null-check 
  private Integer dataToTimestamp = null;


  
  // @Generator: arg 'requestedFromTimestamp': mandatory field 
  // @Generator: arg 'requestedToTimestamp': mandatory field 
  // @Generator: arg 'dataFromTimestamp': mandatory field 
  // @Generator: arg 'dataToTimestamp': mandatory field 
  @JsonCreator
  public ContainerQueryRangeResponseClass(@JsonProperty("requestReceivedAt") Integer requestReceivedAt, @JsonProperty("container") ResponseContainerInfoClass container, @JsonProperty("requestedFromTimestamp") Integer requestedFromTimestamp, @JsonProperty("requestedToTimestamp") Integer requestedToTimestamp, @JsonProperty("dataFromTimestamp") Integer dataFromTimestamp, @JsonProperty("dataToTimestamp") Integer dataToTimestamp) {
    super(requestReceivedAt, container);
    if(requestedFromTimestamp == null) {
      throw new IllegalArgumentException("'requestedFromTimestamp' value can not be NULL");
    }
    if(requestedToTimestamp == null) {
      throw new IllegalArgumentException("'requestedToTimestamp' value can not be NULL");
    }
    if(dataFromTimestamp == null) {
      throw new IllegalArgumentException("'dataFromTimestamp' value can not be NULL");
    }
    if(dataToTimestamp == null) {
      throw new IllegalArgumentException("'dataToTimestamp' value can not be NULL");
    }
    this.requestedFromTimestamp = requestedFromTimestamp;
    this.requestedToTimestamp = requestedToTimestamp;
    this.dataFromTimestamp = dataFromTimestamp;
    this.dataToTimestamp = dataToTimestamp;
  }
  
  
 
  @JsonProperty("requestedFromTimestamp")
  public Integer getRequestedFromTimestamp() {
    return requestedFromTimestamp;
  }  

  // @Generator: added to protect field 'requestedFromTimestamp' against null-value assignment 
  @JsonProperty("requestedFromTimestamp")
  public void setRequestedFromTimestamp(Integer requestedFromTimestamp) {
    if(requestedFromTimestamp == null) {
      throw new IllegalArgumentException("'requestedFromTimestamp' value can not be NULL");
    }
    this.requestedFromTimestamp = requestedFromTimestamp;
  }

  @JsonProperty("requestedToTimestamp")
  public Integer getRequestedToTimestamp() {
    return requestedToTimestamp;
  }  

  // @Generator: added to protect field 'requestedToTimestamp' against null-value assignment 
  @JsonProperty("requestedToTimestamp")
  public void setRequestedToTimestamp(Integer requestedToTimestamp) {
    if(requestedToTimestamp == null) {
      throw new IllegalArgumentException("'requestedToTimestamp' value can not be NULL");
    }
    this.requestedToTimestamp = requestedToTimestamp;
  }

  @JsonProperty("dataFromTimestamp")
  public Integer getDataFromTimestamp() {
    return dataFromTimestamp;
  }  

  // @Generator: added to protect field 'dataFromTimestamp' against null-value assignment 
  @JsonProperty("dataFromTimestamp")
  public void setDataFromTimestamp(Integer dataFromTimestamp) {
    if(dataFromTimestamp == null) {
      throw new IllegalArgumentException("'dataFromTimestamp' value can not be NULL");
    }
    this.dataFromTimestamp = dataFromTimestamp;
  }

  @JsonProperty("dataToTimestamp")
  public Integer getDataToTimestamp() {
    return dataToTimestamp;
  }  

  // @Generator: added to protect field 'dataToTimestamp' against null-value assignment 
  @JsonProperty("dataToTimestamp")
  public void setDataToTimestamp(Integer dataToTimestamp) {
    if(dataToTimestamp == null) {
      throw new IllegalArgumentException("'dataToTimestamp' value can not be NULL");
    }
    this.dataToTimestamp = dataToTimestamp;
  }



  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ContainerQueryRangeResponseClass containerQueryRangeResponseClass = (ContainerQueryRangeResponseClass) o;
    return Objects.equals(this.requestedFromTimestamp, containerQueryRangeResponseClass.requestedFromTimestamp) &&
        Objects.equals(this.requestedToTimestamp, containerQueryRangeResponseClass.requestedToTimestamp) &&
        Objects.equals(this.dataFromTimestamp, containerQueryRangeResponseClass.dataFromTimestamp) &&
        Objects.equals(this.dataToTimestamp, containerQueryRangeResponseClass.dataToTimestamp) &&
        super.equals(o);
  }

  @Override
  public int hashCode() {
    return Objects.hash(requestedFromTimestamp, requestedToTimestamp, dataFromTimestamp, dataToTimestamp, super.hashCode());
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ContainerQueryRangeResponseClass {\n");
    sb.append("    ").append(toIndentedString(super.toString())).append("\n");
    sb.append("    requestedFromTimestamp: ").append(toIndentedString(requestedFromTimestamp)).append("\n");
    sb.append("    requestedToTimestamp: ").append(toIndentedString(requestedToTimestamp)).append("\n");
    sb.append("    dataFromTimestamp: ").append(toIndentedString(dataFromTimestamp)).append("\n");
    sb.append("    dataToTimestamp: ").append(toIndentedString(dataToTimestamp)).append("\n");
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
