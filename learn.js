function openCity(evt, cityName) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  

  document.getElementById("25").onclick = function() {openCity(Event, 'tab25')}
  document.getElementById("50").onclick = function() {openCity(Event, 'tab50')}
  document.getElementById("150").onclick = function() {openCity(Event, 'tab150')}
  document.getElementById("200").onclick = function() {openCity(Event, 'tab200')}
  document.getElementById("400").onclick = function() {openCity(Event, 'tab400')}

  document.getElementById("25").click();

 