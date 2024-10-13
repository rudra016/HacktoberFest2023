const truth = [
   "What is your biggest fear?",
    "Have you ever told a secret you promised to keep?",
    "What's the most embarrassing thing you've done recently?",
    "If you could switch lives with someone for a day, who would it be?",
    "What's your guilty pleasure TV show?",
    "Have you ever cheated on a test?",
    "What's a habit you have that you wish you could break?",
    "What's your most irrational fear?",
    "Have you ever lied to get out of trouble?",
    "What's the weirdest dream you've ever had?",
    "If you could meet any historical figure, who would it be?",
    "What's your most embarrassing childhood memory?",
    "Have you ever pretended to like a gift you didn't actually like?",
    "What's the last thing you searched for on the internet?",
    "If you could have any superpower, what would it be?",
    "Have you ever stolen something?",
    "What's your most awkward social moment?",
    "If you could time travel, would you go to the past or the future?",
    "What's the last lie you told?",
    "If you could switch places with a friend for a day, who would it be?",
    "What's the most embarrassing song on your playlist?",
    "Have you ever eavesdropped on someone else's conversation?",
    "What's the silliest thing you believed as a child?",
    "If you could have dinner with any fictional character, who would it be?",
    "What's a skill you wish you had?",
    "Have you ever regretted breaking up with someone?",
    "What's the most unusual food you've ever tried?",
    "If you could live in any fictional world, where would it be?",
    "What's your most irrational pet peeve?",
    "Have you ever faked being sick to get out of something?",
    "What's a goal you've always had but haven't achieved yet?",
    "What's the most embarrassing nickname you've ever had?",
    "If you could erase one thing from your past, what would it be?",
    "What's the strangest talent you have?",
    "Have you ever cried during a movie?",
    "What's the most rebellious thing you did as a teenager?",
    "If you could have any job in the world, what would it be?",
    "What's a bad habit you wish you could break?",
    "Have you ever had a crush on a friend's sibling?",
    "What's the weirdest rumor you've heard about yourself?",
    "If you could be famous for one thing, what would it be?",
    "What's the most embarrassing thing you've posted on social media?",
    "Have you ever cheated in a game?",
    "If you could be any age for a week, what age would you choose?",
    "What's the most childish thing you still do?",
    "If you could undo one mistake in your life, what would it be?",
    "What's the most embarrassing app on your phone?",
    "Have you ever sent a text to the wrong person and regretted it?",
    "If you could have any accent, what would it be?",
    "What's the most embarrassing nickname you've given someone else?",
    "Have you ever been caught in a lie?",
    "If you could have any fictional creature as a pet, what would it be?",
    "What's the most unusual thing you collect?",
    "If you could have dinner with any celebrity, dead or alive, who would it be?",
    "What's the most embarrassing thing your parents have done in front of your friends?",
    "Have you ever had a crush on a fictional character?",
    "If you could live in any era, past or future, when would it be?",
    "What's the most embarrassing thing you've done while drunk?",
    "If you could be any superhero, who would it be?",
    "What's the most embarrassing thing you've said in front of a crowd?",
    "Have you ever shoplifted?",
    "If you could have any job for a day, what would it be?",
    "What's the most embarrassing thing you've done to impress someone?",
    "If you could be any famous person for a day, who would it be?",
    "What's the most unusual pet you would want to own?",
    "Have you ever regretted a hairstyle choice?"
];

const dare = [
   "Dance in public for one minute.",
    "Send a funny meme to the fifth person in your contact list.",
    "Speak in an accent of your choice for the next 5 minutes.",
    "Post a joke on your social media.",
    "Do 10 jumping jacks right now.",
    "Call a friend and sing 'Happy Birthday' to them, even if it's not their birthday.",
    "Wear your clothes backward for the next hour.",
    "Send a random compliment to a family member.",
    "Take a silly selfie and set it as your profile picture for an hour.",
    "Do a plank for as long as you can.",
    "Share an embarrassing moment from your past with a friend.",
    "Draw a funny doodle and share it on your Instagram story.",
    "Send a random, positive message to someone you haven't spoken to in a while.",
    "Eat a spoonful of a spicy condiment (if you can handle it).",
    "Balance a book on your head and walk across the room.",
    "Do your best celebrity impersonation for the next 3 minutes.",
    "Text a friend a random word and see how they respond.",
    "Make a silly face and take a photo for your profile picture.",
    "Share a funny childhood story with a family member.",
    "Do 20 jumping jacks right now.",
    "Call a friend and tell them a cheesy joke.",
    "Draw a mustache on your face using a washable marker.",
    "Send a message to your crush or significant other with a corny pickup line.",
    "Do your best animal impression for the next 2 minutes.",
    "Share a random fact about yourself on social media.",
    "Wear socks on your hands for the next 10 minutes.",
    "Send a voice message to a friend singing a snippet of your favorite song.",
    "Take a funny selfie with a household item and send it to a friend.",
    "Post a funny meme on your main social media account.",
    "Do 15 sit-ups right now.",
    "Text a friend a tongue twister and see if they can say it correctly.",
    "Share a childhood photo on your social media.",
    "Walk backward for the next 5 minutes.",
    "Call a family member and tell them a made-up story with a twist.",
    "Balance a spoon on your nose for as long as you can.",
    "Send a funny GIF to a friend without any context.",
    "Do your best impression of a famous movie character.",
    "Take a funny selfie with a household object and send it to a friend.",
    "Post a silly video of yourself on your Instagram story.",
    "Do 10 push-ups right now.",
    "Text a friend a pun and see if they get it.",
    "Wear a hat or headpiece made of aluminum foil for the next 15 minutes.",
    "Send a message to a friend with a random fun fact.",
    "Hop on one foot around the room for the next 2 minutes.",
    "Call a friend and tell them an exaggerated, fictional story.",
    "Take a silly selfie with a funny filter and send it to a friend.",
    "Share a silly joke on your social media.",
    "Draw a funny doodle on your hand with a pen.",
    "Text a friend a riddle and see if they can solve it.",
    "Do 5 cartwheels in a row (if space allows).",
    "Call a friend and sing a random song chorus to them.",
    "Wear mismatched socks for the next hour.",
    "Send a virtual high-five to a friend.",
    "Take a funny selfie with a household item and post it on your story.",
    "Do 10 burpees right now.",
    "Text a friend a compliment and brighten their day.",
    "Share a silly childhood story with a friend.",
    "Call a family member and tell them a funny joke.",
    "Draw a smiley face on your hand with a marker.",
    "Post a silly video of yourself on your main social media account.",
    "Do your best dance moves for the next 3 minutes.",
    "Text a friend a picture of your pet or a cute animal.",
    "Walk on tiptoes around the room for the next 5 minutes.",
    "Call a friend and share a random, interesting fact.",
    "Take a funny selfie with a silly expression and send it to a friend.",
    "Post a joke on your main social media account.",
    "Do 10 jumping jacks while saying a tongue twister.",
    "Text a friend a quote from your favorite movie or TV show.",
    "Wear sunglasses indoors for the next 15 minutes.",
    "Send a virtual hug to a friend.",
    "Take a silly selfie with a funny filter and post it on your main account.",
    "Share a random, positive message on your social media.",
    "Call a family member and tell them a funny story from your day.",
    "Draw a funny doodle on a piece of paper and share it with a friend.",
    "Text a friend a pun and challenge them to come up with a better one.",
    "Wear a hat or headpiece made of paper for the next 10 minutes.",
    "Do 15 sit-ups while humming your favorite song.",
    "Call a friend and tell them a random, interesting fact.",
    "Take a silly selfie with a household object and post it on your main account.",
    "Share a childhood photo on your main social media account.",
    "Walk backward around the room while singing a song.",
    "Text a friend a riddle and see if they can solve it.",
    "Draw a funny face on your hand with a pen and show it to a friend.",
    "Post a funny meme on your Instagram story.",
    "Do your best impression of a famous celebrity.",
    "Call a family member and tell them a made-up, funny story.",
    "Take a funny selfie with a silly expression and post it on your story.",
    "Send a message to a friend with a random fun fact.",
    "Do 10 push-ups while reciting a tongue twister.",
    "Text a friend a compliment and make their day.",
    "Wear socks on your hands for the next 10 minutes.",
    "Call a friend and sing a snippet of a random song to them.",
    "Share a silly joke on your Instagram story.",
    "Draw a mustache on your face with a washable marker.",
    "Send a virtual high-five."
];

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function truthf() {
    let truthn = getRandomElement(truth);
    document.querySelector('.out').innerHTML = `<p class="text-dark fw-bold">${truthn}</p>`;
}

function daref() {
    let daren = getRandomElement(dare);
    document.querySelector('.out').innerHTML = `<p class="text-dark fw-bold">${daren}</p>`;
}
