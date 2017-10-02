(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

var nextPaging = '';

window.fbAsyncInit = function() {
    FB.init({
        appId: '102814740426818',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v2.10'
    });

    if (window.location.pathname === '/') {
        populateHomeCards();
    } else if (window.location.pathname === '/events.html') {
        populateEventCards();
        $(window).scroll(function() {
            if ($(window).scrollTop() > 500) {
                $('#events-scroll-top-btn').show();
            } else {
                $('#events-scroll-top-btn').hide();
            }

            if ($(window).scrollTop() == $(document).height() - $(window).height()) {
                if (nextPaging !== '') {
                    $('#events-section-loading').show();
                    populateEventCards();
                } else {
                    $('#events-section-loading').hide();
                }
            }
        });
    }
};

function populateHomeCards() {
    let getEventsPromise = getEvents(10);

    getEventsPromise.then((response) => {
        let data = response.data;
        let count = 3;
        let $cardDeck = $('#home-section-events .card-deck');
        for (const item of data) {
            if (item.name && item.name.indexOf('TGIFHacks') === -1) continue;
            let $card = $('#templates #event-card-template').clone().removeAttr('id');
            if (item.name) $card.find('.card-title').text(item.name);
            if (item.cover) $card.find('.card-img-top').attr('src', item.cover.source);
            $card.find('.btn').attr('href', 'https://www.facebook.com/events/' + item.id);
            $cardDeck.append($card);
            if (--count == 0) break;
        }
    });

    getEventsPromise.catch(() => {
        console.error('Something went wrong in fetching event data.');
    });
}

function populateEventCards() {
    let getEventsPromise = getEvents(10);

    getEventsPromise.then((response) => {
        nextPaging = response.paging.next === undefined ? '' : response.paging.next;

        let data = response.data;
        let $section = $('#events-section-events');
        for (const item of data) {
            let $card = $('#templates #event-card-template').clone().removeAttr('id');

            $card.find('.event-name').text(item.name);

            if (item.start_time && item.end_time) {
                let start = parseFBDate(item.start_time);
                let end = parseFBDate(item.end_time);
                let datetime = '';
                datetime += start.toDateString();
                datetime += ' at ';
                datetime += start.toTimeString().substring(0, 5);
                datetime += ' - ';
                datetime += start.toDateString() === end.toDateString() ? '' : ' ' + end.toDateString();
                datetime += end.toTimeString().substring(0, 5);
                datetime += ' SGT'
                $card.find('.event-datetime').text(datetime);
            }

            let maxChars = 380;
            let $eventDescription = $card.find('.event-description');
            if (item.description) {
                if (item.description.length > maxChars) {
                    let shortText = item.description.substring(0, maxChars);
                    let restOfText = item.description.substring(maxChars);
                    $eventDescription.text(shortText);
                    $eventDescription.append('<span class="ellipsis">...</span>')
                    $eventDescription.append('<span class="more-text"></span>');
                    $eventDescription.find('.more-text').text(restOfText).hide();
                    $eventDescription.append('&nbsp;&nbsp;<a href="javascript:void(0);" class="toggle-text" data-toggle="false">Show More</a>');
                    $eventDescription.find('.toggle-text').click(function(event) {
                        let $this = $(this);
                        if ($this.attr('data-toggle') === 'false') {
                            $this.text('Show Less');
                            $this.attr('data-toggle', 'true');
                        } else {
                            $this.text('Show More');
                            $this.attr('data-toggle', 'false');
                        }
                        $this.parent().find('.ellipsis').toggle();
                        $this.parent().find('.more-text').toggle();
                    });
                } else {
                    $eventDescription.text(item.description);
                }
            }

            if (item.cover) {
                $card.find('.card-img-top').attr('src', item.cover.source);
            }

            $card.find('.btn').attr('href', 'https://www.facebook.com/events/' + item.id);

            $section.append($card);
        }
    });

    getEventsPromise.catch(() => {
        console.error('Something went wrong in fetching event data.');
    });
}

function parseFBDate(datestr) {
    let year = parseInt(datestr.substring(0, 4));
    let month = parseInt(datestr.substring(5, 7));
    let date = parseInt(datestr.substring(8, 10));
    let hh = parseInt(datestr.substring(11, 13));
    let mm = parseInt(datestr.substring(14, 16));
    return new Date(year, month, date, hh, mm);
}

function getEvents(limit) {
    return new Promise((resolve, reject) => {
        let callback = function(response) {
            if (!response.error) {
                resolve(response);
            } else {
                reject();
            }
        };

        if (nextPaging === '') {
            FB.api('219467331408976/events', {
                limit: limit,
                fields: 'id,name,description,start_time,end_time,cover',
                access_token: '102814740426818|Yb7Io6_Ze8Ql3EjVcsNabKyLTWo'
            }, callback);
        } else {
            FB.api(nextPaging, callback);
        }
    });
}
