
// lucid icon 

lucide.createIcons();

// =======================================================
                // Calender feild 
// =========================================================

function getDatesForNextMonth() {
  const today = new Date();

  // Create a new date object for the first day of next month
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);

  // Get the last day of next month (technically previous month's last day)
  const lastDay = new Date(nextMonth.getFullYear(), nextMonth.getMonth() + 1, 0);

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

  // Create a new variable (separate from loop's date) for next month's date
  let nextMonthDate = new Date(today.getFullYear(), today.getMonth() + 1, 1);

  const nextMonthDayOfWeekIndex = nextMonthDate.getDay();
  const nextMonthDayOfWeek = weekdays[nextMonthDayOfWeekIndex][0];
  const nextMonthShortWeekDay = weekdays[nextMonthDayOfWeekIndex][1];
  const nextMonthFormattedDate = formatDate(nextMonthDate);
  dates.push({
    day: nextMonthDate.getDate(),
    month: months[nextMonthDate.getMonth()],
    week: nextMonthDayOfWeek,
    shortWeekDay: nextMonthShortWeekDay,
    formattedDate: nextMonthFormattedDate,
  });

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
  { time: "10:30 AM", time_name: "Morning" },
  { time: "11:00 AM", time_name: "Morning" },
  { time: "11:30 AM", time_name: "Morning" },
  { time: "12:00 PM", time_name: "Afternoon" },
  { time: "12:30 PM", time_name: "Afternoon" },
  { time: "01:00 PM", time_name: "Afternoon" },
  { time: "01:30 PM", time_name: "Afternoon" },
  { time: "02:00 PM", time_name: "Afternoon" },
  { time: "02:30 PM", time_name: "Afternoon" },
  { time: "03:00 PM", time_name: "Afternoon" },
  { time: "03:30 PM", time_name: "Afternoon" },
  { time: "04:00 PM", time_name: "Afternoon" },
  { time: "04:30 PM", time_name: "Afternoon" },
  { time: "05:00 PM", time_name: "Evening" },
  { time: "05:30 PM", time_name: "Evening" },
  { time: "06:00 PM", time_name: "Evening" },
  { time: "06:30 PM", time_name: "Evening" },
  { time: "07:00 PM", time_name: "Evening" },
  { time: "07:30 PM", time_name: "Evening" },
];

console.log(Slots);


const slotWrapper = document.getElementById('slotWrapper');

const slot = Slots.map((i)=>{
  return `<div
  class="bg-neutral-200/70 cursor-pointer poppins-regular p-5 h-fit flex gap-3 text-xl text-neutral-500 rounded-xl relative slotPicker">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="circle" class="lucide lucide-circle"><circle cx="12" cy="12" r="10"></circle></svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" class="lucide lucide-check bg-neutral-900 hidden rounded-full text-white p-1"><path d="M20 6 9 17l-5-5"></path></svg>
  <div class="flex flex-row items-end gap-1">
      <span class="text-xl leading-tight">${i.time},</span>
      <span class="text-sm">${i.time_name}</span>
  </div>
</div>`
}).join('');

slotWrapper.innerHTML = slot;

let slotPicker = document.querySelectorAll('.slotPicker');
let inputSlot = document.getElementById('inputSlot');
let checkIcon = document.querySelectorAll('.lucide-check');
let circleIcon = document.querySelectorAll('.lucide-circle');

let checkSlte;
let check;
let circle;

slotPicker.forEach((i,index)=>{
  i.addEventListener('click',()=>{
    if(checkSlte){
      checkSlte.style.background = '';
    }
    inputSlot.value = Slots[index].time;
    i.style.background = '#fdd587';
    if(check){
      check.style.display = 'none';
    }
    checkIcon[index].style.display = 'block';
    check = checkIcon[index];
    if(circle){
      circle.style.display = 'block';
    }
    circleIcon[index].style.display = 'none';
    circle = circleIcon[index]
    checkSlte = i;
  })
})

// services 

const servicesArray = [
  { service: "video editing", icon: "film" },
  { service: "ade creation" , icon: "file-spreadsheet" },
  { service: "consultation" , icon: "users"},
  { service: "video marketing" , icon: "file-video"},
  { service: "video production" , icon: "clapperboard"},
  { service: "designing" , icon: "brush"},
  { service: "youtube management" , icon: "youtube"},
  { service: "profile branding" , icon: "circle-user"},
  { service: "ideation & storyboarding" , icon: "lightbulb"},
  { service: "scripting" , icon: "scroll-text"},
  { service: "voice over" , icon: "audio-lines"},
  { service: "animation" , icon: "activity"},
  { service: "product promo's" , icon: "package-search"},
];


const serviceMap = servicesArray.map((i)=>{
  return `<div class="swiper-slide rounded-2xl md:h-full h-fit cursor-pointer checkBoxContainer">
  <label for="${i.service}">
  <div class="flex flex-col md:h-full h-fit justify-between md:p-3 p-5">
      <div class="flex items-center relative top-2 right-2 justify-end">
          <input type="checkbox" name="" class="accent-black scale-150 inputService" id="${i.service}" value="${i.service}" >
      </div>
      <div class="flex flex-col md:gap-5 gap-3 md:items-center items-start relatable justify-center">
          <div class="p-3 rounded-xl flex items-center justify-center bg-neutral-200/70 w-[50px] h-[50px] text-neutral-700">
          <img src="assests/${i.icon}.svg" >
          </div>
          <span class="poppins-regular leading-tight capitalize">${i.service}</span>
      </div>
      <div></div>
  </div>
  </label>
</div>`
}).join('');

document.querySelector('.serviceWrapper').innerHTML = serviceMap;

var serviceCheckBox = document.querySelectorAll('.inputService');
var checkBoxContainer = document.querySelectorAll('.checkBoxContainer');

var validateChecks = null;


checkBoxContainer.forEach((check, index)=>{
  check.addEventListener('click',()=>{
    if(serviceCheckBox[index].checked){
      check.classList.add('innerborder');
    }else{
      check.classList.remove('innerborder');
    }
  });
});
