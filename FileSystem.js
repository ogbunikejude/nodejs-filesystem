var fs = require("fs");
var fetch = require("node-fetch");

fetch("http://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((json) => {
    const data = JSON.stringify(json);
    fs.writeFile("./result/posts.json", data, (err) => {
      if (err) throw err;
      console.log("file created successfully");
    });
  });
