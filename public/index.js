function getCurrentDayOfWeek() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay();
    const currentDayOfWeek = daysOfWeek[currentDayIndex];
    return currentDayOfWeek;
  }
  
  const dayOfWeekDiv = document.getElementById("dayOfWeek");
  dayOfWeekDiv.textContent = getCurrentDayOfWeek();
  
  function displayName() {
    const nameDiv = document.getElementById("nameDisplay");
    nameDiv.textContent = "Jet";
  }
  
  function setImageSource() {
    const myImage = document.getElementById("myImage");
    myImage.src =
      "https://ca.slack-edge.com/T05FFAA91JP-U05RD638XE0-220b94dd286d-512";
  }
  
  function setTrack() {
    const trackDiv = document.getElementById("mytrack");
    mytrack.textContent = "Track-Frontend";
  }
  
  function currentUTC() {
    const currentTimeDiv = document.getElementById("currentTime");
  
    function updateUTCTime() {
      const currentUTCTime = new Date().getTime();
      currentTimeDiv.textContent = currentUTCTime;
    }
    updateUTCTime();
    setInterval(updateUTCTime, 1);
  }
  
  displayName();
  setImageSource();
  setTrack();
  currentUTC();