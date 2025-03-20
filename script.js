// Variables
let count = 0; // Counter value
const goat = document.getElementById('goat');
const counter = document.getElementById('counter');
let animationRunning = false; // To prevent multiple animations at once
let interval = null; // Store the interval for pausing

// Play button action
function playAction() {
    if (animationRunning) return; // Prevent multiple play actions
    animationRunning = true; // Set flag to true

    // Animate goat
    let direction = 1; // 1 for right, -1 for left
    let position = parseInt(goat.style.left) || 0; // Starting position (resume from where it stopped)
    interval = setInterval(() => {
        position += 5 * direction; // Reduce step size for smoother and slower animation
        goat.style.left = position + 'px';

        // Jumping effect
        goat.style.bottom = (10 + Math.sin(position / 20) * 20) + 'px';

        if (position >= 540 && direction === 1) {
            goat.style.opacity = 0;
            setTimeout(() => {
                goat.style.transform = 'scaleX(1)';
                goat.style.opacity = 1;
            }, 300);
            direction = -1;
            count++;
            counter.innerText = `Count: ${count}`;
        } else if (position <= 0 && direction === -1) {
            goat.style.opacity = 0;
            setTimeout(() => {
                goat.style.transform = 'scaleX(-1)';
                goat.style.opacity = 1;
            }, 300);
            direction = 1;
            count++;
            counter.innerText = `Count: ${count}`;
        }
    }, 50); // Slower speed: increased interval duration

}

// Stop button action
function stopAction() {
    clearInterval(interval); // Stop the goat's movement
    animationRunning = false; // Allow re-starting with Play button
}

// Reset button action
function resetAction() {
    clearInterval(interval); // Stop any ongoing animation
    animationRunning = false; // Reset animation state
    count = 0; // Reset counter
    counter.innerText = 'Count: 0'; // Update counter display
    goat.style.left = '0px'; // Reset goat position
    goat.style.bottom = '10px'; // Reset goat height
    goat.style.transform = 'scaleX(1)'; // Reset direction
}