// function getResp() {
//   fetch("https://type.fit/api/quotes")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       display(data);
//     });
// }
//
const getResp = async () => {
  const result = await fetch("https://type.fit/api/quotes");
  const data = await result.json();

  if (result.status === 200) {
    let x = Math.floor(Math.random() * 1643);
    return {
      text: data[x].text,
      author: data[x].author,
    };
  } else return null;
};

const getImages = async (query) => {
  const searchURL = `https://bad-mf.herokuapp.com/search?q=${query}&api_key=0d8aaf3201d6d956215eccb20212108651304c3eaa5ebdcdd2cadcb4499e36fa`;
  const result = await fetch(searchURL, {
    method: "GET",
  });

  if (result.status === 200) {
    console.log("result :", result);
    const data = await result.json();
    return data.images;
  } else {
    console.log(result);
  }

  return null;
};
// const display = (data) => {
//   let x = Math.floor(Math.random() * 1643);
//   document.getElementById("phrase").innerHTML = `${data[x].text}`;
//   document.getElementById("author").innerHTML = `${data[x].author}`;
// };

// const download = () => {
//   html2canvas(document.querySelector(".quo")).then((canvas) => {
//     window.open(
//       canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
//     );
//   });
// };
