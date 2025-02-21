// Ensure the DOM is fully loaded before running the script
$(document).ready(function () {
  // Get the value of the meta tag with name "active-menu"
  const element = $('meta[name="active-menu"]').attr('content');
  // Add the 'active' class to the element with the ID matching the meta tag content
  $('#' + element).addClass('active');

  // Attach a scroll event handler to the window
  $(window).scroll(function () {
    // Toggle the 'scrolled' class on the 'nav' element based on the scroll position
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 10);
  });
});
