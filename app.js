const input = document.querySelector("#phone");

// Fetch geolocation details using ipinfo.io
fetch("https://ipinfo.io?token=357f2401d597d3")
  .then((response) => response.json())
  .then((data) => {
    const countryCode = data.country;
    const flagElement = document.querySelector(".iti__selected-flag");
    flagElement.className = `iti__flag iti__${countryCode}`;

    const iti = window.intlTelInput(input, {
      separateDialCode: true,
      initialCountry: countryCode,
    });
  })
  .catch((error) => {
    console.error("Error fetching geolocation details:", error);
    // Fallback to a default country code if there was an error in fetching geolocation
    const iti = window.intlTelInput(input, {
      separateDialCode: true,
      initialCountry: "us", // You can set a default country code here (e.g., "us" for the United States)
    });
  });
