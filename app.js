let questions = [
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
    category: ["antiice/deice-procedures", "all-categories"],
  },
  {
    questionNumber: 15,
    question:
      "What is used in lieu of the normal procedures checklist from the start of the deice/anti-ice process through the BEFORE TAKEOFF CHECKLIST?",
    answer: "ERJ Deice/Anti-ice Checklist",
    category: ["antiice/deice-procedures", "all-categories"],
  },
  {
    questionNumber: 16,
    question:
      "What is the guidance the checklist provides regarding running the APU during deicing procedures?",
    answer: "It should remain off.",
    category: ["antiice/deice-procedures", "all-categories"],
  },
  {
    questionNumber: 17,
    question:
      "Are there different deice procedures for engines off vs. engines running?",
    answer: "Yes",
    category: ["antiice/deice-procedures", "all-categories"],
  },
  {
    questionNumber: 18,
    question:
      "Are the deice/anti-ice communication elements required? Where are they found?",
    answer: "Yes. In the COMMUNICATION ELEMENTS TABLE",
    category: ["antiice/deice-procedures", "all-categories"],
  },
  {
    questionNumber: 19,
    question:
      "List two required communication elements from the COMMUNICATIONS ELEMENTS TABLE.",
    answer:
      "Type of fluid; Percentage of fluid; Time of beginning of final deice step; Deicing complete.",
    category: ["antiice/deice-procedures", "all-categories"],
  },
  {
    questionNumber: 20,
    question: "When does the holdover time (HOT) begin?",
    answer: "When the final application of fluid commences.",
    category: ["antiice/deice-procedures", "all-categories"],
  },
  {
    questionNumber: 21,
    question: "What does the HOT represent?",
    answer:
      "A range of time in which the fluid provides acceptable protection for the varying precipitation intensities.",
    category: ["antiice/deice-procedures", "all-categories"],
  },
  {
    questionNumber: 22,
    question: "In a HOT table, what do the longer and shorter times represent?",
    answer: "Heavier vs. lighter precipitation.",
    category: ["antiice/deice-procedures", "all-categories"],
  },
  {
    questionNumber: 23,
    question:
      "What should the crew use to determine precipitation intensities in order to accurately establish a HOT?",
    answer:
      "Official weather observations, tables from the GDPM should only be used in the absence of intensities listed in the official observations.",
    category: ["antiice/deice-procedures", "all-categories"],
  },
  {
    questionNumber: 24,
    question:
      "Can the HOT be used as the sole determinant that the aircraft critical surfaces are free of frozen contaminants?",
    answer:
      "No, several pre-takeoff checks may be required to determine the condition of the aircraft prior to takeoff.",
    category: ["antiice/deice-procedures", "all-categories"],
  },
  {
    questionNumber: 25,
    question:
      "What are two factors that influence the effectiveness of deicing/anti-icing fluid?",
    answer:
      "Change in precip type, intensity, or moisture content; change in ambient and aircraft skin temp; position of aircraft relative to the exhaust or prop wash of another aircraft; change in wind direction and velocity.",
    category: ["antiice/deice-procedures", "all-categories"],
  },
  {
    questionNumber: 26,
    question:
      "Can parking in the proximity of another aircraft's jet wash blow the deice/anti-ice fluid off the wings, rendering the HOT invalid or the fluid ineffective?",
    answer: "Yes",
    category: ["antiice/deice-procedures", "all-categories"],
  },
  {
    questionNumber: 27,
    question: "List two precipitation types that HOTs do not exist for.",
    answer: "Heavy snow, Ice pellets, Moderate to heavy freezing rain, Hail",
    category: ["antiice/deice-procedures", "all-categories"],
  },
  {
    questionNumber: 28,
    question: "When is a pre-takeoff check conducted?",
    answer: "Within the holdover time and just prior to takeoff.",
    category: ["antiice/deice-procedures", "all-categories"],
  },
  {
    questionNumber: 29,
    question: "What is checked as part of the pre-takeoff check?",
    answer:
      "The representative surface from a vantage point in the aircraft that the PIC determines will give an accurate indication of the condition of the aircraft.",
    category: ["antiice/deice-procedures", "all-categories"],
  },
  {
    questionNumber: 30,
    question:
      "What should the crew do it they are unable to determine that the representative surface is free from frozen contaminants?",
    answer: "The aircraft must be deiced again. ",
    category: ["antiice/deice-procedures", "all-categories"],
  },
  {
    questionNumber: 31,
    question: "When is a pre-takeoff contamination check conducted?",
    answer:
      "After the HOT has been exceeded or the HOT is no longer valid due to changing weather conditions, or in heavy snow - to ensure the wings, control surface and other critical surfaces are free of all frozen contaminants.",
    category: ["antiice/deice-procedures", "all-categories"],
  },
  {
    questionNumber: 32,
    question:
      "Is there ever a case when the aircraft can depart with frozen contaminants on any of the critical surfaces?",
    answer: "No.",
    category: ["antiice/deice-procedures", "all-categories"],
  },
  {
    questionNumber: 33,
    question:
      "When powering up the aircraft, what minimum voltage is required? When would you need to perform the SOPM charging procedure?",
    answer: "22.5 volts; if the voltage is between 21V-22V.",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 34,
    question:
      "After the EICAS is powered, how long must we wait before APU start?",
    answer:
      "After verifying there are no fire protection fail messages; 30 seconds after EICAS is energized.",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 35,
    question:
      "Can takeoff/landing occur with the FUEL IMBALANCE EICAS message displayed?",
    answer: "Yes, as long as the imbalance is not more than 794lbs.",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 36,
    question: "What is the minimum fuel tank temperature?",
    answer: "-37 degrees Celsius",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 37,
    question: "What is the starter cranking limit for start attempts 1 and 2?",
    answer: "90 seconds",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 38,
    question: "Minimum time between starts 1 and 2?",
    answer: "10 Seconds",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 39,
    question: "How do the started cranking limits change in flight?",
    answer:
      "For in-flight starts, the maximum cumulative starter run time per start attempt is 120 seconds. Motoring plus start time.",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 40,
    question: "During and engine start, we must see N1 rotation by what N2?",
    answer: "Positive N1 by 50% N2",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 41,
    question:
      "A taxiway us NOTAM'd closed to aircraft with a wingspan over 100'. What is the wingspan of the ERJ-175?",
    answer: "Wingspan of 93 feet 11 inches.",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 42,
    question: "For takeoff, what is the maximum brake temperature?",
    answer: "Must be in the green.",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 43,
    question: "What is the maximum tailwind component allowed for takeoff?",
    answer: "15 kts.",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 44,
    question:
      "Are static takeoffs recommended with a crosswind component greater than 25 kts? Why?",
    answer: "No. Due to the possibility of a compressor stall.",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 45,
    question: "After takeoff, when can the autopilot be engaged?",
    answer: "400 feet AFE.",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 46,
    question: "What is the minimum runway width allowed?",
    answer: "100 feet",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 47,
    question:
      "ATC reports moderate and possibly greater turbulence ahead. What's the turbulent air penetration speed? It is a target or maximum speed?",
    answer: "Vb 270/.76M (whichever is lower) target speed.",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 48,
    question:
      "An IDG fails in flight and the QRH instructs you to start the APU. What is the maximum start altitude?",
    answer: "30,000 feet",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 49,
    question: "Minimum OAT for APU start and operation?",
    answer: "-54 degrees Celsius",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 50,
    question: "Maximum APU operation altitude (after start)?",
    answer: "33,000 feet",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 51,
    question: "What is the maximum crosswind (crew limit) for a dry runway?",
    answer: "38 kts.",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 52,
    question: "What is the maximum crosswind (crew limit) for a wet runway?",
    answer: "31 kts.",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 53,
    question: "What is the maximum gear extension/retraction/operation speed?",
    answer: "250 kts.",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 54,
    question: "If flying a CAT II approach, what flap setting is required?",
    answer: "Flap 5, mandatory.",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 55,
    question: "What is the maximum wiper speed?",
    answer: "250 kts. ",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 56,
    question: "True/False - we can use RNAV LP minima?",
    answer: "False",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 57,
    question:
      "When approaching flaps full, what is the go-around flap setting?",
    answer: "Flap 4",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 58,
    question:
      "Can you attempt a go-around after deployment of the thrust reversers?",
    answer: "No",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 59,
    question:
      "True/False - Precision approaches are recommended when available?",
    answer: "True",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 60,
    question:
      "Do the controls and throttles need to be guarded during all phases of the approach and landing when the auto-flight system is engaged? Why?",
    answer:
      "Yes. The pilot must be prepared to manually land or initiate a go-around anytime it is necessary.",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 61,
    question:
      "Is it permissible to the the landing lights off while on an approach in IMC if they pose a distraction?",
    answer: "Yes",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 62,
    question:
      "Is it recommended that the PM call out any observed deviations while on an approach?",
    answer: "No, it is required.",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 63,
    question:
      "What is the PF's verbal response after immediately correcting a deviation on approach to landing?",
    answer: "'Correcting'",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 64,
    question:
      "What is the PM's deviation callout with a descent rate > 1000 ft/min on approach to landing?",
    answer: "Sink Rate",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 65,
    question:
      "What magnitude of deviation from glide path requires a callout by the PM? What is the SOPM callout?",
    answer: "> one dot; Glide Path",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 66,
    question:
      "When are speed deviation callouts required on approach to landing? What is the callout?",
    answer:
      "Target -5 or any speed less than Vref, whichever is higher. The callout is SPEED.",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 67,
    question:
      "On an approach, what bank angle would be considered a deviation? What is the PM's callout? ",
    answer: "> 25 degrees, BANK.",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 68,
    question:
      "What is the responsibility of the PM if the EGPWS fails to make callouts automatically?",
    answer: "Perform the expected callouts",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 69,
    question:
      "It is critical to a safe operation that pilots meet stablized approach criteria by what altitude?",
    answer: "1000 feet",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 70,
    question:
      "What is the maximum speed allowed above target on approach at 1000 feet? What would the PM callout if the PF exceeds this speed?",
    answer: "+15, SPEED",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 71,
    question:
      "What is the latest position on the approach to plan for landing gear down? Is there a planned speed at this position as well?",
    answer: "By 1500 feet of the FAF whichever occurs first. Yes, 180 kts. ",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 72,
    question:
      "What speed is mandatory by 500' on approach to landing? What thrust setting?",
    answer: "Airspeed within the bug, thrust levers above idle. ",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 73,
    question:
      "If any of the planned parameters are not met on the approach at or below 500' AGL, what is the PM required to do?",
    answer: "Direct a go-around.",
    category: ["limitations", "all-categories"],
  },
  {
    questionNumber: 74,
    question:
      "When would you declare minimum fuel? What does a minimum fuel declaration communicate to ATC?",
    answer:
      "Fuel status has reached a state where, upon reaching the destination, the PIC cannot accept any undue delay. This advisory does not reflect an emergency situation.",
    category: ["fuel-planning", "all-categories"],
  },
  {
    questionNumber: 75,
    question:
      "When would you declare emergency fuel? How does the emergency affect your ATC handling?",
    answer:
      "While in flight, when determined the remaining fuel supply results in landing with less than 30 minutes of fuel. Emergency aircraft have priority above all others.",
    category: ["fuel-planning", "all-categories"],
  },
  {
    questionNumber: 76,
    question: "",
    answer: "",
    category: ["fuel-planning", "all-categories"],
  },
  {
    questionNumber: 77,
    question: "",
    answer: "",
    category: ["fuel-planning", "all-categories"],
  },
  {
    questionNumber: 78,
    question: "",
    answer: "",
    category: ["fuel-planning", "all-categories"],
  },
  {
    questionNumber: 79,
    question: "",
    answer: "",
    category: ["fuel-planning", "all-categories"],
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
const selectCategory = document.getElementById("select-category");

//Event handlers
answerButton.addEventListener("click", () => {
  answer.classList.toggle("hidden");
});

nextButton.addEventListener("click", () => {
  if (randomCheckbox.checked) {
    let randomQuestions = randomize(questions);
    nextQuestion(randomQuestions);
  } else {
    let randos = randomize(questions);

    let sorted = randos.sort((a, b) => a.questionNumber - b.questionNumber);

    nextQuestion(sorted);
  }
});

previousButton.addEventListener("click", () => {
  previousQuestion();
});

const previousQuestion = function (arr) {
  answer.classList.add("hidden");
  currentQuestion = currentQuestion - 1;
  if (currentQuestion < 0) {
    currentQuestion = questions.length - 1;
  }
  questionNumber.innerText = `Question ${
    questions[currentQuestion].questionNumber
  } of ${questions.length - 1}`;
  question.innerText = questions[currentQuestion].question;
  category.innerText = `Category: ${questions[currentQuestion].category[0]}`;
  answer.innerText = questions[currentQuestion].answer;
};

const nextQuestion = function (arr) {
  answer.classList.add("hidden");

  if (currentQuestion !== arr.length) {
    questionNumber.innerText = `Question ${
      arr[currentQuestion].questionNumber
    } of ${arr.length - 1}`;
    question.innerText = arr[currentQuestion].question;
    category.innerText = `Category: ${arr[currentQuestion].category[0]}`;
    answer.innerText = arr[currentQuestion].answer;
    currentQuestion++;
  } else {
    currentQuestion = 0;
  }
};

const randomize = function (arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  let randomQuestionArray = arr;
  return randomQuestionArray;
};

nextQuestion(questions);
