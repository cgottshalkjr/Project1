$(".quick-link-card").on("click", function () {
  var term = $(this).attr("data-term")
  console.log(term);
  var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + term + "&location=philadelphia&radius=40000&limit=10&categories=kids,children";

  $.ajax({
    url: queryURL,
    method: "GET",
    headers: {
      Authorization: "Bearer xbvcW29zavUCvrlYQUoiGodM98RsayeaJSphvNMVW8WOY8RfwMsGR7NHtsqubWZhb620AwbXXVvGZG3R-Kui783rGEtf72eWS3BuTAqTQM0DsvaT-V6ddjw8sem6XXYx",
    },
    dataType: 'json',
  }).then(function (response) {
    console.log(response);
    $("#quickLinkScrollableModal .modal-body").empty();
    var business = response.businesses
    for (var i = 0; i < business.length; i++) {

      console.log(response);
      console.log(business[i].name);
      //  $("#quickLinkScrollableModal .modal-body").append(business[i].name);
      //  $("#quickLinkScrollableModal .modal-body").append(business[i].location.address1);
      var cardImage = $("<img>").attr("src", business[i].image_url);
      cardImage.addClass("img-fluid");
      var row = $("<div class='row mb-2'>")
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




