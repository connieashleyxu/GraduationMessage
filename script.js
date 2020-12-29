var messageBtn = $(".message-btn");
var encouragementMessage = $('.encouragement-msg');



messageBtn.on('click', sendEncouragement);

function sendEncouragement(event){
  event.preventDefault();
  var nameInput = $('.name-input').val();
  var yearInput = $('.year-input').val().toLowerCase();
  
  encouragementMessage.text(`congratulations ${nameInput}! go class of ${yearInput}!`);

}