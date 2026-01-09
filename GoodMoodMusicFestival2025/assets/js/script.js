const eventDate = new Date("December 25, 2025 16:00").getTime();

const timer = setInterval(() => {
    const now = new Date().getTime();
    const diff = eventDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff % (1000 * 60 * 60 * 24)) / (1000*60*60);
    const minutes = Math.floor(diff % (1000 * 60 * 60 )) / (1000*60);
    const seconds = Math.floor(diff % (1000 * 60 )) / (1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (diff < 0) {
        clearInterval(timer);
        document.querySelector(".countdown-section h3").textContent = "Event Started!";
    }
} ,1000);