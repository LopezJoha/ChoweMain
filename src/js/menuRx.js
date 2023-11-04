

const newAdding =(id) => {
  store.dispatch(add(id))
}

const newSubstracting = (id)=>{
  store.dispatch(subs(id))
}

const initialAmount = {};

const add = (param) => {
  return {
    type: "Add",
    payload: param,
  };
};

const subs = (param) => {
  return {
    type: "Subs",
    payload: param,
  };
};

const reducer = (state = initialAmount, action) => {
  if (action.type === "Add") {
    const copy = { ...state };
    const val = copy[action.payload];
    if (val) {
      copy[action.payload] = copy[action.payload] + 1;
    } else {
      copy[action.payload] = 1;
    }
    return copy;
  } else if (action.type === "Subs") {
    const copy = { ...state };
    const val = copy[action.payload];
    if (val) {
      copy[action.payload] = copy[action.payload] - 1;
    } else {
      copy[action.payload] = 0; 
    }
    return copy;
  }  
  else {
    return state;
  }
};

const store = Redux.createStore(reducer, );

let currentValue; 
let cantidad; 



store.subscribe(() => {
  let total = 0; 
  const amount = store.getState(); 
  console.log(amount);
  
  let li_Item;
  

  for(const [key, value] of Object.entries(amount)){
    cantidad = document.querySelector(`#${key}-counter`); 
    total += value 
    li_Item = document.querySelector(`#li-${key}`);
    console.log(li_Item);
    
    
    if(cantidad){         
      currentValue = value
      cantidad.innerHTML = currentValue;   
    }
  }
  
  document.getElementById('totalCart').innerHTML = total; 
  
  
  
});


