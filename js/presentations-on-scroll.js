$(document).ready(function(){
   $(window).scroll(lazyload);
   lazyload();
});

function lazyload(){
  var wt = $(window).scrollTop();    //* top of the window
  var wb = wt + $(window).height();  //* bottom of the window

  $(".buybars").each(function(){
    var ot = $(this).offset().top;  //* top of object (i.e. advertising div)
    var ob = ot + $(this).height(); //* bottom of object
    var thisPres = $(this).data("presentation");
    // console.log('thisPres = ' + thisPres);
    var thisDiv = $(this).attr('id');
    var thisPres = thisDiv.replace('buybars','');
    // console.log('thisPres loseBuyBars version = ' + thisPres);


    if(!$(this).attr("loaded") && wt<=ob && wb >= ot){
       $(this).html("..");
       $(this).attr("loaded",true);
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
