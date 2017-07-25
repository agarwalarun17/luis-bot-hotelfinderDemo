var Promise = require('bluebird');

var ReviewsOptions = [
    '“Very stylish, great stay, great staff”',
    '“good hotel awful meals”',
    '“Need more attention to little things”',
    '“Lovely small hotel ideally situated to explore the area.”',
    '“Positive surprise”',
    '“Beautiful suite and resort”'];

module.exports = {
    searchHotels: function (destination) {
        return new Promise(function (resolve) {

            // Filling the hotels results manually just for demo purposes
            var hotels = [];
			
            /*for (var i = 1; i <= 5; i++) {
                hotels.push({
                    name: destination + ' Hotel ' + i,
                    location: destination,
                    rating: Math.ceil(Math.random() * 5),
                    numberOfReviews: Math.floor(Math.random() * 5000) + 1,
                    priceStarting: Math.floor(Math.random() * 450) + 80,
                    image: 'https://placeholdit.imgix.net/~text?txtsize=35&txt=Hotel+' + i + '&w=500&h=260'
                });
            }*/
			hotels.push({
                    name: 'Hotel Surya',
                    location: 'MIDC, Pune',
                    rating: 3,
                    numberOfReviews: 5,
                    priceStarting: 1680,
                    image: 'https://rimghtlak.mmtcdn.com/images/hotels/201411041145348860/1478692256041.jpg?interpolation=progressive-bicubic&output-quality=75&downsize=573:*&crop=573:240;0,70+' + '&w=500&h=260',
					detailUrl: 'https://www.makemytrip.com/mmthtl/site/hotels/detail?country=IN&city=XXB&checkin=07202017&checkout=07212017&searchText=Pune&roomStayQualifier=1e0e&hotelId=201411041145348860&mtkeys=N$$s9rHC9RN7n838MOFFdnnJNmjqpJQJQnsuv6qJC8mJuz5po2gk4TPi%2FK1%2FZ87v9hSx4lRcFmmIvgKn%2FoEHs9d1DHJUqkAXHYfRXhnLUdbM7KBL2xvyzI%2F2M2imu8bprEUudMYHcOpt61X8hHaZqaSuyt5VibgWIb7rXZISbsBbYAPPLxh8UjvI9azAtaZOdJ4yjWndttZ9ApQHWuOe0vSHjDLXZRGADINCHJunXLCq46YzlVWDuUQbIkxFt%2BNti3dE1qUoCgidzvZoKmqBTioQS1fNt7SnGsodqyRABjzE1xh2k2vFZ14JDF47GNWCO3e6OL22fi%2B3%2BrAOhK9ZbQTTmuST34FjyHae8mawjBRQT1No3Bjb2vVBIlRWVCnfdU%2BMUwrq1mqgtWlL%2F3iITKy0A%3D%3D&p=18.1898766%7C74.6153903%7C0%7C0%7C3&newListing=true'
                },
				{
                    name: 'Hotel Anand',
                    location: 'MIDC, Pune',
                    rating: 1,
                    numberOfReviews: 5,
                    priceStarting: 1420,
                    image: 'https://rimghtlak.mmtcdn.com/images/hotels/201702091124548868/1486635413159.jpg?interpolation=progressive-bicubic&output-quality=75&downsize=573:*&crop=573:240;0,70+' + '&w=500&h=260',
					detailUrl: 'https://www.makemytrip.com/mmthtl/site/hotels/detail?country=IN&city=XXB&checkin=07202017&checkout=07212017&searchText=Pune&roomStayQualifier=1e0e&hotelId=201702091124548868&mtkeys=N$$s9rHC9RN7n%2BLMgoz1vf%2Fwbahj0Q41yHQlFuEmaOBvw86PX0AOsIuHcEIktlvBUu2e4CNpfWE6bh7w8bO7ui8JDCzeA2WoFzlQlEDy5%2B5wZG1PxBfgeff6ELLL7mHrbEnnIoSMuyFcm67QfbiTi8OtctuucXsSRllCsLp7%2F%2FMaYKigqIs9HnuGpMuNPATz2UKIJK59ftIDx6vmsIDwCeVWRjXAa6tTsDSzHVfugKAJ6Vm8CeLFsWW0bBMHiTJaHSJROE4yvYTRhTg%2FYQq4Fjaa6q%2F7GwPV6Mc4o44ESb5Ktbazkep%2BCRXqTlzpbv7wn2ZY91EuUmE9eRp7vKaA9ITe%2BHK58WfRVUj&p=18.2893451%7C74.7465274%7C0%7C0%7C5&newListing=true'
                });

            hotels.sort(function (a, b) { return a.priceStarting - b.priceStarting; });

            // complete promise with a timer to simulate async response
            setTimeout(function () { resolve(hotels); }, 1000);
        });
    },

    searchHotelReviews: function (hotelName) {
        return new Promise(function (resolve) {

            // Filling the review results manually just for demo purposes
            var reviews = [];
            for (var i = 0; i < 5; i++) {
                reviews.push({
                    title: ReviewsOptions[Math.floor(Math.random() * ReviewsOptions.length)],
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris odio magna, sodales vel ligula sit amet, vulputate vehicula velit. Nulla quis consectetur neque, sed commodo metus.',
                    image: 'https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif'
                });
            }

            // complete promise with a timer to simulate async response
            setTimeout(function () { resolve(reviews); }, 1000);
        });
    }
};