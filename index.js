import array from 'array';
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
      return $(this).find('img').attr('src');
    })
    .toArray();

  console.log(memes.slice(0, 10));
};

main();
