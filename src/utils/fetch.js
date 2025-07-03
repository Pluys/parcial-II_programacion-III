import { CreateCardRandom } from "./createCards";
import { getRandomNumber } from "./math";

//Api url and all of the datatypes the api lets you get.
//Limits the amount of req posible by only allowing
//to get data from types.
const APIURL = "https://jsonplaceholder.typicode.com/";
export const TYPES = Object.freeze({
  POSTS: "posts",
  COMMENTS: "comments",
  PHOTOS: "photos",
  ALBUMS: "albums",
  TODOS: "todos",
  USERS: "users",
});

async function FetchData(type) {
  try {
    const res = await fetch(APIURL + type);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

//Makes a fetch to all datatypes to easen the readability of the code.
const getAllPosts = () => FetchData(TYPES.POSTS);
const getAllComments = () => FetchData(TYPES.COMMENTS);
const getAllPhotos = () => FetchData(TYPES.PHOTOS);
const getAllAlbums = () => FetchData(TYPES.ALBUMS);
const getAllTodos = () => FetchData(TYPES.TODOS);
const getAllUsers = () => FetchData(TYPES.USERS);

export const allData = [];
allData.push(getAllPosts);
allData.push(getAllComments);
allData.push(getAllPhotos);
allData.push(getAllAlbums);
allData.push(getAllTodos);
allData.push(getAllUsers);

export function getRandomJson(indexTYPES) {
  //If indexTYPES was not proportionated,
  //the function returns  a random index.
  const datatype =
    indexTYPES ?? getRandomNumber(0, Object.values(TYPES).length - 1);

  //Invokes the requested function (data) based on the datatype value.
  allData[datatype]()
    .then((data) => {
      //gets a random index based on the length of the array.
      //the index will represent a random json of the data array.
      const dataindex = getRandomNumber(1, data.length - 1);

      //sends the selected json and the type of data to create
      //a card to show to the user.
      CreateCardRandom(data[dataindex], Object.values(TYPES)[datatype]);
    })
    .catch((err) => {
      console.log(err);
      document.getElementById("jsonRandom").innerHTML = `
      Woops! Something did not went as expected. I'm sorry:(
      <br>
      <br>
      Please, try reloading the page or making the request again.
      If none of those work, you can contact me personally at the
      mail I left down below.
      `;
    });
}
