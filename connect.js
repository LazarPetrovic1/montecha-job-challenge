function getLetterCoordinates(arr, letter) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(letter)) {
      return [i, arr[i].indexOf(letter)]
    }
  }
}

function addStar(str, pos) {
  const [posX, posY] = pos
  str[posX] = str[posX].slice(0, posY).concat("*").concat(str[posX].slice(posY + 1))
}

function connect(arg) {
  let counter = 0
  let data;
  let positions = []
  let temp;
  if (typeof arg === "string") data = arg.split("\n").map(s => s.padEnd(20)) // assume multiline `backtick` string - needed arr of strings
  else data = arg // arr of strings
  const letters = data.map(y => y.trim()).map(y => y.length > 1 ? y.split(" ") : y).flat().filter(y => y.length > 0).sort()
  for (const item of letters) {
    positions.push(getLetterCoordinates(data, item))
  }
  // close the gap
  positions.push(getLetterCoordinates(data, letters[0]))
  for (counter; counter < letters.length; counter++) {
    temp = [positions[counter][0], positions[counter][1]]
    if (counter + 1 <= letters.length) {
      while (
        temp[0] !== positions[counter + 1][0] ||
        temp[1] !== positions[counter + 1][1]
      ) {
        if (
          temp[0] < positions[counter + 1][0] &&
          temp[1] < positions[counter + 1][1]
        ) {
          temp[0]++
          temp[1]++
        } else if (
          temp[0] < positions[counter + 1][0] &&
          temp[1] > positions[counter + 1][1]
        ) {
          temp[0]++
          temp[1]--
        } else if (
          temp[0] > positions[counter + 1][0] &&
          temp[1] < positions[counter + 1][1]
        ) {
          temp[0]--
          temp[1]++
        } else if (
          temp[0] > positions[counter + 1][0] &&
          temp[1] > positions[counter + 1][1]
        ) {
          temp[0]--
          temp[1]--
        } else if (
          temp[0] === positions[counter + 1][0] &&
          temp[1] > positions[counter + 1][1]
        ) {
          temp[1]--
        } else if (
          temp[0] === positions[counter + 1][0] &&
          temp[1] < positions[counter + 1][1]
        ) {
          temp[1]++
        } else if (
          temp[0] > positions[counter + 1][0] &&
          temp[1] === positions[counter + 1][1]
        ) {
          temp[0]--
        } else if (
          temp[0] < positions[counter + 1][0] &&
          temp[1] === positions[counter + 1][1]
        ) {
          temp[0]++
        }
        addStar(data, temp)
      }
    }
  }
  console.log(data.join("\n"));
  // return data.join("\n");
}

connect(`
   a
  e

d     b


   c
`)

/*
Expected output:

    *
   * *
  *   *
 *     *
  *   *
   * *
    *

*/

connect(`
    a
   d


c       b
`)

/*
Expected output

    *
   * *
  *   *
 *     *
*********

*/

connect(`
a       b
e

d       c
`)

/*
Expected output

*********
*       *
*       *
*********

*/

connect(`
  a    b
 g
f        c

  e    d
`)

/*
Expected output

  ******
 *      *
*        *
 *      *
  ******

*/
