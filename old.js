/* ==========================================================
   questions.js
   Quiz data + validation helpers for the Law of Supply lesson.
   Equation: P = 2Q
   ========================================================== */

const quizQuestions = [

{
  "id": 1,
  "title": "Question 1: Set the Price",
  "prompt": "Move the graph until Price = $6.",
  "validationState": { "price": 6 }
},

{
  "id": 2,
  "title": "Question 2: Set the Quantity",
  "prompt": "Move the graph until Price = 18.",
  "validationState": { "quantity": 18 }
},

{
  "id": 3,
  "title": "Question 3: Find the Quantity",
  "prompt": "Set Price = $14. What is the quantity supplied?",
  "options": ["5", "6", "7", "8"],
  "correctAnswer": "7",
  "validationState": { "price": 14 }
},

{
  "id": 4,
  "title": "Question 4: Find the Price",
  "prompt": "Set Quantity = 9. What is the price?",
  "options": ["$10", "$12", "$18", "$16"],
  "correctAnswer": "$18",
  "validationState": { "quantity": 9 }
},

{
  "id": 5,
  "title": "Question 5: Lowest Price",
  "prompt": "Find the price intercept (lowest possible price) on the supply curve. What is the quantity supplied at this point?",
  "options": ["0", "2", "4", "6"],
  "correctAnswer": "0",
  "validationState": { "price": 0 }
},

{
  "id": 6,
  "title": "Question 6: Highest Price",
  "prompt": "Move the graph until Quantity = 10. What is the Price?",
  "options": ["14", "16", "18", "20"],
  "correctAnswer": "20",
  "validationState": { "quantity": 10 }
},

{
  "id": 7,
  "title": "Question 7: Revenue Challenge",
  "prompt": "Can you find a point where Total Revenue = $98?",
  "validationState": { "totalRevenue": 98 }
},

{
  "id": 8,
  "title": "Question 8: Find the Point",
  "prompt": "Find the point on the graph where Price = $10, Quantity = 5, and Total Revenue = $50.",
  "validationState": {
    "price": 10,
    "quantity": 5
  }
},

{
  "id": 9,
  "title": "Question 9: Find the Revenue",
  "prompt": "Set Quantity = 6. What is the Revenue?",
  "options": ["$84", "$72", "$112", "$140"],
  "correctAnswer": "$72",
  "validationState": { "quantity": 6 }
},

{
  "id": 10,
  "title": "Question 10: Maximum Revenue",
  "prompt": "Move the graph until Total Revenue is as high as possible.",
  "validationState": {
    "price": 20,
    "quantity": 10
  }
},

{
  "id": 11,
  "title": "Question 11: Prediction",
  "prompt": "If price increases, what happens to quantity supplied?",
  "options": [
    "Quantity increases",
    "Quantity decreases",
    "Quantity stays the same"
  ],
  "correctAnswer": "Quantity increases"
},

{
  "id": 11,
  "title": "Question 11: Prediction",
  "prompt": "If price decreases, what happens to quantity supplied?",
  "options": [
    "Quantity increases",
    "Quantity decreases",
    "Quantity stays the same"
  ],
  "correctAnswer": "Quantity decreases"
},

{
  "id": 13,
  "title": "Question 13: Use the Equation",
  "prompt": "Using the equation P = 2Q, if Price (P) = $4, what is the value of Quantity (Q)?",
  "options": [
    "Q = 1",
    "Q = 2",
    "Q = 4",
    "Q = 8"
  ],
  "correctAnswer": "Q = 2"
},

{
  "id": 14,
  "title": "Question 14: Use the Equation",
  "prompt": "Using the equation P = 2Q, if Quantity (Q) = 6, what is the value of Price (P)?",
  "options": [
    "P = $8",
    "P = $10",
    "P = $12",
    "P = $14"
  ],
  "correctAnswer": "P = $12"
},

{
  "id": 15,
  "title": "Question 15: Direct Supply Equation",
  "prompt": "The inverse supply equation is P = 2Q. Which of the following is the Direct Supply Equation?",
  "options": [
    "Q = 2P",
    "Q = 0.5P",
    "Q = P + 2",
    "Q = P - 2"
  ],
  "correctAnswer": "Q = 0.5P"
},

{
  "id": 16,
  "title": "Question 16: Inverse Supply Equation",
  "prompt": "The direct supply equation is Q = 0.5P. Which of the following is the Inverse Supply Equation?",
  "options": [
    "P = 2Q",
    "P = 0.5Q",
    "P = Q + 2",
    "P = Q - 2"
  ],
  "correctAnswer": "P = 2Q"
}

];



/* Tolerance allowed when comparing live graph state to a target,
   since Price/Quantity move in 0.2 / 0.1 steps. */
const VALIDATION_TOLERANCE = {
  price: 0.05,
  quantity: 0.05,
  totalRevenue: 0.5
};





/**
 * Compares a question's validationState (if any) against the current
 * playground state { P, Q, R }.
 * Returns:
 *   true   -> all target fields currently match (question satisfied)
 *   false  -> validationState exists but doesn't match yet
 *   null   -> question has no validationState (nothing to check live)
 */
function checkStateValidation(question, state) {
  if (!question.validationState) return null;

  const map = { price: "P", quantity: "Q", totalRevenue: "R" };

  for (const key in question.validationState) {
    const target = question.validationState[key];
    const stateKey = map[key];
    if (!stateKey) continue;
    const current = state[stateKey];
    const tolerance = VALIDATION_TOLERANCE[key] ?? 0.05;
    if (Math.abs(current - target) > tolerance) {
      return false;
    }
  }
  return true;
}

/**
 * Checks a selected multiple-choice option against a question's
 * correctAnswer. Returns true/false, or null if the question has no options.
 */
function checkOptionAnswer(question, selected) {
  if (!question.options || !question.correctAnswer) return null;
  return selected === question.correctAnswer;
}

