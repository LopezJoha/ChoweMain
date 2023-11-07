const newAdding = (button) => {
  var objJSON = button.getAttribute("data-obj");
  var obj = JSON.parse(objJSON);
  store.dispatch(add(obj));
};

const newSubstracting = (button) => {
  var objJSON = button.getAttribute("data-obj");
  var obj = JSON.parse(objJSON);
  store.dispatch(subs(obj));
};

const initialAmount = {};

const add = (obj) => {
  return {
    type: "Add",
    payload: {
      Id: obj.id,
      Nombre: obj.title,
      Img: obj.imagen,
      Price: obj.price,
    },
  };
};

const subs = (obj) => {
  return {
    type: "Subs",
    payload: {
      Id: obj.id,
      Nombre: obj.title,
      Img: obj.imagen,
      Price: obj.price,
    },
  };
};

const reducer = (state = initialAmount, action) => {
  if (action.type === "Add") {
    const copy = { ...state };
    const val = copy[action.payload.Id];

    if (val) {
      copy[action.payload.Id] = {
        ...action.payload,
        amount: copy[action.payload.Id].amount + 1,
      };
    } else {
      copy[action.payload.Id] = {
        ...action.payload,
        amount: 1,
      }
      
    }
    return copy;
  } else if (action.type === "Subs") {
    const copy = { ...state };
    const val = copy[action.payload.Id];

    if (val) {
      if(copy[action.payload.Id].amount === 1){
        delete copy[action.payload.Id];
      } else {
        copy[action.payload.Id] = {
          ...action.payload,
          amount: copy[action.payload.Id].amount - 1,
        };
      }
    } else {
      // do nothing
    }
    return copy;
  } else {
    return state;
  }
};

const store = Redux.createStore(reducer);

// everytime the store changes, iterate over all the food options and check if theyre on the screen
// if theyre on the screen, iterate over state and see if its in there
// if it is, update the innerHTML
// im aware this isnt very efficient code, but its fine for something small like this

store.subscribe(() => {
  let total = 0;
  const state = store.getState();
  const array = Object.values(menuItems);
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array[i].length; j++) {
      const val = array[i][j];
      let cantidadElement = document.querySelector(`#${val.id}-counter`);
      if(cantidadElement){
        let stateProperty = state[val.id];
        if(stateProperty){
          const amount = state[val.id].amount;
          cantidadElement.innerHTML = amount;
          total += amount;
        } else {
          cantidadElement.innerHTML = 0;
        }
      }
    }
  }

  document.getElementById("totalCart").innerHTML = total;
});
