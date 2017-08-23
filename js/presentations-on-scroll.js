$(document).ready(function(){
   $(window).scroll(lazyload);
   lazyload();
});

function lazyload(){
  var wt = $(window).scrollTop();    //* top of the window
  var wb = wt + $(window).height();  //* bottom of the window

  $(".buy").each(function(){
    var ot = $(this).offset().top;  //* top of target div
    var ob = ot + $(this).height(); //* bottom of target div
    var thisDiv = $(this).attr('id');   //get the ID of the div that's being scrolled to.
    var thisPres = thisDiv.replace('buybars','');   // take the "buybars" off of the ID to generate the MSSU

    if(wt<=ob && wb >= ot && !PresentationCalled(thisPres,allLoadedPresentations)){    // conditional 1 & 2: Is the target div on screen? Conditional 3: Has the presentation already loaded?
       lazyLoadPres(thisPres);
    }
  });
}


/* Okay, PresentationCalled has taken over two roles. It shouldn't, but it did.  Ergo, I'm commenting this.
   First, it looks to see if the div is in the list of divs.  If so, then the presentation has at least been called for.
   Second, it looks to see if the div is "Active" but empty.  If so, here's where it breaks the "do-one-thing" ethic.
   If the div was called but still empty, then the AJAX misfired.  It resets the div to "not active", by deleting the "Active"
   attribute.
   If the div has safely been loaded then it returns true
   If the div has not yet been loaded then it returns false.
   If the div has misfired then it resets the div and returns false
*/
function PresentationCalled(needle,haystack) {
  returnValue = false;
  for(var i=0;i<haystack.length;i++) {
    if(haystack[i]===needle) {
      returnValue = true;
    }
  }
  // check for children in needle div
  var thisDiv = '#buybars' + needle;
  var thisDivChildElements = $(thisDiv).children().length;
  var presCheck = $(thisDiv).attr('getprescall');

  //check for misfire and reset only if necessary.
  if(thisDivChildElements == 0) {
    returnValue = false;
    if(presCheck === "Active") {
      $(thisDiv).removeAttr('getprescall');
    }
  }
  return returnValue;
}
/*  End the PresentationCalled function.  */

function lazyLoadPres($this_pres) {
  GetPresJSON({
    siteid:'UETHJ',
    presid:$this_pres,
    objectplaceholder: 'buybars' + $this_pres,
    forcetemplateid:'1004',
    buybaronly: '1',
    hideonhandcol: '1',
    forcerating: '1'
  });
}
