// --- Scroll helpers ---

function scroll_up() {
  window.scrollBy(0, -20);
}

function scroll_down() {
  window.scrollBy(0, 20);
}

// --- Prompt input state ---

let promptBuffer = "";
const promptInput = document.getElementById("promptInput");
const mainContainer = document.getElementById("mainContainer");
const helpContainer = document.getElementById("helpContainer");

function isPromptFocused() {
  return document.activeElement === document.body ||
    document.activeElement === document.documentElement;
}

function updatePrompt() {
  promptInput.textContent = promptBuffer;
}

function executeCommand(cmd) {
  const trimmed = cmd.trim().toLowerCase();
  switch (trimmed) {
    case "help":
      mainContainer.style.display = "none";
      helpContainer.style.display = "block";
      break;
    case "q":
    case "quit":
    case "exit":
      mainContainer.style.display = "";
      helpContainer.style.display = "none";
      break;
    case "fastfetch":
    case "clear":
      window.location.reload();
      break;
    case "github":
      window.location.href = "https://github.com/laxita";
      break;
    case "blog":
      window.location.href = "https://blog.laxita.dev";
      break;
    default:
      break;
  }
}

// --- Vim keybindings ---

function is_number(key) {
  return !isNaN(parseInt(key)) && isFinite(key);
}

let str_num = "";
let was_g_last = false;

document.addEventListener("keydown", function (e) {
  if (e.ctrlKey || e.altKey || e.metaKey) return;

  const key = e.key;

  // Enter executes the prompt buffer as a command
  if (key === "Enter") {
    e.preventDefault();
    if (promptBuffer.length > 0) {
      executeCommand(promptBuffer);
      promptBuffer = "";
      updatePrompt();
    }
    return;
  }

  // Backspace removes last char from prompt buffer
  if (key === "Backspace") {
    if (promptBuffer.length > 0) {
      e.preventDefault();
      promptBuffer = promptBuffer.slice(0, -1);
      updatePrompt();
      return;
    }
    str_num = str_num.slice(0, -1);
    return;
  }

  // Escape clears the prompt buffer
  if (key === "Escape") {
    promptBuffer = "";
    updatePrompt();
    str_num = "";
    was_g_last = false;
    return;
  }

  // If the user is typing a multi-char string in the prompt, accumulate it
  if (key.length === 1 && !is_number(key)) {
    // Check if it's a single vim key with no prompt buffer
    if (promptBuffer.length === 0) {
      let handled = handleVimKey(key, e);
      if (!handled) {
        promptBuffer += key;
        updatePrompt();
      }
    } else {
      promptBuffer += key;
      updatePrompt();
    }
    return;
  }

  // Number keys: vim repeat count (only when prompt is empty)
  if (is_number(key) && promptBuffer.length === 0) {
    str_num += key;
    return;
  }

  if (key.length === 1) {
    promptBuffer += key;
    updatePrompt();
  }
});

function handleVimKey(key, e) {
  let repeat = 1;
  if (str_num !== "") {
    repeat = Number(str_num);
  }

  if (key === "g") {
    if (was_g_last) {
      document.documentElement.scrollTop = 0;
      str_num = "";
      was_g_last = false;
      return true;
    } else {
      was_g_last = true;
      return true;
    }
  } else {
    was_g_last = false;
  }

  if (key === "G") {
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
    str_num = "";
    return true;
  }

  switch (key) {
    case "h":
      mainContainer.style.display = "none";
      helpContainer.style.display = "block";
      str_num = "";
      return true;
    case "q":
      mainContainer.style.display = "";
      helpContainer.style.display = "none";
      str_num = "";
      return true;
    case "j":
      e.preventDefault();
      for (let i = 0; i < repeat; i++) scroll_down();
      str_num = "";
      return true;
    case "k":
      e.preventDefault();
      for (let i = 0; i < repeat; i++) scroll_up();
      str_num = "";
      return true;
    default:
      str_num = "";
      return false;
  }
}
