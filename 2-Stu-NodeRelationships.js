// select the root node
const root = document.querySelector("html");
// console.log(root);
// select the last child of the root node
const lastChild = root.lastChild;
// console.log("Last Child", lastChild);
// select all the children of the body element
const bodyChildren = lastChild.children;
// console.log(bodyChildren);
// console.log(bodyChildren[3]);
// select the next sibling of the h2 node
const h2Sibling = document.querySelector("h2").nextElementSibling;
// console.log("H2", document.querySelector("h2"));
// console.log("Sibling", h2Sibling);
// select the parent element of the h1 node
console.log("parent", document.querySelector("h1").parentElement);
