Interactive Shopping List
Overview
This is a simple interactive shopping list web application that allows users to add items, mark them as purchased, edit items, delete items, and clear the entire list. The application uses plain JavaScript and does not include persistence, meaning data will be lost upon page refresh.

Features
Add Items: Users can add new items to the shopping list.
Mark as Purchased: Users can toggle the status of items as purchased or not.
Edit Items: Users can edit the name of existing items.
Delete Items: Users can remove individual items from the list.
Clear List: Users can remove all items from the list.

Usage
Add an Item:

Type the item name in the input field.
Click the "Add" button to add it to the list.
Mark as Purchased:

Click the "Mark Purchased" button next to an item to toggle its purchased status.
Edit an Item:

Click the "Edit" button next to an item to make it editable.
Click the "Save" button to save changes.
Delete an Item:

Click the "Delete" button next to an item to remove it from the list.
Clear the List:

Click the "Clear List" button to remove all items from the list.
Code Explanation
JavaScript File (script.js):

renderList(): Updates the DOM to reflect the current state of the items array.
addItem(): Adds a new item to the list and updates the DOM.
togglePurchased(index): Toggles the purchased status of an item and updates the DOM.
editItem(index, itemInput): Allows users to edit an item.
saveItem(index, itemInput, saveButton, editButton): Saves the changes made to an item.
deleteItem(index): Deletes an item from the list.
clearList(): Clears all items from the list.
HTML File (index.html):

Contains the structure of the shopping list application, including input fields, buttons, and a list container.
CSS File (style.css):

Contains styles for the shopping list application to improve its appearance.
Contributing
Feel free to fork the repository and submit pull requests. Contributions to enhance functionality or improve the design are welcome.

License
This project is licensed under the MIT License. See the LICENSE file for details.
