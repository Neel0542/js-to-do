document.addEventListener('DOMContentLoaded', () => {
    // Get references to HTML elements
    const addButton = document.getElementById('add-button'); // Button to add a new to-do item
    const newTodoInput = document.getElementById('new-todo'); // Input field for new to-do item
    const todoList = document.getElementById('todo-list'); // Unordered list to display to-do items
    const dingSound = document.getElementById('ding-sound'); // Audio element to play a sound

    // Add event listeners
    addButton.addEventListener('click', addTodo); // Add a new to-do item when the "Add" button is clicked
    newTodoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') { // Add a new to-do item when the Enter key is pressed
            addTodo();
        }
    });

    // Function to add a new to-do item
    function addTodo() {
        const todoText = newTodoInput.value.trim(); // Get and trim the input value
        if (todoText === '') { // Check if the input is empty
            alert('Please enter a to-do item.'); // Alert if the input is empty
            return;
        }

        // Create new list item elements
        const listItem = document.createElement('li'); // List item element
        const checkbox = document.createElement('input'); // Checkbox for marking the to-do as completed
        checkbox.type = 'checkbox'; // Set checkbox type
        checkbox.addEventListener('change', handleCheckboxChange); // Add event listener to handle checkbox change
        
        const span = document.createElement('span'); // Span element to display the to-do text
        span.textContent = todoText; // Set text content of the span

        const deleteButton = document.createElement('button'); // Button to delete the to-do item
        deleteButton.textContent = 'Delete'; // Set button text
        deleteButton.addEventListener('click', () => {
            listItem.classList.add('deleting'); // Add class for fade effect
            setTimeout(() => listItem.remove(), 500); // Remove the list item after a delay
        });

        // Append elements to the list item
        listItem.appendChild(checkbox);
        listItem.appendChild(span);
        listItem.appendChild(deleteButton);

        // Append the list item to the to-do list
        todoList.appendChild(listItem);

        // Clear input field and focus it for new input
        newTodoInput.value = '';
        newTodoInput.focus();
    }

    // Function to handle checkbox change
    function handleCheckboxChange(event) {
        const listItem = event.target.parentElement; // Get the parent list item of the checkbox
        if (event.target.checked) { // Check if the checkbox is checked
            listItem.classList.add('completed'); // Add class for completed to-do item
            todoList.appendChild(listItem); // Move the list item to the end of the list
            dingSound.play(); // Play the ding sound
        } else {
            listItem.classList.remove('completed'); // Remove completed class if unchecked
        }
    }
});
