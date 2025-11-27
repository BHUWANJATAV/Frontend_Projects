let subjects = [
  "A confused pigeon",
  "Shahrukh Khan's duplicate",
  "Virat Kohli in disguise",
  "A dancing traffic cop",
  "Modi ji's chaiwala friend",
  "A dog wearing sunglasses",
  "A monkey with WiFi",
  "Auto rickshaw driver turned DJ",
  "A cow with attitude",
  "A student who forgot exam date",
  "A ghost applying for PAN card",
  "A cat doing yoga",
  "A panipuri vendor with MBA",
  "A buffalo attending Zoom call",
  "A kid selling samosas on LinkedIn",
  "A hacker who only hacks toasters",
  "A man who married his laptop",
  "A parrot who speaks Bhojpuri",
  "A lizard doing stand-up comedy",
  "A chai cup with political opinions"
];

let actions = [
  "licks a banana",
  "dances like a penguin",
  "sings in a bathroom",
  "challenges a pigeon to chess",
  "slips on a samosa",
  "launches a rocket made of papad",
  "eats 100 golgappas",
  "fights with a shadow",
  "does moonwalk in traffic",
  "joins a tea party with aliens",
  "argues with a chaiwala over biscuit price",
  "starts a fashion show for cows",
  "plays cricket with vegetables",
  "gets chased by a flying chappal",
  "opens a gym for ants",
  "teaches yoga to buffaloes",
  "hacks a toaster",
  "becomes brand ambassador of nimbu-pani",
  "gets stuck in a revolving door",
  "invented a language called 'BiryaniScript'"
];

const places = [
  "in a haunted chai shop",
  "at the top of a water tank",
  "inside a moving auto",
  "during a samosa eating contest",
  "on a Zoom call with aliens",
  "at a wedding where no one was invited",
  "in a traffic jam caused by cows",
  "at the local paan shop",
  "inside a fridge during summer",
  "on a rooftop DJ party with monkeys",
  "at a dhaba serving only Maggi",
  "in a secret tunnel under Chor Bazar",
  "during a rain dance in winter",
  "at a temple where WiFi is free",
  "in a metro station with no metro",
  "on a flying carpet over Jaipur",
  "at a political rally for pigeons",
  "inside a giant samosa costume",
  "at a roadside tea stall with 5-star rating",
  "during a cricket match between goats"
];

function generateHeadline(){
    let subject = subjects[Math.floor(Math.random()*subjects.length)];
    let action = actions[Math.floor(Math.random()*actions.length)];
    let place = places[Math.floor(Math.random()*places.length)];

    let headline = ` BREAKING NEWS : ${subject} ${action} ${place}!`;
    document.getElementById("headline").textContent = headline;
}