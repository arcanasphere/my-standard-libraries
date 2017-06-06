var $FadeSpeed = 600;  /* Fade in and out, in milliseconds. Change to make faster or slower */

/* Add the necessary div for the lightbox */
/* Lightbox will appear on either a link either:
  1) inside of div.product-row, if the link is an image.
  2) with class PegBootLightBoxLink, if the link is an image   */

/* function preparePegBootLightBox() must be called by html file.
   See associated grooming-site-lightbox.html for an example. */
function preparePDSLightBox() {
  $("#PageBody").append('<div id="PDSLightBox"><div id="PDSLightBoxInner"></div><h2 id="PDSLightBoxHeadline"></h2><span class="glyphicon glyphicon-remove-circle" id="PDSLightBoxCloseIcon"></span></div>');
}

/* Begin code to find & show the lightbox + image when clicked */
$("#PageBody").on("click", "div.item a, a.LightBoxLink", function(e) {
  var $ThisLink = $(this).attr('href');
  var $ThisLinkType = $ThisLink.substr($ThisLink.lastIndexOf('.')+1 );
  $ThisLinkType = $ThisLinkType.toLowerCase();
  switch($ThisLinkType) {
    case 'gif':
    case 'jpg':
    case 'png':
      $("#PDSLightBoxInner").css('background-image', 'url(' + $ThisLink + ')');
      /* Begin Add Headline */
      var $picParent = $(this).closest("div#PageBody");
      var $picHeadline = $picParent.find("h2");
      var $PicChild = $(this).find("img");
      var $PicChildHeadline = $(this).children("img").attr("alt");
      $("#PDSLightBoxHeadline").text($PicChildHeadline);
      /* End Add Headline */
      $("#PDSLightBox").fadeIn($FadeSpeed);
      e.preventDefault();
    break;
  }
});
/* End code to find & show the lightbox + image when clicked */


    /* Begin Close the lightbox area when clicked. */
    $("#PageBody").on("click", "#PDSLightBox", function() {
      $("#PDSLightBox").fadeOut($FadeSpeed);
    });
    /* End Close the lightbox area when clicked. */
