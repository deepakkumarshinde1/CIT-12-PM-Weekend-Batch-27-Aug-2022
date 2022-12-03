/** fetch ==>  client http request API
 * its promise base API
 * REST API ==> Representational State Transfer
 * API ==> Application Programming Interface
 */
//                    REST API
// server <==============================> client
var productList = document.getElementById("productList");

async function getData() {
  var url = "https://fakestoreapi.com/products";
  var response = await fetch(url);
  var data = await response.json(); // its provides data in json format
  // console.log(data);

  var list = data.map(function (product) {
    return `<li>
              <div class="product-card">
                <img
                  src="${product.image}"
                  alt=""
                />
                <p>${product.title}</p>
              </div>
            </li>`;
  });
  // console.log(list);
  list = list.join(""); // array to string
  productList.innerHTML = list;
}
getData();
