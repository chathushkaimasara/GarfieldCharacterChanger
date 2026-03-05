const characters = ['Garfield', 'Odie', 'Nermal', 'Pooky', 'Jon'];
const selectBox = document.getElementById('character-select');
const imageDisplay = document.getElementById('character-image');

// Populate the select box
characters.forEach(character => {
    const option = document.createElement('option');
    option.value = character;      
    option.textContent = character; 
    selectBox.appendChild(option); 
});

// SET THE INITIAL IMAGE (Updated to use 'picture/' folder)
imageDisplay.src = `picture/${characters[0]}.jpg`; 

// CHANGE THE IMAGE WHEN A NEW NAME IS SELECTED
selectBox.addEventListener('change', function() {
    const selectedCharacter = this.value; // Gets the name clicked in the dropdown
    
    // Update the image source dynamically using the 'picture/' folder
    imageDisplay.src = `picture/${selectedCharacter}.jpg`;
});