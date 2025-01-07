/*
1. A player chooses a level
2. 
*/

export async function get(number=10) {
  try {
    const fetchedData = await fetch(
      `https://api.magicthegathering.io/v1/cards?pageSize=${number}&random=true&contains=imageUrl`
    );
    return await fetchedData.json();
  } catch (err) {
    console.log(err);
  }
}

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

export function shuffle(arr = []) {
  const indexes = [];
  for (let i = 0; i < arr.length; i++) {
    indexes.push(i);
  }
  const newArr = [];
  while (newArr.length != arr.length) {
    const index = indexes.splice(randomInt(indexes.length), 1);
    const item = arr[index];
    newArr.push(item);
  }
  return newArr;
}


