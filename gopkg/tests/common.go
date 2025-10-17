package tests

import (
	"encoding/json"
	"fmt"
	"os"
	"regexp"
	"testing"

	"github.com/stretchr/testify/assert"
)

func Ptr[T any](t T) *T { return &t }

// Loads the content of a JSON file
func GetTestFileContent(filePath string) (content string, problem error) {
	data, err := os.ReadFile(filePath)
	if err != nil {
		problem = fmt.Errorf("failed to load test file '%s': %s", filePath, err)
		return
	}
	// data is a []byte, convert to string if it's text
	content = string(data)
	return
}

// removeJSONComments removes // line comments and /* block comments */ from JSON string
func RemoveJSONComments(input string) string {
	// Remove all // line comments
	lineComment := regexp.MustCompile(`(?m)//.*$`)
	cleaned := lineComment.ReplaceAllString(input, "")

	// Remove all /* block comments */
	blockComment := regexp.MustCompile(`(?s)/\*.*?\*/`)
	cleaned = blockComment.ReplaceAllString(cleaned, "")

	return cleaned
}

// Transforms any object into JSON string. You can use this as a transformer within a test case - as it does not return error but fails the test instead.
func ToJSONString(t *testing.T, obj any, msgAndArgs ...any) string {
	b, err := json.Marshal(obj)
	if len(msgAndArgs) == 0 {
		// No arguments provided → use defaults
		msgAndArgs = []any{"unexpectedly failed to marshal object to JSON: %s", err}
	}
	assert.NoError(t, err, msgAndArgs...)
	return string(b)
}
