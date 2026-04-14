function sendMsg() {
  alert("Message sent! (Demo only)");
}

function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}

function openLink(link) {
    window.open(link, "_blank");
}