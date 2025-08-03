package tests

import (
	"encoding/json"
	"testing"

	kt_pubapi_gen_common_schedulev1 "github.com/keytiles/keytiles-public-api/v2/gopkg/model/generated/common/schedule_v1"
	kt_pubapi_gen_reports "github.com/keytiles/keytiles-public-api/v2/gopkg/model/generated/reports_v1"
	"github.com/stretchr/testify/assert"
)

func TestReportJSONSerializationAndDeserialization(t *testing.T) {

	//dayNames := []kt_pubapi_gen_common.ScheduleDayName{kt_pubapi_gen_common.Mon, kt_pubapi_gen_common.Thu}

	hourlySchedule := kt_pubapi_gen_common_schedulev1.Schedule_Setup{}
	hourlySchedule.FromHourlyScheduleSetup(kt_pubapi_gen_common_schedulev1.HourlyScheduleSetup{
		FirstTime: "09:00",
		DayNames:  &[]kt_pubapi_gen_common_schedulev1.ScheduleDayName{kt_pubapi_gen_common_schedulev1.Mon, kt_pubapi_gen_common_schedulev1.Thu},
		UntilTime: ptr[string]("18:00"),
	})

	schedule := kt_pubapi_gen_common_schedulev1.Schedule{
		Type:         kt_pubapi_gen_common_schedulev1.ScheduleType(kt_pubapi_gen_common_schedulev1.Hourly),
		Setup:        hourlySchedule,
		MajorVersion: 1,
	}
	reportObj := kt_pubapi_gen_reports.ReportSetup{
		Id:       "report-id",
		Schedule: &schedule,
	}

	jsonBytes, _ := json.Marshal(reportObj)
	jsonStr := string(jsonBytes)
	println(jsonStr)

	// -------------- deserialization

	deserializedReport := kt_pubapi_gen_reports.ReportSetup{}
	err := json.Unmarshal(jsonBytes, &deserializedReport)
	assert.Nil(t, err)

	assert.Equal(t, "report-id", deserializedReport.Id)
	assert.Equal(t, kt_pubapi_gen_common_schedulev1.ScheduleType(kt_pubapi_gen_common_schedulev1.Hourly), deserializedReport.Schedule.Type)
	deserializedSchedule, err := deserializedReport.Schedule.Setup.AsHourlyScheduleSetup()
	assert.Nil(t, err)
	assert.Equal(t, "09:00", deserializedSchedule.FirstTime)
	assert.Equal(t, "18:00", *deserializedSchedule.UntilTime)

}
