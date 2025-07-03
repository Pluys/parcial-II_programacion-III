import { objectHandler, imageHandler } from "./handlers";
import { toUpperCaseFirst } from "./toUpperCaseFirst";

export function CreateCards(data, type) {
  // const els = data.map((el) => `${el.id}`);
  // section.innerHTML = `<p>ola</p>`;
  // section.innerHTML = els.join(" ");
}

export function CreateCardRandom(data, type) {
  const cardEl = document.getElementById("jsonRandom");
  const dataValues = Object.values(data);
  const dataKeys = Object.keys(data);

  for (let i = 0; i < dataValues.length; i++) {
    //Verifies if a property of the json is an object.
    if (typeof dataValues[i] === typeof null) {
      //If positive, then it's "stringified", similar to the
      //method "JSON.stringify()".
      dataValues[i] = objectHandler(dataValues[i]);
    }
  }

  //Cleanses previous requests.
  cardEl.textContent = "";
  //Puts as a classname the datatype.
  //(ref:src/pages/jsonRandoms/jsonRandoms.css)
  cardEl.className = type;

  for (let i = 0; i < dataValues.length; i++) {
    dataKeys[i] = toUpperCaseFirst(dataKeys[i]);

    cardEl.innerHTML += `
    <em>${dataKeys[i]}</em>: ${dataValues[i]}
    <br>
    `;
  }

  cardEl.innerHTML += `<button>>:)</button>`;
}
//${imageHandler(dataValues[i])} It was intended to also
//show the images of the jsons if they had any, but I checked
//the links and they did not provided me with an image, sadly.
