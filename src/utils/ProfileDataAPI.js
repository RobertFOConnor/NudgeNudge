import {assets} from "../common/assets";

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
            console.log("res", responseJSON);
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
            [...responseJSON["crew"], ...responseJSON["cast"]].forEach((obj) => {
                let alreadyAdded = false;
                arr.forEach((addedItem) => {
                    if (addedItem.key === obj.id) {
                        alreadyAdded = true;
                    }
                });

                if (!alreadyAdded) {
                    arr.push({
                        key: obj.id,
                        title: obj.title,
                        image: obj.poster_path ? IMAGE_URL + obj.poster_path : null,
                        description: obj.overview,
                        linkText: "Rated by: " + obj.vote_count,
                        rating: obj.vote_average / 2,
                        vote_count: obj.vote_count,
                    });
                }

                arr.sort(function (obj1, obj2) {
                    return obj2.vote_count - obj1.vote_count;
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
            console.log("MOVIE: ", responseJSON);

            let genres = '';
            if (responseJSON.genres.length > 0) {
                responseJSON.genres.forEach(obj => genres += (obj.name + ", "));
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