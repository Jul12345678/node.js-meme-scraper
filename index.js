// download html with fetch then parse with domparser api
// nth child
// To get the first n elements of an array, use:
// const slicedArray = array.slice(0, n);
// const response = await fetch(
//   'https://memegen-link-examples-upleveled.netlify.app/',
// );
// const body = await response.text();
// console.log(body);
import cheerio from 'cheerio';
import fetch from 'node-fetch';

const main = async () => {
  const response = await fetch(
    'https://memegen-link-examples-upleveled.netlify.app/',
  );
  const body = await response.text();

  const $ = cheerio.load(body);
  const memes = $('#images')
    .children()
    .map(function (i, el) {
      // this === el
      return $(this).text();
    })
    .toArray();

  console.log(memes);
};

main();
