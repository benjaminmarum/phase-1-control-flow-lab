function scuberGreetingForFeet(feet){
  // Write your code here!
if (feet<400) {
  return 'This one is on me!'
} else if (feet<2000){
  return 'That will be twenty bucks.'
} else if (feet<=2500){
  return 'I will gladly take your thirty bucks.'
} else {
  return 'No can do.'
}};


function ternaryCheckCity(city){
  // Write your code here!
  const destination = city ==='NYC' ? 'Ok, sounds good.' : "No go.";
  return destination;
}

let reply;
function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      reply = 'Thank you so much.';
      return reply;
    case 'not as generous':
      reply = 'Thank you.';
      return reply;
    default:
      reply = 'Bye.'
      return reply;
  }

}