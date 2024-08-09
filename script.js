const compliments = [
    "Your curls are as wild and free as your spirit—irresistibly untamed.",
    "You’re the perfect mix of fire and finesse, and I love every bit of it.",
    "When you walk into the gym, even the weights take notice.",
    "Your red hair isn’t the only thing that’s on fire—you’ve got me burning up too.",
    "You’re not just a gym queen; you’re my everyday motivation.",
    "Your drive is as intense as your beauty, and that’s what makes you unstoppable.",
    "Every time you stress over your career, remember you’re already a star in my eyes.",
    "You’re like a matchstick—tiny, fiery, and absolutely hot.",
    "Your passion lights up my life just as much as your stunning looks do.",
    "Even when you're stressing, you're the hottest thing in the room.",
    "You’re a powerhouse of beauty and brains—no wonder I’m so captivated.",
    "The gym should be paying you for making it look so good.",
    "Your dedication to everything you do is as sexy as your smile.",
    "You’re the definition of a hot mess—in the best possible way.",
    "Your curls are as mesmerizing as your fierce determination.",
    "When you sweat it out at the gym, you’re nothing short of breathtaking.",
    "You’ve got the kind of beauty that can stop traffic and the ambition that can change the world.",
    "Even your stress is cute—just another reason I’m crazy about you.",
    "Your red-hot hair matches the fire in your soul, and it’s absolutely intoxicating.",
    "You’re a storm of beauty, power, and passion—I’m just lucky to be caught in it."
];

function getRandomPastelColor() {
    const r = Math.floor(Math.random() * 127) + 128;
    const g = Math.floor(Math.random() * 127) + 128;
    const b = Math.floor(Math.random() * 127) + 128;
    return `rgb(${r}, ${g}, ${b})`;
}

function applyPastelTheme() {
    const bgColor = getRandomPastelColor();
    const textColor = getRandomPastelColor();
    document.body.style.backgroundColor = bgColor;
    document.querySelectorAll('h1').forEach(element => {
        element.style.color = textColor;
    });
}

function showCompliment() {
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    document.getElementById('compliment').textContent = randomCompliment;
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('compliment-screen').style.display = 'flex';
}

window.onload = function() {
    applyPastelTheme();
    setTimeout(showCompliment, 5000);
};
