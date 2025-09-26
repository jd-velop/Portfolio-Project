// exists only for typewriter effect
document.addEventListener("DOMContentLoaded", function () {
  const typewriterElement = document.getElementById("typewriter");
  const titles = [
    "Full Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Handsome Man",
    "Click My Photo!",
  ];

  let currentTitleIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  let isWaiting = false;

  function typeWriter() {
    const currentTitle = titles[currentTitleIndex];

    if (isWaiting) {
      setTimeout(typeWriter, 2000); // wait 2 seconds before starting to delete
      isWaiting = false;
      isDeleting = true;
      return;
    }

    if (isDeleting) {
      // Remove characters one at a time
      typewriterElement.textContent = currentTitle.substring(
        0,
        currentCharIndex - 1
      );
      currentCharIndex--;

      if (currentCharIndex === 0) {
        isDeleting = false;
        currentTitleIndex = (currentTitleIndex + 1) % titles.length; // loop back to first title
        setTimeout(typeWriter, 500); // wait half a second before typing next title
        return;
      }
    } else {
      // Add characters
      typewriterElement.textContent = currentTitle.substring(
        0,
        currentCharIndex + 1
      );
      currentCharIndex++;

      if (currentCharIndex === currentTitle.length) {
        isWaiting = true;
      }
    }

    // Typing speed: faster when deleting, slower when typing
    const speed = isDeleting ? 50 : 100;
    setTimeout(typeWriter, speed);
  }

  // Start the animation after a short delay
  setTimeout(typeWriter, 1000);
});
