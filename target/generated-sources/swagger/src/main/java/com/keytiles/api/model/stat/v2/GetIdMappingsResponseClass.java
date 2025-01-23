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
import com.keytiles.api.model.common.v2.ContainerQueryRangeResponseClass;
import com.keytiles.api.model.stat.v2.MappingRecordClass;
import java.util.ArrayList;
import java.util.List;
import com.keytiles.api.model.common.v2.ResponseContainerInfoClass;

import java.io.Serializable;

public class GetIdMappingsResponseClass extends ContainerQueryRangeResponseClass implements Serializable{
  private static final long serialVersionUID = 1L;



  // @Generator: this array does not have default and nullable - so let's keep it on NULL then 
  // @Generator: becomes public - as nullable (no need to null-check) and not readonly 
  @JsonProperty("eventTypes")
  public List<MappingRecordClass> eventTypes = null;

  // @Generator: this array does not have default and nullable - so let's keep it on NULL then 
  // @Generator: becomes public - as nullable (no need to null-check) and not readonly 
  @JsonProperty("visitorTypes")
  public List<MappingRecordClass> visitorTypes = null;

  // @Generator: this array does not have default and nullable - so let's keep it on NULL then 
  // @Generator: becomes public - as nullable (no need to null-check) and not readonly 
  @JsonProperty("userAgentTypes")
  public List<MappingRecordClass> userAgentTypes = null;

  // @Generator: this array does not have default and nullable - so let's keep it on NULL then 
  // @Generator: becomes public - as nullable (no need to null-check) and not readonly 
  @JsonProperty("tileLanguages")
  public List<MappingRecordClass> tileLanguages = null;

  // @Generator: this array does not have default and nullable - so let's keep it on NULL then 
  // @Generator: becomes public - as nullable (no need to null-check) and not readonly 
  @JsonProperty("tileTypes")
  public List<MappingRecordClass> tileTypes = null;

  // @Generator: this array does not have default and nullable - so let's keep it on NULL then 
  // @Generator: becomes public - as nullable (no need to null-check) and not readonly 
  @JsonProperty("tileGroupPaths")
  public List<MappingRecordClass> tileGroupPaths = null;

  // @Generator: this array does not have default and nullable - so let's keep it on NULL then 
  // @Generator: becomes public - as nullable (no need to null-check) and not readonly 
  @JsonProperty("trafficSourceNames")
  public List<MappingRecordClass> trafficSourceNames = null;

  // @Generator: this array does not have default and nullable - so let's keep it on NULL then 
  // @Generator: becomes public - as nullable (no need to null-check) and not readonly 
  @JsonProperty("campaigns")
  public List<MappingRecordClass> campaigns = null;

  // @Generator: this array does not have default and nullable - so let's keep it on NULL then 
  // @Generator: becomes public - as nullable (no need to null-check) and not readonly 
  @JsonProperty("campaignMediums")
  public List<MappingRecordClass> campaignMediums = null;

  // @Generator: this array does not have default and nullable - so let's keep it on NULL then 
  // @Generator: becomes public - as nullable (no need to null-check) and not readonly 
  @JsonProperty("campaignContents")
  public List<MappingRecordClass> campaignContents = null;

  // @Generator: this array does not have default and nullable - so let's keep it on NULL then 
  // @Generator: becomes public - as nullable (no need to null-check) and not readonly 
  @JsonProperty("primaryTags")
  public List<MappingRecordClass> primaryTags = null;

  // @Generator: this array does not have default and nullable - so let's keep it on NULL then 
  // @Generator: becomes public - as nullable (no need to null-check) and not readonly 
  @JsonProperty("secondaryTags")
  public List<MappingRecordClass> secondaryTags = null;

  
  @JsonCreator
  public GetIdMappingsResponseClass(@JsonProperty("requestReceivedAt") Integer requestReceivedAt, @JsonProperty("container") ResponseContainerInfoClass container, @JsonProperty("requestedFromTimestamp") Integer requestedFromTimestamp, @JsonProperty("requestedToTimestamp") Integer requestedToTimestamp, @JsonProperty("dataFromTimestamp") Integer dataFromTimestamp, @JsonProperty("dataToTimestamp") Integer dataToTimestamp) {
    super(requestReceivedAt, container, requestedFromTimestamp, requestedToTimestamp, dataFromTimestamp, dataToTimestamp);
  }
  
  
 


  // @Generator: builder style helper method to add values to not-readonly array field
  public GetIdMappingsResponseClass addEventTypesItem(MappingRecordClass eventTypesItem) {
    if (this.eventTypes == null) {
 		this.eventTypes = new ArrayList<>();
    }
    this.eventTypes.add(eventTypesItem);
    return this;
  }

  // @Generator: builder style helper method to remove values from not-readonly array field
  public GetIdMappingsResponseClass removeEventTypesItem(MappingRecordClass eventTypesItem) {
    if (this.eventTypes != null) {
    	this.eventTypes.remove(eventTypesItem);
    }
    return this;
  }

  // @Generator: builder style helper method to add values to not-readonly array field
  public GetIdMappingsResponseClass addVisitorTypesItem(MappingRecordClass visitorTypesItem) {
    if (this.visitorTypes == null) {
 		this.visitorTypes = new ArrayList<>();
    }
    this.visitorTypes.add(visitorTypesItem);
    return this;
  }

  // @Generator: builder style helper method to remove values from not-readonly array field
  public GetIdMappingsResponseClass removeVisitorTypesItem(MappingRecordClass visitorTypesItem) {
    if (this.visitorTypes != null) {
    	this.visitorTypes.remove(visitorTypesItem);
    }
    return this;
  }

  // @Generator: builder style helper method to add values to not-readonly array field
  public GetIdMappingsResponseClass addUserAgentTypesItem(MappingRecordClass userAgentTypesItem) {
    if (this.userAgentTypes == null) {
 		this.userAgentTypes = new ArrayList<>();
    }
    this.userAgentTypes.add(userAgentTypesItem);
    return this;
  }

  // @Generator: builder style helper method to remove values from not-readonly array field
  public GetIdMappingsResponseClass removeUserAgentTypesItem(MappingRecordClass userAgentTypesItem) {
    if (this.userAgentTypes != null) {
    	this.userAgentTypes.remove(userAgentTypesItem);
    }
    return this;
  }

  // @Generator: builder style helper method to add values to not-readonly array field
  public GetIdMappingsResponseClass addTileLanguagesItem(MappingRecordClass tileLanguagesItem) {
    if (this.tileLanguages == null) {
 		this.tileLanguages = new ArrayList<>();
    }
    this.tileLanguages.add(tileLanguagesItem);
    return this;
  }

  // @Generator: builder style helper method to remove values from not-readonly array field
  public GetIdMappingsResponseClass removeTileLanguagesItem(MappingRecordClass tileLanguagesItem) {
    if (this.tileLanguages != null) {
    	this.tileLanguages.remove(tileLanguagesItem);
    }
    return this;
  }

  // @Generator: builder style helper method to add values to not-readonly array field
  public GetIdMappingsResponseClass addTileTypesItem(MappingRecordClass tileTypesItem) {
    if (this.tileTypes == null) {
 		this.tileTypes = new ArrayList<>();
    }
    this.tileTypes.add(tileTypesItem);
    return this;
  }

  // @Generator: builder style helper method to remove values from not-readonly array field
  public GetIdMappingsResponseClass removeTileTypesItem(MappingRecordClass tileTypesItem) {
    if (this.tileTypes != null) {
    	this.tileTypes.remove(tileTypesItem);
    }
    return this;
  }

  // @Generator: builder style helper method to add values to not-readonly array field
  public GetIdMappingsResponseClass addTileGroupPathsItem(MappingRecordClass tileGroupPathsItem) {
    if (this.tileGroupPaths == null) {
 		this.tileGroupPaths = new ArrayList<>();
    }
    this.tileGroupPaths.add(tileGroupPathsItem);
    return this;
  }

  // @Generator: builder style helper method to remove values from not-readonly array field
  public GetIdMappingsResponseClass removeTileGroupPathsItem(MappingRecordClass tileGroupPathsItem) {
    if (this.tileGroupPaths != null) {
    	this.tileGroupPaths.remove(tileGroupPathsItem);
    }
    return this;
  }

  // @Generator: builder style helper method to add values to not-readonly array field
  public GetIdMappingsResponseClass addTrafficSourceNamesItem(MappingRecordClass trafficSourceNamesItem) {
    if (this.trafficSourceNames == null) {
 		this.trafficSourceNames = new ArrayList<>();
    }
    this.trafficSourceNames.add(trafficSourceNamesItem);
    return this;
  }

  // @Generator: builder style helper method to remove values from not-readonly array field
  public GetIdMappingsResponseClass removeTrafficSourceNamesItem(MappingRecordClass trafficSourceNamesItem) {
    if (this.trafficSourceNames != null) {
    	this.trafficSourceNames.remove(trafficSourceNamesItem);
    }
    return this;
  }

  // @Generator: builder style helper method to add values to not-readonly array field
  public GetIdMappingsResponseClass addCampaignsItem(MappingRecordClass campaignsItem) {
    if (this.campaigns == null) {
 		this.campaigns = new ArrayList<>();
    }
    this.campaigns.add(campaignsItem);
    return this;
  }

  // @Generator: builder style helper method to remove values from not-readonly array field
  public GetIdMappingsResponseClass removeCampaignsItem(MappingRecordClass campaignsItem) {
    if (this.campaigns != null) {
    	this.campaigns.remove(campaignsItem);
    }
    return this;
  }

  // @Generator: builder style helper method to add values to not-readonly array field
  public GetIdMappingsResponseClass addCampaignMediumsItem(MappingRecordClass campaignMediumsItem) {
    if (this.campaignMediums == null) {
 		this.campaignMediums = new ArrayList<>();
    }
    this.campaignMediums.add(campaignMediumsItem);
    return this;
  }

  // @Generator: builder style helper method to remove values from not-readonly array field
  public GetIdMappingsResponseClass removeCampaignMediumsItem(MappingRecordClass campaignMediumsItem) {
    if (this.campaignMediums != null) {
    	this.campaignMediums.remove(campaignMediumsItem);
    }
    return this;
  }

  // @Generator: builder style helper method to add values to not-readonly array field
  public GetIdMappingsResponseClass addCampaignContentsItem(MappingRecordClass campaignContentsItem) {
    if (this.campaignContents == null) {
 		this.campaignContents = new ArrayList<>();
    }
    this.campaignContents.add(campaignContentsItem);
    return this;
  }

  // @Generator: builder style helper method to remove values from not-readonly array field
  public GetIdMappingsResponseClass removeCampaignContentsItem(MappingRecordClass campaignContentsItem) {
    if (this.campaignContents != null) {
    	this.campaignContents.remove(campaignContentsItem);
    }
    return this;
  }

  // @Generator: builder style helper method to add values to not-readonly array field
  public GetIdMappingsResponseClass addPrimaryTagsItem(MappingRecordClass primaryTagsItem) {
    if (this.primaryTags == null) {
 		this.primaryTags = new ArrayList<>();
    }
    this.primaryTags.add(primaryTagsItem);
    return this;
  }

  // @Generator: builder style helper method to remove values from not-readonly array field
  public GetIdMappingsResponseClass removePrimaryTagsItem(MappingRecordClass primaryTagsItem) {
    if (this.primaryTags != null) {
    	this.primaryTags.remove(primaryTagsItem);
    }
    return this;
  }

  // @Generator: builder style helper method to add values to not-readonly array field
  public GetIdMappingsResponseClass addSecondaryTagsItem(MappingRecordClass secondaryTagsItem) {
    if (this.secondaryTags == null) {
 		this.secondaryTags = new ArrayList<>();
    }
    this.secondaryTags.add(secondaryTagsItem);
    return this;
  }

  // @Generator: builder style helper method to remove values from not-readonly array field
  public GetIdMappingsResponseClass removeSecondaryTagsItem(MappingRecordClass secondaryTagsItem) {
    if (this.secondaryTags != null) {
    	this.secondaryTags.remove(secondaryTagsItem);
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
    GetIdMappingsResponseClass getIdMappingsResponseClass = (GetIdMappingsResponseClass) o;
    return Objects.equals(this.eventTypes, getIdMappingsResponseClass.eventTypes) &&
        Objects.equals(this.visitorTypes, getIdMappingsResponseClass.visitorTypes) &&
        Objects.equals(this.userAgentTypes, getIdMappingsResponseClass.userAgentTypes) &&
        Objects.equals(this.tileLanguages, getIdMappingsResponseClass.tileLanguages) &&
        Objects.equals(this.tileTypes, getIdMappingsResponseClass.tileTypes) &&
        Objects.equals(this.tileGroupPaths, getIdMappingsResponseClass.tileGroupPaths) &&
        Objects.equals(this.trafficSourceNames, getIdMappingsResponseClass.trafficSourceNames) &&
        Objects.equals(this.campaigns, getIdMappingsResponseClass.campaigns) &&
        Objects.equals(this.campaignMediums, getIdMappingsResponseClass.campaignMediums) &&
        Objects.equals(this.campaignContents, getIdMappingsResponseClass.campaignContents) &&
        Objects.equals(this.primaryTags, getIdMappingsResponseClass.primaryTags) &&
        Objects.equals(this.secondaryTags, getIdMappingsResponseClass.secondaryTags) &&
        super.equals(o);
  }

  @Override
  public int hashCode() {
    return Objects.hash(eventTypes, visitorTypes, userAgentTypes, tileLanguages, tileTypes, tileGroupPaths, trafficSourceNames, campaigns, campaignMediums, campaignContents, primaryTags, secondaryTags, super.hashCode());
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetIdMappingsResponseClass {\n");
    sb.append("    ").append(toIndentedString(super.toString())).append("\n");
    sb.append("    eventTypes: ").append(toIndentedString(eventTypes)).append("\n");
    sb.append("    visitorTypes: ").append(toIndentedString(visitorTypes)).append("\n");
    sb.append("    userAgentTypes: ").append(toIndentedString(userAgentTypes)).append("\n");
    sb.append("    tileLanguages: ").append(toIndentedString(tileLanguages)).append("\n");
    sb.append("    tileTypes: ").append(toIndentedString(tileTypes)).append("\n");
    sb.append("    tileGroupPaths: ").append(toIndentedString(tileGroupPaths)).append("\n");
    sb.append("    trafficSourceNames: ").append(toIndentedString(trafficSourceNames)).append("\n");
    sb.append("    campaigns: ").append(toIndentedString(campaigns)).append("\n");
    sb.append("    campaignMediums: ").append(toIndentedString(campaignMediums)).append("\n");
    sb.append("    campaignContents: ").append(toIndentedString(campaignContents)).append("\n");
    sb.append("    primaryTags: ").append(toIndentedString(primaryTags)).append("\n");
    sb.append("    secondaryTags: ").append(toIndentedString(secondaryTags)).append("\n");
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
