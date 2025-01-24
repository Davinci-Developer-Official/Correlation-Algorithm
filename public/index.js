const state = {
    data: {},
    listeners: []
};

function check(listener) {
    state.listeners.push(listener);
}

function notify() {
    state.listeners.forEach((listener) => {
        listener(state.data);
    });
}

function setState(newState) {
    state.data = { ...state.data, ...newState };
    notify();
}

function transaction() {
    fetch('./data.json')  // Fetch the JSON file
        .then(response => response.json())  // Parse the JSON
        .then(data => {
            const dataSets = [...data];  // Clone the data
            alert("Button clicked! Data: " + JSON.stringify(dataSets));
        })
        .catch(error => {
            console.error("Error loading data:", error);
        });
}

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('send');
    if (button) {
        button.addEventListener('click', transaction);
    } else {
        console.error("Button with ID 'send' not found.");
    }
});
