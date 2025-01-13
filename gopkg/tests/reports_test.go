package tests

import (
	"encoding/json"
	"testing"

	kt_pubapi_common "github.com/keytiles/keytiles-public-api/gopkg/model/common"
	kt_pubapi_reports "github.com/keytiles/keytiles-public-api/gopkg/model/reports"
)

func TestReportJSONSerializationAndDeserialization(t *testing.T) {

	//dayNames := []kt_pubapi_common.ScheduleDayName{kt_pubapi_common.Mon, kt_pubapi_common.Thu}

	untilTime := "18:00"
	hourlySchedule := kt_pubapi_common.Schedule_Setup{}
	hourlySchedule.FromHourlyScheduleSetup(kt_pubapi_common.HourlyScheduleSetup{
		FirstTime: "09:00",
		DayNames:  &[]kt_pubapi_common.ScheduleDayName{kt_pubapi_common.Mon, kt_pubapi_common.Thu},
		UntilTime: &untilTime,
	})

	schedule := kt_pubapi_common.Schedule{
		Type:  kt_pubapi_common.ScheduleType(kt_pubapi_common.Hourly),
		Setup: hourlySchedule,
	}
	reportObj := kt_pubapi_reports.ReportClass{
		Id:        "report-id",
		Schedules: []kt_pubapi_common.Schedule{schedule},
	}

	jsonBytes, _ := json.Marshal(reportObj)
	jsonStr := string(jsonBytes)
	println(jsonStr)
}
