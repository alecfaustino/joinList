/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
const joinList = (arr) => {
  let resultString = "";
  if (arr.length === 0) {
    return resultString;
  }
  for (let i = 0; i < arr.length; i++) {
    resultString += `${arr[i]}, `;
    if (i === (arr.length - 1)) {
      resultString += `${arr[i]}`;
    }
  }
  return resultString;
};

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);

console.log('Today I learned about', concepts);
