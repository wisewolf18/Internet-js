function checkInternetConnection() {
  const statusText = document.getElementById("status-text");
  const wifiIcon = document.getElementById("wifi-icon");

  if (navigator.onLine) {
      wifiIcon.classList.remove("fa-wifi-slash"); 
      wifiIcon.classList.add("fa-wifi");
      statusText.innerHTML = "You are connected to the internet!";
      statusText.style.color = "green";
  } else {
      wifiIcon.classList.remove("fa-wifi");
      wifiIcon.classList.add("fa-wifi-slash");
      statusText.innerHTML = "You are not connected to the internet.";
      statusText.style.color = "red";
  }
}
checkInternetConnection();
window.addEventListener("online", checkInternetConnection);
window.addEventListener("offline", checkInternetConnection);
