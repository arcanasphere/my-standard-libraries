<script>
  var $FadeSpeed = 600;  /* Fade in and out, in milliseconds. Change to make faster or slower */

  /* Add the necessary div for the lightbox */
  $(document).ready(function() {
    $("#FullPageContainer").append('<div id="PegBootLightBox"><h2 id="PegBootLightBoxHeadline"></h2></div>');
  });

  /* Begin code to find & show the lightbox + image when clicked */
  $("#FullPageContainer").on("click", ".product-image a", function(e) {
    var $ThisLink = $(this).attr('href');
    $("#PegBootLightBox").css('background-image', 'url(' + $ThisLink + ')');
    /* Begin Add Headline */
    var $picParent = $(this).closest("div.product-row");
    var $picHeadline = $picParent.find("h2");
    $("#PegBootLightBoxHeadline").text($picHeadline.text());
    /* End Add Headline */
    $("#PegBootLightBox").fadeIn($FadeSpeed);
    e.preventDefault();
  });
  /* End code to find & show the lightbox + image when clicked */

  /* Begin Close the lightbox area when clicked. */
  $("#FullPageContainer").on("click", "#PegBootLightBox", function() {
    $("#PegBootLightBox").fadeOut($FadeSpeed);
  });
  /* End Close the lightbox area when clicked. */
</script>
