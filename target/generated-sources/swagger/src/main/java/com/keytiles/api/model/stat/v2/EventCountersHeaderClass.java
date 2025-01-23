/*
 * Keytiles Statistics query API
 *  # Disclaimer **PLEASE NOTE! This is an early release of v2 API which is currently in Beta test phase!**   This means things can still change!   # Overview This API provides endpoints to query statistics data stored by Keytiles service.      To specify / fine tune queries you use query parameters which we can group into a few groups.      ### Query range To make queries you need to specify the query time range. To do that you can use the:   * **fromTimestamp** - Start of your query range inclusive (>=). This is a UNIX timstamp (seconds since Epoch, UTC).    * **toTimestamp** - End of your query range inclusive (<=). This is either a UNIX timestamp or \"now\" as a string meaning current time  ### Filtering Optionally you can filter the data due to several criteria.      For example if you are interested in only \"view\" event types then you can use the **eventTypesOnly=view** filter parameter.   Or you can also filter for **tileIdsOnly=tileId1,tileId2** if you are just interested in specific tiles stat data.      For complete list please check the query parameters of the endpoints! Look for \"***Only**\" parameters! ### Details - your interest By default only the most relevant details are returned however in several endpoints you can definitely ask for more. You can do this using the **interest** query parameter.      For example if you query the event counts for Tiles what you will get back by default is only the total number of events registered in your query range. ### Grouping By default you just get the total event count of all event types captured by Keytiles in the query range. But if you want to compare / see / distinguish this \"total count\" by different view points then you can request Keytiles to \"group the data\" by different things.      For example if you want to see event counts / different tileTypes you can use **groupBy=tileType** query parameter. To see the event count distribution regarding the different eventTypes Keytiles captured you can use **groupBy=eventType**. And you can also combine them like **groupBy=eventType,tileType** to get a full decomposition by these two grouping factors.      Please refer to the \"groupBy\" parameter description to see all possible options! ### Limit / threshold If you have a high traffic website with many many Tiles (content) then you might get back huge data from queries even for a relatively short time range. Experience shows that most of this data might be not important for you in many cases. Therefore you have the possibility to limit Keytiles response size by defining \"send me only the top X\" tiles (as most relevant info) and leave out the rest. Please refer to the \"limit\" and \"threshold\" parameter descriptions for more details on endpoints supporting this! 
 *
 * OpenAPI spec version: 2.4
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.keytiles.api.model.stat.v2;

import java.util.Objects;
import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import java.util.ArrayList;
import java.util.List;

import java.io.Serializable;

public class EventCountersHeaderClass implements Serializable{
  private static final long serialVersionUID = 1L;


  // @Generator: non-nullable property so Codegen applied a default empty array to it automatically because it is possible with this type 
  // @Generator: becomes private - as non-nullable so we need to protect it with setter and null-check 
  private List<String> keyColumns = new ArrayList<>();

  // @Generator: non-nullable property so Codegen applied a default empty array to it automatically because it is possible with this type 
  // @Generator: becomes private - as non-nullable so we need to protect it with setter and null-check 
  private List<String> counterColumns = new ArrayList<>();


  
  
  
 
  @JsonProperty("keyColumns")
  public List<String> getKeyColumns() {
    return keyColumns;
  }  

  // @Generator: added to protect field 'keyColumns' against null-value assignment 
  @JsonProperty("keyColumns")
  public void setKeyColumns(List<String> keyColumns) {
    if(keyColumns == null) {
      throw new IllegalArgumentException("'keyColumns' value can not be NULL");
    }
    this.keyColumns = keyColumns;
  }

  @JsonProperty("counterColumns")
  public List<String> getCounterColumns() {
    return counterColumns;
  }  

  // @Generator: added to protect field 'counterColumns' against null-value assignment 
  @JsonProperty("counterColumns")
  public void setCounterColumns(List<String> counterColumns) {
    if(counterColumns == null) {
      throw new IllegalArgumentException("'counterColumns' value can not be NULL");
    }
    this.counterColumns = counterColumns;
  }



  // @Generator: builder style helper method to add values to not-readonly array field
  public EventCountersHeaderClass addKeyColumnsItem(String keyColumnsItem) {
    if (this.keyColumns == null) {
 		this.keyColumns = new ArrayList<>();
    }
    this.keyColumns.add(keyColumnsItem);
    return this;
  }

  // @Generator: builder style helper method to remove values from not-readonly array field
  public EventCountersHeaderClass removeKeyColumnsItem(String keyColumnsItem) {
    if (this.keyColumns != null) {
    	this.keyColumns.remove(keyColumnsItem);
    }
    return this;
  }

  // @Generator: builder style helper method to add values to not-readonly array field
  public EventCountersHeaderClass addCounterColumnsItem(String counterColumnsItem) {
    if (this.counterColumns == null) {
 		this.counterColumns = new ArrayList<>();
    }
    this.counterColumns.add(counterColumnsItem);
    return this;
  }

  // @Generator: builder style helper method to remove values from not-readonly array field
  public EventCountersHeaderClass removeCounterColumnsItem(String counterColumnsItem) {
    if (this.counterColumns != null) {
    	this.counterColumns.remove(counterColumnsItem);
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
    EventCountersHeaderClass eventCountersHeaderClass = (EventCountersHeaderClass) o;
    return Objects.equals(this.keyColumns, eventCountersHeaderClass.keyColumns) &&
        Objects.equals(this.counterColumns, eventCountersHeaderClass.counterColumns);
  }

  @Override
  public int hashCode() {
    return Objects.hash(keyColumns, counterColumns);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EventCountersHeaderClass {\n");
    
    sb.append("    keyColumns: ").append(toIndentedString(keyColumns)).append("\n");
    sb.append("    counterColumns: ").append(toIndentedString(counterColumns)).append("\n");
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
