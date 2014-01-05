var itinerary = [
    '1/1',  'Maui, HI',
    '1/4',  'Honolulu, HI',
    '1/8',  'Seattle, WA',
    '1/14', 'Auckland, NZ'
];
window.onload = function(){
    var today = new Date();
    var location;
    for(var i = 0; i < itinerary.length; i += 2)
    {
        itinerary[i] += '/14';
        var date = new Date(itinerary[i]);
        if(today < date)
            break;
        location = itinerary[i + 1];
    }
    document.getElementById('locationText').innerText = location;
};