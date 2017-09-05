(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

window.fbAsyncInit = function() {
    FB.init({
        appId: '102814740426818',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v2.10'
    });

    populateHomeCards();
};

function populateHomeCards() {
    let getEventsPromise = getEvents();
    
    getEventsPromise.then((response) => {
        let data = response.data;
        let count = 3;
        let $cardDeck = $('#home-section-events .card-deck');
        for (const item of data) {
            if (item.name.indexOf('TGIFHacks') === -1) continue;
            let $card = $('#templates #event-card-template').clone().removeAttr('id');
            $card.find('.card-title').text(item.name);
            $card.find('.card-img-top').attr('src', item.cover.source);
            $card.find('.btn').attr('href', 'https://www.facebook.com/events/' + item.id);
            $cardDeck.append($card);
            if (--count == 0) break;
        }
    });
    
    getEventsPromise.catch(() => {
        console.error('Something went wrong in fetching event data.');
    });
}

function getEvents() {
    return new Promise((resolve, reject) => {
        FB.api(
            '219467331408976/events', { fields: 'id, name, description, start_time, end_time, cover', access_token: '102814740426818|Yb7Io6_Ze8Ql3EjVcsNabKyLTWo' },
            function(response) {
                if (!response.error) {
                    resolve(response);
                } else {
                    reject();
                }
            }
        );
    });
}
