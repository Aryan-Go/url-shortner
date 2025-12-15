package structs

type UrlStruct struct {
	Url string `json:"url" binding:"required"`
}