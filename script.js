$('#btnClickPush').on('click',function(){
  if($('#PushA').css('display')!='none'){
    $('#PushB').html('&#10;&#13;Push B&#10;&#13;Close Grip BB Bench - 3x8-10&#10;&#13;Standing BB OHP - 3x10-12&#10;&#13;Pec Deck Flys - 1x8-10, 2x40seconds&#10;&#13;Overhead Triceps - 3x10-12&#10;&#13;Lateral Raises Superset Push Ups - 4x10-12 LR and 3 sets to failure push ups (use knee)&#10;&#13;Shoulder Shrugs DB 1x6(heavy) 2x12(moderate)').show().siblings('div').hide();
  } else if($('#PushB').css('display')!='none'){
    $('#PushA').show().siblings('div').hide();
  }
});

$('#btnClickPull').on('click',function(){
  if($('#PullA').css('display')!='none'){
    $('#PullB').html('&#10;&#13;Pull B&#10;&#13;Seated Row 1 WU set, 1x8(heavy) 3x10-12(moderate)&#10;&#13;Rack Pulls - 3 WU sets, 2x8-10&#10;&#13;Hammer Curls - 3x10-12&#10;&#13;Reverse Grip Row or Pull Down - 3x10-12&#10;&#13;Cable Curls - 3x10-12&#10;&#13;Cable Rows - 2x20 drop sets&#10;&#13;DB Curls - drop set').show().siblings('div').hide();
  } else if($('#PullB').css('display')!='none'){
    $('#PullA').show().siblings('div').hide();
  }
});

$('#btnClickLegs').on('click',function(){
  if($('#LegsA').css('display')!='none'){
    $('#LegsB').html('&#10;&#13;Legs B&#10;&#13;Squats - 3 WU sets, 3x8-10, 1x4-6&#10;&#13;Leg Press Superset Calves - 2x40secs leg press and 2 sets to failure calf&#10;&#13;Hip Adductors 4x10-12&#10;&#13;Standing Calf Raises 4x10-12 then bounce reps to failure&#10;&#13;Quad Extensions 2x10-12 then 2 sets triple drop set').show().siblings('div').hide();
  } else if($('#LegsB').css('display')!='none'){
    $('#LegsA').show().siblings('div').hide();
  }
});


function openInstagram() {
  window.open("https://www.instagram.com/chokinghersoftly");
}

function openDiscord() {
  window.open("https://discord.com/users/221999158637232128");
}

function openGitHub() {
  window.open("https://github.com/yourfavouriteowo");
}

function sendMail() {
  window.open("mailto:whoami.420.f@gmail.com")
}

function bodyRecomp() {
  window.open("https://www.healthline.com/nutrition/body-recomposition")
}


