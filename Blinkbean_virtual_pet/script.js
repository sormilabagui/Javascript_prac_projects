// Start button opens the pet world
document.getElementById("startBtn").addEventListener("click", function() {
  setMood("meeting");
});

// Mood change handler
function setMood(mood) {
  // List of all sections
  const sections = ["intro", "meeting", "happy", "sulking"];

  // Hide all
  sections.forEach(id => {
    document.getElementById(id).style.display = "none";
  });

  // Show selected one
  document.getElementById(mood).style.display = "block";
}

// Show only intro on load
window.onload = function() {
  setMood("intro");
}
