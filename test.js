






function logout() {
    // Clear user session or any other logout process here
    // Then redirect to login page
    window.location.href = "login.html";
}

// Attach the function to logout link
document.querySelector('a[href="#logout"]').addEventListener('click', logout);


// Assuming you have the username from the login process


document.getElementById('show-schedule').addEventListener('click', function() {
    document.getElementById('schedule-dialog').style.display = 'block';
});


document.getElementById('show-schedule').addEventListener('click', function() {
    document.getElementById('schedule-dialog').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});

document.getElementById('cancel-schedule').addEventListener('click', function() {
    document.getElementById('schedule-dialog').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});

document.getElementById('create-request').addEventListener('click', function() {
    document.getElementById('request-dialog').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});

document.getElementById('cancel-request').addEventListener('click', function() {
    document.getElementById('request-dialog').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});


document.getElementById('sent-request').addEventListener('click', function() {
    var date = new Date().toLocaleDateString();
    document.getElementById('sent-request-date').textContent = 'Đơn đã gửi ngày ' + date;
    document.getElementById('sent-request-dialog').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});
document.getElementById('close-dialog').addEventListener('click', function() {
    document.getElementById('sent-request-dialog').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});
// Get today's date
// Get today's date






  document.getElementById('submit-schedule').addEventListener('click', function() {
    var today = new Date();
    var day = today.getDay();

    // In JavaScript, Sunday is represented by 0
    if (day !== 0) {
        alert('Ngoài thời gian đăng kí');
    } else {
        // Code to add the schedule goes here
    }
});   




document.getElementById('create-request').addEventListener('click', function() {
    document.getElementById('request-dialog').style.display = 'block';
});

document.getElementById('cancel-request').addEventListener('click', function() {
    document.getElementById('request-dialog').style.display = 'none';
});






/////////save schedule

document.getElementById('submit-schedule').addEventListener('click', function() {
    var schedule = {
        '21-morning': document.getElementById('21-morning').value,
        '22-afternoon': document.getElementById('22-afternoon').value,
        '31-morning': document.getElementById('31-morning').value,
        '32-afternoon': document.getElementById('32-afternoon').value,
        '41-morning': document.getElementById('41-morning').value,
        '42-afternoon': document.getElementById('42-afternoon').value,
        '51-morning': document.getElementById('51-morning').value,
        '52-afternoon': document.getElementById('52-afternoon').value,
        '61-morning': document.getElementById('61-morning').value,
        '62-afternoon': document.getElementById('62-afternoon').value,
        '71-morning': document.getElementById('71-morning').value,
        '72-afternoon': document.getElementById('72-afternoon').value,
    };
    
    var newSchedule = [];
    for (var key in schedule) {
        if (schedule.hasOwnProperty(key)) {
            var times = schedule[key].split(' - ');
            var dayPart = key.split('-');
            newSchedule.push(times[0]);
            newSchedule.push(times[1]);
        }
    } 



    localStorage.setItem('calendars', newSchedule);
    console.log(newSchedule);
});


//////////////////////////////////////////////////////////////////

var dialog = document.getElementById("myDialog");
var confirmBtn = document.getElementById("confirmBtn");


let currentInputId;

function openDialog(inputId, period) {
    currentInputId = inputId;
    const morningInputs = document.getElementById('dialogMorningStartTimeInput').parentElement;
    const afternoonInputs = document.getElementById('dialogAfternoonStartTimeInput').parentElement;
    
    if (period === 'morning') {
        morningInputs.style.display = '';
        afternoonInputs.style.display = 'none';
    } else if (period === 'afternoon') {
        morningInputs.style.display = 'none';
        afternoonInputs.style.display = '';
    }
    document.getElementById('myDialog').showModal();
}

function validateTimeRange(startTime, endTime, minTime, maxTime) {
    const start = parseTime(startTime);
    const end = parseTime(endTime);
    const min = parseTime(minTime);
    const max = parseTime(maxTime);

    return start >= min && end <= max && start < end;
}

function parseTime(timeString) {
    const [hours, minutes] = timeString.split(':').map(Number);
    return hours * 60 + minutes;
}

document.getElementById('confirmBtn').onclick = function (event) {
    event.preventDefault();

    const morningStart = document.getElementById('dialogMorningStartTimeInput').value;
    const morningEnd = document.getElementById('dialogMorningEndTimeInput').value;
    const afternoonStart = document.getElementById('dialogAfternoonStartTimeInput').value;
    const afternoonEnd = document.getElementById('dialogAfternoonEndTimeInput').value;

    let time = '';
    let isValid = true;

    if (currentInputId.includes('morning')) {
        isValid = validateTimeRange(morningStart, morningEnd, '08:00', '12:00');
        time = `${morningStart} - ${morningEnd}`;
    } else if (currentInputId.includes('afternoon')) {
        isValid = validateTimeRange(afternoonStart, afternoonEnd, '13:30', '17:30');
        time = `${afternoonStart} - ${afternoonEnd}`;
    }

    if (!isValid) {
        alert('Thời gian chọn không hợp lệ. Vui lòng chọn lại.');
        return;
    }

    const inputElement = document.getElementById(currentInputId);
    if (inputElement) {
        inputElement.value = time;
    } else {
        console.error(`Element with ID ${currentInputId} not found`);
    }

    document.getElementById('myDialog').close();
};

function clearTime(inputId) {
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
        inputElement.value = '';
    } else {
        console.error(`Element with ID ${inputId} not found`);
    }
}


function selectAll() {
    const morningStart = '08:00';
    const morningEnd = '12:00';
    const afternoonStart = '13:30';
    const afternoonEnd = '17:30';

    const morningInputs = document.querySelectorAll('input[id*="-morning"]');
    const afternoonInputs = document.querySelectorAll('input[id*="-afternoon"]');

    morningInputs.forEach(input => {
        input.value = `${morningStart} - ${morningEnd}`;
    });

    afternoonInputs.forEach(input => {
        input.value = `${afternoonStart} - ${afternoonEnd}`;
    });
}

function deleteAll() {
    const allInputs = document.querySelectorAll('#schedule-table input[type="text"]');
    allInputs.forEach(input => {
        input.value = '';
    });
}

/////////////////////////////////////////////////
$(document).ready(function () {
    $('#dialogMorningStartTimeInput').timepicker({
        timeFormat: 'HH:mm',
        interval: 30,
        minTime: '08:00',
        maxTime: '12:00pm',
        defaultTime: '08:00',
        startTime: '08:00',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });

    $('#dialogMorningEndTimeInput').timepicker({
        timeFormat: 'HH:mm',
        interval: 30,
        minTime: '08:00',
        maxTime: '12:00pm',
        defaultTime: '12:00',
        startTime: '08:00',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });

    $('#dialogAfternoonStartTimeInput').timepicker({
        timeFormat: 'HH:mm',
        interval: 30,
        minTime: '13:30',
        maxTime: '17:30',
        defaultTime: '13:30',
        startTime: '13:30',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });

    $('#dialogAfternoonEndTimeInput').timepicker({
        timeFormat: 'HH:mm',
        interval: 30,
        minTime: '13:30',
        maxTime: '17:30',
        defaultTime: '17:30',
        startTime: '13:30',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });
});