async function checkIn() {
    const token = localStorage.getItem('jwt');
    const response = await fetch('http://172.16.8.231:3000/postCheckIn', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
        }),
    });

    if (response.ok) {
        const data = await response.json();
        console.log(data);
    } else {
        console.error('Server error:', response.status);
    }

    location.reload();
}

async function checkOut() {
    const token = localStorage.getItem('jwt');
    const response = await fetch('http://172.16.8.231:3000/postCheckOut', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
        }),
    });

    if (response.ok) {
        const data = await response.json(); 
        console.log(data);
    } else {
        console.error('Server error:', response.status);
    }

    location.reload();
}