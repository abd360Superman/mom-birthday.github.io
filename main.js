const data = [
    {
        name: 'Midnight Celebration!',
        details: ['Hukka', 'Chocolate mousse bowl', 'Sushi cake', 'Rose wine', 'Cocktails and mocktails', 'Tequilla shots', 'Tit bits', 'Dimsums'],
        startTime: [2021, 7, 14, 00, 00]
    },
    {
        name: 'Bed Tea',
        details: ['No entry in Kitchen for the day', 'Tea', 'Biscuits'],
        startTime: [2021, 7, 15, 7, 30]
    },
    {
        name: 'Breakfast',
        details: ['Poha', 'Bun Maska'],
        startTime: [2021, 7, 15, 9, 45]
    },
    {
        name: 'Lunch',
        details: ['Ceaser Salad', 'Dehli style Hakka Noodles', 'Thai Green Curry Rice', 'Desert', 'Exotic Vegetable in Chilli Oyster Sauce', 'Tacos with Avacado Filling', 'Baked Pasta with Garlic Bread'],
        startTime: [2021, 7, 15, 13, 45]
    },
    {
        name: 'Snacks',
        details: ['Bhel Puri', 'Paani Puri'],
        startTime: [2021, 7, 15, 16, 45]
    },
    {
        name: 'Dinner',
        details: ['Stuffed Naan'],
        startTime: [2021, 7, 15, 20, 30]
    }
]

var noseX = 0;
var noseY = 0;

function preload() {
    hatImg = loadImage('https://i.postimg.cc/wTb8Sp8C/bday-cap.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, model_loaded);
    poseNet.on('pose', getPoses);

}

function getDetails() {
    var curDate = new Date();
    var dateArr = [curDate.getFullYear(), curDate.getMonth(), curDate.getDate(), curDate.getHours(), curDate.getMinutes()];

    for(c = 0; c < data.length; c++) {
        if (dateArr[0] < data[c].startTime[0]) {
            document.getElementById('eventName').innerHTML = data[c].name;
            document.getElementById('startTime').innerHTML = data[c].startTime[3] + ':' + data[c].startTime[4] + ', ' + data[c].startTime[2] + 'th ' + retMonth(data[c].startTime[1]) + ', ' + data[c].startTime[0];
            document.getElementById('addDets_ul').innerHTML = '';
            for(d = 0; d < data[c].details.length; d++) {
                document.getElementById('addDets_ul').innerHTML += '<li>' + data[c].details[d] + '</li>'
            }
            break
        } else if((dateArr[0] == data[c].startTime[0]) && (dateArr[1] < data[c].startTime[1])) {
            document.getElementById('eventName').innerHTML = data[c].name;
            document.getElementById('startTime').innerHTML = data[c].startTime[3] + ':' + data[c].startTime[4] + ', ' + data[c].startTime[2] + 'th ' + retMonth(data[c].startTime[1]) + ', ' + data[c].startTime[0];
            document.getElementById('addDets_ul').innerHTML = '';
            for(d = 0; d < data[c].details.length; d++) {
                document.getElementById('addDets_ul').innerHTML += '<li>' + data[c].details[d] + '</li>'
            }
            break
        } else if((dateArr[0] == data[c].startTime[0]) && (dateArr[1] == data[c].startTime[1]) && (dateArr[2] < data[c].startTime[2])) {
            document.getElementById('eventName').innerHTML = data[c].name;
            document.getElementById('startTime').innerHTML = data[c].startTime[3] + ':' + data[c].startTime[4] + ', ' + data[c].startTime[2] + 'th ' + retMonth(data[c].startTime[1]) + ', ' + data[c].startTime[0];
            document.getElementById('addDets_ul').innerHTML = '';
            for(d = 0; d < data[c].details.length; d++) {
                document.getElementById('addDets_ul').innerHTML += '<li>' + data[c].details[d] + '</li>'
            }
            break
        } else if((dateArr[0] == data[c].startTime[0]) && (dateArr[1] == data[c].startTime[1]) && (dateArr[2] == data[c].startTime[2]) && (dateArr[3] < data[c].startTime[3])) {
            document.getElementById('eventName').innerHTML = data[c].name;
            document.getElementById('startTime').innerHTML = data[c].startTime[3] + ':' + data[c].startTime[4] + ', ' + data[c].startTime[2] + 'th ' + retMonth(data[c].startTime[1]) + ', ' + data[c].startTime[0];
            document.getElementById('addDets_ul').innerHTML = '';
            for(d = 0; d < data[c].details.length; d++) {
                document.getElementById('addDets_ul').innerHTML += '<li>' + data[c].details[d] + '</li>'
            }
            break
        } else if((dateArr[0] == data[c].startTime[0]) && (dateArr[1] == data[c].startTime[1]) && (dateArr[2] == data[c].startTime[2]) && (dateArr[3] == data[c].startTime[3]) && (dateArr[4] <= data[c].startTime[4])) {
            document.getElementById('eventName').innerHTML = data[c].name;
            document.getElementById('startTime').innerHTML = data[c].startTime[3] + ':' + data[c].startTime[4] + ', ' + data[c].startTime[2] + 'th ' + retMonth(data[c].startTime[1]) + ', ' + data[c].startTime[0];
            document.getElementById('addDets_ul').innerHTML = '';
            for(d = 0; d < data[c].details.length; d++) {
                document.getElementById('addDets_ul').innerHTML += '<li>' + data[c].details[d] + '</li>'
            }
            break
        } else {
            document.getElementById('eventName').innerHTML = 'No event found';
            document.getElementById('startTime').innerHTML = 'No timing'
            document.getElementById('addDets_ul').innerHTML = '<li>No event</li>';
        }
    }
}

function draw() {
    getDetails();
    image(video, 0, 0, 300, 300);
    image(hatImg, noseX-75, noseY-160, 150, 120);
}

function retMonth(mon) {
    switch(mon) {
        case 0:
            return 'January'
        case 1:
            return 'Febuary'
        case 2:
            return 'March'
        case 3:
            return 'April'
        case 4:
            return 'May'
        case 5:
            return 'June'
        case 6:
            return 'July'
        case 7:
            return 'August'
        case 8:
            return 'September'
        case 9:
            return 'October'
        case 10:
            return "November"
        case 11:
            return "December"
    }
}

function getPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log('nose x = ' + noseX);
        console.log('nose y = ' + noseY);
    }
}

function model_loaded() {
    console.log('Model Initialized');
}

function clickImg() {
    save('myFilterImage.png');
}
