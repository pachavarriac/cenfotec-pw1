document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carousel-track");

  const originalItems = Array.from(track.children);
  originalItems.forEach(img => {
    const clone = img.cloneNode(true);
    track.appendChild(clone);
  });
});
