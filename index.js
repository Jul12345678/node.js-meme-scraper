import fs from 'node:fs';
import https from 'node:https';
import cheerio from 'cheerio';
import fetch from 'node-fetch';

// Declare downloadImages in empty array for later use
const downloadedImages = [];

// Create "memes" folder if it doesn't exist
// The fs.mkdir() method in Node.js is used to create a directory asynchronously.
// fs.mkdir(path, mode, callback)
// path: This parameter holds the path of the directory has to be created.
// mode: This parameter holds the recursive boolean value. The mode option is used to set the directory permission, by default it is 0777.
// callback: This parameter holds the callback function that contains error. The recursive option if set to true will not give an error message if the directory to be created already exists.
fs.mkdir('./memes', { recursive: true }, (err) => {
  if (err) {
    return console.error(err);
  }
});
// Website HTML
// The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
const main = async () => {
  // The Fetch API accesses resources across the network. You can make HTTP requests (using GET, POST and other methods), download, and upload files.
  // Get the HTML
  const response = await fetch(
    'https://memegen-link-examples-upleveled.netlify.app/',
  );
  const body = await response.text(); // Image Links

  // Get Images from website element
  const $ = cheerio.load(body);
  const memes = $('#images') // #images = parent element
    .children()
    // Map = similar to object
    .map(function (i, el) {
      // this === el

      return $(this).find('img').attr('src'); // attr for images (not text())
    });

  // Put everything above into array
  // .toArray();

  // array.slice(0, n) gives you n-amount of links:
  // console.log(memes.slice(0, 10));
};

// Download Images into existing (or created) "./memes" folder
// The 'for' statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement
/* Syntax: for ([initialization]; [condition]; [final-expression])
   statement */
/* The following for statement starts by declaring the variable i and initializing it to 0. It checks that i is less than ten, performs the two succeeding statements, and increments i by 1 after each pass through the loop.*/
let i = 0;
for (; i < 10; i++) {
  // Rename Images
  const path =
    // i === 9 ? '.......' ${i + 1} to avoid 010.jpg
    i === 9 ? `./memes/memes${i + 1}.jpg` : `./memes/memes0${i + 1}.jpg`;

  const memes = fs.createWriteStream(path);

  // Download the images
  https.get(downloadedImages[i], function (response) {
    response.pipe(memes);
  });

  console.log('Success!');
}
