package main

import (
	"context"
	"fmt"
	database "main/Database"
	"main/middlewares"
	"main/structs"
	"net/http"
	"os"

	// "log"
	"net/url"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load()
	port := os.Getenv("PORT")
	ctx := context.Background()
	database.DbSetup(ctx)
	router := gin.Default()

	router.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
		"message": "pong",
		})
	})
	router.GET("/:shortCode", func(c *gin.Context) {
		code := c.Param("shortCode")
		fmt.Println(code)
		longUrl := database.FindUrl(ctx,code)
		if(longUrl == ""){
			c.JSON(http.StatusBadRequest , gin.H{
				"status" : "failure" , 
				"message" : "The short code is not valid",
			})
			return
		}
		c.Redirect(301,longUrl)
	})
	router.POST("/urlShortner" , func(c *gin.Context){
		var url_var structs.UrlStruct;
		err := c.ShouldBindJSON(&url_var)
		if(err != nil){
			c.JSON(http.StatusBadRequest, gin.H{
				"status": "failure",
				"received_url": err.Error(),
			})
			return
			}
			parsed_url,err := url.Parse(url_var.Url)
			if(err!=nil){
				c.JSON(http.StatusBadRequest, gin.H{
					"status": "failure",
					"received_url": err.Error(),
				})
				return
			}
			if(parsed_url.Scheme != "http" && parsed_url.Scheme != "https"){
				c.JSON(http.StatusBadRequest, gin.H{
					"status": "failure",
					"received_url": "This is not a valid link. Please check that link starts with http or https",
				})
				return
			}
			if(parsed_url.Host==""){
				c.JSON(http.StatusBadRequest, gin.H{
					"status": "failure",
					"received_url": "This is not a valid link. Please check that link has valid host",
				})
				return
			}
			check := middlewares.CheckLinkValidity(url_var.Url)
			if(!check){
				c.JSON(http.StatusBadRequest, gin.H{
					"status": "failure",
					"received_url": "This is not a valid link. It is not a legit link",
				})
				return
			}
			shortUrl := middlewares.UrlShortner(ctx , url_var.Url)
			c.JSON(http.StatusOK, gin.H{
				"status": "success",
				"received_url": fmt.Sprintf("The short url is = %v" , shortUrl),
			})
	})

	router.Run(fmt.Sprintf("localhost:%s" , port))
}