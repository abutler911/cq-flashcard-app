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
      "How many magentic level indicators do we have to inspect on each wing?",
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
    question:
      "Plan holding time based on fuel quantity, landing fuel. How long can you hold?",
    answer: "Whiteboard problem.",
    category: ["fuel-planning", "all-categories"],
  },
  {
    questionNumber: 77,
    question: "Diversion fuel planning. ",
    answer: "Study holding fuel, diversion and fuel calculations.",
    category: ["fuel-planning", "all-categories"],
  },
  {
    questionNumber: 78,
    question:
      "What can cause the FMS landing fuel calculation to be inaccurate?",
    answer:
      "Arrivals with long downwinds; wrong runway loaded into FMS; Flying below the filed altitude or above the TAS as programmed in the prog pages; Winds aloft don't match forecast/FMS inputs; EFC in hold page different than actual hold exit time.",
    category: ["fuel-planning", "all-categories"],
  },
  {
    questionNumber: 79,
    question:
      "You're sitting at the gate when a BATT 1 OVERTEMP warning message appears. What do you do? How do you verify this action was effective?",
    answer: "ASSOCIATED BATTERY....OFF; Verify using the QRC.",
    category: ["memory-items", "all-categories"],
  },
  {
    questionNumber: 80,
    question:
      "You're starting an engine and notice the ITT is rapidly rising toward the ITT redline. What temp is redline and what do you do?",
    answer: "815 degrees; AFFECTED ENGINE START/STOP SELECTOR ... STOP",
    category: ["memory-items", "all-categories"],
  },
  {
    questionNumber: 81,
    question:
      "On taxi to the runway, the airplane begins veering to the left aggressively. What might you do? (STEERING RUNWAY memory item)",
    answer:
      "STEER DISC SWITCH ... PRESS, steer the airplane using differential braking and rudder.",
    category: ["memory-items", "all-categories"],
  },
  {
    questionNumber: 82,
    question:
      "Shortly after takeoff the cockpit starts filling with smoke. What do you do? (SMOKE EVACUATION memory item)",
    answer: "OXYGEN MASKS ... DON, EMER; EMER CREW COMMUNICATION ... ESTABLISH",
    category: ["memory-items", "all-categories"],
  },
  {
    questionNumber: 83,
    question:
      "You're flying in cruise at FL350 when you hear the triple chime and see CABIN ALTITUDE HI on the EICAS. What do you do?",
    answer: "OXYGEN MASKS...DON, 100%; CREW COMMUNICATION ... ESTABLISH",
    category: ["memory-items", "all-categories"],
  },
  {
    questionNumber: 84,
    question:
      "You're flying in cruise when the autopilot disconnects and the airplane begins to pitch up, in spite of nose-down control pressure. What do you do?",
    answer:
      "A/P DISC SWITCH ... PRESS AND HOLD; PITCH TRIM SYS 1 AND SYS 2 CUTOUT BUTTONS ... PUSH IN",
    category: ["memory-items", "all-categories"],
  },
  {
    questionNumber: 85,
    question:
      "You're flying at cruise when the autopilot disconnects. After taking the controls, you realize the aileron controls are jammed. What do you do?",
    answer: "AILERON DISCONNECT HANDLE...PULL",
    category: ["memory-items", "all-categories"],
  },
  {
    questionNumber: 86,
    question:
      "The majority of commercial aviation accidents have been caused by what?",
    answer: "Human factors. Usually related to a breakdown in communication.",
    category: ["fom-chap-3", "all-categories"],
  },
  {
    questionNumber: 87,
    question: "What four principle CRM skills is Skywest choosing to focus on?",
    answer:
      "Communication; Workload Management; Situational Awareness; Saturation Management",
    category: ["fom-chap-3", "all-categories"],
  },
  {
    questionNumber: 88,
    question:
      "List three of the five CRM issues that are included in nearly every Skywest ASAP report.",
    answer:
      "Unable to manage distractions; Inability to recognize task saturation and level; Non-specific WANT briefings that exclude key arrival procedures; briefings exclude items that lead to a shared mental model; not holding other crewmembers accountable to the SOPM.",
    category: ["fom-chap-3", "all-categories"],
  },
  {
    questionNumber: 89,
    question:
      "The FOM lists four tools to mitigate distraction, explain two of them.",
    answer:
      "Recognize a state of becoming distracted, verbalize it and request help; Use task prioritization to determine what can be delayed for a later time; Use good planning during low workload periods; First officers maintain readiness to assume delegated responsibilities.",
    category: ["fom-chap-3", "all-categories"],
  },
  {
    questionNumber: 90,
    question:
      "Does the FOM require briefings to include anticipated distractions along with a plan of how to manage this threat? If so, whose responsibility is it? ",
    answer:
      "Yes. The captain is responsible to brief anticipated distractions. Yes, your evaluator will be putting special emphasis on your mitigation strategies.",
    category: ["fom-chap-3", "all-categories"],
  },
  {
    questionNumber: 91,
    question:
      "What is tunneling and how does it contribute to a loss of situational awareness?",
    answer:
      "Under stress, a pilot may focus on a single flight deck indicator and not notice other indications also relevant to the situation.",
    category: ["fom-chap-3", "all-categories"],
  },
  {
    questionNumber: 92,
    question: "What CRM skill is severely diminished during tunneling?",
    answer:
      "Situational awareness. Vigilance and problem identification lapses and ability to detect and manage threats is reduced.",
    category: ["fom-chap-3", "all-categories"],
  },
  {
    questionNumber: 93,
    question:
      "What common error do pilots make during high workload situations in regard to personal ability?",
    answer:
      "Overestimate personal ability to manage workload and level of saturation. They may not even recognize the level of saturation.",
    category: ["fom-chap-3", "all-categories"],
  },
  {
    questionNumber: 94,
    question:
      "Name four common cues of task saturation observed through ASAP, LOSA and FOQA?",
    answer:
      "Missed checklist items or entire checklists, missed callouts, missed config changes, missed ATC readbacks, abbreviated or omitted WANT briefings, litte or no communication, lack of FMA correalation to intended route.",
    category: ["fom-chap-3", "all-categories"],
  },
  {
    questionNumber: 95,
    question:
      "How many of the CRM issues that are included in nearly every Skywest ASAP report are a potentional results of task saturation?",
    answer: "3 out of 4",
    category: ["fom-chap-3", "all-categories"],
  },
  {
    questionNumber: 96,
    question:
      "Name the saturation 'condition' that best describes when some errors or threats are ignored or undetected, task completion is marginal, situational awareness is compromised and flight path management is deteriorating?",
    answer: "yellow",
    category: ["fom-chap-3", "all-categories"],
  },
  {
    questionNumber: 97,
    question:
      "What action should be employed when a pilot realizes they are 'in the yellow'?",
    answer:
      "Verbalize the condition. Follow the TEAM model. Choose an appropriate level of automation, assess the criticality of the threat, and communicate a plan of action to return to a green level of saturation.",
    category: ["fom-chap-3", "all-categories"],
  },
  {
    questionNumber: 98,
    question:
      "What key component must be included in visual approach execution when the 10-7 contains E-GPWS warning information?",
    answer:
      "Pilots follow the track and descent profile of an instrument approach procedure when conducting a visual approach at night.",
    category: ["fom-chap-3", "all-categories"],
  },
  {
    questionNumber: 99,
    question:
      "Can a visual approach that has 10-7 E-GPWS warnings be joined inside the final approach fix?",
    answer:
      "No, join via vectors outside of the final approach fix or via IAF.",
    category: ["fom-chap-3", "all-categories"],
  },
  {
    questionNumber: 100,
    question:
      "OTS stands for what? What color is the information bar for OTS flights?",
    answer: "Out-of-service, Red.",
    category: ["flite-view-users-guide", "all-categories"],
  },
  {
    questionNumber: 101,
    question:
      "If a discrepancy is written up in FltView while enroute, which airport would be selected, the departure or arrival airport?",
    answer:
      "Select the station where the maintenance process would be completed, in this case, the destination.",
    category: ["flite-view-users-guide", "all-categories"],
  },
  {
    questionNumber: 102,
    question:
      "Does an entry in FltView eliminate the need to call in the discrepancy?",
    answer:
      "Yes, so be sure the description is clear, concise, and sufficiently detailed.",
    category: ["flite-view-users-guide", "all-categories"],
  },
  {
    questionNumber: 103,
    question:
      "A submitted discrepancy should immediately change the A/C status to OTS. If the flight bar doesn't turn red immediately what should you do?",
    answer: "Check your connectivity.",
    category: ["flite-view-users-guide", "all-categories"],
  },
  {
    questionNumber: 104,
    question:
      "If ACARS is inop can a weight and balance be calculated? Can this be used for departure?",
    answer:
      "Yes, using the FltView manifest applet. This can be used for departure.",
    category: ["flite-view-users-guide", "all-categories"],
  },
  {
    questionNumber: 105,
    question:
      "Can the manifest applet be used if AeroData is unavailable or if there is no connectivity?",
    answer: "Yes",
    category: ["flite-view-users-guide", "all-categories"],
  },
  {
    questionNumber: 106,
    question:
      "What additional requirement does the crew have when completing an offline manifest prior to departure?",
    answer:
      "Offline manifest requires a call to the dispatcher prior to block out.",
    category: ["flite-view-users-guide", "all-categories"],
  },
  {
    questionNumber: 107,
    question:
      "Where can instructions for completing a manifest using the applet be found?",
    answer: "Flite view users guide under the EFB iPad tile.",
    category: ["flite-view-users-guide", "all-categories"],
  },
  {
    questionNumber: 108,
    question: "Can takeoff numbers be accessed via ACARS if the A/C is OTS?",
    answer:
      "Yes, be careful this in NOT an indication that you are back in service.",
    category: ["flite-view-users-guide", "all-categories"],
  },
  {
    questionNumber: 109,
    question: "Have you ever read the FltView users guide?",
    answer: "Most of it! :)",
    category: ["flite-view-users-guide", "all-categories"],
  },
  {
    questionNumber: 110,
    question: "The PIC reports mechanical irregularities to maintenance how?",
    answer:
      "Via FltView, no phone call is required unless there is no connectivity.",
    category: ["fom-chap-6", "all-categories"],
  },
  {
    questionNumber: 111,
    question:
      "When a mechanical irregularity is discovered after block out but prior to takeoff, a flight is authorized to continue under what conditions?",
    answer:
      "Mechanical irregularity: QRH procedure appopraite for the situation, not an inflight procedure. PIC will report this at the destination. OR Maintenance directed reset procedure or deferral. PIC reports this immediately to MX and MX determined the action.",
    category: ["f0m-chap-6", "all-categories"],
  },
  {
    questionNumber: 112,
    question:
      "When the PDC says climb via SID and the SIDs top altitude is FL230 but your filed altitude is 17,000 - what altitude do you set in the altitude selector?",
    answer: "17,000 - that is the clearance limit.",
    category: ["erj-sopm", "all-categories"],
  },
  {
    questionNumber: 113,
    question:
      "What does the SOPM require crews to do prior to the departure briefing with regard to the flight plan/FMS?",
    answer:
      "Both pilots visually cross-check the flight plan by sequencing through each waypoint on the MFD plan page. Simultaneously, both pilots verify waypoint names, sequence, speed restrictions, crossing altitudes, and appropriate discontinuities through the TOD.",
    category: ["erj-sopm", "all-categories"],
  },
  {
    questionNumber: 114,
    question:
      "Is it acceptable to accomplish the pre-briefing waypoint check individually?",
    answer: "No",
    category: ["erj-sopm", "all-categories"],
  },
  {
    questionNumber: 115,
    question: "I wonder if this will be a point of emphasis on your LOE?",
    answer: "Yes, it definitely will!",
    category: ["erj-sopm", "all-categories"],
  },
  {
    questionNumber: 116,
    question:
      "Does a checklist need to be started over from the beginning when interrupted?",
    answer: "Yes",
    category: ["erj-sopm", "all-categories"],
  },
  {
    questionNumber: 117,
    question:
      "What altitude above TDZ requires the aircraft to be in final landing configuration with the BEFORE LANDING CHECKLIST complete, within +15/-5 of Vap, as well as on the lateral and vertical track?",
    answer: "1,000' HAT",
    category: ["erj-sopm", "all-categories"],
  },
  {
    questionNumber: 118,
    question:
      "Considering the above question, isn't it okay to continue as long as everything is done and stable by 500' HAT?",
    answer:
      "No, the PM will direct a go-around if any of the planned parameters are not met by announcing 'UNSTABLE, GO-AROUND'.",
    category: ["erj-sopm", "all-categories"],
  },
  {
    questionNumber: 119,
    question:
      "Review of 10-7 charts for safety alerts is an optional part of approach planning?",
    answer:
      "No, include in the WANT briefing a mitigation strategy for threats contributing to high-energy descent and/or unstable spproach. SOPM stablized approach criteria.",
    category: ["erj-sopm", "all-categories"],
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
const hideAnswers = document.getElementById("hideAnswers");
let selectCategory = document.getElementById("select-category");

//Event handlers
answerButton.addEventListener("click", () => {
  answer.classList.remove("hidden");
});

previousButton.addEventListener("click", () => {
  if (randomCheckbox.checked) {
    let randomQuestions = randomize(questions);
    previousQuestion(randomQuestions);
  } else {
    let randos = randomize(questions);
    let sorted = randos.sort((a, b) => a.questionNumber - b.questionNumber);
    previousQuestion(sorted);
  }
});

selectCategory.addEventListener("change", () => {
  selectCategory = document.getElementById("select-category");
  console.log(selectCategory.value);
});

nextButton.addEventListener("click", () => {
  // nextQuestion(questions);

  if (randomCheckbox.checked) {
    let randomQuestions = randomize(questions);
    nextQuestion(randomQuestions);
  } else {
    let randos = randomize(questions);
    let sorted = randos.sort((a, b) => a.questionNumber - b.questionNumber);
    nextQuestion(sorted);
  }
});

const previousQuestion = function (arr) {
  // answer.classList.add("hidden");
  if (hideAnswers.checked) {
    answer.classList.add("hidden");
  } else if (hideAnswers.checked === false) {
    answer.classList.remove("hidden");
  }

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
  if (hideAnswers.checked) {
    answer.classList.add("hidden");
  } else if (hideAnswers.checked === false) {
    answer.classList.remove("hidden");
  }

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

  // Selected category logic

  // if (selectCategory !== "all-categories") {
  //   const results = questions.filter((obj) => {
  //     return obj.category.includes(selectCategory.value);
  //   });
  //   if (hideAnswers.checked) {
  //     answer.classList.add("hidden");
  //   } else if (hideAnswers.checked === false) {
  //     answer.classList.remove("hidden");
  //   }
  //   if (currentQuestion !== results.length) {
  //     questionNumber.innerText = `Question ${
  //       results[currentQuestion].questionNumber
  //     } of ${results.length - 1}`;
  //     question.innerText = results[currentQuestion].question;
  //     category.innerText = `Category: ${results[currentQuestion].category[0]}`;
  //     answer.innerText = results[currentQuestion].answer;
  //     currentQuestion++;
  //   } else {
  //     currentQuestion = 0;
  //   }
  // }
};

// const filterByCategory = function (arr) {
//   const results = questions.filter((obj) => {
//     return obj.category.includes(selectCategory.value);
//   });
//   return results;
// };

const randomize = function (arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  let randomQuestionArray = arr;
  return randomQuestionArray;
};

// console.log(filterByCategory(questions));
