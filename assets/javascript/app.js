$(".quick-link-card").on("click", function () {
  var term = $(this).attr("data-term")
  console.log(term);
  var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + term + "&location=philadelphia&radius=40000&limit=10";

  $.ajax({
      url: queryURL,
      method: "GET",
      headers: {
          Authorization: "Bearer xbvcW29zavUCvrlYQUoiGodM98RsayeaJSphvNMVW8WOY8RfwMsGR7NHtsqubWZhb620AwbXXVvGZG3R-Kui783rGEtf72eWS3BuTAqTQM0DsvaT-V6ddjw8sem6XXYx",
      },
      dataType: 'json',
  }).then(function (response) {
      var business = response.businesses
      for ( var i = 0; i < business.length; i++){
      
      console.log(response);
      console.log(business[i].name);
    
      }

  });
});
 
 


