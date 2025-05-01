document.getElementById('celebrateButton').addEventListener('click', function() {
    let celebrationDiv = document.getElementById('celebration');
    celebrationDiv.innerHTML = "I LOVE YOU MORE SAYANGGGKUUU";

    // Menambahkan efek confetti
    let confettiSettings = { target: 'celebration' };
    let confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
});