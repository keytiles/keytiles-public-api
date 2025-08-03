package tests

import (
	"testing"

	kt_pubapi_gen_common_typesv3 "github.com/keytiles/keytiles-public-api/v2/gopkg/model/generated/common/types_v3"
	kt_pubapi_gen_management "github.com/keytiles/keytiles-public-api/v2/gopkg/model/generated/management_v2"
)

// Transforms anything into a pointer - useful for assigning values to pointer fields os structs / pointer vars
func Ptr[T any](t T) *T { return &t }

func TestManagementProblemsJSONSerializationAndDeserialization(t *testing.T) {

	var problem = kt_pubapi_gen_common_typesv3.ProblemV3Class{
		ErrorCodes: Ptr([]string{string(kt_pubapi_gen_management.ManagementEndpointErrorCodesAuthenticationMissing)}),
		Message:    "problem occures no auth",
		Severity:   kt_pubapi_gen_common_typesv3.Error,
	}

	resp := kt_pubapi_gen_management.HitFaultReportResponse{
		Container: &kt_pubapi_gen_common_typesv3.ResponseContainerInfoV3Class{
			Id: "containerId",
		},
		DataFromTimestamp:      0,
		DataToTimestamp:        0,
		RequestedFromTimestamp: 0,
		RequestedToTimestamp:   0,
		RequestReceivedAt:      0,

		Problems: Ptr([]kt_pubapi_gen_common_typesv3.ProblemV3Class{problem}),
	}
	print(resp)

	if problem.ErrorCodes != nil {
		for _, item := range *problem.ErrorCodes {
			if item == string(kt_pubapi_gen_management.ManagementEndpointErrorCodesAuthenticationMissing) {

			}
		}

	}

}
