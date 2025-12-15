package middlewares

import (
	"fmt"
	"net/http"
)
func CheckLinkValidity(url string) bool{
	req, err := http.NewRequest("HEAD", url, nil)
	if err != nil {
		fmt.Errorf("could not create request: %w", err)
		return false
	}
	// ! This is a header that needs to be set so that it does not mark you as forbidden
	req.Header.Set("User-Agent", "GoLang URL Validator v1.0 (Contact: goyal.aryan@gmail.com)")
	
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		fmt.Println(fmt.Errorf("network error: failed to connect to URL (%w)", err))
		return false
	}
    defer resp.Body.Close()
	if(resp.StatusCode != http.StatusOK){
		fmt.Println(resp.StatusCode)
		return false;
	}
	return true;
}