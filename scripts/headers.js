const heading = (headingType, headingText) => {
  // Associate proper headingType to value (h1, h2, h3, h4, h5, h6) - need array?
  // add headingText to a string;
  const newHeading = document.createElement(headingType);
  newHeading.innerHTML = `${headingText}`;

  return newHeading;
};

const fragment = document.createDocumentFragment();

const navBar = (text) => {
  const newNavBar = fragment
    .appendChild(document.createElement("nav"))
    .appendChild(document.createElement("ul"));
  // Let's start with one item and 1 text. I need to be able to pass in an array (which is what the text will be)
  text.forEach((item) => {
    const liEle = document.createElement("li");
    liEle.innerHTML = `${item}`;
    newNavBar.appendChild(liEle);
  });

  return newNavBar;
};

const headerFragment = fragment.appendChild(document.createElement("header"));
const mainFragment = fragment.appendChild(document.createElement("main"));

const myHeading = heading("h1", "Hello World");
const secondHeading = heading("h2", "This is a second heading");
const secondHeadingMain = heading("h2", "This is a second heading");
const headerNavBar = navBar(["item 1", "item 2", "item 3"]);

headerFragment.appendChild(myHeading);
headerFragment.appendChild(secondHeading);
headerFragment.appendChild(headerNavBar);
mainFragment.appendChild(secondHeadingMain);

const rootElement = document.getElementById("root");
if (rootElement) {
  rootElement.appendChild(headerFragment);
  rootElement.appendChild(mainFragment);
}
