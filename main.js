$(document).ready(() => {
  const $adressButton1 = $('#AdressListButton1');
  const $adressButton2 = $('#AdressListButton2');
  const $adressButton3 = $('#AdressListButton3');
  const $adressButton4 = $('#AdressListButton4');
  const $Address1 = $('.Address-1');
  const $Address2 = $('.Address-2');
  const $Address3 = $('.Address-3');
  const $Address4 = $('.Address-4');
  
  $adressButton1.on('click', () => {$Address1.slideToggle(), $Address2.slideUp(), $Address3.slideUp(), $Address4.slideUp()
})

$adressButton2.on('click', () => {$Address2.slideToggle(), $Address1.slideUp(), $Address3.slideUp(), $Address4.slideUp()
})

$adressButton3.on('click', () => {$Address3.slideToggle(), $Address2.slideUp(), $Address1.slideUp(), $Address4.slideUp()
})

$adressButton4.on('click', () => {$Address4.slideToggle(), $Address3.slideUp(), $Address2.slideUp(), $Address1.slideUp()
})
$adressButton1.on('click', () =>{ $adressButton1.css('background-color', '#fff'), $adressButton2.css('background-color', '#f2f5f6'), $adressButton3.css('background-color', '#f2f5f6'), $adressButton4.css('background-color', '#f2f5f6')})
$adressButton2.on('click', () =>{ $adressButton2.css('background-color', '#fff'), $adressButton3.css('background-color', '#f2f5f6'), $adressButton4.css('background-color', '#f2f5f6'), $adressButton1.css('background-color', '#f2f5f6')})
$adressButton3.on('click', () =>{ $adressButton3.css('background-color', '#fff'), $adressButton2.css('background-color', '#f2f5f6'), $adressButton4.css('background-color', '#f2f5f6'), $adressButton1.css('background-color', '#f2f5f6')})
$adressButton4.on('click', () =>{ $adressButton4.css('background-color', '#fff'), $adressButton3.css('background-color', '#f2f5f6'), $adressButton2.css('background-color', '#f2f5f6'), $adressButton1.css('background-color', '#f2f5f6')})

$adressButton1.on('click', () =>{ $adressButton1.css('border-left', '4px solid #293135'), $adressButton3.css('border-left', '4px solid #f2f5f6'), $adressButton2.css('border-left', '4px solid #f2f5f6'), $adressButton4.css('border-left', '4px solid #f2f5f6')})
$adressButton2.on('click', () =>{ $adressButton2.css('border-left', '4px solid #293135'), $adressButton3.css('border-left', '4px solid #f2f5f6'), $adressButton4.css('border-left', '4px solid #f2f5f6'), $adressButton1.css('border-left', '4px solid #f2f5f6')})
$adressButton3.on('click', () =>{ $adressButton3.css('border-left', '4px solid #293135'), $adressButton4.css('border-left', '4px solid #f2f5f6'), $adressButton2.css('border-left', '4px solid #f2f5f6'), $adressButton1.css('border-left', '4px solid #f2f5f6')})
$adressButton4.on('click', () =>{ $adressButton4.css('border-left', '4px solid #293135'), $adressButton3.css('border-left', '4px solid #f2f5f6'), $adressButton2.css('border-left', '4px solid #f2f5f6'), $adressButton1.css('border-left', '4px solid #f2f5f6')})

});