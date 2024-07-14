function showElement() {
    var selectValue = document.getElementById("form").value;
    var element = document.getElementById("elementToShow");
    if (selectValue == 4) {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
//Form
async function postForm() {
    const token = localStorage.getItem('jwt');
    var idCalendar = document.getElementById('shift').value;
    var type = document.getElementById('form').value;

    if (type == 4) {
        const startTime = document.getElementById('startTime').value;
        const endTime = document.getElementById('endTime').value;
        const response = await fetch('http://172.16.8.231:3000/postForm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                idCalendar: idCalendar,
                type: type,
                startTime: startTime,
                endTime: endTime
            }),
        });
    } else {
        const response = await fetch('http://172.16.8.231:3000/postForm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                idCalendar: idCalendar,
                type: type
            }),
        });
    }
    location.reload();
};

////////////////////////////////////////
document.getElementById('submit-request').addEventListener('click', function() {
    var lyDo = document.getElementById('request-LyDo').value;

    fetch('http://172.16.8.231:3000/postForm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ lyDo: lyDo }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
});