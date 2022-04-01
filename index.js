// var utcArray = [
//   { hours: 24, mins: 00 },
//   { hours: 01, mins: 00 },
//   { hours: 02, mins: 00 },
//   { hours: 03, mins: 00 },
//   { hours: 04, mins: 00 },
//   { hours: 05, mins: 00 },
//   { hours: 06, mins: 00 },
//   { hours: 07, mins: 00 },
//   { hours: 08, mins: 00 },
//   { hours: 09, mins: 00 },
//   { hours: 10, mins: 00 },
//   { hours: 11, mins: 00 },
//   { hours: 12, mins: 00 },
//   { hours: 13, mins: 00 },
//   { hours: 14, mins: 00 },
//   { hours: 15, mins: 00 },
//   { hours: 16, mins: 00 },
//   { hours: 17, mins: 00 },
//   { hours: 18, mins: 00 },
//   { hours: 19, mins: 00 },
//   { hours: 20, mins: 00 },
//   { hours: 21, mins: 00 },
//   { hours: 22, mins: 00 },
//   { hours: 23, mins: 00 },
// ];
// var temporyArray = [];

// function selectTimeZone() {
//   var selectedTimeZone = document.getElementById("timeZone").value;
//   console.log("value", selectedTimeZone);

//   if (selectedTimeZone === "UTC" || selectedTimeZone === "GMT") {
//     for (let i = 0; i < utcArray.length; i++) {
//       temporyArray[i] = utcArray[i];
//     }
//     showTimezone(temporyArray, selectedTimeZone);
//   }
//   if (selectedTimeZone === "ACDT") {
//     for (let i = 0; i < utcArray.length; i++) {
//       temporyArray[i] = utcArray[i] + 10.3;
//     }
//     showTimezone(temporyArray, selectedTimeZone);
//   }
//   if (selectedTimeZone === "IST") {
//     for (let i = 0; i < utcArray.length; i++) {
//       temporyArray[i] = utcArray[i] + 5.3;
//     }
//     showTimezone(temporyArray, selectedTimeZone);
//   }
//   if (selectedTimeZone === "CST") {
//     for (let i = 0; i < utcArray.length; i++) {
//       temporyArray[i] = utcArray[i] - 6;
//     }
//     showTimezone(temporyArray, selectedTimeZone);
//   }
//   if (selectedTimeZone === "CAT") {
//     for (let i = 0; i < utcArray.length; i++) {
//       temporyArray[i] = utcArray[i] - 2;
//     }
//     showTimezone(temporyArray, selectedTimeZone);
//   }
//   if (selectedTimeZone === "BRT") {
//     for (let i = 0; i < utcArray.length; i++) {
//       temporyArray[i] = utcArray[i] - 3;
//     }
//     showTimezone(temporyArray, selectedTimeZone);
//   }
// }

// function showTimezone(temporyArray, selectedTimeZone) {
//   for (let i = 0; i < temporyArray.length; i++) {
//     if (temporyArray[i] > 24) {
//       temporyArray[i] = (temporyArray[i] - 24).toFixed(2);
//     } else if (temporyArray[i] < 0) {
//       temporyArray[i] = (temporyArray[i] + 24).toFixed(2);
//     } else {
//       temporyArray[i] = temporyArray[i].toFixed(2);
//     }
//   }
//   console.log("Final Array", temporyArray);
//   temporyArray.forEach((item, index) => {
//     let box = document.getElementsByClassName("box");
//     box[index].children[0].children[1].innerHTML = temporyArray[index];
//     console.log(
//       (box[index].children[0].children[2].innerHTML = selectedTimeZone)
//     );
//   });
// }
// var timeZones = [
//   { id: "UTC", hours: 00, mins: 00 },
//   { id: "ACDT", hours: 10, mins: 30 },
//   { id: "GMT", hours: 00, mins: 00 },
//   { id: "IST", hours: 05, mins: 30 },
//   { id: "CST", hours: -06, mins: 00 },
//   { id: "CAT", hours: -02, mins: 00 },
//   { id: "BRT", hours: -03, mins: 00 },
// ];
// var timeZone = {
//   UTC: { hours: 00, mins: 00 },
//   ACDT: { hours: 10, mins: 30 },
//   GMT: { hours: 00, mins: 00 },
//   IST: { hours: 05, mins: 30 },
//   CST: { hours: -06, mins: 00 },
//   CAT: { hours: -02, mins: 00 },
//   BRT: { hours: -03, mins: 00 },
// };

// // console.log(timeZone.ACDT.hours);

// function selectTimeZone() {
//   var selectedTimeZone = document.getElementById("timeZone").value;

//   //   let hamza=timeZone[selectedTimeZone].hours
//   //   console.log("HAMZa",hamza)
//   //   let timeZoneObj = timeZones.find((item) => {
//   //     return item.id === selectedTimeZone;
//   //   });
//   utcArray.map((item) => {
//     var updatedHours = item.hours + timeZone[selectedTimeZone].hours;
//     var updatedMins = item.mins + timeZone[selectedTimeZone].mins;
//     if (updatedHours > 24) {
//       updatedHours = updatedHours - 24;
//     } else if (updatedHours < 0) {
//       updatedHours = updatedHours + 24;
//     }
//     if (selectedTimeZone === "CST") {
//       if (updatedHours >= 12) {
//         updatedHours = updatedHours - 12;
//         console.log(`${updatedHours}:${updatedMins} PM ${selectedTimeZone}`);
//     //   } else {
//     //     // if (updatedHours == 0) {
//     //     //   updatedHours = updatedHours + 12;
//     //     // }
//     //     console.log(`${updatedHours}:${updatedMins} AM ${selectedTimeZone}`);
//     //   }

//       // console.log("TimeZone",`${updatedHours}:${updatedMins} ${selectedTimeZone}`);
//       if (updatedHours == 0) {
//         updatedHours = updatedHours + 12;
//       }
//     }
//     // console.log("TimeZone",`${updatedHours}:${updatedMins} ${selectedTimeZone}`);
//   });
// }

//   for(let i=0;i<24;i++){

//       let time = document.getElementsByClassName("showTime");
//       console.log("element",time[i].innerHTML)

//   }

//   if (selectedTimeZone === "UTC" || selectedTimeZone === "GMT") {
//     for (let i = 0; i < utcArray.length; i++) {
//       temporyArray[i] = utcArray[i];
//     }
//     showTimezone(temporyArray, selectedTimeZone);
//   }

// let today = new Date()
// let GMTArray = today.toString().split("GMT")[1].split(" ");
// let splitGMT = GMTArray[0].split('');
// let hours = splitGMT.slice(0, 3).join('');
// let Minutes = splitGMT.slice(3, 5).join('');
// let diffrence = (Math.abs(5 - hours) + (Minutes / 60));
// let differenceFromPk = ((today.getHours() + (today.getMinutes() / 60)) - diffrence).toFixed(2);
// console.log("Difference from Pakistan", differenceFromPk);
// if (differenceFromPk > 24) {
//   differenceFromPk = parseFloat(differenceFromPk) - 24;
// } else if (differenceFromPk < 0) {
//   differenceFromPk = parseFloat(differenceFromPk) + 24;
// }
// console.log("Difference from Pakistan", differenceFromPk);
// if ((differenceFromPk >= 14 && differenceFromPk <= 15.55) || (differenceFromPk >= 21 && differenceFromPk <= 23)) {
//     alert("time 1PM and 3 PM")
// }
let today = new Date()
let GMTArray = today.toString().split("GMT")[1].split(" ")
let diffrence = (500 - GMTArray[0]) / 100;
let hours = GMTArray[0];
let differenceMinutes = hours % 100;
let differenceHours = Math.trunc(diffrence);
let DiffHoursToMinutes = differenceHours * 60;
let totalDifferenceInMinutes = differenceMinutes + DiffHoursToMinutes;
let totalDifferenceInHours = totalDifferenceInMinutes / 60;
let TodayHoursInMinutes = today.getHours() * 60;
let TotalTodayHoursInMinutes = TodayHoursInMinutes + today.getMinutes();
let TodayInHours = TotalTodayHoursInMinutes / 60;
let pkTime2 = TodayInHours + totalDifferenceInHours;
pkTime2 > 24 ? pkTime2 -= 24: pkTime2;
pkTime2 < 0 ? pkTime2 += 24: pkTime2;
if(pkTime2 >= 14.45 && pkTime2 <=16)
{
    alert("minutes are working");
}