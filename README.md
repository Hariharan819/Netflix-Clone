-sign in /sign up page
-routing
-validation
-firebase config
-authentication
-redux
-user data storing
-signout --- user data remove
--tmdb for movie db

https://api.themoviedb.org/3/movie/{movie_id}/videos

curl --request GET \
 --url 'https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US' \
 --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2JhMjk1NjU1MTBiOWMyZTYyZDc5ODkyM2MyY2ZhMiIsIm5iZiI6MTcyMjQxMDEyMC4zODg4MTYsInN1YiI6IjY2YTllMzk2NGIyNjIxNTI5YWNkNWU3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LYD1bidq4FbRevZFl98OaI_ALUWzOB-HhOunED4Rsjo' \
 --header 'accept: application/json'
