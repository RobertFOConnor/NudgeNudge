import Icon from 'react-native-vector-icons/FontAwesome';

/* eslint-disable import/prefer-default-export */
export function generateImages(icons) {
  const actions = [];

  icons.map(icon => actions.push(Icon.getImageSource(icon.name, 30, '#FFFFFF')));

  return new Promise((resolve, reject) => {
    Promise.all(actions)
      .then(results => {
        const generatedImages = {};
        results.map((result, index) => (generatedImages[icons[index].name] = result));

        resolve(generatedImages);
      })
      .catch(error => {
        reject(error);
      });
  });
}
