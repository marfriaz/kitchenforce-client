const countriesAdd = [
  {
    name: "Réunion",
    id: "RE",
  },
];

function generateInfo() {
  var items = countriesAdd.map((country, index) => {
    return {
      name: country.name,
      id: country.id,
      territory: "EMEA",
    };
  });
  return items;
}

const NAMER = [
  { name: "Anguilla", id: "AI", territory: "NAMER" },
  { name: "Antigua and Barbuda", id: "AG", territory: "NAMER" },
  { name: "Argentina", id: "AR", territory: "NAMER" },
  { name: "Aruba", id: "AW", territory: "NAMER" },
  { name: "Bahamas", id: "BS", territory: "NAMER" },
  { name: "Barbados", id: "BB", territory: "NAMER" },
  { name: "Belize", id: "BZ", territory: "NAMER" },
  { name: "Bermuda", id: "BM", territory: "NAMER" },
  {
    name: "Bolivia (Plurinational State of)",
    id: "BO",
    territory: "NAMER",
  },
  {
    name: "Bonaire, Sint Eustatius and Saba",
    id: "BQ",
    territory: "NAMER",
  },
  { name: "Brazil", id: "BR", territory: "NAMER" },
  { name: "Canada", id: "CA", territory: "NAMER" },
  { name: "Cayman Islands", id: "KY", territory: "NAMER" },
  { name: "Chile", id: "CL", territory: "NAMER" },
  { name: "Colombia", id: "CO", territory: "NAMER" },
  { name: "Costa Rica", id: "CR", territory: "NAMER" },
  { name: "Cuba", id: "CU", territory: "NAMER" },
  { name: "Curaçao", id: "CW", territory: "NAMER" },
  { name: "Dominica", id: "DM", territory: "NAMER" },
  { name: "Dominican Republic", id: "DO", territory: "NAMER" },
  { name: "Ecuador", id: "EC", territory: "NAMER" },
  { name: "El Salvador", id: "SV", territory: "NAMER" },
  { name: "French Guiana", id: "GF", territory: "NAMER" },
  { name: "Grenada", id: "GD", territory: "NAMER" },
  { name: "Guadeloupe", id: "GP", territory: "NAMER" },
  { name: "Guatemala", id: "GT", territory: "NAMER" },
  { name: "Guyana", id: "GY", territory: "NAMER" },
  { name: "Haiti", id: "HT", territory: "NAMER" },
  { name: "Honduras", id: "HN", territory: "NAMER" },
  { name: "Jamaica", id: "JM", territory: "NAMER" },
  { name: "Martinique", id: "MQ", territory: "NAMER" },
  { name: "Mexico", id: "MX", territory: "NAMER" },
  { name: "Montserrat", id: "MS", territory: "NAMER" },
  { name: "Nicaragua", id: "NI", territory: "NAMER" },
  { name: "Panama", id: "PA", territory: "NAMER" },
  { name: "Paraguay", id: "PY", territory: "NAMER" },
  { name: "Peru", id: "PE", territory: "NAMER" },
  { name: "Puerto Rico", id: "PR", territory: "NAMER" },
  { name: "Saint Barthélemy", id: "BL", territory: "NAMER" },
  { name: "Saint Kitts And Nevis", id: "KN", territory: "NAMER" },
  { name: "Saint Lucia", id: "LC", territory: "NAMER" },
  { name: "Saint Martin", id: "MF", territory: "NAMER" },
  { name: "Saint Pierre and Miquelon", id: "PM", territory: "NAMER" },
  {
    name: "Saint Vincent and The Grenadines",
    id: "VC",
    territory: "NAMER",
  },
  { name: "Sint Maarten (Dutch part)", id: "SX", territory: "NAMER" },
  { name: "Suriname", id: "SR", territory: "NAMER" },
  { name: "Trinidad and Tobago", id: "TT", territory: "NAMER" },
  { name: "Turks and Caicos Islands", id: "TC", territory: "NAMER" },
  { name: "United States", id: "US", territory: "NAMER" },
  { name: "Uruguay", id: "UY", territory: "NAMER" },
  { name: "Venezuela", id: "VE", territory: "NAMER" },
  { name: "Virgin Islands (British)", id: "VG", territory: "NAMER" },
  { name: "Virgin Islands (U.S.)", id: "VI", territory: "NAMER" },
];

const APAC = [
  { name: "American Samoa", id: "AS", territory: "APAC" },
  { name: "Antarctica", id: "AQ", territory: "APAC" },
  { name: "Australia", id: "AU", territory: "APAC" },
  { name: "Bangladesh", id: "BD", territory: "APAC" },
  { name: "Bhutan", id: "BT", territory: "APAC" },
  {
    name: "British Indian Ocean Territory",
    id: "IO",
    territory: "APAC",
  },
  { name: "Brunei Darussalam", id: "BN", territory: "APAC" },
  { name: "Cambodia", id: "KH", territory: "APAC" },
  { name: "China", id: "CN", territory: "APAC" },
  { name: "Christmas Island", id: "CX", territory: "APAC" },
  { name: "Cocos (Keeling) Islands", id: "CC", territory: "APAC" },
  { name: "Cook Islands", id: "CK", territory: "APAC" },
  { name: "Fiji", id: "FJ", territory: "APAC" },
  { name: "French Polynesia", id: "PF", territory: "APAC" },
  { name: "French Southern Territories", id: "TF", territory: "APAC" },
  { name: "Guam", id: "GU", territory: "APAC" },
  {
    name: "Heard Island and McDonald Islands",
    id: "HM",
    territory: "APAC",
  },
  { name: "Hong Kong", id: "HK", territory: "APAC" },
  { name: "India", id: "IN", territory: "APAC" },
  { name: "Indonesia", id: "ID", territory: "APAC" },
  { name: "Japan", id: "JP", territory: "APAC" },
  { name: "Kiribati", id: "KI", territory: "APAC" },
  { name: "Kyrgyzstan", id: "KG", territory: "APAC" },
  { name: "Laos", id: "LA", territory: "APAC" },
  { name: "Macao", id: "MO", territory: "APAC" },
  { name: "Malaysia", id: "MY", territory: "APAC" },
  { name: "Maldives", id: "MV", territory: "APAC" },
  { name: "Marshall Islands", id: "MH", territory: "APAC" },
  { name: "Micronesia", id: "FM", territory: "APAC" },
  { name: "Mongolia", id: "MN", territory: "APAC" },
  { name: "Myanmar", id: "MM", territory: "APAC" },
  { name: "Nauru", id: "NR", territory: "APAC" },
  { name: "Nepal", id: "NP", territory: "APAC" },
  { name: "New Caledonia", id: "NC", territory: "APAC" },
  { name: "New Zealand", id: "NZ", territory: "APAC" },
  { name: "Niue", id: "NU", territory: "APAC" },
  { name: "Norfolk Island", id: "NF", territory: "APAC" },
  { name: "Northern Mariana Islands", id: "MP", territory: "APAC" },
  { name: "Pakistan", id: "PK", territory: "APAC" },
  { name: "Palau", id: "PW", territory: "APAC" },
  { name: "Papua New Guinea", id: "PG", territory: "APAC" },
  { name: "Philippines", id: "PH", territory: "APAC" },
  { name: "Pitcairn", id: "PN", territory: "APAC" },
  { name: "Samoa", id: "WS", territory: "APAC" },
  { name: "Singapore", id: "SG", territory: "APAC" },
  { name: "Solomon Islands", id: "SB", territory: "APAC" },
  { name: "South Sudan", id: "SS", territory: "APAC" },
  { name: "Sri Lanka", id: "LK", territory: "APAC" },
  { name: "Taiwan", id: "TW", territory: "APAC" },
  { name: "Tajikistan", id: "TJ", territory: "APAC" },
  { name: "Thailand", id: "TH", territory: "APAC" },
  { name: "Timor-Leste", id: "TL", territory: "APAC" },
  { name: "Tokelau", id: "TK", territory: "APAC" },
  { name: "Tonga", id: "TO", territory: "APAC" },
  { name: "Turkmenistan", id: "TM", territory: "APAC" },
  { name: "Tuvalu", id: "TV", territory: "APAC" },
  {
    name: "United States Minor Outlying Islands",
    id: "UM",
    territory: "APAC",
  },
  { name: "Uzbekistan", id: "UZ", territory: "APAC" },
  { name: "Vanuatu", id: "VU", territory: "APAC" },
  { name: "Viet Nam", id: "VN", territory: "APAC" },
  { name: "Wallis and Futuna", id: "WF", territory: "APAC" },
];

const EMEA = [
  { name: "Afghanistan", id: "AF", territory: "EMEA" },
  { name: "Åland Islands", id: "AX", territory: "EMEA" },
  { name: "Albania", id: "AL", territory: "EMEA" },
  { name: "Algeria", id: "DZ", territory: "EMEA" },
  { name: "Andorra", id: "AD", territory: "EMEA" },
  { name: "Angola", id: "AO", territory: "EMEA" },
  { name: "Armenia", id: "AM", territory: "EMEA" },
  { name: "Austria", id: "AT", territory: "EMEA" },
  { name: "Azerbaijan", id: "AZ", territory: "EMEA" },
  { name: "Bahrain", id: "BH", territory: "EMEA" },
  { name: "Belarus", id: "BY", territory: "EMEA" },
  { name: "Belgium", id: "BE", territory: "EMEA" },
  { name: "Benin", id: "BJ", territory: "EMEA" },
  { name: "Bosnia and Herzegovina", id: "BA", territory: "EMEA" },
  { name: "Botswana", id: "BW", territory: "EMEA" },
  { name: "Bouvet Island", id: "BV", territory: "EMEA" },
  { name: "Bulgaria", id: "BG", territory: "EMEA" },
  { name: "Burkina Faso", id: "BF", territory: "EMEA" },
  { name: "Burundi", id: "BI", territory: "EMEA" },
  { name: "Cameroon", id: "CM", territory: "EMEA" },
  { name: "Cabo Verde", id: "CV", territory: "EMEA" },
  { name: "Central African Republic", id: "CF", territory: "EMEA" },
  { name: "Chad", id: "TD", territory: "EMEA" },
  { name: "Comoros", id: "KM", territory: "EMEA" },
  {
    name: "Congo (Democratic Republic of the)",
    id: "CD",
    territory: "EMEA",
  },
  { name: "Congo", id: "CG", territory: "EMEA" },
  { name: "Côte d’Ivoire", id: "CI", territory: "EMEA" },
  { name: "Croatia", id: "HR", territory: "EMEA" },
  { name: "Cyprus", id: "CY", territory: "EMEA" },
  { name: "Czech Republic", id: "CZ", territory: "EMEA" },
  { name: "Denmark", id: "DK", territory: "EMEA" },
  { name: "Djibouti", id: "DJ", territory: "EMEA" },
  { name: "Egypt", id: "EG", territory: "EMEA" },
  { name: "Equatorial Guinea", id: "GQ", territory: "EMEA" },
  { name: "Eritrea", id: "ER", territory: "EMEA" },
  { name: "Estonia", id: "EE", territory: "EMEA" },
  { name: "Ethiopia", id: "ET", territory: "EMEA" },
  { name: "Falkland Islands", id: "FK", territory: "EMEA" },
  { name: "Faroe Islands", id: "FO", territory: "EMEA" },
  { name: "Finland", id: "FI", territory: "EMEA" },
  { name: "France", id: "FR", territory: "EMEA" },
  { name: "Gabon", id: "GA", territory: "EMEA" },
  { name: "Gambia", id: "GM", territory: "EMEA" },
  { name: "Georgia", id: "GE", territory: "EMEA" },
  { name: "Germany", id: "DE", territory: "EMEA" },
  { name: "Ghana", id: "GH", territory: "EMEA" },
  { name: "Gibraltar", id: "GI", territory: "EMEA" },
  { name: "Greece", id: "GR", territory: "EMEA" },
  { name: "Greenland", id: "GL", territory: "EMEA" },
  { name: "Guernsey", id: "GG", territory: "EMEA" },
  { name: "Guinea", id: "GN", territory: "EMEA" },
  { name: "Guinea-Bissau", id: "GW", territory: "EMEA" },
  { name: "Vatican City", id: "VA", territory: "EMEA" },
  { name: "Hungary", id: "HU", territory: "EMEA" },
  { name: "Iceland", id: "IS", territory: "EMEA" },
  { name: "Iran", id: "IR", territory: "EMEA" },
  { name: "Iraq", id: "IQ", territory: "EMEA" },
  { name: "Ireland", id: "IE", territory: "EMEA" },
  { name: "Isle of Man", id: "IM", territory: "EMEA" },
  { name: "Israel", id: "IL", territory: "EMEA" },
  { name: "Italy", id: "IT", territory: "EMEA" },
  { name: "Jersey", id: "JE", territory: "EMEA" },
  { name: "Jordan", id: "JO", territory: "EMEA" },
  { name: "Kazakhstan", id: "KZ", territory: "EMEA" },
  { name: "Kenya", id: "KE", territory: "EMEA" },
  {
    name: "Korea (Democratic People’s Republic of)",
    id: "KV",
    territory: "EMEA",
  },
  { name: "Korea (Republic of)", id: "KR", territory: "EMEA" },
  { name: "Kuwait", id: "KW", territory: "EMEA" },
  { name: "Latvia", id: "LV", territory: "EMEA" },
  { name: "Lebanon", id: "LB", territory: "EMEA" },
  { name: "Lesotho", id: "LS", territory: "EMEA" },
  { name: "Liberia", id: "LR", territory: "EMEA" },
  { name: "Libya", id: "LY", territory: "EMEA" },
  { name: "Liechtenstein", id: "LI", territory: "EMEA" },
  { name: "Lithuania", id: "LT", territory: "EMEA" },
  { name: "Luxembourg", id: "LU", territory: "EMEA" },
  { name: "Macedonia", id: "MK", territory: "EMEA" },
  { name: "Madagascar", id: "MG", territory: "EMEA" },
  { name: "Malawi", id: "MW", territory: "EMEA" },
  { name: "Mali", id: "ML", territory: "EMEA" },
  { name: "Malta", id: "MT", territory: "EMEA" },
  { name: "Mauritania", id: "MR", territory: "EMEA" },
  { name: "Mauritius", id: "MU", territory: "EMEA" },
  { name: "Mayotte", id: "YT", territory: "EMEA" },
  { name: "Moldova", id: "MD", territory: "EMEA" },
  { name: "Monaco", id: "MC", territory: "EMEA" },
  { name: "Montenegro", id: "ME", territory: "EMEA" },
  { name: "Morocco", id: "MA", territory: "EMEA" },
  { name: "Mozambique", id: "MZ", territory: "EMEA" },
  { name: "Namibia", id: "NA", territory: "EMEA" },
  { name: "Netherlands", id: "NL", territory: "EMEA" },
  { name: "Niger", id: "NE", territory: "EMEA" },
  { name: "Nigeria", id: "NG", territory: "EMEA" },
  { name: "Norway", id: "NO", territory: "EMEA" },
  { name: "Oman", id: "OM", territory: "EMEA" },
  { name: "Palestine", id: "PS", territory: "EMEA" },
  { name: "Poland", id: "PL", territory: "EMEA" },
  { name: "Portugal", id: "PT", territory: "EMEA" },
  { name: "Qatar", id: "QA", territory: "EMEA" },
  { name: "Réunion", id: "RE", territory: "EMEA" },
  { name: "Romania", id: "RO", territory: "EMEA" },
  { name: "Russia", id: "RU", territory: "EMEA" },
  { name: "Rwanda", id: "RW", territory: "EMEA" },
  { name: "Saint Helena", id: "SH", territory: "EMEA" },
  { name: "San Marino", id: "SM", territory: "EMEA" },
  { name: "Sao Tome and Principe", id: "ST", territory: "EMEA" },
  { name: "Saudi Arabia", id: "SA", territory: "EMEA" },
  { name: "Senegal", id: "SN", territory: "EMEA" },
  { name: "Serbia", id: "RS", territory: "EMEA" },
  { name: "Seychelles", id: "SC", territory: "EMEA" },
  { name: "Sierra Leone", id: "SL", territory: "EMEA" },
  { name: "Slovakia", id: "SK", territory: "EMEA" },
  { name: "Slovenia", id: "SI", territory: "EMEA" },
  { name: "Somalia", id: "SO", territory: "EMEA" },
  { name: "South Africa", id: "ZA", territory: "EMEA" },
  {
    name: "South Georgia and the South Sandwich Islands",
    id: "GS",
    territory: "EMEA",
  },
  { name: "Spain", id: "ES", territory: "EMEA" },
  { name: "Sudan", id: "SD", territory: "EMEA" },
  { name: "Svalbard", id: "SJ", territory: "EMEA" },
  { name: "Swaziland", id: "SZ", territory: "EMEA" },
  { name: "Sweden", id: "SE", territory: "EMEA" },
  { name: "Switzerland", id: "CH", territory: "EMEA" },
  { name: "Syria", id: "SY", territory: "EMEA" },
  { name: "Tanzania", id: "TZ", territory: "EMEA" },
  { name: "Togo", id: "TG", territory: "EMEA" },
  { name: "Tunisia", id: "TN", territory: "EMEA" },
  { name: "Turkey", id: "TR", territory: "EMEA" },
  { name: "Uganda", id: "UG", territory: "EMEA" },
  { name: "Ukraine", id: "UA", territory: "EMEA" },
  { name: "United Arab Emirates", id: "AE", territory: "EMEA" },
  { name: "United Kingdom", id: "GB", territory: "EMEA" },
  { name: "Western Sahara", id: "EH", territory: "EMEA" },
  { name: "Yemen", id: "YE", territory: "EMEA" },
  { name: "Zambia", id: "ZM", territory: "EMEA" },
  { name: "Zimbabwe", id: "ZW", territory: "EMEA" },
];

function merge() {
  const a = [];
  a.push(EMEA);
  return console.log(a);
}

module.exports = merge();
