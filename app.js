// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"

const button1 = document.querySelector("button");

//    - Select the second button by using an "id"

const button2 = document.getElementById("secondButton");

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
function firstFunc() {
  console.dir(button1);
}
button1.addEventListener("click", firstFunc);
//    - Output the second button WITHOUT using the variable in which it's stored

function secondFunc(event) {
  console.dir(event.target);
}
button2.addEventListener("click", secondFunc);
// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
const storeParagraph1 = document.body.childNodes[5].childNodes[3];
const check = document.body.children[2].children[1]; //alternate way
const storeParagraph2 = document.body.childNodes[5].childNodes[7].childNodes[1];
console.dir(storeParagraph1);
console.dir(storeParagraph2);
console.dir(check);
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
function firstFunc() {
  storeParagraph2.remove();
}
//    - The second button changes the background color of the first paragraph to blue
// }
function secondFunc() {
  storeParagraph1.style.backgroundColor = "blue";
}
// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!

storeParagraph1.className = "practice";
// storeParagraph1.classList.add("practice");//alternate way
