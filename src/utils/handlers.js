import { toUpperCaseFirst } from "./toUpperCaseFirst";

//I  intended to also
//show the images of the jsons if they had any, but I checked
//the links and they did not provided me with an image, sadly.
export function imageHandler(data) {
  if (typeof data === typeof "") {
    if (data.includes("https://")) {
      console.log(data);

      return `<img src=${data} alt="">`;
    } else return ``;
  } else return ``;
}

export function objectHandler(iObject) {
  const tempObjectValues = Object.values(iObject);
  const tempObjectKeys = Object.keys(iObject);

  for (let i = 0; i < tempObjectValues.length; i++) {
    if (typeof tempObjectValues[i] === typeof null) {
      tempObjectValues[i] = objectHandler(tempObjectValues[i]);
    }
  }

  iObject = "{";
  for (let i = 0; i < tempObjectValues.length; i++) {
    tempObjectKeys[i] = toUpperCaseFirst(tempObjectKeys[i]);

    iObject += `
    <br><em>${tempObjectKeys[i]}</em>: ${tempObjectValues[i]}
        `;
  }
  iObject += "<br>}";

  return iObject;
}
