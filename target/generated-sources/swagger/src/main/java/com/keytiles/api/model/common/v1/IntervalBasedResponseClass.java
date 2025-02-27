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

package com.keytiles.api.model.common.v1;

import java.util.Objects;
import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import com.keytiles.api.model.common.v1.BaseResponseClass;
import com.keytiles.api.model.common.v1.ResponseContainerInfoClass;
import java.util.List;

import java.io.Serializable;

public class IntervalBasedResponseClass extends BaseResponseClass implements Serializable{
  private static final long serialVersionUID = 1L;


  private ResponseContainerInfoClass container = null;

  private Integer requestedFromTimestamp = null;

  private Integer requestedToTimestamp = null;

  private Integer dataFromTimestamp = null;

  private Integer dataToTimestamp = null;


  
  @JsonCreator
  public IntervalBasedResponseClass(@JsonProperty("requestReceivedAt") Integer requestReceivedAt, @JsonProperty("processingTookMillis") Integer processingTookMillis, @JsonProperty("container") ResponseContainerInfoClass container, @JsonProperty("requestedFromTimestamp") Integer requestedFromTimestamp, @JsonProperty("requestedToTimestamp") Integer requestedToTimestamp, @JsonProperty("dataFromTimestamp") Integer dataFromTimestamp, @JsonProperty("dataToTimestamp") Integer dataToTimestamp) {
    super(requestReceivedAt, processingTookMillis);
    if(container == null) {
      throw new IllegalArgumentException("'container' value can not be NULL");
    }
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
    this.container = container;
    this.requestedFromTimestamp = requestedFromTimestamp;
    this.requestedToTimestamp = requestedToTimestamp;
    this.dataFromTimestamp = dataFromTimestamp;
    this.dataToTimestamp = dataToTimestamp;
  }
  
  
 
  @JsonProperty("container")
  public ResponseContainerInfoClass getContainer() {
    return container;
  }  

  @JsonProperty("container")
  public void setContainer(ResponseContainerInfoClass container) {
    if(container == null) {
      throw new IllegalArgumentException("'container' value can not be NULL");
    }
    this.container = container;
  }

  @JsonProperty("requestedFromTimestamp")
  public Integer getRequestedFromTimestamp() {
    return requestedFromTimestamp;
  }  

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
    IntervalBasedResponseClass intervalBasedResponseClass = (IntervalBasedResponseClass) o;
    return Objects.equals(this.container, intervalBasedResponseClass.container) &&
        Objects.equals(this.requestedFromTimestamp, intervalBasedResponseClass.requestedFromTimestamp) &&
        Objects.equals(this.requestedToTimestamp, intervalBasedResponseClass.requestedToTimestamp) &&
        Objects.equals(this.dataFromTimestamp, intervalBasedResponseClass.dataFromTimestamp) &&
        Objects.equals(this.dataToTimestamp, intervalBasedResponseClass.dataToTimestamp) &&
        super.equals(o);
  }

  @Override
  public int hashCode() {
    return Objects.hash(container, requestedFromTimestamp, requestedToTimestamp, dataFromTimestamp, dataToTimestamp, super.hashCode());
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class IntervalBasedResponseClass {\n");
    sb.append("    ").append(toIndentedString(super.toString())).append("\n");
    sb.append("    container: ").append(toIndentedString(container)).append("\n");
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
