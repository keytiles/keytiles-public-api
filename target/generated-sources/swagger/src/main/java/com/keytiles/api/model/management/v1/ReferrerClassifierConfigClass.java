/*
 * Keytiles Management API
 * API to manage users, permissions, containers, etc.
 *
 * OpenAPI spec version: 1.5.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.keytiles.api.model.management.v1;

import java.util.Objects;
import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import java.io.Serializable;

public class ReferrerClassifierConfigClass implements Serializable{
  private static final long serialVersionUID = 1L;


  // @Generator: becomes private - as non-nullable so we need to protect it with setter and null-check 
  private String name = null;

  // @Generator: becomes private - as non-nullable so we need to protect it with setter and null-check 
  private String domainRegex = null;

  // @Generator: becomes private - as non-nullable so we need to protect it with setter and null-check 
  private String pathRegex = null;

  // @Generator: becomes private - as non-nullable so we need to protect it with setter and null-check 
  private String classifierClassName = null;

  // @Generator: becomes private - as non-nullable so we need to protect it with setter and null-check 
  private String options = null;


  
  // @Generator: arg 'name': non-nullable and does not have default value - we must enforce a non-null initial value 
  // @Generator: arg 'domainRegex': non-nullable and does not have default value - we must enforce a non-null initial value 
  // @Generator: arg 'pathRegex': non-nullable and does not have default value - we must enforce a non-null initial value 
  // @Generator: arg 'classifierClassName': non-nullable and does not have default value - we must enforce a non-null initial value 
  // @Generator: arg 'options': non-nullable and does not have default value - we must enforce a non-null initial value 
  @JsonCreator
  public ReferrerClassifierConfigClass(@JsonProperty("name") String name, @JsonProperty("domainRegex") String domainRegex, @JsonProperty("pathRegex") String pathRegex, @JsonProperty("classifierClassName") String classifierClassName, @JsonProperty("options") String options) {
    super();
    if(name == null) {
      throw new IllegalArgumentException("'name' value can not be NULL");
    }
    if(domainRegex == null) {
      throw new IllegalArgumentException("'domainRegex' value can not be NULL");
    }
    if(pathRegex == null) {
      throw new IllegalArgumentException("'pathRegex' value can not be NULL");
    }
    if(classifierClassName == null) {
      throw new IllegalArgumentException("'classifierClassName' value can not be NULL");
    }
    if(options == null) {
      throw new IllegalArgumentException("'options' value can not be NULL");
    }
    this.name = name;
    this.domainRegex = domainRegex;
    this.pathRegex = pathRegex;
    this.classifierClassName = classifierClassName;
    this.options = options;
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

  @JsonProperty("domainRegex")
  public String getDomainRegex() {
    return domainRegex;
  }  

  // @Generator: added to protect field 'domainRegex' against null-value assignment 
  @JsonProperty("domainRegex")
  public void setDomainRegex(String domainRegex) {
    if(domainRegex == null) {
      throw new IllegalArgumentException("'domainRegex' value can not be NULL");
    }
    this.domainRegex = domainRegex;
  }

  @JsonProperty("pathRegex")
  public String getPathRegex() {
    return pathRegex;
  }  

  // @Generator: added to protect field 'pathRegex' against null-value assignment 
  @JsonProperty("pathRegex")
  public void setPathRegex(String pathRegex) {
    if(pathRegex == null) {
      throw new IllegalArgumentException("'pathRegex' value can not be NULL");
    }
    this.pathRegex = pathRegex;
  }

  @JsonProperty("classifierClassName")
  public String getClassifierClassName() {
    return classifierClassName;
  }  

  // @Generator: added to protect field 'classifierClassName' against null-value assignment 
  @JsonProperty("classifierClassName")
  public void setClassifierClassName(String classifierClassName) {
    if(classifierClassName == null) {
      throw new IllegalArgumentException("'classifierClassName' value can not be NULL");
    }
    this.classifierClassName = classifierClassName;
  }

  @JsonProperty("options")
  public String getOptions() {
    return options;
  }  

  // @Generator: added to protect field 'options' against null-value assignment 
  @JsonProperty("options")
  public void setOptions(String options) {
    if(options == null) {
      throw new IllegalArgumentException("'options' value can not be NULL");
    }
    this.options = options;
  }



  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ReferrerClassifierConfigClass referrerClassifierConfigClass = (ReferrerClassifierConfigClass) o;
    return Objects.equals(this.name, referrerClassifierConfigClass.name) &&
        Objects.equals(this.domainRegex, referrerClassifierConfigClass.domainRegex) &&
        Objects.equals(this.pathRegex, referrerClassifierConfigClass.pathRegex) &&
        Objects.equals(this.classifierClassName, referrerClassifierConfigClass.classifierClassName) &&
        Objects.equals(this.options, referrerClassifierConfigClass.options);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, domainRegex, pathRegex, classifierClassName, options);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ReferrerClassifierConfigClass {\n");
    
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    domainRegex: ").append(toIndentedString(domainRegex)).append("\n");
    sb.append("    pathRegex: ").append(toIndentedString(pathRegex)).append("\n");
    sb.append("    classifierClassName: ").append(toIndentedString(classifierClassName)).append("\n");
    sb.append("    options: ").append(toIndentedString(options)).append("\n");
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
