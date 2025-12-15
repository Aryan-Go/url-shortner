package database

import (
	"context"
	"fmt"
	"os"

	"github.com/jackc/pgx/v5"
)
var db *pgx.Conn
func DbSetup(ctx context.Context) {
	connStr := "postgres://postgres:postgres@localhost:5432/url_shortner?sslmode=disable" 

	conn, err := pgx.Connect(ctx, connStr)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}
	db = conn
	
	fmt.Println("Successfully connected to PostgreSQL!")
}

func AddUrl(ctx context.Context , long_url string , short_code string){
	sql := "INSERT INTO urls (long_url , short_code) VALUES ($1,$2);";
	err := db.QueryRow(ctx , sql , long_url , short_code);
	if(err!=nil){
		fmt.Println(err)
		fmt.Println("Error in adding data right now = ")
	}
	fmt.Println("Short link formed and added")
}

func FindUrl(ctx context.Context ,short_code string)string{
	sql := "SELECT * FROM urls WHERE short_code=($1)";
	ans,err := db.Query(ctx , sql , short_code);
	if(err!=nil){
		fmt.Println(err)
		fmt.Println("Error in adding data right now = ")
	}
	for ans.Next(){
		var id int
		var long_url string
		var short_code string
		err := ans.Scan(&id , &long_url , &short_code)
		if(err != nil){
			fmt.Println(fmt.Sprintf("Error scanning row: %v", err)) 
		}
		return long_url
	}
	return ""
}

