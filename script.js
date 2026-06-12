// =========================================================================
// Virtual filesystem
//
// Edit the content below to add your real projects, achievements, and
// certificates. Files are { type: "file", content: "..." } — content may
// contain HTML (e.g. <a href="...">links</a>). Directories are
// { type: "dir", children: { ... } }.
// =========================================================================

const FS_ROOT = {
  type: "dir",
  children: {
    "projects": {
      type: "dir",
      children: {
        "README.txt": {
          type: "file",
          content:
            "Things I've built. cat a file to learn more.\n" +
            "(placeholder — real projects coming soon)",
        },
        "project-one.txt": {
          type: "file",
          content:
            "project-one\n" +
            "-----------\n" +
            "A placeholder project. Replace me with something real!\n" +
            'repo: <a href="#">github.com/laxita/project-one</a>',
        },
        "project-two.txt": {
          type: "file",
          content:
            "project-two\n" +
            "-----------\n" +
            "Another placeholder project.\n" +
            'repo: <a href="#">github.com/laxita/project-two</a>',
        },
      },
    },
    "achievements": {
      type: "dir",
      children: {
        "README.txt": {
          type: "file",
          content: "Milestones and wins. (placeholder — fill me in)",
        },
        "hackathon.txt": {
          type: "file",
          content: "Won a hackathon (placeholder — replace with the real story).",
        },
      },
    },
    "certificates": {
      type: "dir",
      children: {
        "README.txt": {
          type: "file",
          content: "Certificates and credentials. (placeholder — fill me in)",
        },
        "certificate-one.txt": {
          type: "file",
          content:
            "Certificate One — Issuing Org, 2026 (placeholder)\n" +
            'verify: <a href="#">link</a>',
        },
      },
    },
    "about.txt": {
      type: "file",
      content:
        "hi, i'm laxita.\n" +
        "21. debian. neovim. i3. building things on the internet.",
    },
    "contact.txt": {
      type: "file",
      content:
        'email:    <a href="#">hello@laxita.dev</a>\n' +
        'github:   <a href="#">github.com/laxita</a>\n' +
        'x:        <a href="#">x.com/laxita</a>\n' +
        'linkedin: <a href="#">linkedin.com/in/laxita</a>\n' +
        'discord:  <a href="#">laxita</a>\n' +
        'mastodon: <a href="#">@laxita</a>\n' +
        'bsky:     <a href="#">@laxita.dev</a>',
    },
    ".acorns": {
      type: "file",
      acornId: "stash",
      content:
        "well well. you found the stash.\n" +
        "\n" +
        "a certain squirrel has hidden 10 acorns around this terminal.\n" +
        "this one counts. the others are buried where curious paws dig.\n" +
        "\n" +
        "type 'acorns' anytime to count your haul.",
    },
    ".secrets": {
      type: "file",
      content:
        "every squirrel knows the answer:\n" +
        "\n" +
        "  when winter comes and treasure calls,\n" +
        "  what do i do with what i hold?\n" +
        "  three letters, done with both my paws —\n" +
        "  type it below, and find the gold.",
    },
    ".plan": {
      type: "file",
      content:
        "- bury acorns\n" +
        "- forget where\n" +
        "- panic in winter\n" +
        "- accidentally plant a forest\n" +
        "- ship it",
    },
  },
};

// EDIT ME: your real birthdate (used by 'uptime' and the birthday greeting)
const BIRTHDATE = new Date("2005-09-21T00:00:00");

// =========================================================================
// Terminal state
// =========================================================================

const historyEl = document.getElementById("history");
const inputLine = document.getElementById("inputLine");
const promptPathEl = document.getElementById("promptPath");
const promptInputEl = document.getElementById("promptInput");
const hiddenInput = document.getElementById("hiddenInput");
const fastfetchTemplate = document.getElementById("fastfetchTemplate");

let cwd = []; // path segments relative to ~, [] means home
let cmdHistory = [];
let historyIndex = -1;

function cwdString() {
  return "~" + (cwd.length ? "/" + cwd.join("/") : "");
}

// =========================================================================
// Path resolution
// =========================================================================

function resolvePath(pathStr) {
  // Returns { segments, node } or null if the path doesn't exist.
  let segments;
  if (!pathStr || pathStr === "~") {
    segments = [];
  } else if (pathStr.startsWith("~/")) {
    segments = [];
    pathStr = pathStr.slice(2);
  } else if (pathStr.startsWith("/")) {
    segments = [];
    pathStr = pathStr.slice(1);
  } else {
    segments = cwd.slice();
  }

  if (pathStr && pathStr !== "~") {
    for (const part of pathStr.split("/")) {
      if (part === "" || part === ".") continue;
      if (part === "..") {
        segments.pop();
      } else {
        segments.push(part);
      }
    }
  }

  let node = FS_ROOT;
  for (const seg of segments) {
    if (node.type !== "dir" || !node.children[seg]) return null;
    node = node.children[seg];
  }
  return { segments, node };
}

// =========================================================================
// Output helpers
// =========================================================================

function echoPromptLine(cmd) {
  const line = document.createElement("div");
  line.className = "prompt-line entry";
  line.innerHTML =
    '<span class="prompt-user">laxita@debian</span>' +
    '<span class="prompt-separator">:</span>' +
    '<span class="prompt-path"></span>' +
    '<span class="prompt-dollar">$ </span>' +
    '<span class="prompt-cmd"></span>';
  line.querySelector(".prompt-path").textContent = cwdString();
  line.querySelector(".prompt-cmd").textContent = cmd;
  historyEl.appendChild(line);
}

function printHTML(html) {
  const out = document.createElement("div");
  out.className = "output";
  out.innerHTML = html;
  historyEl.appendChild(out);
}

function printText(text) {
  const out = document.createElement("div");
  out.className = "output";
  out.textContent = text;
  historyEl.appendChild(out);
}

// Like printText but never wraps lines (for ASCII art that must keep shape).
function printPre(text) {
  const out = document.createElement("div");
  out.className = "output pre";
  out.textContent = text;
  historyEl.appendChild(out);
  return out;
}

// A non-wrapping block that animations can redraw each frame.
function createAnimBlock() {
  const el = document.createElement("div");
  el.className = "output pre";
  el.style.overflow = "hidden";
  historyEl.appendChild(el);
  return el;
}

function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function scrollToBottom() {
  inputLine.scrollIntoView({ block: "end" });
}

// =========================================================================
// Sound effects (synthesized with Web Audio, no samples needed)
// =========================================================================

let soundEnabled = localStorage.getItem("sound") === "on";
let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}

// Short burst of band-passed noise ≈ mechanical key click.
// Enter gets a deeper, slightly louder "thock".
function playClick(isEnter) {
  if (!soundEnabled) return;
  const ctx = getAudioCtx();
  const dur = 0.035;
  const buffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * dur), ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 2);
  }
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = (isEnter ? 900 : 1700) + Math.random() * 700;
  filter.Q.value = 1.5;
  const gain = ctx.createGain();
  gain.gain.value = isEnter ? 0.3 : 0.18;
  src.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  src.start();
}

// Classic terminal bell: short decaying sine beep.
function playBell() {
  if (!soundEnabled) return;
  const ctx = getAudioCtx();
  const t = ctx.currentTime;
  const osc = ctx.createOscillator();
  osc.type = "sine";
  osc.frequency.value = 830;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.12, t);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(t);
  osc.stop(t + 0.2);
}

// Errors print like normal text but also ring the bell.
function printError(text) {
  printText(text);
  playBell();
}

// Two quick ascending blips — the "found an acorn" chirp.
function playChirp() {
  if (!soundEnabled) return;
  const ctx = getAudioCtx();
  [0, 0.09].forEach(function (offset, i) {
    const t = ctx.currentTime + offset;
    const osc = ctx.createOscillator();
    osc.type = "triangle";
    osc.frequency.value = i === 0 ? 1100 : 1500;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.12, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.08);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(t);
    osc.stop(t + 0.09);
  });
}

// =========================================================================
// Acorns — a squirrel hid 10 of them around this terminal.
// Found acorns persist in localStorage. 'acorns' shows the stash + hints.
// =========================================================================

const ACORN_HINTS = {
  stash: "some files are shy. ask ls to show you everything.",
  sudo: "power corrupts. try to take some anyway.",
  exit: "try to leave.",
  vim: "open the editor nobody can quit. then quit it.",
  sl: "the trains here run on typos.",
  urandom: "cat has nine lives. spend one reading from the void.",
  pet: "the squirrel looks soft. pet it.",
  whoami: "ask who you are. then ask again.",
  konami: "\u2191 \u2191 \u2193 \u2193 ... you know the rest.",
  riddle: "solve what the .secrets ask.",
};
const TOTAL_ACORNS = Object.keys(ACORN_HINTS).length;

let acornsFound = JSON.parse(localStorage.getItem("acorns") || "[]").filter(
  (id) => id in ACORN_HINTS
);

function awardAcorn(id) {
  if (acornsFound.includes(id)) return;
  acornsFound.push(id);
  localStorage.setItem("acorns", JSON.stringify(acornsFound));
  playChirp();
  printHTML(
    '<span class="acorn">(@) you found an acorn! (' +
      acornsFound.length + "/" + TOTAL_ACORNS + ")</span> " +
      "<span class=\"muted\">— type 'acorns' to see your stash</span>"
  );
  if (acornsFound.length === TOTAL_ACORNS) {
    printGoldenAcorn();
  }
}

function printGoldenAcorn() {
  printHTML(
    [
      '<span class="dir-name">      _._',
      "    .'   '.",
      "   (_______)",
      "    )     (",
      "    |     |",
      "     \\   /",
      "      `-'</span>",
      "",
      '<span class="dir-name">the golden acorn is yours. all ' + TOTAL_ACORNS + " found.</span>",
      '<span class="muted">the squirrel hereby declares you an honorary hoarder.</span>',
    ].join("\n")
  );
}

// =========================================================================
// Commands
// =========================================================================

const FORTUNES = [
  "Talk is cheap. Show me the code.  — Linus Torvalds",
  "There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.",
  "It works on my machine.",
  "A squirrel's roadmap: 1. bury acorn  2. forget location  3. accidentally plant forest",
  "sudo make me a sandwich.",
  "Real programmers count from 0.",
  "Weeks of coding can save you hours of planning.",
  "rm -rf / is the fastest way to learn about backups.",
  "First, solve the problem. Then, write the code.  — John Johnson",
  "Given enough eyeballs, all bugs are shallow.  — Linus's Law",
];

let whoamiCount = 0;

const COMMANDS = {
  help() {
    printHTML(
      [
        "available commands:",
        "",
        '  <span class="cmd-name">help</span>           show this help',
        '  <span class="cmd-name">whoami</span>         who am i?',
        '  <span class="cmd-name">ls</span> [dir]       list directory contents',
        '  <span class="cmd-name">cd</span> &lt;dir&gt;       change directory',
        '  <span class="cmd-name">pwd</span>            print working directory',
        '  <span class="cmd-name">cat</span> &lt;file&gt;     print file contents',
        '  <span class="cmd-name">tree</span>           show the directory tree',
        '  <span class="cmd-name">fastfetch</span>      show system info',
        '  <span class="cmd-name">echo</span> &lt;text&gt;    print text',
        '  <span class="cmd-name">history</span>        show command history',
        '  <span class="cmd-name">date</span>           print the current date',
        '  <span class="cmd-name">uname</span> [-a]     print system information',
        '  <span class="cmd-name">clear</span>          clear the terminal',
        '  <span class="cmd-name">sound</span> on|off   keyboard clicks + terminal bell',
        "",
        '<span class="muted">tip: tab completes commands and paths, ↑/↓ browse history</span>',
        '<span class="muted">psst — a squirrel hid ' + TOTAL_ACORNS +
          " acorns around this place. type 'acorns' to start foraging.</span>",
      ].join("\n")
    );
  },

  whoami() {
    whoamiCount++;
    if (whoamiCount === 1) {
      printText("laxita");
    } else if (whoamiCount === 2) {
      printText("still laxita. but you're starting to ask the real questions.");
      awardAcorn("whoami");
    } else {
      printText("laxita. asking " + whoamiCount + " times won't change it.");
    }
  },

  pwd() {
    printText("/home/laxita" + (cwd.length ? "/" + cwd.join("/") : ""));
  },

  ls(args) {
    const flags = args.filter((a) => a.startsWith("-")).join("");
    const showHidden = flags.includes("a");
    const paths = args.filter((a) => !a.startsWith("-"));
    const target = paths[0] || ".";
    const resolved = resolvePath(target);
    if (!resolved) {
      printError("ls: cannot access '" + target + "': No such file or directory");
      return;
    }
    if (resolved.node.type === "file") {
      printText(target);
      return;
    }
    const names = Object.keys(resolved.node.children).filter(
      (n) => showHidden || !n.startsWith(".")
    );
    if (names.length === 0) {
      return;
    }
    const parts = names.map((name) => {
      const child = resolved.node.children[name];
      return child.type === "dir"
        ? '<span class="dir-name">' + escapeHTML(name) + "/</span>"
        : escapeHTML(name);
    });
    printHTML(parts.join("  "));
  },

  cd(args) {
    const target = args[0] || "~";
    const resolved = resolvePath(target);
    if (!resolved) {
      printError("cd: no such file or directory: " + target);
      return;
    }
    if (resolved.node.type !== "dir") {
      printError("cd: not a directory: " + target);
      return;
    }
    cwd = resolved.segments;
  },

  cat(args) {
    if (args.length === 0) {
      printError("cat: missing operand");
      return;
    }
    for (const target of args) {
      if (target === "/dev/urandom" || target === "/dev/random") {
        const chars =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*+=?@~";
        const lines = [];
        for (let i = 0; i < 7; i++) {
          let line = "";
          for (let j = 0; j < 56; j++) {
            line += chars[Math.floor(Math.random() * chars.length)];
          }
          lines.push(line);
        }
        lines.push("^C");
        printText(lines.join("\n"));
        printHTML('<span class="muted">something solid tumbles out of the noise...</span>');
        awardAcorn("urandom");
        continue;
      }
      const resolved = resolvePath(target);
      if (!resolved) {
        printError("cat: " + target + ": No such file or directory");
      } else if (resolved.node.type === "dir") {
        printError("cat: " + target + ": Is a directory");
      } else {
        printHTML(resolved.node.content);
        if (resolved.node.acornId) {
          awardAcorn(resolved.node.acornId);
        }
      }
    }
  },

  tree() {
    const lines = ["~"];
    function walk(node, prefix) {
      const names = Object.keys(node.children).filter((n) => !n.startsWith("."));
      names.forEach((name, i) => {
        const child = node.children[name];
        const last = i === names.length - 1;
        const branch = last ? "└── " : "├── ";
        const display =
          child.type === "dir"
            ? '<span class="dir-name">' + escapeHTML(name) + "</span>"
            : escapeHTML(name);
        lines.push(prefix + branch + display);
        if (child.type === "dir") {
          walk(child, prefix + (last ? "    " : "│   "));
        }
      });
    }
    walk(FS_ROOT, "");
    printHTML(lines.join("\n"));
  },

  fastfetch() {
    historyEl.appendChild(fastfetchTemplate.content.cloneNode(true));
  },

  echo(args) {
    printText(args.join(" "));
  },

  history() {
    printText(
      cmdHistory.map((c, i) => String(i + 1).padStart(5) + "  " + c).join("\n")
    );
  },

  date() {
    printText(new Date().toString());
  },

  uname(args) {
    if (args[0] === "-a") {
      printText("Linux laxita.dev 6.12.88+deb13-amd64 x86_64 GNU/Linux");
    } else {
      printText("Linux");
    }
  },

  clear() {
    historyEl.innerHTML = "";
  },

  sound(args) {
    if (args[0] === "on") {
      soundEnabled = true;
      localStorage.setItem("sound", "on");
      getAudioCtx(); // create the audio context while we have a user gesture
      playClick(true);
      printText("sound: on (keyboard clicks + terminal bell)");
    } else if (args[0] === "off") {
      soundEnabled = false;
      localStorage.setItem("sound", "off");
      printText("sound: off");
    } else {
      printText("sound is " + (soundEnabled ? "on" : "off") + " — usage: sound on|off");
    }
  },

  sudo() {
    printText("laxita is not in the sudoers file. This incident will be reported.");
    awardAcorn("sudo");
  },

  rm() {
    printText("rm: cannot remove: Read-only file system (nice try)");
  },

  exit() {
    printText("there is no escape.");
    awardAcorn("exit");
  },

  acorns(args) {
    if (args[0] === "reset") {
      acornsFound = [];
      localStorage.removeItem("acorns");
      printText("stash emptied. winter will be hard.");
      return;
    }
    const ids = Object.keys(ACORN_HINTS);
    const slots = ids
      .map((id) => (acornsFound.includes(id) ? "(@)" : "( )"))
      .join(" ");
    printHTML(
      '<span class="acorn">' + slots + "</span>  " +
        acornsFound.length + "/" + TOTAL_ACORNS + " acorns"
    );
    const missing = ids.filter((id) => !acornsFound.includes(id));
    if (missing.length === 0) {
      printGoldenAcorn();
    } else {
      printHTML(
        '<span class="muted">' +
          ["where to dig:"]
            .concat(missing.map((id) => "  - " + ACORN_HINTS[id]))
            .map(escapeHTML)
            .join("\n") +
          "</span>"
      );
    }
  },

  dig() {
    printText("*scratch scratch scratch*");
    printHTML(
      "you dug up:\n" +
        "  - one (1) slightly chewed acorn\n" +
        "  - a note: \"you explore the way i do. i like that.\n" +
        '     say hi sometime — <a href="#">hello@laxita.dev</a>"'
    );
    awardAcorn("riddle");
  },

  vim() {
    vimMode = true;
    printPre(
      [
        "~",
        "~",
        "~                VIM - Vi IMproved",
        "~                  version 9.1",
        "~             by Bram Moolenaar et al.",
        "~    Vim is open source and freely distributable",
        "~",
        "~           type  :q<Enter>   to exit",
        "~     (we both know it won't be that easy)",
        "~",
        "~",
      ].join("\n")
    );
  },

  ping(args) {
    if (!args[0]) {
      printError("usage: ping <destination>");
      return;
    }
    printText(
      "PING " + args[0] + " 56(84) bytes of data.\n" +
        "64 bytes from " + args[0] + ": icmp_seq=1 ttl=64 time=0.042 ms\n" +
        "\npong."
    );
  },

  cowsay(args) {
    const msg = args.join(" ") || "moo";
    const lines = [];
    let line = "";
    for (const word of msg.split(" ")) {
      if (line && (line + " " + word).length > 38) {
        lines.push(line);
        line = word;
      } else {
        line = line ? line + " " + word : word;
      }
    }
    lines.push(line);
    const w = Math.max(...lines.map((l) => l.length));
    const out = [" " + "_".repeat(w + 2)];
    if (lines.length === 1) {
      out.push("< " + lines[0] + " >");
    } else {
      lines.forEach((l, i) => {
        const ends =
          i === 0 ? ["/ ", " \\"] :
          i === lines.length - 1 ? ["\\ ", " /"] : ["| ", " |"];
        out.push(ends[0] + l.padEnd(w) + ends[1]);
      });
    }
    out.push(
      " " + "-".repeat(w + 2),
      "        \\   ^__^",
      "         \\  (oo)\\_______",
      "            (__)\\       )\\/\\",
      "                ||----w |",
      "                ||     ||"
    );
    printPre(out.join("\n"));
  },

  fortune() {
    printText(FORTUNES[Math.floor(Math.random() * FORTUNES.length)]);
  },

  sl() {
    const TRAIN = [
      "      ====        ________                ___________",
      "  _D _|  |_______/        \\__I_I_____===__|_________|",
      "   |(_)---  |   H\\________/ |   |        =|___ ___|  ",
      "   /     |  |   H  |  |     |   |         ||_| |_||  ",
      "  |      |  |   H  |__--------------------| [___] |  ",
      "  | ________|___H__/__|_____/[][]~\\_______|       |  ",
      "  |/ |   |-----------I_____I [][] []  D   |=======|__",
      "__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__",
      " |/-=|___|=    ||    ||    ||    |_____/~\\___/       ",
      "  \\_/      \\O=====O=====O=====O_/      \\_/           ",
    ];
    const maxLen = Math.max(...TRAIN.map((l) => l.length));
    const block = createAnimBlock();
    let x = 78;
    scrollToBottom();
    const timer = setInterval(function () {
      block.textContent = TRAIN.map(function (lineStr) {
        const padded = lineStr.padEnd(maxLen);
        return x >= 0 ? " ".repeat(x) + padded : padded.slice(-x);
      }).join("\n");
      x -= 2;
      if (x <= -maxLen) {
        clearInterval(timer);
        block.remove();
        printHTML("<span class=\"muted\">you meant to type 'ls', didn't you.</span>");
        awardAcorn("sl");
        scrollToBottom();
      }
    }, 50);
  },

  cmatrix() {
    const colsN = 64;
    const rowsN = 14;
    const TRAIL = 6;
    const charset = "abcdefghijklmnopqrstuvwxyz0123456789@#$%&*+=<>:~";
    const grid = Array.from({ length: rowsN }, () => Array(colsN).fill(" "));
    const drops = Array.from({ length: colsN }, () =>
      -Math.floor(Math.random() * 20)
    );
    const block = createAnimBlock();
    block.style.color = "var(--accent-bright)";
    scrollToBottom();
    let frame = 0;
    const timer = setInterval(function () {
      for (let c = 0; c < colsN; c++) {
        const head = drops[c];
        if (head >= 0 && head < rowsN) {
          grid[head][c] = charset[Math.floor(Math.random() * charset.length)];
        }
        const tail = head - TRAIL;
        if (tail >= 0 && tail < rowsN) grid[tail][c] = " ";
        drops[c]++;
        if (tail >= rowsN) drops[c] = -Math.floor(Math.random() * 15);
      }
      block.textContent = grid.map((r) => r.join("")).join("\n");
      frame++;
      if (frame >= 70) {
        clearInterval(timer);
        printHTML('<span class="muted">wake up, neo. the amber matrix has you.</span>');
        scrollToBottom();
      }
    }, 55);
  },

  telnet(args) {
    if (args[0] === "towel.blinkenlights.nl") {
      printText(
        "Trying towel.blinkenlights.nl...\n" +
          "Connected.\n\n" +
          "        A long time ago in a galaxy far,\n" +
          "             far away...\n\n" +
          "(the towel server signed off in 2023.\n" +
          " pour one out for the greatest easter egg ever telnet'd.)"
      );
    } else {
      printError(
        "telnet: could not resolve " + (args[0] || "host") +
          ": Name or service not known"
      );
    }
  },

  coffee() {
    printText(
      "HTTP/1.1 418 I'm a teapot\n\n" +
        "the server refuses to brew coffee because it is,\n" +
        "permanently, a teapot. (RFC 2324)"
    );
  },

  uptime() {
    let s = Math.floor((Date.now() - BIRTHDATE.getTime()) / 1000);
    const years = Math.floor(s / 31557600);
    s -= years * 31557600;
    const days = Math.floor(s / 86400);
    s -= days * 86400;
    const pad = (n) => String(n).padStart(2, "0");
    const clock =
      Math.floor(s / 3600) + ":" + pad(Math.floor((s % 3600) / 60)) + ":" + pad(s % 60);
    printText(
      " " + new Date().toTimeString().slice(0, 8) +
        "  up " + years + " years, " + days + " days, " + clock +
        ",  1 user,  load average: 0.21, 0.21, 0.21"
    );
  },

  github() {
    window.open("https://github.com/laxita", "_blank");
  },

  blog() {
    window.open("https://blog.laxita.dev", "_blank");
  },
};

COMMANDS.neofetch = COMMANDS.fastfetch;
COMMANDS.man = COMMANDS.help;
COMMANDS.vi = COMMANDS.vim;
COMMANDS.nvim = COMMANDS.vim;

// Commands that exist but never show up in tab completion — finding them
// is the point.
const HIDDEN_COMMANDS = new Set([
  "sudo", "rm", "exit", "vim", "vi", "nvim", "sl", "cowsay", "fortune",
  "cmatrix", "telnet", "ping", "coffee", "uptime", "dig", "neofetch", "man",
]);

// --- vim trap: once you're in, only :q! (and friends) gets you out ---

let vimMode = false;

function handleVimInput(cmd) {
  if (cmd === "") return;
  if (/^(:q!?|:wq!?|:x!?|ZZ)$/.test(cmd)) {
    vimMode = false;
    printHTML('<span class="muted">you escaped vim. tell no one how easy it was.</span>');
    awardAcorn("vim");
  } else {
    printError("E492: Not an editor command: " + cmd);
    printHTML('<span class="muted">(hint: :q! and slam Enter)</span>');
  }
}

function executeCommand(raw) {
  const cmd = raw.trim();
  echoPromptLine(cmd);
  if (vimMode) {
    handleVimInput(cmd);
    historyIndex = -1;
    scrollToBottom();
    return;
  }
  if (cmd.length > 0) {
    cmdHistory.push(cmd);
    const tokens = cmd.split(/\s+/);
    const name = tokens[0].toLowerCase();
    const args = tokens.slice(1);
    if (COMMANDS[name]) {
      COMMANDS[name](args);
    } else {
      printError("zsh: command not found: " + name + " (try 'help')");
    }
  }
  historyIndex = -1;
  promptPathEl.textContent = cwdString();
  scrollToBottom();
}

// =========================================================================
// Tab completion
// =========================================================================

function complete(value) {
  const tokens = value.split(/\s+/);
  const partial = tokens[tokens.length - 1];

  let candidates;
  if (tokens.length === 1) {
    candidates = Object.keys(COMMANDS).filter(
      (c) => c.startsWith(partial) && !HIDDEN_COMMANDS.has(c)
    );
  } else {
    // Complete a path: split into directory part and name part
    const slash = partial.lastIndexOf("/");
    const dirPart = slash >= 0 ? partial.slice(0, slash + 1) : "";
    const namePart = slash >= 0 ? partial.slice(slash + 1) : partial;
    const resolved = resolvePath(dirPart || ".");
    if (!resolved || resolved.node.type !== "dir") return value;
    candidates = Object.keys(resolved.node.children)
      .filter((n) => n.startsWith(namePart))
      .filter((n) => !n.startsWith(".") || namePart.startsWith("."))
      .map((n) =>
        dirPart + n + (resolved.node.children[n].type === "dir" ? "/" : "")
      );
  }

  if (candidates.length === 1) {
    tokens[tokens.length - 1] = candidates[0];
    return tokens.join(" ") + (candidates[0].endsWith("/") ? "" : " ");
  }
  if (candidates.length > 1) {
    echoPromptLine(value);
    printText(candidates.join("  "));
    scrollToBottom();
  }
  return value;
}

// =========================================================================
// Input handling
// =========================================================================

function renderInput() {
  promptInputEl.textContent = hiddenInput.value;
}

hiddenInput.addEventListener("input", function () {
  renderInput();
  playClick(false);
});

// --- Konami code: ↑ ↑ ↓ ↓ ← → ← → b a ---

const KONAMI_SEQ = [
  "arrowup", "arrowup", "arrowdown", "arrowdown",
  "arrowleft", "arrowright", "arrowleft", "arrowright", "b", "a",
];
let konamiPos = 0;

function trackKonami(key) {
  const k = key.toLowerCase();
  if (k === KONAMI_SEQ[konamiPos]) {
    konamiPos++;
    if (konamiPos === KONAMI_SEQ.length) {
      konamiPos = 0;
      hiddenInput.value = "";
      renderInput();
      printHTML('<span class="dir-name">cheat code accepted. +30 lives.</span>');
      awardAcorn("konami");
      scrollToBottom();
    }
  } else {
    konamiPos = k === KONAMI_SEQ[0] ? 1 : 0;
  }
}

hiddenInput.addEventListener("keydown", function (e) {
  trackKonami(e.key);
  if (e.key === "Enter") {
    e.preventDefault();
    playClick(true);
    executeCommand(hiddenInput.value);
    hiddenInput.value = "";
    renderInput();
  } else if (e.key === "Tab") {
    e.preventDefault();
    hiddenInput.value = complete(hiddenInput.value);
    renderInput();
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    if (cmdHistory.length > 0) {
      if (historyIndex === -1) historyIndex = cmdHistory.length;
      if (historyIndex > 0) historyIndex--;
      hiddenInput.value = cmdHistory[historyIndex];
      renderInput();
    }
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    if (historyIndex !== -1) {
      historyIndex++;
      if (historyIndex >= cmdHistory.length) {
        historyIndex = -1;
        hiddenInput.value = "";
      } else {
        hiddenInput.value = cmdHistory[historyIndex];
      }
      renderInput();
    }
  } else if (e.key === "c" && e.ctrlKey) {
    if (window.getSelection().toString() === "") {
      e.preventDefault();
      echoPromptLine(hiddenInput.value + "^C");
      if (vimMode) {
        printText("Type  :q!  and press <Enter> to abandon all changes and exit Vim");
      }
      hiddenInput.value = "";
      renderInput();
      scrollToBottom();
    }
  } else if (e.key === "l" && e.ctrlKey) {
    e.preventDefault();
    COMMANDS.clear();
  } else if (e.key === "Escape") {
    hiddenInput.value = "";
    renderInput();
  }
});

// Keep the hidden input focused so typing always lands in the prompt,
// but don't steal focus while the user is selecting text.
function refocus() {
  if (window.getSelection().toString() === "") {
    hiddenInput.focus({ preventScroll: true });
  }
}

document.addEventListener("click", refocus);
window.addEventListener("load", refocus);
hiddenInput.addEventListener("blur", function () {
  setTimeout(refocus, 0);
});

// Petting the squirrel (clicking the ASCII art) — chirp only, no log spam.
historyEl.addEventListener("click", function (e) {
  if (e.target.closest(".ascii-art")) {
    playChirp();
    awardAcorn("pet");
    scrollToBottom();
  }
});

// Lock terminal to the fastfetch block width so prompts stay put after clear.
let terminalWidth = null;
let lockAttempts = 0;

function lockTerminalWidth() {
  const terminal = document.getElementById("terminal");
  if (!terminal) return true;

  if (window.matchMedia("(max-width: 768px)").matches) {
    terminal.style.width = "";
    return true;
  }

  if (terminalWidth === null) {
    const fastfetch = document.querySelector(".fastfetch");
    if (!fastfetch) return false;
    const measured = Math.max(fastfetch.scrollWidth, fastfetch.offsetWidth);
    if (measured < 100) return false;
    const style = getComputedStyle(terminal);
    terminalWidth = Math.ceil(
      measured +
        parseFloat(style.paddingLeft) +
        parseFloat(style.paddingRight)
    );
  }

  terminal.style.width = terminalWidth + "px";
  return true;
}

function ensureTerminalWidth() {
  if (!lockTerminalWidth() && lockAttempts++ < 120) {
    requestAnimationFrame(ensureTerminalWidth);
  }
}

window.addEventListener("resize", lockTerminalWidth);
window.addEventListener("load", ensureTerminalWidth);
document.fonts.ready.then(ensureTerminalWidth);

// =========================================================================
// Boot
// =========================================================================

echoPromptLine("fastfetch");
COMMANDS.fastfetch();
ensureTerminalWidth();
const today = new Date();
if (
  today.getMonth() === BIRTHDATE.getMonth() &&
  today.getDate() === BIRTHDATE.getDate()
) {
  printHTML(
    '<span class="dir-name">*** the squirrel says it\'s laxita\'s birthday today. ' +
      "be nice or it throws acorns. ***</span>"
  );
}
printHTML(
  '<span class="muted">type \'help\' for available commands. ' +
  "try 'ls', then 'cd projects'.</span>"
);
hiddenInput.focus({ preventScroll: true });
