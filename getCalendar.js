let idCalendars = [];

async function calendar() {
    const token = localStorage.getItem('jwt');
    const response = await fetch('http://172.16.8.231:3000/postCalendar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
        }),
    });
    const data = await response.json();

    const scheduleJSON = data;
    function populateCalendar(schedule) {
        const datesPopulated = {};
        schedule.calendars.forEach(entry => {
            const idCalendar = entry.idCalendar;
            const idShift = entry.idShift;
            const date = entry.date;
            const startTime = entry.startTime;
            const endTime = entry.endTime;
            const checkIn = entry.checkIn;
            const checkOut = entry.checkOut;
            idCalendars.push(idCalendar);
            let cellId;
            if (idShift % 10 === 1) {
                cellId = `AM-${Math.floor(idShift / 10)}`;
            } else {
                cellId = `PM-${Math.floor(idShift / 10)}`;
            }
            let time = `${startTime} - ${endTime}`;
            let check = `(${checkIn} - ${checkOut})`;
            if (time == ' - ') { time = '' };
            if (check == '( - )') { check = '' };
            const timeRange = time + `
            ` + check;
            document.getElementById(cellId).innerText = timeRange;
            const dateCellId = `date-${Math.floor(idShift / 10)}`;
            if (!datesPopulated[dateCellId]) {
                document.getElementById(dateCellId).innerText = `Thứ ${Math.floor(idShift / 10)}: ${date}`;
                datesPopulated[dateCellId] = true;
            }
        });
        localStorage.setItem('idCalendars', idCalendars)
    }
    populateCalendar(scheduleJSON);

    //Chọn các ca làm 
    const myArray = localStorage.getItem('idCalendars').split(',')
    for (var i = 0; i < myArray.length; i++) {
        var value = myArray[i];
        document.getElementById("C" + (i + 1)).value = value;
    }

    // Chọn loại đơn
    const idTypeForm = localStorage.getItem('idTypeForm').split(',')
    const nameForm = localStorage.getItem('nameForm').split(',')
    const selectElement = document.getElementById('form');
    for (let i = 0; i < idTypeForm.length; i++) {
        const optionItem = document.createElement('option');
        optionItem.value = idTypeForm[i];
        optionItem.textContent = nameForm[i];
        selectElement.appendChild(optionItem);
    }

};

document.addEventListener('DOMContentLoaded', function () {
    calendar();
});