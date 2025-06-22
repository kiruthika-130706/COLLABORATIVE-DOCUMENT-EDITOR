function execCmd(command) {
  if (command === "createLink") {
    const url = prompt("Enter the URL:");
    if (url) {
      document.execCommand(command, false, url);
    }
  } else {
    document.execCommand(command, false, null);
  }
}

function saveDoc() {
  const content = document.getElementById("editor").innerHTML;
  localStorage.setItem("docContent", content);
  alert("✅ Document saved!");
}

function loadDoc() {
  const content = localStorage.getItem("docContent");
  if (content) {
    document.getElementById("editor").innerHTML = content;
  } else {
    alert("⚠️ No saved document found.");
  }
}

function clearDoc() {
  if (confirm("Clear the editor?")) {
    document.getElementById("editor").innerHTML = "";
  }
}

window.onload = () => {
  const content = localStorage.getItem("docContent");
  if (content) {
    document.getElementById("editor").innerHTML = content;
  }
};
