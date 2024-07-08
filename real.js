let items = [
  { name: "Toiletries", purchased: false },
  { name: "Furniture", purchased: false },
  { name: "Food Stuffs", purchased: false },
  { name: "Bedding", purchased: false },
  { name: "Electronics", purchased: false }
];

let add = document.getElementById("add");
let clear = document.getElementById("clear"); // Reference to Clear List button
let newItem = document.getElementById("new-item");
let itemsContainer = document.getElementById("items-container");

function updateItemsContainer() {
  // Clear existing items
  itemsContainer.innerHTML = "";

  // Iterate through items array
  items.forEach((item, i) => {
      let listItem = document.createElement("li");
      listItem.textContent = item.name;

      if (item.purchased) {
          listItem.style.textDecoration = "line-through";
      }

      let markPurchasedBtn = document.createElement("button");
      markPurchasedBtn.textContent = "Mark Purchased";
      markPurchasedBtn.addEventListener("click", function() {
          items[i].purchased = true;
          updateItemsContainer(); // Update the list after marking purchased
      });

      itemsContainer.appendChild(listItem);
      itemsContainer.appendChild(markPurchasedBtn);
  });
}

function addItem(event) {
  let newItemValue = newItem.value.trim(); // Trim whitespace
  if (newItemValue === "") return;

  // Add new item to items array
  items.push({ name: newItemValue, purchased: false });

  // Clear input field
  newItem.value = "";

  // Update items display
  listItem.appendChild(add);
  updateItemsContainer();
 
}

function clearList() {
  items = [];
  updateItemsContainer();
}

add.addEventListener("click", addItem);
clear.addEventListener("click", clearList); // Bind clearList function to Clear List button click

// Initial update of items container
updateItemsContainer();


