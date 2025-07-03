import { objectHandler, imageHandler } from "./handlers";
import { toUpperCaseFirst } from "./toUpperCaseFirst";

// behaves similarly as CreateCardRandom
export function CreateCards(data) {
  const dataContainerEl = document.getElementById("dataContainer");
  dataContainerEl.innerHTML = `<span class="loader"></span>`; //Couldn't get this to work sadly.
  const els = [];

  data.map((el, i) => {
    const elValues = Object.values(el);
    const elKeys = Object.keys(el);

    for (let j = 0; j < elValues.length; j++) {
      //Checks if the value is an object
      if (typeof elValues[j] === typeof null) {
        //If positive, it's "stringified", similarly to
        //the "JSON,stringify()" method.
        elValues[j] = objectHandler(elValues[j]);
      }
    }

    els[i] = `<div><br>{<br>`;
    for (let j = 0; j < elKeys.length; j++) {
      //checks if the key "id" is in the first to values of the element.
      //if so, it's given a underscore and uppercases the first letter.
      // Else, it only uppercases the first letter.
      if (j === 0 || j === 1) {
        elKeys[j] === "id"
          ? (elKeys[j] = "_" + toUpperCaseFirst(elKeys[j]))
          : (elKeys[j] = toUpperCaseFirst(elKeys[j]));
      }

      els[i] += `${elKeys[j]}: ${elValues[j]}<br>`;
    }
    els[i] += `}</div>`;
  });

  dataContainerEl.innerHTML = ``;
  dataContainerEl.innerHTML = els.join("");
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
}
//${imageHandler(dataValues[i])} It was intended to also
//show the images of the jsons if they had any, but I checked
//the links and they did not provided me with an image, sadly.
