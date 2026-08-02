// =========================================================================
// Virtual filesystem
//
// Edit the content below to add your real projects, achievements, and
// certificates. Files are { type: "file", content: "..." } — content may
// contain HTML (e.g. <a href="...">links</a>). Project files under
// projects/ may use { type: "file", project: { name, technologies,
// description, liveAt? } } to render a bordered table on cat. Experience files
// use { type: "file", experience: { name, role?, location?, dates?,
// technologies?, description? } } with purple-accent blocks on cat. Certificate
// files use { type: "file", cert: { title, issuer, date, desc, verify } }
// or cert: { entries: [...] } for multiple credentials in one file.
// Directories are { type: "dir", children: { ... } }.
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
            "cat individual files for details.\n" +
            "ls for the full list — active builds + find more on my github",
        },
        "brain-tumor-mri.txt": {
          type: "file",
          project: {
            name: "Brain Tumor MRI",
            technologies:
              "Python, BRaTS Dataset, Segmentation and Morphological Algorithms",
            description:
              "Conducted a comprehensive ablation study using the BraTS dataset, showing that anisotropic diffusion filtering and top-hat correction can improve Dice similarity by up to 7%.\n\n" +
              "To measure the contribution of preprocessing and morphological steps to segmentation performance, anisotropic diffusion filtering and top-hat correction can increase Dice similarity by up to 7%, highlighting the importance of well-thought-out classical preprocessing in tumor segmentation.\n\n" +
              "The pipeline is especially curated for working with the Brain Tumor Segmentation Challenge Dataset (BraTS). Research paper on this work was presented at the IRTM Conference held at IIT Gandhinagar on 20th November 2025.",
            liveAt: {
              href: "https://drive.google.com/drive/folders/14D0MdPgdtskX--WHX4fQWanAk4actPdH?usp=drive_link",
              label: "drive folder",
            },
          },
        },
        "nextbite.txt": {
          type: "file",
          project: {
            name: "NextBite",
            technologies: "Next.js, MongoDB, Tailwind, Geolocation API",
            description:
              "Built a food redistribution platform aimed at reducing food waste and improving community sustainability.\n\n" +
              "Connects donors such as restaurants, households, and cafes with recipients including NGOs, shelters, and individuals.\n\n" +
              "Implements a zero-waste, zero-delivery model by scheduling urgency-based food pickups.",
            liveAt: {
              href: "https://next-bite-eta.vercel.app/",
              label: "next-bite-eta.vercel.app",
            },
          },
        },
        "dragonfruit.txt": {
          type: "file",
          project: {
            name: "Dragonfruit NL-to-SQL TUI IDE",
            technologies: "Python, Textual, PyPi, Rich",
            description:
              "A Natural Language to SQL IDE for the terminal.\n\n" +
              "A minimalist TUI that takes natural language (English) queries from the user and converts them into SQL queries which can be executed in place with robust IDE support.",
            liveAt: {
              href: "https://docs.google.com/document/d/1EY6khSM6qk2uXDqUK0U_7O6tlO2PfmyX/edit?usp=sharing",
              label: "view project report",
            },
          },
        },
        "pylearn.txt": {
          type: "file",
          project: {
            name: "PyLearn",
            technologies: "Python, Jupyter Notebook, GitHub, Git",
            description:
              "Authored a repository covering basic to advanced topics and concepts in Python.\n\n" +
              "Beginner-friendly usage with section-wise codes for topics like conditional statements, collection types, and more.\n\n" +
              "Also covered libraries like NumPy and Pandas.",
            liveAt: {
              href: "https://github.com/laxitajain/pyLearn",
              label: "github.com/laxitajain/pyLearn",
            },
          },
        },
      },
    },
    "achievements": {
      type: "dir",
      children: {
        "README.txt": {
          type: "file",
          content: "Scholarships, contests, open source, and academic wins.",
        },
        "talentsprint-we.txt": {
          type: "file",
          content:
            "TalentSprint WE Scholar, Supported by Google\n" +
            "Feb 2024 – March 2026\n" +
            "Selection rate: 0.01%\n" +
            "\n" +
            "Selected out of over 30,000 participants for a two-year program\n" +
            "after 5 intensive shortlisting rounds.\n" +
            "\n" +
            "Received full program scholarship by Google and an additional\n" +
            "Rs. 1,00,000.\n" +
            "\n" +
            "Attended a three-week bootcamp at IIIT-H, worked in a\n" +
            "corporate-like environment in teams with peers.\n" +
            "\n" +
            "Studied foundational ML concepts from one of the leading\n" +
            "instructors in India.",
        },
        "reliance-scholar.txt": {
          type: "file",
          content:
            "Reliance Foundation UG Scholar\n" +
            "Feb 2024 – Present\n" +
            "\n" +
            "Topped the nation-wide aptitude test.\n" +
            "\n" +
            "Selected for a four-year scholarship program for first-year\n" +
            "undergraduates, with an amount of Rs. 2,00,000.",
        },
        "open-source.txt": {
          type: "file",
          content:
            "Open Source\n" +
            "\n" +
            "Merged PRs across organizations like freeCodeCamp, MDN Web Docs,\n" +
            "and others.",
        },
        "university-rank.txt": {
          type: "file",
          content:
            "University Rank\n" +
            "\n" +
            "Appeared with Rank 1 in the Dean's list everytime it was issued!\n" +
            "\n" +
            "The only one in the university with a 4.00/4.00 GPA in the 3rd\n" +
            "semester, across all other branches as well.",
        },
        "miscellaneous.txt": {
          type: "file",
          content:
            "Miscellaneous\n" +
            "\n" +
            "CISCE Examinations (May 2021)\n" +
            "The first girl student in the school to secure Rank 1 in 10th\n" +
            "examinations. Achieved the highest percentage ever in the school\n" +
            "(99.0). Rank 1 in the Nashik Centre (Regional).\n" +
            "\n" +
            "Institute for Promotion of Mathematics (July 2013)\n" +
            "Certificate of Distinction in the All India Open Mathematics\n" +
            "Scholarship Examination.\n" +
            "\n" +
            "SIP Prodigy, ABACUS Brain Gym Contest (September 2011)\n" +
            "1st runner up in the Regional Abacus Prodigy Competition, Khandesh\n" +
            "region. A rigorous, high-pressure environment testing speed, mental\n" +
            "calculation skills, and logical thinking.",
        },
      },
    },
    "certificates": {
      type: "dir",
      children: {
        "README.txt": {
          type: "file",
          content:
            "NPTEL and Coursera credentials.\n" +
            "\n" +
            "Hint: use 'open <certificate>.cert' to view credentials.",
        },
        "iit-kgp-dbms.cert": {
          type: "file",
          cert: {
            title: "Database Management Systems",
            issuer: "IIT Kharagpur, NPTEL",
            date: "October 2025",
            desc:
              "Gold Medalist — Top 1% in the country. Solved all assignments (involving quizzes and programming questions) with exemplary grades and appeared among the top 1% of candidates in the country in the final proctored online assessment. Awarded with the Gold + Elite Certification.",
            verify: {
              href: "https://drive.google.com/file/d/1zBMzwyCeoV-ONvd-9iVI9JqA55qK-yvW/view?usp=sharing",
            },
          },
        },
        "cmi-daa.cert": {
          type: "file",
          cert: {
            title: "Design and Analysis of Algorithms",
            issuer: "Chennai Mathematical Institute, NPTEL",
            date: "March 2025",
            desc:
              "Silver — Top 5% in the country. Solved all assignments (involving quizzes and programming questions) with exemplary grades and appeared among the top 5% of candidates in the country in the final proctored online assessment. Awarded with the Elite + Silver Certification.",
            verify: {
              href: "https://drive.google.com/file/d/1WkSb6R-wHBHfDUYxqn2gOBoRX0Ip36Nc/view?usp=sharing",
            },
          },
        },
        "deeplearning.ai.cert": {
          type: "file",
          cert: {
            entries: [
              {
                title: "Neural Networks and Deep Learning",
                issuer: "DeepLearning.AI (Coursera)",
                date: "December 2024",
                desc:
                  "Grade: 96.12%. Completed a thorough course covering Artificial Neural Networks, backpropagation, and neural network architecture.",
                verify: {
                  href: "https://coursera.org/share/ad729bdf951fc3d1a94e15078b8201fc",
                },
              },
              {
                title: "Improving Deep Neural Networks",
                issuer: "DeepLearning.AI (Coursera)",
                date: "January 2025",
                desc:
                  "Grade: 95.19%. Hyperparameter tuning, mathematical optimization, and familiarity with TensorFlow.",
                verify: {
                  href: "https://coursera.org/share/7eb61df4fa9d056cfb3a608f34cdf5ad",
                },
              },
              {
                title: "Structuring Machine Learning Projects",
                issuer: "DeepLearning.AI (Coursera)",
                date: "January 2025",
                desc:
                  "Grade: 90.00%. Diagnosing errors in ML systems; prioritizing strategies for reducing errors; mismatched training/test sets; surpassing human-level performance; end-to-end learning, transfer learning, and multi-task learning.",
                verify: {
                  href: "https://coursera.org/share/8ee84f84d335c8d1f6dc37a78df4843a",
                },
              },
            ],
          },
        },
      },
    },
    "experience": {
      type: "dir",
      children: {
        "README.txt": {
          type: "file",
          content: "Internships and work experience. cat a file for details.",
        },
        "1xl-universe.txt": {
          type: "file",
          experience: {
            name: "1XL Universe",
            role: "Software Developer Intern",
            location: "Dubai, UAE (on-site)",
            dates: "May 2026 – July 2026",
            technologies:
              "Next.js, Supabase, AI integrations, Chrome Extension API",
            description:
              "Developed an AI-powered internal training and communication quality platform focused on role-based assessments, analytics, and AI-assisted feedback systems.\n\n" +
              "Worked with Next.js, Tailwind CSS, backend APIs, and AI integrations for quiz generation and performance analysis.\n\n" +
              "Participated in Agile workflows, daily stand-up meetings, and collaborative development with cross-functional teams.\n\n" +
              "Gained exposure to large-scale international business operations and real-world product development.",
          },
        },
        "transcyberntics.txt": {
          type: "file",
          experience: {
            name: "TransCybernetics",
            role: "Software Engineer Intern",
            dates: "December 2025 – March 2026",
            technologies:
              "Next.js, Tailwind CSS, Zod, Shadcn UI, MongoDB, Node.js",
            description:
              "Worked in the Software Development Team, with the tech stack involving Next.js, Tailwind CSS, Zod, Shadcn UI, MongoDB and Node.js.\n\n" +
              "Assisted in simplifying backend logics, implementing robust authentication and improving UI/UX.",
          },
        },
      },
    },
    "about.txt": {
      type: "file",
      content:
        "Hi, I'm Laxita Jain.\n" +
        "\n" +
        "I am a final year student in B.Tech., CS. I am focused on readily honing\n" +
        "my skills in problem-solving. My experience spans Next.js, Redux,\n" +
        "MongoDB, Node.js, CLI utilities and Machine Learning applications. I\n" +
        "spend most of my time studying algorithms, solving problems, reading\n" +
        "research in AI and contributing to open source.\n" +
        "\n" +
        "Beyond tech, I am an avid reader, an occasional writer and a philosophy\n" +
        "nerd! I value integrity and enjoy engaging in intellectual\n" +
        "conversations! :)",
    },
    "contact.txt": {
      type: "file",
      content:
        'email:    <a href="mailto:laxitajain912@gmail.com">laxitajain912@gmail.com</a>\n' +
        'github:   <a href="https://github.com/laxitajain">github.com/laxitajain</a>\n' +
        'linkedin: <a href="https://linkedin.com/in/laxitajain912">linkedin.com/in/laxitajain912</a>\n' +
        'codolio:  <a href="https://codolio.com/profile/lax">codolio.com/profile/lax</a>',
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

function renderProjectTable(project) {
  const rows = [
    ["technologies", escapeHTML(project.technologies)],
    [
      "description",
      escapeHTML(project.description).replace(/\n/g, "<br>"),
    ],
  ];

  if (project.liveAt) {
    rows.push([
      "live at",
      '<a href="' +
        escapeHTML(project.liveAt.href) +
        '">' +
        escapeHTML(project.liveAt.label) +
        "</a>",
    ]);
  }

  const body = rows
    .map(
      ([label, value]) =>
        "<tr><th>" + label + "</th><td>" + value + "</td></tr>"
    )
    .join("");

  return (
    '<fieldset class="project-card">' +
    "<legend>" +
    escapeHTML(project.name) +
    "</legend>" +
    '<table class="project-table">' +
    body +
    "</table></fieldset>"
  );
}

function renderExperienceTable(exp) {
  const rows = [];

  if (exp.role) {
    rows.push(["role", escapeHTML(exp.role)]);
  }
  if (exp.location) {
    rows.push(["location", escapeHTML(exp.location)]);
  }
  if (exp.dates) {
    rows.push(["dates", escapeHTML(exp.dates)]);
  }
  if (exp.technologies) {
    rows.push(["technologies", escapeHTML(exp.technologies)]);
  }
  if (exp.description) {
    rows.push([
      "description",
      escapeHTML(exp.description).replace(/\n/g, "<br>"),
    ]);
  }

  const body = rows
    .map(
      ([label, value]) =>
        "<tr><th>" + label + "</th><td>" + value + "</td></tr>"
    )
    .join("");

  return (
    '<fieldset class="experience-card">' +
    "<legend>" +
    escapeHTML(exp.name) +
    "</legend>" +
    '<table class="experience-table">' +
    body +
    "</table></fieldset>"
  );
}

function renderCertVerifyLink(href) {
  return (
    '<a class="cert-verify-link" href="' +
    escapeHTML(href) +
    '" target="_blank" rel="noopener noreferrer">verify certificate</a>'
  );
}

function renderCertEntry(entry) {
  const rows = [
    ["Title:", escapeHTML(entry.title)],
    ["Issuer:", escapeHTML(entry.issuer)],
    ["Date:", escapeHTML(entry.date)],
    ["Desc:", escapeHTML(entry.desc)],
  ]
    .map(
      ([key, value]) =>
        "<tr><th>" + key + "</th><td>" + value + "</td></tr>"
    )
    .join("");

  const verify = entry.verify
    ? '<div class="cert-verify">' +
      renderCertVerifyLink(entry.verify.href) +
      "</div>"
    : "";

  return (
    '<div class="cert-entry">' +
    '<table class="cert-table">' +
    rows +
    "</table>" +
    verify +
    "</div>"
  );
}

function renderCertBox(cert) {
  if (cert.entries) {
    return cert.entries.map(renderCertEntry).join("");
  }
  return renderCertEntry(cert);
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
        '  <span class="cmd-name">open</span> &lt;file&gt;    view a certificate (.cert)',
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
      } else if (resolved.node.project) {
        printHTML(renderProjectTable(resolved.node.project));
        if (resolved.node.acornId) {
          awardAcorn(resolved.node.acornId);
        }
      } else if (resolved.node.experience) {
        printHTML(renderExperienceTable(resolved.node.experience));
        if (resolved.node.acornId) {
          awardAcorn(resolved.node.acornId);
        }
      } else if (resolved.node.cert) {
        printError("cat: " + target + ": Permission denied");
      } else {
        printHTML(resolved.node.content);
        if (resolved.node.acornId) {
          awardAcorn(resolved.node.acornId);
        }
      }
    }
  },

  open(args) {
    if (args.length === 0) {
      printError("open: missing operand");
      return;
    }
    for (const target of args) {
      const resolved = resolvePath(target);
      if (!resolved) {
        printError("open: " + target + ": No such file or directory");
      } else if (resolved.node.type === "dir") {
        printError("open: " + target + ": Is a directory");
      } else if (resolved.node.cert) {
        printHTML(renderCertBox(resolved.node.cert));
      } else {
        printError("open: " + target + ": not a certificate file");
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
      printText("sound: on");
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
        '     say hi sometime — <a href="mailto:laxitajain912@gmail.com">laxitajain912@gmail.com</a>"'
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
    window.open("https://github.com/laxitajain", "_blank");
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
