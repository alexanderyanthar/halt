// Need the form element created
// Need inputs
// Need labels for inputs
// Need a submit button
const inputComponent = (
  type = "text",
  id = "",
  name = "",
  required = false,
  placeholder = "",
  readOnly = false
) => {
  const formInput = document.createElement("input");
  formInput.type = type;
  formInput.id = id;
  formInput.name = name;
  formInput.required = required;
  formInput.placeholder = placeholder;
  formInput.readOnly = readOnly;

  return formInput;
};

const buttonComponent = (type = "button", value = "", disabled = false) => {
  const inputButton = document.createElement("input");
  inputButton.type = type;
  inputButton.value = value;
  inputButton.disabled = disabled;

  return inputButton;
};

// Lets start with a simple form. Just one input, one label, and one form.
// 1. create form
const fragment = document.createDocumentFragment();

const formFragment = fragment.appendChild(document.createElement("form"));

const input = inputComponent(
  "text",
  "name",
  "name",
  false,
  "enter text",
  false
);

const button = buttonComponent("button", "Press me", false);

formFragment.appendChild(input);
formFragment.appendChild(button);

const rootElement = document.getElementById("root");
if (rootElement) {
  rootElement.appendChild(formFragment);
}
