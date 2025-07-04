/*
 * Keytiles Reporting API
 * API endpoints to manage / query / use Keytiles Reporting. 
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.keytiles.api.model.reports.v1;

import java.util.Objects;
import java.util.Arrays;


import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

/**
 * Gets or Sets ReportQueryPlugin
 *
 */
public enum ReportQueryPlugin {
  EVENTCOUNTPLUGIN("eventCountPlugin"),
  CAMPAIGNPERFORMANCEPLUGIN("campaignPerformancePlugin"),
  SOCIALPERFORMANCEPLUGIN("socialPerformancePlugin"),
  LINKSPERFORMANCEPLUGIN("linksPerformancePlugin"),
  TAGSPERFORMANCEPLUGIN("tagsPerformancePlugin"),
  VISITORBEHAVIORPLUGIN("visitorBehaviorPlugin");

  private String value;

  ReportQueryPlugin(String value) {
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
  public static ReportQueryPlugin fromValue(String input) {
    for (ReportQueryPlugin b : ReportQueryPlugin.values()) {
      if (b.value.equals(input)) {
        return b;
      }
    }
    return null;
  }
}
