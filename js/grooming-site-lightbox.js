  var $FadeSpeed = 600;  /* Fade in and out, in milliseconds. Change to make faster or slower */

  /* Add the necessary div for the lightbox */
  /* Lightbox will appear on either a link either:
    1) inside of div.product row, if the link is an image.
    2) with class PegBootLightBoxLink, if the link is an image
  */
  $(document).ready(function() {
    $("#FullPageContainer").append('<div id="PegBootLightBox"><h2 id="PegBootLightBoxHeadline"></h2></div>');
  });

  /* Begin code to find & show the lightbox + image when clicked */
  $("#FullPageContainer").on("click", ".product-row a, a.PegBootLightBoxLink", function(e) {
    var $ThisLink = $(this).attr('href');
    var $ThisLinkType = $ThisLink.substr($ThisLink.lastIndexOf('.')+1 );
    $ThisLinkType = $ThisLinkType.toLowerCase();
    switch($ThisLinkType) {
      case 'gif':
      case 'jpg':
      case 'png':
        $("#PegBootLightBox").css('background-image', 'url(' + $ThisLink + ')');
        /* Begin Add Headline */
        var $picParent = $(this).closest("div.product-row");
        var $picHeadline = $picParent.find("h2");
        $("#PegBootLightBoxHeadline").text($picHeadline.text());
        /* End Add Headline */
        $("#PegBootLightBox").fadeIn($FadeSpeed);
        e.preventDefault();
      break;
    }
  });
  /* End code to find & show the lightbox + image when clicked */