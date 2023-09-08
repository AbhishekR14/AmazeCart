export function getFormattedDate(date) {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = months[date.getMonth()];
  const day = date.getDate();
  
  return `${dayOfWeek}, ${month} ${day}`;
};

export function getMonthAndDate(date) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month = months[date.getMonth()];
  const day = date.getDate();
  return `${month} ${day}`;
};

export function convertToDate(inputdate) {
const dateString = inputdate;
const currentYear = new Date().getFullYear();
const date = new Date(`${dateString}, ${currentYear}`);
const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
return(formattedDate); 
};

export function compareDates(date) {
  const inputDate = new Date(date);
  const currentDate = new Date();
  const timeDifference = inputDate - currentDate;
  const daysRemaining = timeDifference / (1000 * 60 * 60 * 24);
  
  if (daysRemaining < 0) {
      return 5;
  } else if (daysRemaining <= 1.5) {
      return 4;
  } else if (1.5 < daysRemaining && daysRemaining <= 3) {
    return 3;
  } else if (3 < daysRemaining && daysRemaining <= 5) {
    return 2;
  } else if (daysRemaining > 5){
    return 1;
  }
};