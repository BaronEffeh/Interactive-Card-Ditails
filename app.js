document.getElementById('cardForm').addEventListener('submit', function (e) {
    e.preventDefault(); //Prevevnt the form from submitting

    //Get input values
    var name = document.getElementById('cardHolderName').value;

    //Update the output section
    document.getElementById('cardFrontHolderName').textContent = name;
})