package api

import (
	"math/rand"
	"recommendation/data" // replace with your actual project name

	"github.com/gin-gonic/gin"
)

func GetOrigamiOfTheDay(c *gin.Context) {
	origamis := data.GetDailyOrigami()
	selectedOrigami := origamis[rand.Intn(len(origamis))] // get a random origami

	c.JSON(200, selectedOrigami)
}

func StartAPI() {
	r := gin.Default()
	r.GET("/origami-of-the-day", GetOrigamiOfTheDay)

	// TODO: Add more routes as needed

	if err := r.Run(":8080"); err != nil {
		panic(err)
	} // start the server on port 8080

}
