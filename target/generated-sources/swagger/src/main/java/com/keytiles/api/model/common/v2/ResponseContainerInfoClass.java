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

import java.io.Serializable;

public class ResponseContainerInfoClass implements Serializable{
  private static final long serialVersionUID = 1L;


  // @Generator: becomes private - as non-nullable so we need to protect it with setter and null-check 
  private String id = null;

  // @Generator: becomes private - as non-nullable so we need to protect it with setter and null-check 
  private String name = null;


  
  // @Generator: arg 'id': mandatory field 
  // @Generator: arg 'name': non-nullable and does not have default value - we must enforce a non-null initial value 
  @JsonCreator
  public ResponseContainerInfoClass(@JsonProperty("id") String id, @JsonProperty("name") String name) {
    super();
    if(id == null) {
      throw new IllegalArgumentException("'id' value can not be NULL");
    }
    if(name == null) {
      throw new IllegalArgumentException("'name' value can not be NULL");
    }
    this.id = id;
    this.name = name;
  }
  
  
 
  @JsonProperty("id")
  public String getId() {
    return id;
  }  

  // @Generator: added to protect field 'id' against null-value assignment 
  @JsonProperty("id")
  public void setId(String id) {
    if(id == null) {
      throw new IllegalArgumentException("'id' value can not be NULL");
    }
    this.id = id;
  }

  @JsonProperty("name")
  public String getName() {
    return name;
  }  

  // @Generator: added to protect field 'name' against null-value assignment 
  @JsonProperty("name")
  public void setName(String name) {
    if(name == null) {
      throw new IllegalArgumentException("'name' value can not be NULL");
    }
    this.name = name;
  }



  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ResponseContainerInfoClass responseContainerInfoClass = (ResponseContainerInfoClass) o;
    return Objects.equals(this.id, responseContainerInfoClass.id) &&
        Objects.equals(this.name, responseContainerInfoClass.name);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ResponseContainerInfoClass {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
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
