const MAX_BET = 3000;

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


// Variables 

// Message
var displayMessage = document.querySelector(".message");

// Hands
var hand = [];
var handElement = document.querySelector(".hand");

var playerHand = [];
var playerHandElement = document.querySelector(".hand.player");

var dealerHand = [];
var dealerHandElement = document.querySelector(".hand.dealer");

// Balance
var balance = document.getElementById("balance");
var balanceAmount = parseInt(localStorage.getItem("balance")) || 0;
var betAmount = 0;

// Bets
var bet5 = document.getElementById("bet5");
var bet10 = document.getElementById("bet10");
var bet25 = document.getElementById("bet25");
var bet50 = document.getElementById("bet50");
var bet100 = document.getElementById("bet100");
var bet500 = document.getElementById("bet500");

var currentBet = document.getElementById("currentBet");
var betAmount = 0;

var tableBets = document.querySelector(".table-bets");
var tableBet5 = '<div class="bet bet5"><p>5</p></div>';
var tableBet10 = '<div class="bet bet10"><p>10</p></div>';
var tableBet25 = '<div class="bet bet25"><p>25</p></div>';
var tableBet50 = '<div class="bet bet50"><p>50</p></div>';
var tableBet100 = '<div class="bet bet100"><p>100</p></div>';
var tableBet500 = '<div class="bet bet500"><p>500</p></div>';


function showMessage(message){
    displayMessage.style.opacity = "1";
    document.getElementById("message").innerHTML = message;

    setTimeout(function(){
        displayMessage.style.opacity = "0";
    }, 3000);
}

// Util function to add balance
function addBalance() {
    // Ensure balanceAmount is a number
    const balanceAmount = parseInt(localStorage.getItem("balance")) || 0;
    const newBalance = balanceAmount + parseInt(prompt("Enter amount to add: "));
    localStorage.setItem("balance", newBalance);
    document.getElementById("balance").innerHTML = newBalance;
    window.location.reload();
    return newBalance;
}

function eraseBalance() {
    localStorage.setItem("balance", 0);
    document.getElementById("balance").innerHTML = 0;
    window.location.reload();
}

function displayBalance() {
    var balanceElement = document.getElementById("balance");
    var balance = parseInt(localStorage.getItem("balance")) || 0; // Default to 0 if balance is not set
    balanceElement.innerHTML = balance; // Update the balance displayed on the UI
}

function clearBet() {
    clearTableBets();
    betAmount = 0;
    displayBalance();
    updateCurrentBet();
}

function updateCurrentBet() {
    currentBet.innerHTML = betAmount;
}

function clearTableBets() {
    tableBets.innerHTML = "";
}

function updateCurrentBet() {
    currentBet.innerHTML = betAmount;
}    

function placeBets() {
    function updateTableBets() {
        clearTableBets();
        
        var remainingBetAmount = betAmount;
    
        while (remainingBetAmount >= 500) {
            tableBets.innerHTML += tableBet500;
            remainingBetAmount -= 500;
        }
        while (remainingBetAmount >= 100) {
            tableBets.innerHTML += tableBet100;
            remainingBetAmount -= 100;
        }
        while (remainingBetAmount >= 50) {
            tableBets.innerHTML += tableBet50;
            remainingBetAmount -= 50;
        }
        while (remainingBetAmount >= 25) {
            tableBets.innerHTML += tableBet25;
            remainingBetAmount -= 25;
        }
        while (remainingBetAmount >= 10) {
            tableBets.innerHTML += tableBet10;
            remainingBetAmount -= 10;
        }
        while (remainingBetAmount >= 5) {
            tableBets.innerHTML += tableBet5;
            remainingBetAmount -= 5;
        }
    }

    bet5.addEventListener("click", function() {
        if (balanceAmount >= 5 && betAmount + 5 <= balanceAmount && betAmount < MAX_BET) {
            betAmount += 5;
            displayBalance();
            updateTableBets();
            updateCurrentBet();
        }
    });

    bet10.addEventListener("click", function() {
        if (balanceAmount >= 10 && betAmount + 10 <= balanceAmount && betAmount < MAX_BET) {
            betAmount += 10;
            displayBalance();
            updateTableBets();
            updateCurrentBet();
        }
    });

    bet25.addEventListener("click", function() {
        if (balanceAmount >= 25 && betAmount + 25 <= balanceAmount && betAmount < MAX_BET) {
            betAmount += 25;
            displayBalance();
            updateTableBets();
            updateCurrentBet();
        }
    });

    bet50.addEventListener("click", function() {
        if (balanceAmount >= 50 && betAmount + 50 <= balanceAmount && betAmount < MAX_BET) {
            betAmount += 50;
            displayBalance();
            updateTableBets();
            updateCurrentBet();
        }
    });

    bet100.addEventListener("click", function() {
        if (balanceAmount >= 100 && betAmount + 100 <= balanceAmount && betAmount < MAX_BET) {
            betAmount += 100;
            displayBalance();
            updateTableBets();
            updateCurrentBet();
        }
    });

    bet500.addEventListener("click", function() {
        if (balanceAmount >= 500 && betAmount + 500 <= balanceAmount && betAmount < MAX_BET) {
            betAmount += 500;
            displayBalance();
            updateTableBets();
            updateCurrentBet();
        }
    });

    customBet.addEventListener("click", function() {
        var customBetAmount = parseInt(customBet.value);
        if (balanceAmount >= customBetAmount && betAmount + customBetAmount <= balanceAmount && betAmount < MAX_BET) {
            balanceAmount -= customBetAmount;
            betAmount += customBetAmount;
            displayBalance();
            updateTableBets();
            updateCurrentBet();
        }
    });

    var clearBetButton = document.getElementById("clearBet");
    clearBetButton.addEventListener("click", clearBet);

    var bet = document.getElementById("bet");
    bet.addEventListener("click", function() {
        if (betAmount > 0  && betAmount <= balanceAmount) {
            playBlackjack();
        }
    });

    var preselectedButtons = document.querySelectorAll(".preselected button");
    preselectedButtons.forEach(button => {
        if (balanceAmount < parseInt(button.innerHTML)) {
            button.style.color = "#f16b5b";
            button.style.border = "2px solid #f16b5b";
            button.style.pointerEvents = "none";
        }
    });

}

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function dealCard(deck) {
    return deck.pop();
}

function showActionButtons() {
    var actions = document.querySelector(".actions");
    actions.style.opacity = "1";
    actions.style.transform = "translateY(0)";
}

function hideActionButtons() {
    var actions = document.querySelector(".actions");
    actions.style.opacity = "0";
    actions.style.transform = "translateY(100%)";
}


function clearCards() {
    var playerHand = document.querySelector(".hand.player");
    var dealerHand = document.querySelector(".hand.dealer");
    playerHand.innerHTML = "";
    dealerHand.innerHTML = "";
}

function startGame() {
    clearCards();

    var betBlock = document.getElementById("bets");
    betBlock.style.pointerEvents = "none";
    betBlock.style.opacity = "0";

    var betButtons = document.querySelector(".betButtons");
    betButtons.style.pointerEvents = "none";
    betButtons.style.opacity = "0";
    betButtons.style.transform = "translateY(100%)";

    var betSign = document.getElementById("sign");
    betSign.style.opacity = "0";
    setTimeout(function() {
        betSign.style.display = "none";
    }, 500);

    var handValues = document.querySelector(".hand-value");
    handValues.style.opacity = "1";
    handValues.style.pointerEvents = "auto";
}

function dealCardToPlayer() {
    var card = dealCard(deck);
    playerHand.push(card);

    var cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.style.animation = "dealCardPlayer 0.5s ease-in-out forwards";
    cardElement.innerHTML = `
        <div class="number">${card.value}</div>
        <div class="suit">${card.suit}</div>
        <div class="number number--sideways">${card.value}</div>
    `;
    handElement.appendChild(cardElement);
    playerHandElement.appendChild(cardElement);

    updateHandValue(playerHand, document.getElementById("player-value"));
}

function dealCardToDealer() {
    var card = dealCard(deck);
    dealerHand.push(card);

    var cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.style.animation = "dealCardDealer 0.5s ease-in-out forwards";
    cardElement.innerHTML = `
        <div class="number">${card.value}</div>
        <div class="suit">${card.suit}</div>
        <div class="number number--sideways">${card.value}</div>
    `;
    handElement.appendChild(cardElement);
    dealerHandElement.appendChild(cardElement);

    updateHandValue(dealerHand, document.getElementById("dealer-value"));
}

function updateHandValue(hand, handValueElement) {
    var handValue = 0;
    var hasAce = false;

    hand.forEach(card => {
        if (card.value === 'J' || card.value === 'Q' || card.value === 'K') {
            handValue += 10;
        } else if (card.value === 'A') {
            hasAce = true;
            handValue += 11;
        } else {
            handValue += parseInt(card.value);
        }
    });

    if (hasAce && handValue > 21) {
        handValue -= 10;
    }
    
    handValueElement.innerHTML = handValue;
    return handValue;
}

// Add event listeners outside playerTurn function
document.getElementById("hit").addEventListener("click", function() {
    dealCardToPlayer();
    var playerValue = updateHandValue(playerHand, document.getElementById("player-value"));
    if (playerValue === 21 && playerHand.length === 2) {
        showMessage("Blackjack!");
        Blackjack();
    } else if (playerValue > 21) {
        showMessage("Busted!");
        dealerWins();
    }
});

document.getElementById("stand").addEventListener("click", function() {
    hideActionButtons();
    dealerTurn();
});

// Modify playerTurn function
function playerTurn() {
    showActionButtons();
}

function dealerTurn() {
    var dealerValue = updateHandValue(dealerHand, document.getElementById("dealer-value"));
    while (dealerValue < 17) {
        dealCardToDealer();
        dealerValue = updateHandValue(dealerHand, document.getElementById("dealer-value"));
        setTimeout(() => { }, 500);
    }

    if (dealerValue > 21) {
        showMessage("Dealer busted!");
        playerWins();
    } else {
        var playerValue = updateHandValue(playerHand, document.getElementById("player-value"));
        if (playerValue > dealerValue) {
            showMessage("You win!");
            playerWins();
        } else if (playerValue < dealerValue) {
            showMessage("Dealer wins!");
            dealerWins();
        } else {
            showMessage("Push!");
            setTimeout(() => { endGame(); }, 3000);
        }
    }
}

function endGame() {
    window.location.reload();
}

function playerWins() {
    console.log("You win!")
    var balance = parseInt(localStorage.getItem("balance"));
    var betAmount = parseInt(document.getElementById("currentBet").innerHTML);
    var newBalance = balance + betAmount;
    localStorage.setItem("balance", newBalance);
    displayBalance();
    setTimeout(() => { endGame(); }, 3000);
}

function dealerWins() {
    console.log("Dealer wins!");

    // Parsing balance and betAmount as numbers
    var balance = parseInt(localStorage.getItem("balance")) || 0; // Default to 0 if balance is not set
    var betAmount = parseInt(document.getElementById("currentBet").innerHTML) || 0; // Default to 0 if currentBet is not set

    // Calculate new balance
    var newBalance = balance - betAmount;

    // Update balance in localStorage and display
    localStorage.setItem("balance", newBalance);
    displayBalance();

    // Delay the end of the game for 3 seconds
    setTimeout(() => { 
        endGame(); 
    }, 3000);
}


function Blackjack() {
    console.log("Blackjack!")
    var balance = parseInt(localStorage.getItem("balance"));
    var betAmount = parseInt(document.getElementById("currentBet").innerHTML);
    var newBalance = balance + betAmount * 1.5;
    localStorage.setItem("balance", newBalance);
    displayBalance();
    setTimeout(() => { endGame(); }, 3000);
}


// Display balance
document.getElementById("balance").innerHTML = localStorage.getItem("balance") || 0;

placeBets();

function playBlackjack() {
    startGame();
    shuffleDeck(deck);
        
    // Clear the player's hand before dealing new cards
    playerHand = [];
    dealerHand = [];


    dealCardToPlayer();
    setTimeout(dealCardToDealer, 500);
    playerTurn();
}