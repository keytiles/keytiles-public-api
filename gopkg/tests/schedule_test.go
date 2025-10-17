package tests

import (
	"testing"

	kt_pubapi_gen_common_schedulev1 "github.com/keytiles/keytiles-public-api/v2/gopkg/model/generated/common/schedule_v1"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestSchedulesJSONSerialization(t *testing.T) {

	schedule := kt_pubapi_gen_common_schedulev1.Schedule{
		MajorVersion: 1,
		TzOffset:     5,
	}
	var expJsonStr string
	var err error

	// ====== hourly setups

	// Scenario 1
	// All fields set

	schedule.Type = kt_pubapi_gen_common_schedulev1.Hourly
	schedule.Setup.FromHourlyScheduleSetup(kt_pubapi_gen_common_schedulev1.HourlyScheduleSetup{
		FirstTime: "09:00",
		DayNames:  &[]kt_pubapi_gen_common_schedulev1.ScheduleDayName{kt_pubapi_gen_common_schedulev1.Mon, kt_pubapi_gen_common_schedulev1.Thu},
		UntilTime: Ptr("18:00"),
	})
	expJsonStr, err = GetTestFileContent("testdata/schedule_hourly_1.jsonc")
	require.NoError(t, err)
	assert.JSONEq(t, RemoveJSONComments(expJsonStr), ToJSONString(t, schedule))

	// Scenario 2
	// Only fields mandatory set

	schedule.Type = kt_pubapi_gen_common_schedulev1.Hourly
	schedule.Setup.FromHourlyScheduleSetup(kt_pubapi_gen_common_schedulev1.HourlyScheduleSetup{
		FirstTime: "09:00",
	})
	expJsonStr, err = GetTestFileContent("testdata/schedule_hourly_2.jsonc")
	require.NoError(t, err)
	assert.JSONEq(t, RemoveJSONComments(expJsonStr), ToJSONString(t, schedule))

	// ====== daily setups

	// Scenario 1
	// All fields set

	schedule.Type = kt_pubapi_gen_common_schedulev1.Daily

	schedule.Setup.FromDailyScheduleSetup(kt_pubapi_gen_common_schedulev1.DailyScheduleSetup{
		TriggerTime: "09:00",
		DayNames:    &[]kt_pubapi_gen_common_schedulev1.ScheduleDayName{kt_pubapi_gen_common_schedulev1.Mon, kt_pubapi_gen_common_schedulev1.Thu},
	})
	expJsonStr, err = GetTestFileContent("testdata/schedule_daily_1.jsonc")
	require.NoError(t, err)
	assert.JSONEq(t, RemoveJSONComments(expJsonStr), ToJSONString(t, schedule))

	// Scenario 2
	// Only fields mandatory set

	schedule.Setup.FromDailyScheduleSetup(kt_pubapi_gen_common_schedulev1.DailyScheduleSetup{
		TriggerTime: "09:00",
	})
	expJsonStr, err = GetTestFileContent("testdata/schedule_daily_2.jsonc")
	require.NoError(t, err)
	assert.JSONEq(t, RemoveJSONComments(expJsonStr), ToJSONString(t, schedule))

	// ====== weekly setups

	// Scenario 1
	// All fields set

	schedule.Type = kt_pubapi_gen_common_schedulev1.Weekly

	schedule.Setup.FromWeeklyScheduleSetup(kt_pubapi_gen_common_schedulev1.WeeklyScheduleSetup{
		TriggerTime: "09:00",
		DayName:     Ptr(kt_pubapi_gen_common_schedulev1.Mon),
	})
	expJsonStr, err = GetTestFileContent("testdata/schedule_weekly_1.jsonc")
	require.NoError(t, err)
	assert.JSONEq(t, RemoveJSONComments(expJsonStr), ToJSONString(t, schedule))

	// Scenario 2
	// Only fields mandatory set

	schedule.Setup.FromWeeklyScheduleSetup(kt_pubapi_gen_common_schedulev1.WeeklyScheduleSetup{
		TriggerTime: "09:00",
	})
	expJsonStr, err = GetTestFileContent("testdata/schedule_weekly_2.jsonc")
	require.NoError(t, err)
	assert.JSONEq(t, RemoveJSONComments(expJsonStr), ToJSONString(t, schedule))

	// ====== monthly setups

	// Scenario 1
	// All fields set

	schedule.Type = kt_pubapi_gen_common_schedulev1.Monthly

	schedule.Setup.FromMonthlyScheduleSetup(kt_pubapi_gen_common_schedulev1.MonthlyScheduleSetup{
		TriggerTime: "09:00",
		DayName:     Ptr(kt_pubapi_gen_common_schedulev1.FirstDay),
	})
	expJsonStr, err = GetTestFileContent("testdata/schedule_monthly_1.jsonc")
	require.NoError(t, err)
	assert.JSONEq(t, RemoveJSONComments(expJsonStr), ToJSONString(t, schedule))

	// Scenario 2
	// Only fields mandatory set

	schedule.Setup.FromMonthlyScheduleSetup(kt_pubapi_gen_common_schedulev1.MonthlyScheduleSetup{
		TriggerTime: "09:00",
	})
	expJsonStr, err = GetTestFileContent("testdata/schedule_monthly_2.jsonc")
	require.NoError(t, err)
	assert.JSONEq(t, RemoveJSONComments(expJsonStr), ToJSONString(t, schedule))

}
