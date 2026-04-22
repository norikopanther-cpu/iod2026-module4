const { DateTime } = luxon;

const output = document.getElementById("output");

const birthDate = DateTime.fromISO("2019-06-03");
const today = DateTime.now();

// 1) Days
const daysBetween = Math.floor(today.diff(birthDate, "days").days);

// 2) Age
const age = today.diff(birthDate, ["years", "months", "days"]).toObject();

// 3) Closest date
const date1 = DateTime.fromISO("2019-06-03");
const date2 = DateTime.fromISO("2021-05-03");

const diff1 = Math.abs(today.diff(date1, "days").days);
const diff2 = Math.abs(today.diff(date2, "days").days);
const closestDate = diff1 < diff2 ? date1 : date2;

// 4) Compare dates
let comparison = "";
if (date1 < date2) {
  comparison = "Date 1 is before Date 2";
} else if (date1 > date2) {
  comparison = "Date 1 is after Date 2";
} else {
  comparison = "Both dates are the same";
}

// 5) New Zealand time
const newzealandTime = DateTime.now().setZone("Pacific/Auckland");

// 6) Japan time
const japanTime = DateTime.now().setZone("Asia/Tokyo");

// Output
output.innerHTML = `
  <p><strong>Birthdate:</strong> ${birthDate.toISODate()}</p>
  <p><strong>Date1:</strong> ${date1.toISODate()}</p>
  <p><strong>Date2:</strong> ${date2.toISODate()}</p>
  <p><strong>1)</strong> Days between birthdate and today: ${daysBetween}</p>
  <p><strong>2)</strong> Age: ${Math.floor(age.years)} years, ${Math.floor(age.months)} months, ${Math.floor(age.days)} days</p>
  <p><strong>3)</strong> Closest date to today: ${closestDate.toISODate()}</p>
  <p><strong>4)</strong> ${comparison}</p>
  <p><strong>5)</strong> Current time in Christchurch: ${newzealandTime.toFormat("hh:mm:ss a")}</p>
  <p><strong>6)</strong> Current date and time in Tokyo: ${japanTime.toLocaleString(DateTime.DATETIME_MED)}</p>
`;