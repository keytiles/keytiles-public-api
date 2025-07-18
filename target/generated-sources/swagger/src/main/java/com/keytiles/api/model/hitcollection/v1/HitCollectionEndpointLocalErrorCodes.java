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


import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

/**
 * Gets or Sets HitCollectionEndpointLocalErrorCodes
 *
 */
public enum HitCollectionEndpointLocalErrorCodes {
  EVENTDATA_MISSING("eventData_missing"),
  EVENTDATA_INVALID("eventData_invalid"),
  EVENTDATA_JSONDECODEFAILED("eventData_jsonDecodeFailed"),
  CONTAINERID_INVALID("containerId_invalid"),
  EVENTTIME_IN_FUTURE("eventTime_in_future"),
  TILEID_ENRICHMENT_FAILED("tileId_enrichment_failed");

  private String value;

  HitCollectionEndpointLocalErrorCodes(String value) {
    this.value = value;
  }

  @JsonValue
  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  @JsonCreator
  public static HitCollectionEndpointLocalErrorCodes fromValue(String input) {
    for (HitCollectionEndpointLocalErrorCodes b : HitCollectionEndpointLocalErrorCodes.values()) {
      if (b.value.equals(input)) {
        return b;
      }
    }
    return null;
  }
}
