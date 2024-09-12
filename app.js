function autoResizeTextarea() {
    const textareas = document.querySelectorAll("textarea"); // Select all textareas
    textareas.forEach((textarea) => {
      textarea.style.height = "auto"; // Reset the height
      textarea.style.height = textarea.scrollHeight + "px"; // Set new height based on content
    });
  }

  // Attach the input event to each textarea
  document.addEventListener("input", function (event) {
    if (event.target.tagName.toLowerCase() === "textarea") {
      event.target.style.height = "auto"; // Reset height
      event.target.style.height = event.target.scrollHeight + "px"; // Set new height
    }
  });