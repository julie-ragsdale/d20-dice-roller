function rollDie() {
    const roll = Math.floor(Math.random() * 20 + 1);
    updateScreen(roll);
}

function updateScreen(roll) {
    document.querySelector('#rollNum').textContent = roll;
}

function clearPreviousRoll() {
    document.querySelector('#rollNum').textContent = '...';
    // document.addEventListener('click', function(event) {
    //     if (event.target.matches('.toggleModalBtn')) {
    //         console.log("hi");
    //     }
    // });
}

document.addEventListener('click', function(event) {
    if (event.target.matches('#rollBtn') || 
        event.target.matches('#rollNum')) 
    {
        event.preventDefault();
        rollDie();
    }
    else return
}, false);

document.addEventListener('click', function(event) {
    if (event.target.matches('.toggleModalBtn')) {
        clearPreviousRoll();
    }
})
