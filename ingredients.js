const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("Ingredients for Banana Bread:");
let i = 0;
while(i < ingredients.length) {
  console.log(ingredients[i]); // prints entire list of ingredients
  i++;
}

// Write a for loop that prints out the contents of ingredients:
console.log("Ingredients for Banana Bread:");
for (let j = 0; j < ingredients.length; j++) {
  console.log(ingredients[j]); // prints entire list of ingredients
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("Ingredients for Banana Bread, listed backwards:");
for (let k = (ingredients.length - 1); k >= 0; k--) { // prints the entire list of ingredients, last to first
  console.log(ingredients[k]);
}