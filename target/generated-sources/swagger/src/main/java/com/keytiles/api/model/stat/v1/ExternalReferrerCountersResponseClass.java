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
import com.keytiles.api.model.common.v1.IntervalBasedResponseWithResolutionClass;
import com.keytiles.api.model.common.v1.IntervalClass;
import com.keytiles.api.model.stat.v1.ExternalReferrerClass;
import java.util.ArrayList;
import java.util.List;
import com.keytiles.api.model.common.v1.ResponseContainerInfoClass;

import java.io.Serializable;

public class ExternalReferrerCountersResponseClass extends IntervalBasedResponseWithResolutionClass implements Serializable{
  private static final long serialVersionUID = 1L;


  // @Generator: non-nullable property so Codegen applied a default empty array to it automatically because it is possible with this type 
  // @Generator: becomes private - as non-nullable so we need to protect it with setter and null-check 
  private List<ExternalReferrerClass> search = new ArrayList<>();

  // @Generator: non-nullable property so Codegen applied a default empty array to it automatically because it is possible with this type 
  // @Generator: becomes private - as non-nullable so we need to protect it with setter and null-check 
  private List<ExternalReferrerClass> social = new ArrayList<>();

  // @Generator: non-nullable property so Codegen applied a default empty array to it automatically because it is possible with this type 
  // @Generator: becomes private - as non-nullable so we need to protect it with setter and null-check 
  private List<ExternalReferrerClass> link = new ArrayList<>();


  
  @JsonCreator
  public ExternalReferrerCountersResponseClass(@JsonProperty("requestReceivedAt") Integer requestReceivedAt, @JsonProperty("processingTookMillis") Integer processingTookMillis, @JsonProperty("container") ResponseContainerInfoClass container, @JsonProperty("requestedFromTimestamp") Integer requestedFromTimestamp, @JsonProperty("requestedToTimestamp") Integer requestedToTimestamp, @JsonProperty("dataFromTimestamp") Integer dataFromTimestamp, @JsonProperty("dataToTimestamp") Integer dataToTimestamp) {
    super(requestReceivedAt, processingTookMillis, container, requestedFromTimestamp, requestedToTimestamp, dataFromTimestamp, dataToTimestamp);
  }
  
  
 
  @JsonProperty("search")
  public List<ExternalReferrerClass> getSearch() {
    return search;
  }  

  // @Generator: added to protect field 'search' against null-value assignment 
  @JsonProperty("search")
  public void setSearch(List<ExternalReferrerClass> search) {
    if(search == null) {
      throw new IllegalArgumentException("'search' value can not be NULL");
    }
    this.search = search;
  }

  @JsonProperty("social")
  public List<ExternalReferrerClass> getSocial() {
    return social;
  }  

  // @Generator: added to protect field 'social' against null-value assignment 
  @JsonProperty("social")
  public void setSocial(List<ExternalReferrerClass> social) {
    if(social == null) {
      throw new IllegalArgumentException("'social' value can not be NULL");
    }
    this.social = social;
  }

  @JsonProperty("link")
  public List<ExternalReferrerClass> getLink() {
    return link;
  }  

  // @Generator: added to protect field 'link' against null-value assignment 
  @JsonProperty("link")
  public void setLink(List<ExternalReferrerClass> link) {
    if(link == null) {
      throw new IllegalArgumentException("'link' value can not be NULL");
    }
    this.link = link;
  }



  // @Generator: builder style helper method to add values to not-readonly array field
  public ExternalReferrerCountersResponseClass addSearchItem(ExternalReferrerClass searchItem) {
    if (this.search == null) {
 		this.search = new ArrayList<>();
    }
    this.search.add(searchItem);
    return this;
  }

  // @Generator: builder style helper method to remove values from not-readonly array field
  public ExternalReferrerCountersResponseClass removeSearchItem(ExternalReferrerClass searchItem) {
    if (this.search != null) {
    	this.search.remove(searchItem);
    }
    return this;
  }

  // @Generator: builder style helper method to add values to not-readonly array field
  public ExternalReferrerCountersResponseClass addSocialItem(ExternalReferrerClass socialItem) {
    if (this.social == null) {
 		this.social = new ArrayList<>();
    }
    this.social.add(socialItem);
    return this;
  }

  // @Generator: builder style helper method to remove values from not-readonly array field
  public ExternalReferrerCountersResponseClass removeSocialItem(ExternalReferrerClass socialItem) {
    if (this.social != null) {
    	this.social.remove(socialItem);
    }
    return this;
  }

  // @Generator: builder style helper method to add values to not-readonly array field
  public ExternalReferrerCountersResponseClass addLinkItem(ExternalReferrerClass linkItem) {
    if (this.link == null) {
 		this.link = new ArrayList<>();
    }
    this.link.add(linkItem);
    return this;
  }

  // @Generator: builder style helper method to remove values from not-readonly array field
  public ExternalReferrerCountersResponseClass removeLinkItem(ExternalReferrerClass linkItem) {
    if (this.link != null) {
    	this.link.remove(linkItem);
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
    ExternalReferrerCountersResponseClass externalReferrerCountersResponseClass = (ExternalReferrerCountersResponseClass) o;
    return Objects.equals(this.search, externalReferrerCountersResponseClass.search) &&
        Objects.equals(this.social, externalReferrerCountersResponseClass.social) &&
        Objects.equals(this.link, externalReferrerCountersResponseClass.link) &&
        super.equals(o);
  }

  @Override
  public int hashCode() {
    return Objects.hash(search, social, link, super.hashCode());
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ExternalReferrerCountersResponseClass {\n");
    sb.append("    ").append(toIndentedString(super.toString())).append("\n");
    sb.append("    search: ").append(toIndentedString(search)).append("\n");
    sb.append("    social: ").append(toIndentedString(social)).append("\n");
    sb.append("    link: ").append(toIndentedString(link)).append("\n");
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
