package middlewares

import (
	"context"
	"fmt"
	database "main/Database"
	"math/rand/v2"
)
func UrlShortner(ctx context.Context,url string) string{
	shortCode := randomString(6)
	database.AddUrl(ctx,url,shortCode)
	shortUrl := fmt.Sprintf("http://localhost:3000/%v" , shortCode)
	return shortUrl
	
}

func randomString(num int)string{
chars := []string{
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "0","1","2","3","4","5","6","7","8","9",
}
	var ans string;
	for i := 0; i < num; i++ {
		ans+=chars[rand.IntN(len(chars))]
	}
	return ans
}