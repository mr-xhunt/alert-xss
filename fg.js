const options = { method: "GET"};

const myFunc = async () => {
  const a = await fetch("", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err)) => console.log(err));
  
  return a;
}

myFunc();
console.log(a);
