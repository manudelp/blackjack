// Define the deck of cards with different suits
const deck = [
    { value: '2', suit: '♥' }, { value: '3', suit: '♥' }, { value: '4', suit: '♥' }, { value: '5', suit: '♥' },
    { value: '6', suit: '♥' }, { value: '7', suit: '♥' }, { value: '8', suit: '♥' }, { value: '9', suit: '♥' },
    { value: '10', suit: '♥' }, { value: 'J', suit: '♥' }, { value: 'Q', suit: '♥' }, { value: 'K', suit: '♥' },
    { value: 'A', suit: '♥' },
    { value: '2', suit: '♦' }, { value: '3', suit: '♦' }, { value: '4', suit: '♦' }, { value: '5', suit: '♦' },
    { value: '6', suit: '♦' }, { value: '7', suit: '♦' }, { value: '8', suit: '♦' }, { value: '9', suit: '♦' },
    { value: '10', suit: '♦' }, { value: 'J', suit: '♦' }, { value: 'Q', suit: '♦' }, { value: 'K', suit: '♦' },
    { value: 'A', suit: '♦' },
    { value: '2', suit: '♣' }, { value: '3', suit: '♣' }, { value: '4', suit: '♣' }, { value: '5', suit: '♣' },
    { value: '6', suit: '♣' }, { value: '7', suit: '♣' }, { value: '8', suit: '♣' }, { value: '9', suit: '♣' },
    { value: '10', suit: '♣' }, { value: 'J', suit: '♣' }, { value: 'Q', suit: '♣' }, { value: 'K', suit: '♣' },
    { value: 'A', suit: '♣' },
    { value: '2', suit: '♠' }, { value: '3', suit: '♠' }, { value: '4', suit: '♠' }, { value: '5', suit: '♠' },
    { value: '6', suit: '♠' }, { value: '7', suit: '♠' }, { value: '8', suit: '♠' }, { value: '9', suit: '♠' },
    { value: '10', suit: '♠' }, { value: 'J', suit: '♠' }, { value: 'Q', suit: '♠' }, { value: 'K', suit: '♠' },
    { value: 'A', suit: '♠' }
];

// Function to shuffle the deck
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Function to calculate the value of a hand
function calculateHandValue(hand) {
    let value = 0;
    let hasAce = false;

    for (let card of hand) {
        if (card.value === 'A') {
            value += 11;
            hasAce = true;
        } else if (card.value === 'K' || card.value === 'Q' || card.value === 'J') {
            value += 10;
        } else {
            value += parseInt(card.value);
        }
    }

    if (value > 21 && hasAce) {
        value -= 10;
    }

    return value;
}

// Function to deal a card from the deck
function dealCard() {
    return deck.pop();
}

// Function to play the game
function playBlackjack() {
    shuffleDeck(deck);
    console.log('Deck shuffled');

    const playerHand = [dealCard()];

    console.log('Player hand:', playerHand);

    let playerHandValue = calculateHandValue(playerHand);

    console.log('Player hand value:', playerHandValue);
}

// Start the game
playBlackjack();
