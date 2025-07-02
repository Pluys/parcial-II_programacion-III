//Api url and all of the datatypes the api lets you get.
const APIURL = "https://jsonplaceholder.typicode.com/";
export const TYPES = Object.freeze({
  COMMENTS: "comments",
  PHOTOS: "photos",
  ALBUMS: "albums",
  TODOS: "todos",
  USERS: "users",
});

async function FetchData(type) {
  try {
    //Limits the amount of req posible by only allowing
    //to get data from types.
    const res = await fetch(APIURL + type);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

//Makes a fetch to all datatypes to easen the readability of the code.
export const getAllComments = () => FetchData(TYPES.COMMENTS);
export const getAllPhotos = () => FetchData(TYPES.PHOTOS);
export const getAllAlbums = () => FetchData(TYPES.ALBUMS);
export const getAllTodos = () => FetchData(TYPES.TODOS);
export const getAllUsers = () => FetchData(TYPES.USERS);

export function CreateCards(data) {
  const els = data.map((el) => `${el.id}`);

  section.innerHTML = `<p>ola</p>`;
  section.innerHTML = els.join(" ");
}
