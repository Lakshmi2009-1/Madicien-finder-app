
    const messages = [
      "heyy!",
      "I'm Lakshmi-?💎",
      "Built Different.🤘"
    ];

    let index = 0;
    const messageBox = document.getElementById("messageBox");
    const projects = document.getElementById("projects");

    const interval = setInterval(() => {
      messageBox.classList.remove("fade-in");
      messageBox.classList.add("fade-out");

      setTimeout(() => {
        index++;
        if (index < messages.length) {
          messageBox.textContent = messages[index];
          messageBox.classList.remove("fade-out");
          messageBox.classList.add("fade-in");
        } else {
          // Hide message and show projects
          document.getElementById("messageBox").style.display = "none";
          projects.style.display = "flex";
          clearInterval(interval);
        }
      }, 1000);
    }, 2000); // little delay for smoother feel

