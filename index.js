const fs = require("fs");
const http = require("http");
const url = require("url");

const slugify = require("slugify");
const replaceTemplate = require("./node-farm/module/replaceTemlate");
/////////////////////////////////////////////////////
//Files

// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is Testing of text write in file. Created on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log("File Written");

// fs.readFile('./txt/start.txt', 'utf-8', (err, data)=>{
//     console.log(data)
// });
// console.log("Will read file.");

////////////////////////////////////////////////////
// SERVER

const tempOverview = fs.readFileSync(
  `./node-farm/templates/template-overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(
  `./node-farm/templates/template-card.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `./node-farm/templates/template-product.html`,
  "utf-8"
);
const data = fs.readFileSync(`./node-farm/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const slugs = dataObj.map((el) => slugify(el.productName, { lower: true }));
console.log(slugs);

console.log(slugify("Fresh Avocados", { lower: true }));

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  // const { pathname, query} = url.parse(req.url, true);
  // const pathname = req.url;
  // console.log(pathname);
  // console.log(query)
  // Overview Page
  if (pathname == "/" || pathname === "/overview") {
    res.writeHead(404, {
      "content-type": "text/html",
      "own-haeder": "own Header",
    });

    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join("");
    // console.log(cardsHtml);
    const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardsHtml);
    res.end(output);

    // Product Page
  } else if (pathname == "/product") {
    res.writeHead(404, {
      "content-type": "text/html",
      "own-haeder": "own Header",
    });
    const product = dataObj[query.id];
    const output = replaceTemplate(tempProduct, product);

    res.end(output);

    // api
  } else if (pathname == "/api") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);

    // not found
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
      "own-haeder": "own Header",
    });
    res.end("<h1>Page not Found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
