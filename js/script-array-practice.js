//STEP 1
// Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
/*
let faveMovies = ["High School Musical", "Whiplash", "Top Gun: Maverick", "Barbie", "The Perks of Being a Wallflower"]
console.log(faveMovies[1])
*/

//STEP 2
//Declare an array called movies using the function constructor method. 
//Add the length of 5 into the constructor. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. 
//Then, use the console to display the first movie in your array.
/*
let movies = new Array(5)
movies[0] = "High School Musical"
movies[1] = "Whiplash"
movies[2] = "Top Gun: Maverick"
movies[3] = "Barbie"
movies[4] = "The Perks of Being a Wallflower"
console.log(movies[0])
*/

//STEP 3
//Copy your code from step 2. Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.
/*
let movies = new Array(5)
movies[0] = "High School Musical"
movies[1] = "Whiplash"
movies[2] = "Top Gun: Maverick"
movies[3] = "Barbie"
movies[4] = "The Perks of Being a Wallflower"
movies.splice(2, 0, "Night at the Museum")
console.log(movies.length) // Night at the museum is the third movie in the array now, the rest afterward are shifted over
*/
//STEP 4

//Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. 
//Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.
/*
let movies = []
movies[0] = "High School Musical"
movies[1] = "Whiplash"
movies[2] = "Top Gun: Maverick"
movies[3] = "Barbie"
movies[4] = "The Perks of Being a Wallflower"

delete movies[0]
console.log(movies) // the first index is empty but the length of the array is still 5
*/

//STEP 5
//Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. 
//Now, use a for/in loop to iterate through the array and display each movie within the console window

/*
let movies = []
movies[0] = "High School Musical"
movies[1] = "Whiplash"
movies[2] = "Top Gun: Maverick"
movies[3] = "Barbie"
movies[4] = "The Perks of Being a Wallflower"
movies[5] = "Guardians of the Galaxy 3"
movies[6] = "Spiderman: Across the Spiderverse"

for (movie in movies) {
    console.log(movies[movie])
}

*/

//STEP 6
//Copy the code from step 5. Now, use a for/of loop to iterate through the array and display each movie within the console window.

/*
let movies = []
movies[0] = "High School Musical"
movies[1] = "Whiplash"
movies[2] = "Top Gun: Maverick"
movies[3] = "Barbie"
movies[4] = "The Perks of Being a Wallflower"
movies[5] = "Guardians of the Galaxy 3"
movies[6] = "Spiderman: Across the Spiderverse"

for (movie of movies) {
    console.log(movie)
}
*/

//STEP 7
//Copy the code from step 5. Using the for/of loop to iterate through the array, display each movie within the console window in a sorted view.
/*
let movies = []
movies[0] = "High School Musical"
movies[1] = "Whiplash"
movies[2] = "Top Gun: Maverick"
movies[3] = "Barbie"
movies[4] = "The Perks of Being a Wallflower"
movies[5] = "Guardians of the Galaxy 3"
movies[6] = "Spiderman: Across the Spiderverse"
movies.sort()

for (movie of movies) {
    console.log(movie)
}
*/

//STEP 8
//Copy the code from step 5. Under the existing array, create a new array called leastFavMovies. P
//Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, 
//you must include that too):

/*
let movies = []
movies[0] = "High School Musical"
movies[1] = "Whiplash"
movies[2] = "Top Gun: Maverick"
movies[3] = "Barbie"
movies[4] = "The Perks of Being a Wallflower"
movies[5] = "Guardians of the Galaxy 3"
movies[6] = "Spiderman: Across the Spiderverse"

console.log("Movies I like: \n\n")
let formattedMovies = movies.join("\n")
console.log(formattedMovies)

let leastFavMovies = []
leastFavMovies[0] = "Enola Holmes"
leastFavMovies[1] = "The 40-Year Old Virgin"
leastFavMovies[2] = "Fantastic Beasts: The Secrets of Dumbledore"

console.log("Movies I regret watching: \n\n")
let formattedLFMovies = leastFavMovies.join("\n")
console.log(formattedLFMovies)
*/

//STEP 9
// Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a single array called movies. 
// Use the console window to display the list in reverse sorted

/*
let movies = []
movies[0] = "High School Musical"
movies[1] = "Whiplash"
movies[2] = "Top Gun: Maverick"
movies[3] = "Barbie"
movies[4] = "The Perks of Being a Wallflower"
movies[5] = "Guardians of the Galaxy 3"
movies[6] = "Spiderman: Across the Spiderverse"

console.log("Movies I like: \n\n")
let formattedMovies = movies.join("\n")
console.log(formattedMovies)

let leastFavMovies = []
leastFavMovies[0] = "Enola Holmes"
leastFavMovies[1] = "The 40-Year Old Virgin"
leastFavMovies[2] = "Fantastic Beasts: The Secrets of Dumbledore"

console.log("Movies I regret watching: \n\n")
let formattedLFMovies = leastFavMovies.join("\n")
console.log(formattedLFMovies)

let mergeMovies = movies.concat(leastFavMovies)
console.log(mergeMovies.reverse())
*/

//STEP 10
//Copy the code from step 9. Use an array function to return just the last item in the array and display it within the console window.
/*
let movies = []
movies[0] = "High School Musical"
movies[1] = "Whiplash"
movies[2] = "Top Gun: Maverick"
movies[3] = "Barbie"
movies[4] = "The Perks of Being a Wallflower"
movies[5] = "Guardians of the Galaxy 3"
movies[6] = "Spiderman: Across the Spiderverse"

console.log("Movies I like: \n\n")
let formattedMovies = movies.join("\n")
console.log(formattedMovies)

let leastFavMovies = []
leastFavMovies[0] = "Enola Holmes"
leastFavMovies[1] = "The 40-Year Old Virgin"
leastFavMovies[2] = "Fantastic Beasts: The Secrets of Dumbledore"

console.log("Movies I regret watching: \n\n")
let formattedLFMovies = leastFavMovies.join("\n")
console.log(formattedLFMovies)

let mergeMovies = movies.concat(leastFavMovies)
console.log(mergeMovies.reverse())

console.log(mergeMovies.pop()) // return the last item in the array
*/


//STEP 11
// Copy the code from step 10. Remove the previous method and this time use a method to return just the first item in the array and display it within the console window.

/*
let movies = []
movies[0] = "High School Musical"
movies[1] = "Whiplash"
movies[2] = "Top Gun: Maverick"
movies[3] = "Barbie"
movies[4] = "The Perks of Being a Wallflower"
movies[5] = "Guardians of the Galaxy 3"
movies[6] = "Spiderman: Across the Spiderverse"

console.log("Movies I like: \n\n")
let formattedMovies = movies.join("\n")
console.log(formattedMovies)

let leastFavMovies = []
leastFavMovies[0] = "Enola Holmes"
leastFavMovies[1] = "The 40-Year Old Virgin"
leastFavMovies[2] = "Fantastic Beasts: The Secrets of Dumbledore"

console.log("Movies I regret watching: \n\n")
let formattedLFMovies = leastFavMovies.join("\n")
console.log(formattedLFMovies)

let mergeMovies = movies.concat(leastFavMovies)
console.log(mergeMovies.reverse())

console.log(mergeMovies.shift()) // return the first item in the array
*/

//STEP 12
//Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like.

/*
let movies = []
movies[0] = "High School Musical"
movies[1] = "Whiplash"
movies[2] = "Top Gun: Maverick"
movies[3] = "Barbie"
movies[4] = "The Perks of Being a Wallflower"
movies[5] = "Guardians of the Galaxy 3"
movies[6] = "Spiderman: Across the Spiderverse"

console.log("Movies I like: \n\n")
let formattedMovies = movies.join("\n")
//console.log(formattedMovies)

let leastFavMovies = []
leastFavMovies[0] = "Enola Holmes"
leastFavMovies[1] = "The 40-Year Old Virgin"
leastFavMovies[2] = "Fantastic Beasts: The Secrets of Dumbledore"

console.log("Movies I regret watching: \n\n")
let formattedLFMovies = leastFavMovies.join("\n")
//console.log(formattedLFMovies)

let mergeMovies = movies.concat(leastFavMovies)
mergeMovies = mergeMovies.sort()
console.log(`movies ${mergeMovies}`)


function inDislikeList(arrayElement, mergeMovies, dlArray) {
    if (dlArray.indexOf(arrayElement) != -1) {
        console.log(mergeMovies.indexOf(arrayElement))
        console.log(arrayElement)
        let dlMovieInd = mergeMovies.indexOf(arrayElement)
        return dlMovieInd  
    }

}


// retrieve indices of movies that i dislike
dlInds = []
for (mo of mergeMovies) {
    let movieInd = inDislikeList(mo, mergeMovies, leastFavMovies)
    if (movieInd != undefined) {
        dlInds.push(movieInd)
    }

}
console.log(dlInds)
//console.log(dlInds)

moviesDoLike = ["Wizard of Oz", "About Time", "Paddington"]

//Add movies that i like at the indices of the movies i don't like
for (let i = 0; i < mergeMovies.length; i++) {
    console.log(mergeMovies[i])
    if (dlInds.includes(i) == true) {
        mergeMovies[i] = moviesDoLike.shift()
    } 
}
console.log(mergeMovies) // with added movies

*/

//STEP 13
//Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this:

//movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];

//Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.

movies = [["High School Musical", 1], ["Whiplash", 2], ["Top Gun: Maverick", 3], ["Barbie", 4], ["The Perks of Being a Wallflower", 5], [2, 6]];
/*
let stringMovies = movies.filter((item) => {
    
    return item
})
*/

let stringMovies = movies.filter((item) => {
    
    return typeof item[0] === 'string'
})

console.log(stringMovies)
//STEP 14

//STEP 15

//STEP 16

//STEP 17