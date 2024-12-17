
const arrOfGifts = [
    {
      "name": "Bug Magnet",
      "description": "Able to find bugs in code like they were placed there on purpose.",
      "category": "For Work",
      "superpowers": {
        "live": "+500",
        "create": "+500",
        "love": "+200",
        "dream": "+400",
        "class": "work"
      }
    },

    {
      "name": "Console.log Guru",
      "description": "Uses console.log like a crystal ball to find any issue.",
      "category": "For Work",
      "superpowers": {
        "live": "+500",
        "create": "+500",
        "love": "+200",
        "dream": "+400",
        "class": "work"
      }
    },

    {
      "name": "Shortcut Cheater",
      "description": "Knows every keyboard shortcut like they were born with them.",
      "category": "For Work",
      "superpowers": {
        "live": "+500",
        "create": "+500",
        "love": "+400",
        "dream": "+200",
        "class": "work"
      }
    },

    {
      "name": "Merge Master",
      "description": "Merges branches in Git without conflicts, like a wizard during an exam.",
      "category": "For Work",
      "superpowers": {
        "live": "+200",
        "create": "+500",
        "love": "+200",
        "dream": "+300",
        "class": "work"
      }
    },

    {
      "name": "Async Tamer",
      "description": "Handles asynchronous code and promises like well-trained pets.",
      "category": "For Work",
      "superpowers": {
        "live": "+100",
        "create": "+400",
        "love": "+200",
        "dream": "+300",
        "class": "work"
      }
    },

    {
      "name": "CSS Tamer",
      "description": "Can make Flexbox and Grid work together like they were always best friends.",
      "category": "For Work",
      "superpowers": {
        "live": "+200",
        "create": "+500",
        "love": "+200",
        "dream": "+300",
        "class": "work"
      }
    },

    {
      "name": "Time Hacker",
      "description": "Writes code at the last moment but always meets the deadline.",
      "category": "For Work",
      "superpowers": {
        "live": "+500",
        "create": "+500",
        "love": "+500",
        "dream": "+200",
        "class": "work"
      }
    },

    {
      "name": "Layout Master",
      "description": "Creates perfect layouts on the first try, like they can read the designer's mind.",
      "category": "For Work",
      "superpowers": {
        "live": "+500",
        "create": "+300",
        "love": "+200",
        "dream": "+200",
        "class": "work"
      }
    },

    {
      "name": "Documentation Whisperer",
      "description": "Understands cryptic documentation as if they wrote it themselves.",
      "category": "For Work",
      "superpowers": {
        "live": "+500",
        "create": "+500",
        "love": "+200",
        "dream": "+100",
        "class": "work"
      }
    },

    {
      "name": "Feedback Master",
      "description": "Accepts client revisions with the Zen calm of Buddha.",
      "category": "For Work",
      "superpowers": {
        "live": "+300",
        "create": "+500",
        "love": "+300",
        "dream": "+400",
        "class": "work"
      }
    },

    {
      "name": "Code Minimalist",
      "description": "Writes code so concise that one line does more than a whole file.",
      "category": "For Work",
      "superpowers": {
        "live": "+500",
        "create": "+500",
        "love": "+500",
        "dream": "+200",
        "class": "work"
      }
    },

    {
      "name": "Pixel-Perfect Magician",
      "description": "Aligns elements to the last pixel, even when the design looks abstract.",
      "category": "For Work",
      "superpowers": {
        "live": "+500",
        "create": "+500",
        "love": "+400",
        "dream": "+400",
        "class": "work"
      }
    },

    {
      "name": "Posture Levitation",
      "description": "Can sit for hours, but maintains perfect posture like a ballerina.",
      "category": "For Health",
      "superpowers": {
        "live": "+400",
        "create": "+500",
        "love": "+500",
        "dream": "+400",
        "class": "health"
      }
    },

    {
      "name": "Step Master",
      "description": "Gets 10,000 steps a day even while sitting at the computer.",
      "category": "For Health",
      "superpowers": {
        "live": "+400",
        "create": "+300",
        "love": "+500",
        "dream": "+400",
        "class": "health"
      }
    },

    {
      "name": "Snack Resister",
      "description": "Ignoring desktop snacks like a strict dietician.",
      "category": "For Health",
      "superpowers": {
        "live": "+400",
        "create": "+100",
        "love": "+200",
        "dream": "+400",
        "class": "health"
      }
    },

    {
      "name": "Hydration Bot",
      "description": "Drinks the recommended 2 liters of water a day like a health-programmed robot.",
      "category": "For Health",
      "superpowers": {
        "live": "+500",
        "create": "+300",
        "love": "+500",
        "dream": "+500",
        "class": "health"
      }
    },

    {
      "name": "Sleep Overlord",
      "description": "Sleeps 6 hours but feels like they had 10.",
      "category": "For Health",
      "superpowers": {
        "live": "+400",
        "create": "+500",
        "love": "+500",
        "dream": "+500",
        "class": "health"
      }
    },

    {
      "name": "Break Guru",
      "description": "Takes a stretch break every hour without forgetting, no matter how focused.",
      "category": "For Health",
      "superpowers": {
        "live": "+300",
        "create": "+300",
        "love": "+300",
        "dream": "+400",
        "class": "health"
      }
    },

    {
      "name": "Eye Protector",
      "description": "Can work all day at the monitor without feeling like their eyes are on fire.",
      "category": "For Health",
      "superpowers": {
        "live": "+100",
        "create": "+300",
        "love": "+500",
        "dream": "+400",
        "class": "health"
      }
    },

    {
      "name": "Stress Dodger",
      "description": "Masters meditation right at the keyboard.",
      "category": "For Health",
      "superpowers": {
        "live": "+100",
        "create": "+400",
        "love": "+200",
        "dream": "+400",
        "class": "health"
      }
    },

    {
      "name": "Yoga Coder",
      "description": "Easily switches from coding to yoga and back.",
      "category": "For Health",
      "superpowers": {
        "live": "+400",
        "create": "+400",
        "love": "+400",
        "dream": "+400",
        "class": "health"
      }
    },

    {
      "name": "Healthy Snacker",
      "description": "Always picks fruit, even when chocolate is within arm’s reach.",
      "category": "For Health",
      "superpowers": {
        "live": "+400",
        "create": "+300",
        "love": "+200",
        "dream": "+400",
        "class": "health"
      }
    },

    {
      "name": "Chair Exerciser",
      "description": "Manages to work out without leaving the chair.",
      "category": "For Health",
      "superpowers": {
        "live": "+500",
        "create": "+500",
        "love": "+500",
        "dream": "+400",
        "class": "health"
      }
    },

    {
      "name": "Caffeine Filter",
      "description": "Drinks coffee at night and still falls asleep with no problem.",
      "category": "For Health",
      "superpowers": {
        "live": "+400",
        "create": "+300",
        "love": "+500",
        "dream": "+200",
        "class": "health"
      }
    },

    {
      "name": "Joy Charger",
      "description": "Finds joy in the little things—even in a build that finishes unexpectedly fast.",
      "category": "For Harmony",
      "superpowers": {
        "live": "+200",
        "create": "+200",
        "love": "+500",
        "dream": "+500",
        "class": "harmony"
      }
    },

    {
      "name": "Error Laugher",
      "description": "Laughs at code errors like they’re jokes instead of getting angry.",
      "category": "For Harmony",
      "superpowers": {
        "live": "+300",
        "create": "+200",
        "love": "+500",
        "dream": "+500",
        "class": "harmony"
      }
    },

    {
      "name": "Bug Acceptance Guru",
      "description": "Accepts bugs as part of the journey to perfection — it’s just another task.",
      "category": "For Harmony",
      "superpowers": {
        "live": "+300",
        "create": "+200",
        "love": "+500",
        "dream": "+400",
        "class": "harmony"
      }
    },

    {
      "name": "Spontaneous Coding Philosopher",
      "description": "Philosophically accepts any client suggestion after a long refactor.",
      "category": "For Harmony",
      "superpowers": {
        "live": "+300",
        "create": "+200",
        "love": "+500",
        "dream": "+400",
        "class": "harmony"
      }
    },

    {
      "name": "Deadline Sage",
      "description": "Remains zen even when the deadline is close and the project manager is stressed.",
      "category": "For Harmony",
      "superpowers": {
        "live": "+200",
        "create": "+200",
        "love": "+300",
        "dream": "+500",
        "class": "harmony"
      }
    },

    {
      "name": "Inspiration Maestro",
      "description": "Finds inspiration on an empty screen as if masterpieces are already there.",
      "category": "For Harmony",
      "superpowers": {
        "live": "+300",
        "create": "+200",
        "love": "+400",
        "dream": "+100",
        "class": "harmony"
      }
    },

    {
      "name": "Peace Keeper",
      "description": "Maintains inner calm even in moments of intense crisis.",
      "category": "For Harmony",
      "superpowers": {
        "live": "+200",
        "create": "+200",
        "love": "+500",
        "dream": "+500",
        "class": "harmony"
      }
    },

    {
      "name": "Empathy Guru",
      "description": "Feels the team’s mood and can lift everyone’s spirits.",
      "category": "For Harmony",
      "superpowers": {
        "live": "+500",
        "create": "+200",
        "love": "+500",
        "dream": "+500",
        "class": "harmony"
      }
    },

    {
      "name": "Laughter Generator",
      "description": "Can lighten any tense situation with a joke that even bugs laugh at.",
      "category": "For Harmony",
      "superpowers": {
        "live": "+300",
        "create": "+200",
        "love": "+200",
        "dream": "+500",
        "class": "harmony"
      }
    },

    {
      "name": "Pause Master",
      "description": "Knows when to just step back from the keyboard and breathe.",
      "category": "For Harmony",
      "superpowers": {
        "live": "+300",
        "create": "+200",
        "love": "+100",
        "dream": "+100",
        "class": "harmony"
      }
    },
    {
      "name": "Coder Healer",
      "description": "Can support a colleague in their darkest hour, even if it’s a 500 error.",
      "category": "For Harmony",
      "superpowers": {
        "live": "+300",
        "create": "+200",
        "love": "+500",
        "dream": "+500",
        "class": "harmony"
      }
    },

    {
      "name": "Music Code Curator",
      "description": "Creates work playlists so good, even deadlines follow the rhythm.",
      "category": "For Harmony",
      "superpowers": {
        "live": "+300",
        "create": "+200",
        "love": "+300",
        "dream": "+200",
        "class": "harmony"
      }
    }
  ]


const blackout = document.querySelector('.blackout');
const menu__mobile_burger = document.querySelector('.menu__mobile-burger');
const menu_list = document.querySelector('.menu-list');
const menu_list_lines = document.querySelectorAll('.mobile-burger-line');
const menu_items = document.querySelectorAll('.menu-item');
const slider = document.querySelector('.slider__content');
const arrowLeft = document.querySelector('.buttons-arrow-left');
const arrowRight = document.querySelector('.buttons-arrow-right');
const timerNumbers = document.querySelectorAll('.number');
const allCategories = document.querySelectorAll('.gifts__category-item');
const listOfCards = document.querySelector('.cards__list');
const top_button = document.querySelector('.top_button');
const modal_window = document.querySelector('.modal_window');


  export {arrOfGifts, menu__mobile_burger, menu_list, blackout, menu_list_lines, menu_items, slider,
          arrowLeft, arrowRight, timerNumbers, allCategories, listOfCards, top_button, modal_window
  };