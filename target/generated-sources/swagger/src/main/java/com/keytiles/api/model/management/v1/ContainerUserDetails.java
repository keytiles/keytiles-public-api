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

public class ContainerUserDetails implements Serializable{
  private static final long serialVersionUID = 1L;


  // @Generator: becomes private - as non-nullable so we need to protect it with setter and null-check 
  private String userId = null;

  // @Generator: becomes private - as non-nullable so we need to protect it with setter and null-check 
  private String nickname = null;

  // @Generator: becomes private - as non-nullable so we need to protect it with setter and null-check 
  private String email = null;


  
  // @Generator: arg 'userId': mandatory field 
  // @Generator: arg 'nickname': non-nullable and does not have default value - we must enforce a non-null initial value 
  // @Generator: arg 'email': non-nullable and does not have default value - we must enforce a non-null initial value 
  @JsonCreator
  public ContainerUserDetails(@JsonProperty("userId") String userId, @JsonProperty("nickname") String nickname, @JsonProperty("email") String email) {
    super();
    if(userId == null) {
      throw new IllegalArgumentException("'userId' value can not be NULL");
    }
    if(nickname == null) {
      throw new IllegalArgumentException("'nickname' value can not be NULL");
    }
    if(email == null) {
      throw new IllegalArgumentException("'email' value can not be NULL");
    }
    this.userId = userId;
    this.nickname = nickname;
    this.email = email;
  }
  
  
 
  @JsonProperty("userId")
  public String getUserId() {
    return userId;
  }  

  // @Generator: added to protect field 'userId' against null-value assignment 
  @JsonProperty("userId")
  public void setUserId(String userId) {
    if(userId == null) {
      throw new IllegalArgumentException("'userId' value can not be NULL");
    }
    this.userId = userId;
  }

  @JsonProperty("nickname")
  public String getNickname() {
    return nickname;
  }  

  // @Generator: added to protect field 'nickname' against null-value assignment 
  @JsonProperty("nickname")
  public void setNickname(String nickname) {
    if(nickname == null) {
      throw new IllegalArgumentException("'nickname' value can not be NULL");
    }
    this.nickname = nickname;
  }

  @JsonProperty("email")
  public String getEmail() {
    return email;
  }  

  // @Generator: added to protect field 'email' against null-value assignment 
  @JsonProperty("email")
  public void setEmail(String email) {
    if(email == null) {
      throw new IllegalArgumentException("'email' value can not be NULL");
    }
    this.email = email;
  }



  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ContainerUserDetails containerUserDetails = (ContainerUserDetails) o;
    return Objects.equals(this.userId, containerUserDetails.userId) &&
        Objects.equals(this.nickname, containerUserDetails.nickname) &&
        Objects.equals(this.email, containerUserDetails.email);
  }

  @Override
  public int hashCode() {
    return Objects.hash(userId, nickname, email);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ContainerUserDetails {\n");
    
    sb.append("    userId: ").append(toIndentedString(userId)).append("\n");
    sb.append("    nickname: ").append(toIndentedString(nickname)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
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
