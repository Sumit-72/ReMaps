var map;


function initMap() {
  var indiaCenter = { lat: 23.4194176, lng: 85.4409754 }; //23.4194177,85.4409754,15.16z
  map = new google.maps.Map(document.getElementById("map"), {
    center: indiaCenter,
    zoom: 15,
  });

  //23.41299, 85.43970
  //23.41271265633959, 85.44161762033603
  var locations = [
    {
      lat: 23.41299,
      lng: 85.4397,
      title: "Delhi",
      img: "https://th.bing.com/th?id=OIP._dpxdJcbfJnyecpAR4h9agHaE9&w=305&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      detail: "Capital of India",
      url1: "#librarySection",
      url2: "",
    },
    {
      lat: 23.41271265633959,
      lng: 85.44161762033603,
      title: "Mumbai",
      img: "https://wallpaperaccess.com/full/1616136.jpg",
      detail: "Economic Capital of India",
      url1: "#R&dSection",
      url2: "https://en.wikipedia.org/wiki/Mumbai",
    },
  ];

  locations.forEach(function (location) {
    var marker = new google.maps.Marker({
      position: location,
      map: map,
      title: location.title,
    });

    var infoWindow = new google.maps.InfoWindow({
      content:
        '<div class="info-window">' +
        '<a href="' +
        location.url1 +
        '" target="_blank" style="display: block; text-decoration: none; color: inherit;">' +
        '<p style="font-size:large; font-weight:bold">' +
        location.title +
        "</p>" +
        "<p>" +
        location.detail +
        "</p>" +
        '<img src="' +
        location.img +
        '" alt="' +
        location.title +
        '" style="width: 100px; height: auto;">' +
        "</a>" +
        '<div style="margin-top: 10px;">' +
        '<a href="' +
        location.url1 +
        '" target="_blank">' +
        '<button style="margin-right: 10px; padding: 5px 10px; font-size: medium;">View Details</button>' +
        "</a>" +
        '<a href="' +
        location.url2 +
        '" target="_blank">' +
        '<button style="padding: 5px 10px; font-size: medium;">View Maps</button>' +
        "</a>" +
        "</div>" +
        "</div>",
    });

    marker.addListener("click", function () {
      infoWindow.open(map, marker);
    });
  });
}

window.onload = initMap;

// Text-to-speech functionality
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const suggestionsContainer = document.getElementById("suggestions");
  const speakButton = document.getElementById("speakButton");

  // Sample items to search from
  const items = [
    "R&D Building",
    "Shorbagh",
    "Library",
    "Mehek Canteen",
    "Apni Rasoi",
    "Upper Lawn",
  ];

  // Autocomplete functionality
  searchInput.addEventListener("input", function () {
    const input = searchInput.value.toLowerCase();
    suggestionsContainer.innerHTML = ""; // Clear suggestions

    if (input) {
      const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(input)
      );

      filteredItems.forEach((item) => {
        const suggestion = document.createElement("div");
        suggestion.textContent = item;

        // Set the input value when clicking a suggestion
        suggestion.addEventListener("click", function () {
          searchInput.value = item;
          suggestionsContainer.innerHTML = ""; // Clear suggestions
          suggestionsContainer.style.display = "none"; // Hide suggestions
        });

        suggestionsContainer.appendChild(suggestion);
      });

      suggestionsContainer.style.display =
        filteredItems.length > 0 ? "block" : "none"; // Show suggestions if any
    } else {
      suggestionsContainer.style.display = "none"; // Hide if input is cleared
    }
  });

  // Text-to-Speech functionality
  speakButton.addEventListener("click", () => {
    const text = searchInput.value;
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    } else {
      console.log("Text-to-speech not supported");
    }
  });
});

// Check if the URL contains the section ID and highlight it
window.addEventListener("DOMContentLoaded", function () {
  if (window.location.hash) {
    var sectionId = window.location.hash.substring(1); // Get the section ID without the #
    var section = document.getElementById(sectionId);

    if (section) {
      // Add the highlight class to the section
      section.classList.add("highlighted");

      // Optionally, remove the highlight after some time (e.g., after 3 seconds)
      setTimeout(function () {
        section.classList.remove("highlighted");
      }, 3000); // Adjust the duration as needed
    }
  }
});
