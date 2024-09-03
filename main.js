// Add an event listener to the window that runs when the page is fully loaded
window.addEventListener('load', () => {
    // Select the form element using its ID
    const form = document.querySelector("#new-task-form");
    // Select the input field for new tasks using its ID
    const input = document.querySelector("#new-task-input");
    // Select the container where tasks will be displayed using its ID
    const list_el = document.querySelector("#tasks");

    // Add an event listener to the form to handle form submissions
    form.addEventListener('submit', (e) => {
        // Prevent the default form submission behavior (i.e., page refresh)
        e.preventDefault();

        // Get the value of the input field (task description)
        const task = input.value;

        // Create a new div element for the task item
        const task_el = document.createElement('div');
        // Add the class 'task' to the div for styling purposes
        task_el.classList.add('task');

        // Create another div for the content inside the task item
        const task_content_el = document.createElement('div');
        // Add the class 'content' to the content div
        task_content_el.classList.add('content');

        // Append the content div to the task item div
        task_el.appendChild(task_content_el);

        // Create an input element to display the task text
        const task_input_el = document.createElement('input');
        // Add the class 'text' to the input for styling
        task_input_el.classList.add('text');
        // Set the input type to 'text'
        task_input_el.type = 'text';
        // Set the input value to the task description
        task_input_el.value = task;
        // Make the input read-only initially
        task_input_el.setAttribute('readonly', 'readonly');

        // Append the task input to the content div
        task_content_el.appendChild(task_input_el);

        // Create a div for action buttons (Edit and Delete)
        const task_actions_el = document.createElement('div');
        // Add the class 'actions' to the actions div
        task_actions_el.classList.add('actions');
        
        // Create the Edit button
        const task_edit_el = document.createElement('button');
        // Add the class 'edit' to the Edit button
        task_edit_el.classList.add('edit');
        // Set the button text to 'Edit'
        task_edit_el.innerText = 'Edit';

        // Create the Delete button
        const task_delete_el = document.createElement('button');
        // Add the class 'delete' to the Delete button
        task_delete_el.classList.add('delete');
        // Set the button text to 'Delete'
        task_delete_el.innerText = 'Delete';

        // Append the Edit and Delete buttons to the actions div
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        // Append the actions div to the task item div
        task_el.appendChild(task_actions_el);

        // Append the task item div to the list container
        list_el.appendChild(task_el);

        // Clear the input field after adding the task
        input.value = '';

        // Add a click event listener to the Edit button
        task_edit_el.addEventListener('click', (e) => {
            // Check if the button text is 'edit'
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                // Change button text to 'Save' to allow editing
                task_edit_el.innerText = "Save";
                // Remove the 'readonly' attribute to allow editing
                task_input_el.removeAttribute("readonly");
                // Focus on the input field to edit
                task_input_el.focus();
            } else {
                // Change button text back to 'Edit' after saving
                task_edit_el.innerText = "Edit";
                // Set the input back to read-only
                task_input_el.setAttribute("readonly", "readonly");
            }
        });

        // Add a click event listener to the Delete button
        task_delete_el.addEventListener('click', (e) => {
            // Remove the task item from the list
            list_el.removeChild(task_el);
        });
    });
});