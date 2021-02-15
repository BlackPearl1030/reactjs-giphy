## App

Author: Edita Narkuniene

Simple React app to display random generated gif set.
Used functional componenets, hooks and Context API.

- New set of gifs(sorted byimport_datetime parameter) is appearing on each button click or SPACEBAR press
- Each gif can be locked/unlocked by clicking it respectively
- Locked gifs are immune to new fetches. They will hold the same position in page grid
- Browser stotage is used to save locked gifs
- After page refresh or browser restart new set of gifs contains prevesiously locked gifs

### Prerequisite

This app uses GIPHY API services. To run this app on your own, you need to sign and request an API key [here](https://developers.giphy.com/).

### Instalation

1. Checkout this code repository.
2. Create a `.env` file in the root folder, and place the API key:

    ```text
    REACT_APP_GIPHY_API_KEY=<YOUR GIPHY API KEY HERE>
    ```

3. Run `npm install` to install the dependencies.
4. Run `npm run start` to start the app in local server, usually http://localhost:3000/.

### Deploy project to production server

```
npm run build
```
