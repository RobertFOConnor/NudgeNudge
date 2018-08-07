export const exampleItem = {
    key: 'IBN123456',
    title: 'Hitchhiker\'s Guide to the Galaxy',
    description: 'A case study showing how I used my marketing background and tactics to write an even better book description for a big time book and prove the results...',
    linkText: '354 people read',
    image: null,
    bg_image: null,
    genres: "Action, adventure",
    year: "Release date: 1994",
    rating: 4.5,
};

export const exampleItemList = [
    {...exampleItem, key: '1'},
    {...exampleItem, key: '2', rating: 5},
    {...exampleItem, key: '3'},
    {...exampleItem, key: '4'},
    {...exampleItem, key: '5'}
];

export const exampleUser = {
    id: 52843,
    name: 'Douglas Adams',
    location: 'Cambridge, UK',
    following: [32544, 345345, 123213, 32434, 123, 123, 213123, 123123], //user ids,
    followers: [3432, 454, 232, 234, 56, 234],
    likes: [12312, 21312, 2131, 454, 565],
    image: null,
    works: exampleItemList,
};

const URL = "https://api.themoviedb.org/";
const IMAGE_URL = "https://image.tmdb.org/t/p/w185///";
const API_KEY = "c03ce24e604507d26f870e38603a9df8";
const API_VERSION = 3;

export const fetchUserData = (id) => {

    return fetch(URL + API_VERSION + "/person/" + id + "?api_key=" + API_KEY)
        .then(
            response => response.json())
        .then(responseJSON => {
            const personDetails = responseJSON;

            return {
                ...personDetails,
                location: personDetails.known_for_department,
                image: personDetails.profile_path ? IMAGE_URL + personDetails.profile_path : null,
            };

        })
        .catch((error) => {
            console.error(error);
            return null;
        });
};

export const fetchUserWorks = (id) => {

    let arr = [];

    return fetch(URL + API_VERSION + "/person/" + id + "/movie_credits?api_key=" + API_KEY)
        .then(
            response => response.json())
        .then(responseJSON => {
            [...responseJSON["crew"], ...responseJSON["cast"]].forEach((movieInfo) => {
                let alreadyAdded = false;
                arr.forEach((addedItem) => {
                    if (addedItem.key === movieInfo.id.toString()) {
                        alreadyAdded = true;
                    }
                });

                if (!alreadyAdded) {
                    arr.push({
                        key: movieInfo.id.toString(),
                        title: movieInfo.title,
                        image: movieInfo.poster_path ? IMAGE_URL + movieInfo.poster_path : null,
                        bg_image: IMAGE_URL + movieInfo.backdrop_path,
                        description: movieInfo.overview,
                        linkText: "Rated by: " + movieInfo.vote_count,
                        rating: movieInfo.vote_average / 2,
                        year: "Release date: " + movieInfo.release_date,
                        vote_count: movieInfo.vote_count,
                        popularity: movieInfo.popularity,
                    });
                }

                arr.sort(function (movie1, movie2) {
                    return movie2.popularity - movie1.popularity;
                });
            });

            return arr;
        })
        .catch((error) => {
            console.error(error);
            return null;
        });
};

export const fetchMovie = (id) => {

    return fetch(URL + API_VERSION + "/movie/" + id + "?api_key=" + API_KEY)
        .then(
            response => response.json())
        .then(responseJSON => {

            let genres = '';
            if (responseJSON.genres.length > 0) {
                responseJSON.genres.forEach(genre => genres += (genre.name + ", "));
                genres = genres.substring(0, genres.length - 2);
            }

            return {
                key: responseJSON.id,
                title: responseJSON.title,
                description: responseJSON.overview,
                image: IMAGE_URL + responseJSON.poster_path,
                bg_image: IMAGE_URL + responseJSON.backdrop_path,
                genres: genres,
                year: "Release date: " + responseJSON.release_date,
                rating: responseJSON.vote_average / 2,
            };
        })
        .catch((error) => {
            console.error(error);
            return null;
        });
};