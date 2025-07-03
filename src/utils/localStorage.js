const KEY = "45535LCPP1";

export function addJsonLocalStorage(json) {
  let tempJsons = [];
  if (localStorage.getItem(KEY)) {
    tempJsons = JSON.parse(localStorage.getItem(KEY));
    tempJsons.push(json);
    localStorage.setItem(KEY, JSON.stringify(tempJsons));
  } else {
    tempJsons.push(json);
    localStorage.setItem(KEY, JSON.stringify(tempJsons));
  }
}

export function getJsonLocalStorage() {
  if (localStorage.getItem(KEY)) {
    let data = "";
    let tempArray = [];

    tempArray = JSON.parse(localStorage.getItem(KEY));
    for (let i = 0; i < tempArray.length; i++) {
      data += `<div>${tempArray[i]}</div>`;
    }

    return data;
  } else return "";
}

export function removeJsonLocalStorage() {
  const savedDataEl = document.getElementById("savedData");
  let tempArray = [...savedDataEl.children];
  tempArray = tempArray.map((el) => {
    if (typeof el === typeof {}) {
      return el.innerHTML;
    } else return;
  });

  localStorage.setItem(KEY, JSON.stringify(tempArray));

  return;
}
