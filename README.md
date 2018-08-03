# giphy-app
An application using the Giphy API.

## Functionality  

The application uses the GIPHY API to search GIFs related to the term provided. If the user does not provide a term it displays trending gifs by default.
Pagination is handled through an infinite scroll component that will keep loading more when the user gets closer to the end of the page.

## Installation
The project requires having installed `mongoDB`, `node` and `npm`.

After the download of the project, you will need to install the dependencies. In order to do this, from the folder of the project run:

```sh
npm install 
```

Configure the `/server/config.js` file according to your needs.

Finally, run the following command to launch the application locally:

```sh
npm run dev
```


## TO DO's  

- Implement Likes and give ability to sort by them.
- Implement GifView component to display more information about the gif.
- Implement Authentication to make Likes persist across devices. A page to display liked gifs could be created as well.
- Improve UI. 
- Implement testing tools.
