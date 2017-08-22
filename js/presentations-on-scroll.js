$(document).ready(function(){
   $(window).scroll(lazyload);
   lazyload();
});

function lazyload(){
  var wt = $(window).scrollTop();    //* top of the window
  var wb = wt + $(window).height();  //* bottom of the window

  $(".buy").each(function(){
    var ot = $(this).offset().top;  //* top of object (i.e. advertising div)
    var ob = ot + $(this).height(); //* bottom of object
    var thisDiv = $(this).attr('id');
    var thisPres = thisDiv.replace('buybars','');
    var thisPresChildElements = $(this).children().length;

    // console.log(thisPres + " inside: " + thisPresChildElements);
    if(wt<=ob && wb >= ot && thisPresChildElements == 0){
       lazyLoadPres(thisPres);
    }
  });
}

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
