async function getFlag() {
  try {
    const response = await fetch('/flag');
    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getFlag();
