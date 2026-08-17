
const launch = new Date("2026-08-21T08:00:00-05:00");

const ids = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds")
};

function pad(n){ return String(n).padStart(2,"0"); }

function updateCountdown(){
  const now = new Date();
  let diff = launch - now;

  if(diff <= 0){
    Object.values(ids).forEach(el => el.textContent = "00");
    document.querySelector(".countdown-title").textContent = "The store is launching now";
    document.querySelector(".status").innerHTML = '<span class="dot"></span> Store is opening';
    return;
  }

  const days = Math.floor(diff / 86400000);
  diff %= 86400000;
  const hours = Math.floor(diff / 3600000);
  diff %= 3600000;
  const minutes = Math.floor(diff / 60000);
  diff %= 60000;
  const seconds = Math.floor(diff / 1000);

  ids.days.textContent = pad(days);
  ids.hours.textContent = pad(hours);
  ids.minutes.textContent = pad(minutes);
  ids.seconds.textContent = pad(seconds);
}

updateCountdown();
setInterval(updateCountdown,1000);
