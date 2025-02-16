/*
 * Keytiles Statistics query API
 * Provides endpoints to query statistics data stored by Keytiles service    ## Interval of your interest It is common in these queries that you need to define the time interval you are curious about. ### Defining the requested interval You need to define a query interval with timestamps you are curious about. You can:  * go with classic **from-to** fashion - using `fromTimestamp` and `toTimestamp` query parameters together or  * go with **delta approach** - using `fromTimestamp` and `tMinusMinutes` query parameters together    If you do not specify any of the above mentioned parameters then the default mechanism is the is **delta approach**. And query will go with default values of `fromTimestamp` (default: now()) and `tMinusMinutes` (default: Container setting) params.  See parameter descriptions for more details! ### And the returned interval actually ... ... might be different than what you requested. As Keytiles works with 1 minute long time frames in the background - aggregating counters into these time frames. But this resolution of statistics is only kept for a limited time. After that time data is aggregated hourly level. Far more in the past then only daily resolution is available.    It is easier to understand what does it mean exactly for you by taking an example. Let's assume:  * current time is 16:48:22  * and you are requesting `tMinusMinutes = 10` - which means 10 minutes look back  * then basically **you are requesting data for 16:38:22 - 16:48:22** time interval ...  * ... BUT in this case **you will get back data for 16:38:00 - 16:48:22 instead** of your requested interval   This kind of \"rounding\" is happening due to the mechanism Keytiles organizes data behind the scenes. Beginning of your \"fromTimestamp\" is floored down to the closest minute (by removing seconds). ### In the response You will get back this \"rounded\" actual interval the response really has data for in `/dataFromTimestamp` and `/dataToTimestamp` attributes ## Requesting a break down of stats within the interval Let's assume you query the data for the last 12 hours (with `tMinusMinutes = 720`). But you want to see the data not fully aggregated but separately for each hour within the 12 hours interval. Basically you want to see 12 intervals - each having the counters separated.    This is **possible by adding** the `resolution` parameter to your query. However **there are restrictions here...** ### The reason of restrictions Keytiles     1. Keeps **minute based** resolution only for a limited time...  1. Over that time only **hourly based** resolution is available but... it is also just kept until a limited time...  1. Over that time only **daily based** resolution is available.   Keytiles is doing this to keep the data in an efficient form (saving resources) based on the fact that  **it is very very unlikely** that you want to have detailed statistics for 12 minutes of visits from 7 months earlier... ### Therefore... If you query data from a week earlier - as minute based resolution will not be available by that time - if you send in `resolution` **< 1 hour** then your whish of getting this resolution can not be served... :-(    What will happen instead is that you **will get back a \"400 - Bad request\"** error where in the error Keytiles will tell you the problem and also give you a hint about how the request should be modified being able to fulfill that. ### In the reponse You might notice that the response has a section `/resolutionIntervals`.    If you are not requesting this break down then it has only just one element - which is the full interval your data is returned for. But if you have requested this break down then here you will find the interval definitions carrying your break down. The data (counter-set) which is returned deeper in the response will refer to one of these intervals by having attribute called `intervalId` - then you will know to which interval of the requested break down that data belongs to. 
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.keytiles.api.model.stat.v1;

import java.util.Objects;
import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import com.keytiles.api.model.stat.v1.BrowserTabUsageStatClassTabCountDistribution;
import java.util.ArrayList;
import java.util.List;

import java.io.Serializable;

public class BrowserTabUsageStatClass implements Serializable{
  private static final long serialVersionUID = 1L;


  // @Generator: becomes private - as non-nullable so we need to protect it with setter and null-check 
  /**
   * The identified type of the visitor&#x27;s user agent
   *
   */
  public enum UserAgentTypeEnum {
    BROWSER_DESKTOP("browser-desktop"),
    BROWSER_MOBILE("browser-mobile"),
    OTHER("other"),
    UNKNOWN("unknown"),
    _U("...");

    private String value;

    UserAgentTypeEnum(String value) {
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
    public static UserAgentTypeEnum fromValue(String input) {
      for (UserAgentTypeEnum b : UserAgentTypeEnum.values()) {
        if (b.value.equals(input)) {
          return b;
        }
      }
      return null;
    }

  }  private UserAgentTypeEnum userAgentType = null;

  // @Generator: non-nullable property so Codegen applied a default empty array to it automatically because it is possible with this type 
  // @Generator: becomes private - as non-nullable so we need to protect it with setter and null-check 
  private List<BrowserTabUsageStatClassTabCountDistribution> tabCountDistribution = new ArrayList<>();


  
  // @Generator: arg 'userAgentType': non-nullable and does not have default value - we must enforce a non-null initial value 
  @JsonCreator
  public BrowserTabUsageStatClass(@JsonProperty("userAgentType") UserAgentTypeEnum userAgentType) {
    super();
    if(userAgentType == null) {
      throw new IllegalArgumentException("'userAgentType' value can not be NULL");
    }
    this.userAgentType = userAgentType;
  }
  
  
 
  @JsonProperty("userAgentType")
  public UserAgentTypeEnum getUserAgentType() {
    return userAgentType;
  }  

  // @Generator: added to protect field 'userAgentType' against null-value assignment 
  @JsonProperty("userAgentType")
  public void setUserAgentType(UserAgentTypeEnum userAgentType) {
    if(userAgentType == null) {
      throw new IllegalArgumentException("'userAgentType' value can not be NULL");
    }
    this.userAgentType = userAgentType;
  }

  @JsonProperty("tabCountDistribution")
  public List<BrowserTabUsageStatClassTabCountDistribution> getTabCountDistribution() {
    return tabCountDistribution;
  }  

  // @Generator: added to protect field 'tabCountDistribution' against null-value assignment 
  @JsonProperty("tabCountDistribution")
  public void setTabCountDistribution(List<BrowserTabUsageStatClassTabCountDistribution> tabCountDistribution) {
    if(tabCountDistribution == null) {
      throw new IllegalArgumentException("'tabCountDistribution' value can not be NULL");
    }
    this.tabCountDistribution = tabCountDistribution;
  }



  // @Generator: builder style helper method to add values to not-readonly array field
  public BrowserTabUsageStatClass addTabCountDistributionItem(BrowserTabUsageStatClassTabCountDistribution tabCountDistributionItem) {
    if (this.tabCountDistribution == null) {
 		this.tabCountDistribution = new ArrayList<>();
    }
    this.tabCountDistribution.add(tabCountDistributionItem);
    return this;
  }

  // @Generator: builder style helper method to remove values from not-readonly array field
  public BrowserTabUsageStatClass removeTabCountDistributionItem(BrowserTabUsageStatClassTabCountDistribution tabCountDistributionItem) {
    if (this.tabCountDistribution != null) {
    	this.tabCountDistribution.remove(tabCountDistributionItem);
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
    BrowserTabUsageStatClass browserTabUsageStatClass = (BrowserTabUsageStatClass) o;
    return Objects.equals(this.userAgentType, browserTabUsageStatClass.userAgentType) &&
        Objects.equals(this.tabCountDistribution, browserTabUsageStatClass.tabCountDistribution);
  }

  @Override
  public int hashCode() {
    return Objects.hash(userAgentType, tabCountDistribution);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BrowserTabUsageStatClass {\n");
    
    sb.append("    userAgentType: ").append(toIndentedString(userAgentType)).append("\n");
    sb.append("    tabCountDistribution: ").append(toIndentedString(tabCountDistribution)).append("\n");
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
