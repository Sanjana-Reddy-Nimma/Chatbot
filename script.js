// Comprehensive rule base for the chatbot
const ruleBase = {
  prevention: {
    keywords: [
      "prevent",
      "avoid",
      "stop",
      "protect",
      "safe",
      "prevention",
      "shield",
      "guard",
    ],
    illnesses: [
      "flu",
      "cold",
      "fever",
      "cough",
      "infection",
      "virus",
      "seasonal",
      "illness",
      "sick",
    ],
    responses: [
      "To prevent seasonal illnesses, follow these evidence-based practices:\n\n• **Wash hands frequently** with soap for at least 20 seconds\n• **Wear masks** in crowded places during flu season\n• **Maintain social distance** when illness is spreading\n• **Get vaccinated** - seasonal flu vaccines are recommended by WHO\n• **Avoid touching** your face, especially eyes, nose, and mouth\n• **Stay home** when you're feeling unwell\n• **Ensure good ventilation** in indoor spaces\n\nSource: WHO & CDC Guidelines",
      "Here are key prevention strategies:\n\n• **Hand hygiene** is your first defense - use soap or alcohol-based sanitizer\n• **Respiratory etiquette** - cover coughs and sneezes with tissue or elbow\n• **Boost immunity** through proper nutrition and sleep\n• **Regular exercise** strengthens your immune system\n• **Stay hydrated** - drink plenty of water\n• **Disinfect surfaces** frequently touched areas\n\nThese measures significantly reduce infection risk according to health authorities.",
    ],
  },
  immunity: {
    keywords: [
      "immunity",
      "immune",
      "boost",
      "strengthen",
      "improve",
      "enhance",
      "resistance",
    ],
    foods: [
      "food",
      "eat",
      "diet",
      "nutrition",
      "fruit",
      "vegetable",
      "vitamin",
      "nutrient",
    ],
    responses: [
      "Boost your immunity with these nutritious foods:\n\n🍊 **Citrus fruits** - Rich in Vitamin C (oranges, lemons, grapefruits)\n🧄 **Garlic & Ginger** - Natural antimicrobial properties\n🥬 **Leafy greens** - Spinach, kale (packed with vitamins A, C, E)\n🥛 **Yogurt** - Probiotics for gut health\n🥜 **Nuts & Seeds** - Vitamin E and healthy fats\n🍄 **Mushrooms** - Vitamin D and selenium\n🫐 **Berries** - Antioxidants and vitamins\n🍵 **Green tea** - Polyphenols and antioxidants\n\nSource: CDC Nutrition Guidelines",
      "Natural immunity boosters include:\n\n• **Turmeric** - Anti-inflammatory properties\n• **Bell peppers** - More Vitamin C than oranges\n• **Broccoli** - Vitamins A, C, E, and fiber\n• **Almonds** - Vitamin E for immune function\n• **Sunflower seeds** - Phosphorous, magnesium, vitamins B-6 and E\n• **Papaya** - Digestive enzyme papain, anti-inflammatory\n• **Kiwi** - Vitamin K, C, and potassium\n\nRemember: A balanced diet is key to maintaining strong immunity!",
    ],
  },
  symptoms: {
    keywords: ["symptom", "sign", "feel", "experiencing", "have", "suffering"],
    conditions: [
      "flu",
      "cold",
      "fever",
      "cough",
      "throat",
      "headache",
      "body",
      "fatigue",
    ],
    responses: [
      "Common seasonal illness symptoms:\n\n**Flu (Influenza):**\n• Sudden high fever (100°F or higher)\n• Severe body aches and fatigue\n• Dry cough and sore throat\n• Headache and chills\n• Sometimes nausea/vomiting\n\n**Common Cold:**\n• Gradual onset\n• Runny or stuffy nose\n• Sneezing and mild cough\n• Mild fatigue\n• Usually no fever or low-grade fever\n\n⚠️ **Seek immediate medical care if:**\n• Difficulty breathing\n• Persistent chest pain\n• Confusion or dizziness\n• Severe dehydration\n\nSource: CDC Symptom Guidelines",
      "Monitor these symptoms carefully:\n\n**Mild symptoms** (usually manageable at home):\n• Runny nose\n• Mild headache\n• Slight fever (<100°F)\n• Minor body aches\n\n**Moderate symptoms** (monitor closely):\n• Fever 100-102°F\n• Persistent cough\n• Moderate fatigue\n• Loss of appetite\n\n**Severe symptoms** (seek medical help):\n• High fever >103°F for 3+ days\n• Breathing difficulties\n• Blue lips or face\n• Severe headache with stiff neck\n• Persistent vomiting\n\nAlways consult a healthcare provider when in doubt!",
    ],
  },
  remedies: {
    keywords: [
      "remedy",
      "treatment",
      "cure",
      "help",
      "relief",
      "soothe",
      "natural",
      "home",
    ],
    conditions: ["cold", "cough", "throat", "fever", "congestion", "headache"],
    responses: [
      "Safe home remedies for symptom relief:\n\n🍯 **For sore throat:**\n• Warm water with honey and lemon\n• Gargle with warm salt water\n• Ginger tea with honey\n\n💨 **For congestion:**\n• Steam inhalation with eucalyptus oil\n• Warm compress on sinuses\n• Stay well hydrated\n\n🤒 **For mild fever:**\n• Rest and sleep adequately\n• Stay hydrated with water and clear fluids\n• Cool compress on forehead\n• Wear light clothing\n\n🍵 **General remedies:**\n• Chicken soup for overall relief\n• Vitamin C rich foods\n• Plenty of warm fluids\n\n⚠️ Note: These are for mild symptoms only. Consult a doctor if symptoms persist or worsen.",
      "Natural remedies backed by research:\n\n**Honey** - Antibacterial, soothes throat (not for children <1 year)\n**Ginger** - Anti-inflammatory, reduces nausea\n**Turmeric milk** - Anti-inflammatory properties\n**Elderberry** - May reduce flu duration\n**Echinacea tea** - May support immune function\n**Peppermint tea** - Relieves congestion\n**Rest** - Most important for recovery\n\n**Hydration tips:**\n• Drink 8-10 glasses of water daily\n• Herbal teas count toward fluid intake\n• Avoid alcohol and caffeine\n\nRemember: Rest and hydration are your best medicines!",
    ],
  },
  doctor: {
    keywords: [
      "doctor",
      "hospital",
      "medical",
      "emergency",
      "serious",
      "clinic",
      "physician",
      "specialist",
    ],
    urgency: ["when", "should", "need", "must", "urgent", "immediately"],
    responses: [
      "**Seek immediate medical attention if you experience:**\n\n🚨 **Emergency symptoms:**\n• Difficulty breathing or shortness of breath\n• Persistent chest pain or pressure\n• Confusion or inability to stay awake\n• Bluish lips or face\n• Severe or persistent vomiting\n• Signs of dehydration (dizziness, no urination)\n\n⚠️ **See a doctor within 24-48 hours for:**\n• Fever above 103°F (39.4°C) lasting 3+ days\n• Fever with rash\n• Persistent cough with yellow/green/bloody mucus\n• Ear pain or drainage\n• Sinus pain with fever\n• Symptoms improving then suddenly worsening\n\n👶 **For children, also watch for:**\n• Fast breathing or trouble breathing\n• Not drinking enough fluids\n• Not waking up or interacting\n• Irritability or inconsolable crying",
      "**Medical attention guidelines:**\n\n**Immediate care needed:**\n• Severe dehydration\n• High fever with stiff neck\n• Severe headache unlike any before\n• Vision changes with fever\n• Difficulty swallowing or drooling\n\n**Schedule appointment if:**\n• Symptoms last >10 days without improvement\n• Fever returns after fever-free period\n• Chronic conditions (asthma, diabetes) with flu\n• Age >65 or <2 years with flu symptoms\n• Pregnant with flu symptoms\n\n**Call emergency services (ambulance) for:**\n• Signs of heart attack or stroke\n• Severe allergic reaction\n• Loss of consciousness\n• Severe injury with illness\n\nWhen in doubt, it's always better to seek professional medical advice!",
    ],
  },
  hygiene: {
    keywords: [
      "hygiene",
      "clean",
      "wash",
      "sanitize",
      "disinfect",
      "germs",
      "bacteria",
    ],
    practices: ["hand", "mask", "surface", "personal", "respiratory"],
    responses: [
      "Essential hygiene practices:\n\n🧼 **Hand hygiene:**\n• Wash hands for 20 seconds with soap\n• Use hand sanitizer with 60%+ alcohol when soap unavailable\n• Wash before eating, after bathroom, after coughing/sneezing\n• Avoid touching face with unwashed hands\n\n😷 **Respiratory hygiene:**\n• Wear masks in crowded/enclosed spaces\n• Cover coughs/sneezes with tissue or elbow\n• Dispose tissues immediately\n• Maintain 3-6 feet distance when someone is sick\n\n🏠 **Environmental hygiene:**\n• Disinfect frequently touched surfaces daily\n• Ensure good ventilation\n• Don't share personal items\n• Wash clothes and bedding regularly in hot water\n\nSource: WHO Hygiene Guidelines",
      "Proper hygiene techniques:\n\n**Correct handwashing steps:**\n1. Wet hands with clean running water\n2. Apply soap and lather well\n3. Scrub all surfaces for 20 seconds\n4. Clean under nails and between fingers\n5. Rinse thoroughly\n6. Dry with clean towel or air dry\n\n**Surface cleaning:**\n• Use EPA-approved disinfectants\n• Clean phones, keyboards, doorknobs daily\n• Let disinfectant sit for recommended time\n\n**Personal hygiene:**\n• Shower daily\n• Change clothes if exposed to illness\n• Keep nails short and clean\n• Avoid sharing towels or utensils",
    ],
  },
  lifestyle: {
    keywords: [
      "lifestyle",
      "exercise",
      "sleep",
      "stress",
      "habits",
      "routine",
      "wellness",
    ],
    aspects: ["physical", "mental", "rest", "activity", "relaxation"],
    responses: [
      "Healthy lifestyle for strong immunity:\n\n💤 **Sleep:**\n• 7-9 hours for adults\n• 8-10 hours for teenagers\n• Consistent sleep schedule\n• Dark, cool, quiet environment\n\n🏃 **Exercise:**\n• 150 minutes moderate activity/week\n• Or 75 minutes vigorous activity/week\n• Include strength training 2x/week\n• Even 10-minute walks help\n\n🧘 **Stress management:**\n• Practice deep breathing\n• Try meditation or yoga\n• Maintain social connections\n• Engage in hobbies\n\n☀️ **Other factors:**\n• Get 10-15 minutes of sunlight daily (Vitamin D)\n• Stay hydrated (8 glasses water/day)\n• Limit alcohol and avoid smoking\n• Maintain healthy weight",
      "Daily wellness routine:\n\n**Morning:**\n• Hydrate immediately upon waking\n• Light stretching or yoga\n• Nutritious breakfast\n• Brief sunlight exposure\n\n**Afternoon:**\n• Take movement breaks every hour\n• Eat balanced lunch\n• Practice good posture\n• Stay hydrated\n\n**Evening:**\n• Wind down 1 hour before bed\n• Limit screen time\n• Light dinner 3 hours before sleep\n• Relaxation techniques\n\n**Weekly goals:**\n• 3-5 exercise sessions\n• 2 strength training days\n• 1 rest day\n• Meal prep for nutrition\n• Social connection time",
    ],
  },
  vaccination: {
    keywords: [
      "vaccine",
      "vaccination",
      "immunization",
      "shot",
      "jab",
      "inject",
    ],
    types: ["flu", "covid", "pneumonia", "schedule"],
    responses: [
      "Vaccination recommendations:\n\n💉 **Annual flu vaccine:**\n• Recommended for everyone 6 months+\n• Best time: September-October\n• Takes 2 weeks for immunity\n• Reduces flu risk by 40-60%\n• Especially important for high-risk groups\n\n**High-risk groups:**\n• Adults 65+\n• Pregnant women\n• Children under 5\n• People with chronic conditions\n• Healthcare workers\n\n**Other important vaccines:**\n• Pneumococcal (for 65+ or high risk)\n• COVID-19 boosters as recommended\n• Tdap (tetanus, diphtheria, pertussis)\n\n📅 **Timing:**\n• Can get flu and COVID vaccines together\n• Consult doctor for personalized schedule\n\nSource: CDC Immunization Schedule",
      "Vaccine facts and benefits:\n\n**Why vaccinate:**\n• Prevents serious illness\n• Protects vulnerable community members\n• Reduces healthcare burden\n• Cost-effective prevention\n\n**Safety:**\n• Extensively tested\n• Side effects usually mild\n• Serious reactions very rare\n• Benefits far outweigh risks\n\n**Common side effects:**\n• Soreness at injection site\n• Mild fever or fatigue\n• Usually resolve in 1-2 days\n\n**Effectiveness:**\n• Flu vaccine updated yearly\n• May still get flu but milder\n• Helps prevent complications\n\nConsult your healthcare provider for personalized vaccination advice!",
    ],
  },
};

// Fallback responses
const fallbackResponses = [
  "I understand you're looking for health information. I can help with:\n\n• Prevention tips for flu and cold\n• Immunity-boosting foods\n• Common symptoms to watch for\n• Safe home remedies\n• When to seek medical help\n• Hygiene practices\n• Vaccination information\n\nPlease ask about any of these topics!",
  "I'm not sure I understood your question completely. Try asking about:\n\n• How to prevent seasonal illnesses\n• What foods improve immunity\n• Symptoms of flu or cold\n• Natural home remedies\n• When to see a doctor\n• Proper hygiene practices\n\nWhat would you like to know more about?",
  "Let me help you better. You can ask questions like:\n\n• 'How can I prevent the flu?'\n• 'What foods boost immunity?'\n• 'What are cold symptoms?'\n• 'Home remedies for sore throat?'\n• 'When should I see a doctor?'\n\nWhat specific health topic interests you?",
];

// Process user input and generate response
function processUserInput(input) {
  const lowerInput = input.toLowerCase();
  let bestMatch = null;
  let highestScore = 0;

  // Check each category in the rule base
  for (const [category, data] of Object.entries(ruleBase)) {
    let score = 0;

    // Check main keywords
    for (const keyword of data.keywords) {
      if (lowerInput.includes(keyword)) {
        score += 2;
      }
    }

    // Check secondary keywords
    const secondaryKeys = Object.keys(data).filter(
      (k) => k !== "keywords" && k !== "responses"
    );
    for (const key of secondaryKeys) {
      for (const word of data[key]) {
        if (lowerInput.includes(word)) {
          score += 1;
        }
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = category;
    }
  }

  // Return appropriate response
  if (bestMatch && highestScore >= 2) {
    const responses = ruleBase[bestMatch].responses;
    return responses[Math.floor(Math.random() * responses.length)];
  } else {
    return fallbackResponses[
      Math.floor(Math.random() * fallbackResponses.length)
    ];
  }
}

// Send message function
function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();

  if (message === "") return;

  // Add user message to chat
  addMessage(message, "user");

  // Clear input
  input.value = "";

  // Show typing indicator
  showTyping();

  // Simulate processing time and add bot response
  setTimeout(() => {
    hideTyping();
    const response = processUserInput(message);
    addMessage(response, "bot");
  }, 800 + Math.random() * 700);
}

// Add message to chat
function addMessage(text, sender) {
  const chatContainer = document.getElementById("chatContainer");
  const messageDiv = document.createElement("div");
  messageDiv.className = `${sender}-message message`;

  // Convert markdown-like formatting to HTML
  let formattedText = text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br>")
    .replace(/• /g, "• ");

  messageDiv.innerHTML = `<div class="bubble">${formattedText}</div>`;
  chatContainer.appendChild(messageDiv);

  // Scroll to bottom
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Send suggested question
function sendSuggestion(text) {
  document.getElementById("userInput").value = text;
  sendMessage();
}

// Show typing indicator
function showTyping() {
  document.getElementById("typingIndicator").style.display = "block";
}

// Hide typing indicator
function hideTyping() {
  document.getElementById("typingIndicator").style.display = "none";
}

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("userInput").focus();
});
