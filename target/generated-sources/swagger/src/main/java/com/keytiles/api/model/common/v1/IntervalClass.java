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

import java.io.Serializable;

public class IntervalClass implements Serializable{
  private static final long serialVersionUID = 1L;


  private Integer id = null;

  private Integer starts = null;

  private Integer length = null;


  
  @JsonCreator
  public IntervalClass(@JsonProperty("id") Integer id, @JsonProperty("starts") Integer starts, @JsonProperty("length") Integer length) {
    super();
    if(id == null) {
      throw new IllegalArgumentException("'id' value can not be NULL");
    }
    if(starts == null) {
      throw new IllegalArgumentException("'starts' value can not be NULL");
    }
    if(length == null) {
      throw new IllegalArgumentException("'length' value can not be NULL");
    }
    this.id = id;
    this.starts = starts;
    this.length = length;
  }
  
  
 
  @JsonProperty("id")
  public Integer getId() {
    return id;
  }  

  @JsonProperty("id")
  public void setId(Integer id) {
    if(id == null) {
      throw new IllegalArgumentException("'id' value can not be NULL");
    }
    this.id = id;
  }

  @JsonProperty("starts")
  public Integer getStarts() {
    return starts;
  }  

  @JsonProperty("starts")
  public void setStarts(Integer starts) {
    if(starts == null) {
      throw new IllegalArgumentException("'starts' value can not be NULL");
    }
    this.starts = starts;
  }

  @JsonProperty("length")
  public Integer getLength() {
    return length;
  }  

  @JsonProperty("length")
  public void setLength(Integer length) {
    if(length == null) {
      throw new IllegalArgumentException("'length' value can not be NULL");
    }
    this.length = length;
  }



  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    IntervalClass intervalClass = (IntervalClass) o;
    return Objects.equals(this.id, intervalClass.id) &&
        Objects.equals(this.starts, intervalClass.starts) &&
        Objects.equals(this.length, intervalClass.length);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, starts, length);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class IntervalClass {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    starts: ").append(toIndentedString(starts)).append("\n");
    sb.append("    length: ").append(toIndentedString(length)).append("\n");
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
