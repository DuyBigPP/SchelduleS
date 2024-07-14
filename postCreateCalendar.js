const calendars = localStorage.getItem('calendars').split(',');

let s21 = calendars[0];
let e21 = calendars[1];
let s22 = calendars[2];
let e22 = calendars[3];
let s31 = calendars[4];
let e31 = calendars[5];
let s32 = calendars[6];
let e32 = calendars[7];
let s41 = calendars[8];
let e41 = calendars[9];
let s42 = calendars[10];
let e42 = calendars[11];
let s51 = calendars[12];
let e51 = calendars[13];
let s52 = calendars[14];
let e52 = calendars[15];
let s61 = calendars[16];
let e61 = calendars[17];
let s62 = calendars[18];
let e62 = calendars[19];
let s71 = calendars[20];
let e71 = calendars[21];
let s72 = calendars[22];
let e72 = calendars[23];


async function postCreateCalendar() {
    const token = localStorage.getItem('jwt');
    const response = await fetch('http://172.16.8.231:3000/postCreateCalendar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            s21: s21,
            e21: e21,
            s22: s22,
            e22: e22,
            s31: s31,
            e31: e31,
            s32: s32,
            e32: e32,
            s41: s41,
            e41: e41,
            s42: s42,
            e42: e42,
            s51: s51,
            e51: e51,
            s52: s52,
            e52: e52,
            s61: s61,
            e61: e61,
            s62: s62,
            e62: e62,
            s71: s71,
            e71: e71,
            s72: s72,
            e72: e72
          
            
        }),
    });
    location.reload();
}