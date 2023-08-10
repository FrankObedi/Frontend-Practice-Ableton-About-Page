var country_list = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const countryContainer = document.querySelector(".js-country-options");
const countryOptGroup = document.createElement("optgroup");
countryOptGroup.setAttribute("label", "All Countries/Regions");

// populate countries into new select optgroup
country_list.map((country) => {
  let countryOption = document.createElement("option");
  countryOption.innerHTML = country;
  return countryOptGroup.appendChild(countryOption);
});

// add the new options to the select element
countryContainer.appendChild(countryOptGroup);

// desktop nav More + toggle
const collapsibleContent = document.querySelector(
  ".collapsible-content-container"
);
const collapsibleToggle = document.querySelector(".collapsible-toggle");
const collapsibleToggleIcon = document.querySelector(".bx-plus");
let collapsibleOpen = false;
// function to collapsible content
const handleCollapsible = () => {
  collapsibleOpen = !collapsibleOpen;
  collapsibleContent.classList.toggle("open-collapsible");

  if (collapsibleOpen) {
    collapsibleToggleIcon.classList.add("bx-minus");
    collapsibleToggleIcon.classList.remove("bx-plus");
  } else {
    collapsibleToggleIcon.classList.remove("bx-minus");
    collapsibleToggleIcon.classList.add("bx-plus");
  }
};

// tablet and mobile menu toggle
const menu = document.querySelector(".main-nav-content");
const secondaryNav = document.querySelector(".secondary-nav");
const menuToggle = document.querySelector(".menu-toggle");
const menuToggleIcon = document.querySelector(".bx-caret-down");
const logo = document.querySelector(".main-site-logo");

// function to toggle menu
const setOpenNav = () => {
  logo.classList.toggle("white-logo");
  menuToggle.classList.toggle("white-menu-toggle");
  menuToggleIcon.classList.toggle("bx-caret-up");
  menu.classList.toggle("visible-nav");
  secondaryNav.classList.toggle("sticky");
};

// Make secondary nav sticky when scrolling up
let lastScroll = 0;
window.addEventListener("scroll", function () {
  const currentScrollPos = window.scrollY;
  if (currentScrollPos > lastScroll) {
    secondaryNav.style.top = "-140px";
  }

  if (window.matchMedia("(max-width: 1024px)").matches) {
  } else {
    secondaryNav.style.top = "0";
    secondaryNav.style.position = "sticky";
    secondaryNav.style.zIndex = "15";
  }
  // if (currentScrollPos <= 0) {
  //   secondaryNav.style.zIndex = "1";
  //   console.log(lastScroll);
  // }
  lastScroll = currentScrollPos;
});
