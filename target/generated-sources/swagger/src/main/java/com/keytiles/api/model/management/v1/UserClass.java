/*
 * Keytiles Management API
 * API to manage users, permissions, containers, etc.
 *
 * OpenAPI spec version: 1.4.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.keytiles.api.model.management.v1;

import java.util.Objects;
import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import com.keytiles.api.model.management.v1.UserContainerLink;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import java.io.Serializable;

public class UserClass implements Serializable{
  private static final long serialVersionUID = 1L;

  // @Generator: becomes private final - as readonly 
  private final String id;
  // @Generator: becomes private final - as readonly 
  private final Integer lastLoginTimestamp;
  // @Generator: becomes private final - as readonly 
  private final Integer createdTimestamp;

  // @Generator: becomes private - as non-nullable so we need to protect it with setter and null-check 
  private Integer version = null;

  // @Generator: becomes private - as non-nullable so we need to protect it with setter and null-check 
  private String email = null;

  // @Generator: becomes private - as non-nullable so we need to protect it with setter and null-check 
  private String password = null;

  // @Generator: becomes private - as non-nullable so we need to protect it with setter and null-check 
  private String nickname = null;

  // @Generator: becomes private - as non-nullable so we need to protect it with setter and null-check 
  private Boolean isEnabled = null;

  // @Generator: becomes private - as non-nullable so we need to protect it with setter and null-check 
  private Boolean isKeytilesAdmin = null;

  // @Generator: non-nullable property so Codegen applied a default empty array to it automatically because it is possible with this type 
  // @Generator: becomes private - as non-nullable so we need to protect it with setter and null-check 
  private List<UserContainerLink> containers = new ArrayList<>();


  // @Generator: listed in 'x-keytiles-serialize-only-if-non-default-properties' - so necessary annotations added here OR to the getter 
  // @Generator: this map does not have default and nullable - so let's keep it on NULL then 
  // @Generator: becomes public - as nullable (no need to null-check) and not readonly 
  @JsonInclude(Include.NON_DEFAULT)
  @JsonProperty("data")
  public Map<String, String> data = null;

  
  // @Generator: arg 'id': private final field because it is readonly (also non-null check as not nullable) 
  // @Generator: arg 'version': non-nullable and does not have default value - we must enforce a non-null initial value 
  // @Generator: arg 'email': non-nullable and does not have default value - we must enforce a non-null initial value 
  // @Generator: arg 'password': non-nullable and does not have default value - we must enforce a non-null initial value 
  // @Generator: arg 'nickname': non-nullable and does not have default value - we must enforce a non-null initial value 
  // @Generator: arg 'lastLoginTimestamp': private final field because it is readonly 
  // @Generator: arg 'createdTimestamp': private final field because it is readonly (also non-null check as not nullable) 
  // @Generator: arg 'isEnabled': non-nullable and does not have default value - we must enforce a non-null initial value 
  // @Generator: arg 'isKeytilesAdmin': non-nullable and does not have default value - we must enforce a non-null initial value 
  @JsonCreator
  public UserClass(@JsonProperty("id") String id, @JsonProperty("lastLoginTimestamp") Integer lastLoginTimestamp, @JsonProperty("createdTimestamp") Integer createdTimestamp, @JsonProperty("version") Integer version, @JsonProperty("email") String email, @JsonProperty("password") String password, @JsonProperty("nickname") String nickname, @JsonProperty("isEnabled") Boolean isEnabled, @JsonProperty("isKeytilesAdmin") Boolean isKeytilesAdmin) {
    super();
    if(id == null) {
      throw new IllegalArgumentException("'id' value can not be NULL");
    }
    if(version == null) {
      throw new IllegalArgumentException("'version' value can not be NULL");
    }
    if(email == null) {
      throw new IllegalArgumentException("'email' value can not be NULL");
    }
    if(password == null) {
      throw new IllegalArgumentException("'password' value can not be NULL");
    }
    if(nickname == null) {
      throw new IllegalArgumentException("'nickname' value can not be NULL");
    }
    if(createdTimestamp == null) {
      throw new IllegalArgumentException("'createdTimestamp' value can not be NULL");
    }
    if(isEnabled == null) {
      throw new IllegalArgumentException("'isEnabled' value can not be NULL");
    }
    if(isKeytilesAdmin == null) {
      throw new IllegalArgumentException("'isKeytilesAdmin' value can not be NULL");
    }
    this.id = id;
    this.lastLoginTimestamp = lastLoginTimestamp;
    this.createdTimestamp = createdTimestamp;
    this.version = version;
    this.email = email;
    this.password = password;
    this.nickname = nickname;
    this.isEnabled = isEnabled;
    this.isKeytilesAdmin = isKeytilesAdmin;
  }
  
  
  @JsonProperty("id")
  public String getId() {
    return id;
  }
  @JsonProperty("lastLoginTimestamp")
  public Integer getLastLoginTimestamp() {
    return lastLoginTimestamp;
  }
  @JsonProperty("createdTimestamp")
  public Integer getCreatedTimestamp() {
    return createdTimestamp;
  }
 
  @JsonProperty("version")
  public Integer getVersion() {
    return version;
  }  

  // @Generator: added to protect field 'version' against null-value assignment 
  @JsonProperty("version")
  public void setVersion(Integer version) {
    if(version == null) {
      throw new IllegalArgumentException("'version' value can not be NULL");
    }
    this.version = version;
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

  @JsonProperty("password")
  public String getPassword() {
    return password;
  }  

  // @Generator: added to protect field 'password' against null-value assignment 
  @JsonProperty("password")
  public void setPassword(String password) {
    if(password == null) {
      throw new IllegalArgumentException("'password' value can not be NULL");
    }
    this.password = password;
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

  @JsonProperty("isEnabled")
  public Boolean isIsEnabled() {
    return isEnabled;
  }  

  // @Generator: added to protect field 'isEnabled' against null-value assignment 
  @JsonProperty("isEnabled")
  public void setIsEnabled(Boolean isEnabled) {
    if(isEnabled == null) {
      throw new IllegalArgumentException("'isEnabled' value can not be NULL");
    }
    this.isEnabled = isEnabled;
  }

  @JsonProperty("isKeytilesAdmin")
  public Boolean isIsKeytilesAdmin() {
    return isKeytilesAdmin;
  }  

  // @Generator: added to protect field 'isKeytilesAdmin' against null-value assignment 
  @JsonProperty("isKeytilesAdmin")
  public void setIsKeytilesAdmin(Boolean isKeytilesAdmin) {
    if(isKeytilesAdmin == null) {
      throw new IllegalArgumentException("'isKeytilesAdmin' value can not be NULL");
    }
    this.isKeytilesAdmin = isKeytilesAdmin;
  }

  @JsonProperty("containers")
  public List<UserContainerLink> getContainers() {
    return containers;
  }  

  // @Generator: added to protect field 'containers' against null-value assignment 
  @JsonProperty("containers")
  public void setContainers(List<UserContainerLink> containers) {
    if(containers == null) {
      throw new IllegalArgumentException("'containers' value can not be NULL");
    }
    this.containers = containers;
  }



  // @Generator: builder style helper method to add values to not-readonly array field
  public UserClass addContainersItem(UserContainerLink containersItem) {
    if (this.containers == null) {
 		this.containers = new ArrayList<>();
    }
    this.containers.add(containersItem);
    return this;
  }

  // @Generator: builder style helper method to remove values from not-readonly array field
  public UserClass removeContainersItem(UserContainerLink containersItem) {
    if (this.containers != null) {
    	this.containers.remove(containersItem);
    }
    return this;
  }

  // @Generator: builder style helper method to put values into not-readonly map field
  public UserClass putDataItem(String key, String dataItem) {
    if (this.data == null) {
		this.data = new HashMap<>();
    }
    this.data.put(key, dataItem);
    return this;
  }

  // @Generator: builder style helper method to remove values from not-readonly map field
  public UserClass removeDataItem(String key) {
    if (this.data != null) {
    	this.data.remove(key);
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
    UserClass userClass = (UserClass) o;
    return Objects.equals(this.id, userClass.id) &&
        Objects.equals(this.version, userClass.version) &&
        Objects.equals(this.email, userClass.email) &&
        Objects.equals(this.password, userClass.password) &&
        Objects.equals(this.nickname, userClass.nickname) &&
        Objects.equals(this.lastLoginTimestamp, userClass.lastLoginTimestamp) &&
        Objects.equals(this.createdTimestamp, userClass.createdTimestamp) &&
        Objects.equals(this.isEnabled, userClass.isEnabled) &&
        Objects.equals(this.isKeytilesAdmin, userClass.isKeytilesAdmin) &&
        Objects.equals(this.containers, userClass.containers) &&
        Objects.equals(this.data, userClass.data);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, version, email, password, nickname, lastLoginTimestamp, createdTimestamp, isEnabled, isKeytilesAdmin, containers, data);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UserClass {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    version: ").append(toIndentedString(version)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    password: ").append(toIndentedString(password)).append("\n");
    sb.append("    nickname: ").append(toIndentedString(nickname)).append("\n");
    sb.append("    lastLoginTimestamp: ").append(toIndentedString(lastLoginTimestamp)).append("\n");
    sb.append("    createdTimestamp: ").append(toIndentedString(createdTimestamp)).append("\n");
    sb.append("    isEnabled: ").append(toIndentedString(isEnabled)).append("\n");
    sb.append("    isKeytilesAdmin: ").append(toIndentedString(isKeytilesAdmin)).append("\n");
    sb.append("    containers: ").append(toIndentedString(containers)).append("\n");
    sb.append("    data: ").append(toIndentedString(data)).append("\n");
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
