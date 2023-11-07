const urlPageTitle = "";

// create document click that watches the nav links only
document.addEventListener("click", (e) => {
  const { target } = e;
  if (!target.matches("nav span")) {
    return;
  }
  e.preventDefault();
  urlRoute();
});

// create an object that maps the url to the template, title, and description
const urlRoutes = {
  404: {
    template: "../../pages/404.html",
    title: "404" + urlPageTitle,
    description: "Page not found",
  },
  "/": {
    template: "/../../pages/indexPage.html",
    title: "Chowe" + urlPageTitle,
    description: "This is the home page",
  },
  "/cart": {
    template: "../../pages/cart.html",
    title: "Cart" + urlPageTitle,
    description: "This is the about page",
  },
};

// create a function that watches the url and calls the urlLocationHandler
const urlRoute = (event) => {
  event = event || window.event; // get window.event if event argument not provided
  event.preventDefault();
  // window.history.pushState(state, unused, target link);
  window.history.pushState({}, "", event.target.href);
  urlLocationHandler();
};

// create a function that handles the url location
const urlLocationHandler = async () => {
  const location = window.location.pathname; // get the url path
  // if the path length is 0, set it to primary page route

  if (location.length == 0) {
    location = "/";
  }
  // get the route object from the urlRoutes object
  const route = urlRoutes[location] || urlRoutes["404"];
  // get the html from the template
  const html = await fetch(route.template).then((response) => response.text());
  // set the content of the content div to the html
  document.getElementById("content").innerHTML = html;

  if (location === "/cart") {
    console.log(location);
    var cartItemsLi = generateCartHtmlFromState();
    document.querySelector("#selectedItemsL").innerHTML = cartItemsLi;
  }

  // set the title of the document to the title of the route
  document.title = route.title;
  // set the description of the document to the description of the route
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", route.description);
};

// add an event listener to the window that watches for url changes
window.onpopstate = urlLocationHandler;
// call the urlLocationHandler function to handle the initial url
window.route = urlRoute;
// call the urlLocationHandler function to handle the initial url
urlLocationHandler();

function generateCartHtmlFromState() {
  var state = store.getState();
  let totalAmount = 0;
  let totalPrice = 0;

  var item = Object.values(state);
  console.log(item);
  let cartItems = `				
				<table class="cartTable">
					<tr>
            <th class="Subtitulo hide"></th>
						<th class="Subtitulo">Prod</th>
						<th class="Subtitulo">Cant</th>
						<th class="Subtitulo">Precio</th>
            <th class="Subtitulo">Total</th>
					</tr>`;

  for (var i = 0; i < item.length; i++) {
    const itemTotalPrice = item[i]["Price"] * item[i]["amount"];
    totalAmount += item[i]["amount"];
    totalPrice += itemTotalPrice;
    cartItems += `			
					<tr class="productCart">
            <td class="hide"> <img src="${item[i]["Img"]}" alt="imgCart" class="imgCart"/> </td> 
						<td class="Parrafo">${item[i]["Nombre"]}</td>
						<td class="Parrafo">${item[i]["amount"]}</td>
						<td class="Parrafo">$${item[i]["Price"]}</td>
            <td class="Parrafo">$${itemTotalPrice}</td>
					</tr> 
			`;
  }
  cartItems += `</table>`;

  document.getElementById("totalArticulos").innerHTML = totalAmount;
  document.getElementById("totalPrecio").innerHTML = `$${totalPrice}`;
  console.log(totalAmount);
  console.log(totalPrice);

  return cartItems;
}
