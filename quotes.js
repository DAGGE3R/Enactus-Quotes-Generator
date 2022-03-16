const apiKey = "0d8aaf3201d6d956215eccb20212108651304c3eaa5ebdcdd2cadcb4499e36fa";
// const apiKey = "89e8468cba55df3a9014890ed6bb57309649ec8c010d4260e05b827e91bab9cb";

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
  const searchURL = `https://bad-mf.herokuapp.com/search?q=${query}&api_key=${apiKey}`;
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
