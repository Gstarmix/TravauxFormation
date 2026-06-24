function updateCountdown() {
  const countdownDate = new Date('January 27, 2027').getTime();
  const now = new Date().getTime();
  const timeRemaining = countdownDate - now;
  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;
  const daysRemaining = Math.floor(timeRemaining / days);
  const hoursRemaining = Math.floor(timeRemaining % days / hours);
  const minutesRemaining = Math.floor(timeRemaining % hours / minutes);
  const secondsRemaining = Math.floor(timeRemaining % minutes / seconds);
  document.getElementById('days').textContent = daysRemaining;
  document.getElementById('hours').textContent = hoursRemaining;
  document.getElementById('minutes').textContent = minutesRemaining;
  document.getElementById('seconds').textContent = secondsRemaining;
}
updateCountdown();
setInterval(updateCountdown, 1000);