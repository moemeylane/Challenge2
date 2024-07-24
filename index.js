document.addEventListener('DOMContentLoaded', () => {
  const inputField = document.getElementById('item-input');
  const addButton = document.getElementById('add-button');
  const clearButton = document.getElementById('clear-button');
  const shoppingList = document.getElementById('shopping-list');

  let items = []; // Initializing an empty array to store items

  // Function to render the list of items
  const renderList = () => {
      shoppingList.innerHTML = ''; 
      items.forEach((item, index) => {
          const li = document.createElement('li');
          li.dataset.index = index; // Assign a data-index attribute

          if (item.purchased) {
              li.classList.add('purchased');
          }

          const itemInput = document.createElement('input');
          itemInput.type = 'text';
          itemInput.value = item.name;
         

          const buttonGroup = document.createElement('div');

          const markButton = document.createElement('button');
          markButton.textContent = item.purchased ? 'Unmark' : 'Mark Purchased';
          markButton.addEventListener('click', () => togglePurchased(index));

          const editButton = document.createElement('button');
          editButton.textContent = 'Edit';
          editButton.addEventListener('click', () => editItem(index, itemInput));

          const saveButton = document.createElement('button');
          saveButton.textContent = 'Save';
          saveButton.style.display = 'none';
          saveButton.addEventListener('click', () => saveItem(index, itemInput, saveButton, editButton));

          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          deleteButton.addEventListener('click', () => deleteItem(index));

          buttonGroup.appendChild(markButton);
          buttonGroup.appendChild(editButton);
          buttonGroup.appendChild(saveButton);
          buttonGroup.appendChild(deleteButton);

          li.appendChild(itemInput);
          li.appendChild(buttonGroup);
          shoppingList.appendChild(li);
      });
  };

  // add a new item to the list
  const addItem = () => {
      const itemName = inputField.value.trim();
      if (itemName !== '') {
          items.push({ name: itemName, purchased: false });
          inputField.value = ''; // Clear the input field
          renderList(); // Update the list display
      }
  };

  
  const togglePurchased = (index) => {
      items[index].purchased = !items[index].purchased;
      renderList();
  };

  // Function to edit an item
  const editItem = (index, itemInput) => {
      itemInput.readOnly = false; // Make input editable
      itemInput.focus(); 
      itemInput.classList.add('edit-mode'); // Add edit styling
      const saveButton = itemInput.nextElementSibling.children[2];
      const editButton = itemInput.nextElementSibling.children[1];
      saveButton.style.display = 'inline-block'; // Show the save button
      editButton.style.display = 'none'; // Hide the edit button
  };

  // Function to save the edited item
  const saveItem = (index, itemInput, saveButton, editButton) => {
      const updatedName = itemInput.value.trim();
      if (updatedName !== '') {
          items[index].name = updatedName;
          itemInput.classList.remove('edit-mode');
          saveButton.style.display = 'none'; // Hide the save button
          editButton.style.display = 'inline-block'; // Show the edit button
          renderList();
      }
  };

  // Function to delete an item
  const deleteItem = (index) => {
      items.splice(index, 1); 
      renderList();
  };

  // Function to clear the entire list
  const clearList = () => {
      items = []; // Reset the items array
      renderList();
  };

  // Event listeners for add and clear buttons
  addButton.addEventListener('click', addItem);
  clearButton.addEventListener('click', clearList);
  renderList();
});
