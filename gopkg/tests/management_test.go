package tests

import (
	"testing"

	kt_pubapi_gen_management "github.com/keytiles/keytiles-public-api/gopkg/model/generated/management_v1"
)

func TestManagementProblemsJSONSerializationAndDeserialization(t *testing.T) {

	var problem kt_pubapi_gen_management.ManagementEndpointProblemClass

	if problem.ErrorCodes != nil {
		for _, item := range *problem.ErrorCodes {
			if item == kt_pubapi_gen_management.ManagementEndpointErrorCodesAuthenticationMissing {

			}
		}

	}

}
