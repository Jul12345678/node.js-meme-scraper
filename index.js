//const fetch = require('node-fetch');
//fetch('https://memegen-link-examples-upleveled.netlify.app/').then((res)=>{
//return resizeBy.json();
//}).then((json)=>){
//console.log(json);
//}

import fetch from 'node-fetch';

function fetchData() {
  fetch('https://memegen-link-examples-upleveled.netlify.app/').then(
    (response) => {
      console.log(response);
    },
  );
}
fetchData();
