const joinList = (arr) => {
  let resultString = "";
  for (let i = 0; i < arr.length; i++) {
    resultString += arr[i];
    if (i !== (arr.length - 1)) {
      resultString += `, `;
    }
  }
  return resultString;
};

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);

console.log('Today I learned about', concepts);