let shoppingList = [];
let itemsContainer = document.getElementbyId("items-container");
let NewItems = document.getElementById("New-Items");
let addItems = document.getElementById("AddItems");
let clearlist = document.getElementById("ClearList");

function updateitemsContainer() {
  function updateList() {
    itemsContainer.innerHTML = "";
    shoppingList.forEach((item, index) => {
      let li = document.createElement("li");
      li.textContent = item.name;
      if (item.checked) {
        li.classList.add("checked");
      }
      let span = document.createElement("span");
      span.textContent = "\u00d7";
      li.appendChild(span);
      itemsContainerContainer.appendChild(li);
    });
  }

}
function addItems(event) {
  if (NewItems.value === "") {
    alert("Enter an item!");
  } else {
    let item = {
      name: inputBox.value.trim(),
       checked: false,
    };
    shoppingList.push(item);
    updateitemsContainer();
    // saveData();
  }
  NewItems.value = "";
}
add.addEventlistener("click",addItems)