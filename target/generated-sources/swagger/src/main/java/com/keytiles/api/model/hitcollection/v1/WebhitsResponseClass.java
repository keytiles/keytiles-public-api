/*
 * Keytiles Hit Collection API
 * API to collect hits received by the tracked website    This endpoint can be used as an integration point if you want to send in hits generated by your native iOS/Android/etc applications.      If you are planning to integrate your app traffic please visit the Keytiles website Developer area and learn more!      check [https://keytiles.com/developer-area/sending-in-traffic-from-ios-android-etc-apps](https://keytiles.com/developer-area/sending-in-traffic-from-ios-android-etc-apps) 
 *
 * OpenAPI spec version: 1.6.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.keytiles.api.model.hitcollection.v1;

import java.util.Objects;
import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import com.keytiles.api.model.hitcollection.v1.HitCollectionEndpointProblemClass;
import com.keytiles.api.model.hitcollection.v1.MachineReadableHitCollectionEndpointMessageResponseClass;
import com.keytiles.api.model.hitcollection.v1.WebhitsResponseClassDebugInfo;
import java.util.List;

import java.io.Serializable;

public class WebhitsResponseClass extends MachineReadableHitCollectionEndpointMessageResponseClass implements Serializable{
  private static final long serialVersionUID = 1L;


  private String tileId = null;

  private WebhitsResponseClassDebugInfo debugInfo = null;


  
  @JsonCreator
  public WebhitsResponseClass(@JsonProperty("requestReceivedAt") Integer requestReceivedAt, @JsonProperty("message") String message, @JsonProperty("tileId") String tileId, @JsonProperty("debugInfo") WebhitsResponseClassDebugInfo debugInfo) {
    super(requestReceivedAt, message);
    if(tileId == null) {
      throw new IllegalArgumentException("'tileId' value can not be NULL");
    }
    if(debugInfo == null) {
      throw new IllegalArgumentException("'debugInfo' value can not be NULL");
    }
    this.tileId = tileId;
    this.debugInfo = debugInfo;
  }
  
  
 
  @JsonProperty("tileId")
  public String getTileId() {
    return tileId;
  }  

  @JsonProperty("tileId")
  public void setTileId(String tileId) {
    if(tileId == null) {
      throw new IllegalArgumentException("'tileId' value can not be NULL");
    }
    this.tileId = tileId;
  }

  @JsonProperty("debugInfo")
  public WebhitsResponseClassDebugInfo getDebugInfo() {
    return debugInfo;
  }  

  @JsonProperty("debugInfo")
  public void setDebugInfo(WebhitsResponseClassDebugInfo debugInfo) {
    if(debugInfo == null) {
      throw new IllegalArgumentException("'debugInfo' value can not be NULL");
    }
    this.debugInfo = debugInfo;
  }



  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    WebhitsResponseClass webhitsResponseClass = (WebhitsResponseClass) o;
    return Objects.equals(this.tileId, webhitsResponseClass.tileId) &&
        Objects.equals(this.debugInfo, webhitsResponseClass.debugInfo) &&
        super.equals(o);
  }

  @Override
  public int hashCode() {
    return Objects.hash(tileId, debugInfo, super.hashCode());
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class WebhitsResponseClass {\n");
    sb.append("    ").append(toIndentedString(super.toString())).append("\n");
    sb.append("    tileId: ").append(toIndentedString(tileId)).append("\n");
    sb.append("    debugInfo: ").append(toIndentedString(debugInfo)).append("\n");
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
