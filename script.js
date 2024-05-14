
// =======================================================
                // Calender feild 
// =========================================================

function getDatesForNextMonth() {
  const today = new Date();

  // Create a new date object for the first day of next month
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);

  // Get the last day of next month
  const lastDay = new Date(
    nextMonth.getFullYear(),
    nextMonth.getMonth() + 1,
    0
  ); // 0 is the last day of the previous month

  // Month names array
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Weekday names array (full and short)
  const weekdays = [
    ["Sunday", "Sun"],
    ["Monday", "Mon"],
    ["Tuesday", "Tue"],
    ["Wednesday", "Wed"],
    ["Thursday", "Thu"],
    ["Friday", "Fri"],
    ["Saturday", "Sat"],
  ];

  // Function to format date as dd/mm/yyyy
  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = 1 + date.getMonth(); // Use month names array
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  // Create the array of dates with properties
  const dates = [];
  for (let date = today; date <= lastDay; date.setDate(date.getDate() + 1)) {
    const newDate = new Date(date);
    const dayOfWeekIndex = newDate.getDay(); // Get weekday index
    const dayOfWeek = weekdays[dayOfWeekIndex][0]; // Use full weekday name
    const shortWeekDay = weekdays[dayOfWeekIndex][1]; // Use short weekday name
    const formattedDate = formatDate(newDate);
    dates.push({
      day: newDate.getDate(),
      month: months[newDate.getMonth()], // Use month names array
      week: dayOfWeek,
      shortWeekDay,
      formattedDate,
    });
  }

  return dates;
}

const datesArray = getDatesForNextMonth();
console.log(datesArray);

const calanderWrapper = document.getElementById("calender");

const calendarHtml = datesArray.map((date) => {
  return `
    <div class="swiper-slide " >
      <div class="flex flex-col gap-3">
        <span class="poppins-regular">${date.shortWeekDay}</span>
        <div class="min-h-[100px] dateSelector bg-neutral-200/70 py-5 flex items-center justify-center rounded-full">
          <h2 class="text-2xl text-neutral-500 poppins-regular">${date.day}</h2>
        </div>
      </div>
    </div>
  `;
}).join('');

calanderWrapper.innerHTML = calendarHtml;

let confirmWeek = document.getElementById('confirmWeekName');
let consfirmDate = document.getElementById('confirmDate');
let inputDate = document.querySelectorAll('.inputDate');

consfirmDate.innerHTML = `${datesArray[0].month} ${datesArray[0].day}`;
confirmWeek.innerHTML = datesArray[0].shortWeekDay;

let dateSelector = document.querySelectorAll('.dateSelector');
let calenderDate = document.getElementById('calenderDate');

let selectedElement; // Variable to store the currently selected element

dateSelector.forEach((i, index) => {
  i.addEventListener('click', () => {
    // Remove background color from previously selected element (if any)
    if (selectedElement) {
      selectedElement.style.background = '';
    }
    // Update calendarDate and set background color for clicked element
    calenderDate.value = datesArray[index].formattedDate;
    i.style.background = '#fdd587';
    // Update selectedElement for future clicks
    selectedElement = i;

    confirmWeek.innerText = datesArray[index].shortWeekDay;
    consfirmDate.innerText = `${datesArray[index].month} ${datesArray[index].day}`;
  });
});

// =======================================================
                // time slot feild 
// =========================================================

const Slots = [
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM"
];

const slotWrapper = document.getElementById('slotWrapper');

const slot = Slots.map((i)=>{
  return `<div class="bg-neutral-200/70 cursor-pointer poppins-regular p-3 text-xl text-neutral-500 text-center rounded-xl relative slotPicker">${i}</div>`
}).join('');

slotWrapper.innerHTML = slot;

let slotPicker = document.querySelectorAll('.slotPicker');
let inputSlot = document.getElementById('inputSlot');

let checkSlte;

slotPicker.forEach((i,index)=>{
  i.addEventListener('click',()=>{
    if(checkSlte){
      checkSlte.style.background = '';
    }

    inputSlot.value = Slots[index];
    i.style.background = '#fdd587';
    checkSlte = i;
  })
})

