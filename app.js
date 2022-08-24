const questions = [
  {
    questionNumber: 0,
    question:
      "Why does the emergency/parking brake need to be on prior to starting the external inspection?",
    answer: "To check the brake wear indicators.",
    category: ["external-inspection", "all-categories"],
  },
  {
    questionNumber: 1,
    question:
      "Just because the parking brake is on, does this guarantee that there is sufficient hydraulic pressure to check the brake wear indicators? ",
    answer: "No",
    category: ["external-inspection", "all-categories"],
  },
  {
    questionNumber: 2,
    question:
      "If the hydraulic pressure is depleted for the brakes, how can it be restored prior to the external walk around? ",
    answer: "Activation of system 1 and system 2 electric hydrualic pumps.",
    category: ["external-inspection", "all-categories"],
  },
  {
    questionNumber: 3,
    question:
      "On the external inspection, you notice the air data smart probes are covered in frost. What would be an appropriate action by the pilot? ",
    answer:
      "Turn the ADSP heater switch to the ON position to remove frozen contaminants.",
    category: ["external-inspection", "all-categories"],
  },
  {
    questionNumber: 4,
    question:
      "Provide at least one condition that would require heat being applied to the ADSPs during the pre-flight?",
    answer:
      "OAT at or below freezing and water, ice or snow is present or suspected; on the first flight of the day with temps below -18 degrees Celsius, smart probes frozen, erroneous airspeed indications present on the PFD with any or all of the following messages displayed on the EICAS: AFCS FAULT, AT FAIL, FD FAIL, YD FAIL, APPR2 NOT AVAIL, any other ADS messages displayed on the EICAS.",
    category: ["external-inspection", "all-categories"],
  },
  {
    questionNumber: 5,
    question:
      "What unique piece of equipment resides in the right forward fuselage? Describe the SOPM external preflight of the RAT.",
    answer: "RAT. External inspection - RAT Safety Lock Pin: Removed",
    category: ["external-inspection", "all-categories"],
  },
  {
    questionNumber: 6,
    question:
      "What does the oxygen discharge indicator look like in its normal condition?",
    answer: "Green disc",
    category: ["external-inspection", "all-categories"],
  },
  {
    questionNumber: 7,
    question:
      "What is the proper preflight action of the engine inlet according to the SOPM?",
    answer:
      "Check for FOD and leaks inside the air inlet. Ensure there is no damage to the T12 sensor and the FADEC cooling inlet is clear.",
    category: ["external-inspection", "all-categories"],
  },
  {
    questionNumber: 8,
    question:
      "What is the proper preflight action of the fan blades according to the SOPM?",
    answer:
      "Check for damaged blades and ensure fan is free to rotate. Check for damage to the spinner.",
    category: ["external-inspection", "all-categories"],
  },
  {
    questionNumber: 9,
    question: "Are there nacelle strakes on both sides of the engine?",
    answer: "Yes",
    category: ["external-inspection", "all-categories"],
  },
  {
    questionNumber: 10,
    question:
      "How many magentic level indicators do we have to inspecton each wing?",
    answer: "Three",
    category: ["external-inspection", "all-categories"],
  },
  {
    questionNumber: 11,
    question: "Describe the main landing gear inspection.",
    answer:
      "Wheels and tires - condition; Up lock hooks - unlocked; Down-lock springs - condition; Struts and wheel wells - condition and no leaks; Ground locking pin - removed; Brake wear indicators - check",
    category: ["external-inspection", "all-categories"],
  },
  {
    questionNumber: 12,
    question:
      "What document would you refer to regarding missing static dischargers? Where is that located?",
    answer: "CDL. In the AFM",
    category: ["external-inspection", "all-categories"],
  },
  {
    questionNumber: 13,
    question:
      "Give at least two atmospheric conditions that require a cold weather preflight inspection. ",
    answer:
      "OAT is 5 degrees Celsius, or less; wing fuel temperature is 0 degrees Celsius or less; conditions conducive to icing exist; RON and may have frozen contaminants; through flight with residual ice from the inbound flight; cold soaked ice suspected in the fuel tank.",
    category: ["external-inspection", "all-categories"],
  },
  {
    questionNumber: 14,
    question:
      "What checklist must be completed prior to starting the deice/anti-ice process?",
    answer: "The BEFORE START CHECKLIST",
    category: ["antiice-deice-procedures", "all-categories"],
  },
  {
    questionNumber: 15,
    question:
      "What is used in lieu of the normal procedures checklist from the start of the deice/anti-ice process through the BEFORE TAKEOFF CHECKLIST?",
    answer: "ERJ Deice/Anti-ice Checklist",
    category: ["antiice-deice-procedures", "all-categories"],
  },
  {
    questionNumber: 16,
    question:
      "What is the guidance the checklist provides regarding running the APU during deicing procedures?",
    answer: "It should remain off.",
    category: ["antiice-deice-procedures", "all-categories"],
  },
  {
    questionNumber: 17,
    question:
      "Are there different deice procedures for engines off vs. engines running?",
    answer: "Yes",
    category: ["antiice-deice-procedures", "all-categories"],
  },
  {
    questionNumber: 18,
    question:
      "Are the deice/anti-ice communication elements required? Where are they found?",
    answer: "Yes. In the COMMUNICATION ELEMENTS TABLE",
    category: ["antiice-deice-procedures", "all-categories"],
  },
  {
    questionNumber: 19,
    question:
      "List two required communication elements from the COMMUNICATIONS ELEMENTS TABLE.",
    answer:
      "Type of fluid; Percentage of fluid; Time of beginning of final deice step; Deicing complete.",
    category: ["antiice-deice-procedures", "all-categories"],
  },
  {
    questionNumber: 20,
    question: "When does the holdover time (HOT) begin?",
    answer: "When the final application of fluid commences.",
    category: ["antiice-deice-procedures", "all-categories"],
  },
  {
    questionNumber: 21,
    question: "What does the HOT represent?",
    answer:
      "A range of time in which the fluid provides acceptable protection for the varying precipitation intensities.",
    category: ["antiice-deice-procedures", "all-categories"],
  },
  {
    questionNumber: 22,
    question: "In a HOT table, what do the longer and shorter times represent?",
    answer: "Heavier vs. lighter precipitation.",
    category: ["antiice-deice-procedures", "all-categories"],
  },
  {
    questionNumber: 23,
    question: "",
    answer: "",
    category: ["antiice-deice-procedures", "all-categories"],
  },
];

//Divs
const question = document.getElementById("question");
const category = document.getElementById("category");
const answer = document.getElementById("answer");
const questionNumber = document.getElementById("question-number");

//Buttons
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-button");
const previousButton = document.getElementById("previous-button");

//Variables
let currentQuestion = 0;

//Options
const randomCheckbox = document.getElementById("randomize");

answerButton.addEventListener("click", () => {
  answer.classList.toggle("hidden");
});

nextButton.addEventListener("click", () => {
  nextQuestion();
});

const nextQuestion = function (arr) {
  answer.classList.add("hidden");

  if (currentQuestion !== questions.length) {
    questionNumber.innerText = `Question ${
      questions[currentQuestion].questionNumber + 1
    } of ${questions.length}`;
    question.innerText = questions[currentQuestion].question;
    category.innerText = `Category: ${questions[currentQuestion].category[0]}`;
    answer.innerText = questions[currentQuestion].answer;
    currentQuestion++;
  } else {
    currentQuestion = 0;
  }
};

const randomize = function (arr) {
  if (randomCheckbox.checked === true) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    console.log(arr);
  }
};

nextQuestion();