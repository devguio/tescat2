let coinCount = 0;

document.getElementById('game-main').addEventListener('click', function() {
    coinCount++;
    document.getElementById('coin-count').textContent = `Coins: ${coinCount}`;
});

document.getElementById('wallet-button').addEventListener('click', function() {
    alert('Wallet connected!');
});

document.getElementById('skill-button').addEventListener('click', function() {
    alert('Skills page opened!');
});

document.getElementById('worker-button').addEventListener('click', function() {
    alert('Workers page opened!');
});

document.getElementById('investment-button').addEventListener('click', function() {
    alert('Investment page opened!');
});

document.getElementById('quest-button').addEventListener('click', function() {
    alert('Quest page opened!');
});

document.getElementById('shop-button').addEventListener('click', function() {
    alert('Shop page opened!');
});

// Example functions for future features
function buyWorker() {
    // Logic to buy a worker
}

function upgradeSkill() {
    // Logic to upgrade skills
}
