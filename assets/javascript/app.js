$(".quick-link-card").on("click", function() {
  var term = $(this).attr("data-term");
  console.log(term);
  var queryURL =
    "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" +
    term +
    "&location=philadelphia&radius=40000&limit=10&categories=kids,children";

  $.ajax({
    url: queryURL,
    method: "GET",
    headers: {
      Authorization:
        "Bearer xbvcW29zavUCvrlYQUoiGodM98RsayeaJSphvNMVW8WOY8RfwMsGR7NHtsqubWZhb620AwbXXVvGZG3R-Kui783rGEtf72eWS3BuTAqTQM0DsvaT-V6ddjw8sem6XXYx"
    },
    dataType: "json"
  }).then(function(response) {
    console.log(response);
    $("#quickLinkScrollableModal .modal-body").empty();
    var business = response.businesses;
    for (var i = 0; i < business.length; i++) {
      console.log(response);
      console.log(business[i].name);
      //  $("#quickLinkScrollableModal .modal-body").append(business[i].name);
      //  $("#quickLinkScrollableModal .modal-body").append(business[i].location.address1);
      var cardImage = $("<img>").attr("src", business[i].image_url);
      cardImage.addClass("img-fluid");
      var row = $("<div class='row mb-2'>");
      var col4 = $("<div class='col-4'>");
      col4.append(cardImage);
      var col8 = $("<div class='col-8'>");
      col8.append("<h4>" + business[i].name + "</h4>");
      col8.append("<p>" + business[i].location.address1 + "</p>");
      col8.append("<p>" + business[i].location.city + "</p>");
      col8.append("<p>" + business[i].url + "</p>");
      var row2 = $("<hr>");

      row.append(col4, col8);
      console.log(cardImage);
      $("#quickLinkScrollableModal .modal-body").append(row, row2);
    }
  });
});

//Carousel
function displayEvent() {
  var eventfullURL =
    "https://api.eventful.com/json/events/search?app_key=Z6B5HZN5sj28LmLD&category=family_fun_kids&location=Philadelphia&date=November&sort_order=popularity";
  $.ajax({
    url: eventfullURL,
    dataType: "jsonp",
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var events = response.events.event;
    console.log(events);
    for (var i = 0; i < events.length; i++) {
      console.log(i);
      var title = events[i].title;
      console.log(title);
      var time = moment(events[i].start_time, "YYYY-MM-DD hh:mm:ss").format(
        "lll"
      );
      console.log(time);
      var venue = events[i].venue_name;
      console.log(venue);
      var vURL = $("<a />", {
        target: "blank",
        href: events[i].venue_url,
        text: events[i].venue_name
      });
      vURL.addClass("venUrl");
      var vAddress = events[i].venue_address;
      console.log(vAddress);
      var city = events[i].city_name;
      var state = events[i].region_abbr;
      var post = events[i].postal_code;
      console.log(post);
      var evURL = $("<a />", {
        target: "blank",
        href: events[i].url,
        text: events[i].title
      });
      evURL.addClass("titleUrl");
      var timeDis = $("<p>").text(time);
      var vAddress = $("<p>").text(vAddress);
      var city = $("<p>").text(city + " " + state + " " + post);
      var image = $("<img>");
      image.addClass("carImg  d-block w-100 text-center rounded");
      image.attr("src", `assets/images/${i + 1}.jpg`);
      var eventSlide = $("<div>");
      eventSlide.addClass("carousel-item text-center");
      if (i === 0) {
        eventSlide.addClass("carousel-item active text-center");
      }
      var caption = $("<div>");
      caption.addClass(
        "carousel-caption border-0 rounded shadow d-none d-md-block pt-2 pb-1"
      );
      caption.append(evURL, timeDis, vURL, vAddress, city);
      eventSlide.append(image, caption);
      $(".carousel-inner").append(eventSlide);
    }
  });
}
displayEvent();

// $(".quick-link-card").on("click", function () {
//   var term = $(this).attr("data-term")
//   console.log(term);
//   var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + term + "&location=philadelphia&radius=40000&limit=10&categories=kids,children";

//   $.ajax({
//     url: queryURL,
//     method: "GET",
//     headers: {
//       Authorization: "Bearer xbvcW29zavUCvrlYQUoiGodM98RsayeaJSphvNMVW8WOY8RfwMsGR7NHtsqubWZhb620AwbXXVvGZG3R-Kui783rGEtf72eWS3BuTAqTQM0DsvaT-V6ddjw8sem6XXYx",
//     },
//     dataType: 'json',
//   }).then(function (response) {
//     console.log(response);
//     $("#quickLinkScrollableModal .modal-body").empty();
//     var business = response.businesses
//     for (var i = 0; i < business.length; i++) {

//       console.log(response);
//       console.log(business[i].name);

//       var searchDiv = $("div");
//       searchDiv.append

//     }

//   });
// });
