import fetch from 'node-fetch';

function fetchData() {
  fetch('https://memegen-link-examples-upleveled.netlify.app/').then(
    (response) => {
      console.log(response);
    },
  );
}
fetchData();

fetch('https://memegen-link-examples-upleveled.netlify.app/')
  .then(function (response) {
    // The API call was successful!
    return response.text();
  })
  .then(function (html) {
    // This is the HTML from our response as a text string
    console.log(html);
  })
  .catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });
