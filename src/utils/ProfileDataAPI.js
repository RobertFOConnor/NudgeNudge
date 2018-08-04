export const exampleUser = {
    id: 52843,
    name: 'Douglas Adams',
    location: 'Cambridge, UK',
    following: [32544, 345345, 123213, 32434, 123, 123, 213123, 123123], //user ids,
    followers: [3432, 454, 232, 234, 56, 234],
    likes: [12312, 21312, 2131, 454, 565],
    image: null,
};

export const exampleItem = {
    key: 'IBN123456',
    title: 'Hitchhiker\'s Guide to the Galaxy',
    description: 'A case study showing how I used my marketing background and tactics to write an even better book description for a big time book and prove the results...',
    linkText: '354 people read',
    rating: 4.5,
};

export const exampleItemList = [
    {...exampleItem, key: '1'},
    {...exampleItem, key: '2', rating: 5},
    {...exampleItem, key: '3'},
    {...exampleItem, key: '4'},
    {...exampleItem, key: '5'}
];

export const fetchUserData = (id) => {

    const URL = "https://api.themoviedb.org/";
    const IMAGE_URL = "https://image.tmdb.org/t/p/w185///";
    const API_KEY = "KEY_HERE";
    const API_VERSION = 3;

    return fetch(URL + API_VERSION + "/person/" + id + "?api_key=" + API_KEY)
        .then(
            response => response.json())
        .then(responseJSON => {
            const personDetails = responseJSON;

            return fetch(URL + API_VERSION + "/person/" + id + "/images?api_key=" + API_KEY)
                .then(
                    response => response.json())
                .then(responseJSON => {
                        let imageUrl = null;
                        if (responseJSON.profiles && responseJSON.profiles.length > 0) {
                            imageUrl = IMAGE_URL + responseJSON.profiles[0].file_path;
                        }
                        return {
                            ...personDetails,
                            location: personDetails.known_for_department,
                            image: imageUrl,
                        };
                    }
                )
                .catch((error) => {
                    console.error(error);
                    return {
                        ...personDetails,
                        location: personDetails.known_for_department,
                        image: null,
                    };
                });
        })
        .catch((error) => {
            console.error(error);
            return null;
        });
};