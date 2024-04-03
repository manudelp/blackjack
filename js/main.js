function addBalance() {
    var addBalanceBtn = document.getElementById("addBalance");
    var balance = document.getElementById("balance");
    var balanceAmount = 0;


    balanceAmount += parseInt(prompt("Enter amount to add: "));
    localStorage.setItem("balance", balanceAmount);
    balance.innerHTML = balanceAmount;

    return balanceAmount;
}

function placeBets(balance) {
    var bet5 = document.getElementById("bet5");
    var bet10 = document.getElementById("bet10");
    var bet25 = document.getElementById("bet25");
    var bet50 = document.getElementById("bet50");
    var bet100 = document.getElementById("bet100");

    var betAmount = 0;

    var tableBets = document.querySelector(".table-bets")
    var tableBet5 = '<div class="bet bet5"><p>5</p></div>';
    var tableBet10 = '<div class="bet bet10"><p>10</p></div>';
    var tableBet25 = '<div class="bet bet25"><p>25</p></div>';
    var tableBet50 = '<div class="bet bet50"><p>50</p></div>';
    var tableBet100 = '<div class="bet bet100"><p>100</p></div>';

    function clearTableBets() {
        tableBets.innerHTML = "";
    }

    function updateTableBets() {
        clearTableBets();
        
        var remainingBetAmount = betAmount;
    
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
        betAmount += 5;
        updateTableBets();
    });

    bet10.addEventListener("click", function() {
        betAmount += 10;
        updateTableBets();
    });

    bet25.addEventListener("click", function() {
        betAmount += 25;
        updateTableBets();
    });

    bet50.addEventListener("click", function() {
        betAmount += 50;
        updateTableBets();
    });

    bet100.addEventListener("click", function() {
        betAmount += 100;
        updateTableBets();
    });

    var clearBet = document.getElementById("clearBet");
    clearBet.addEventListener("click", function() {
        betAmount = 0;
        tableBets.style.opacity = "0";
        setTimeout(() => {
            clearTableBets();
        }, 1000);
    });

    var repeatBet = document.getElementById("repeatBet");
    repeatBet.addEventListener("click", function() {
        betAmount *= 2;
    });

    var customBet = document.getElementById("customBet");
    var betBtn = document.getElementById("bet");

    customBet.addEventListener("keyup", function() {
        betAmount = parseInt(this.value);
    });

    betBtn.addEventListener("click", function() {
        var balance = document.getElementById("balance").innerHTML;
        var betAmount = document.getElementById("betAmount").innerHTML;

        if (parseInt(balance) < parseInt(betAmount)) {
            alert("Insufficient balance!");
        } else {
            playBlackjack();
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


placeBets(addBalance());
function playBlackjack() {
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
    shuffleDeck(deck);
}