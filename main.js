$(document).ready(() => {
  const $adressBook = $('#AdressBook');
  const $aside = $('.aside');
  $adressBook.on('click', () => {$aside.slideToggle("left")
})

})