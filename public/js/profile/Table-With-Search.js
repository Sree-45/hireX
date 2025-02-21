// Ensure the DOM is fully loaded before running the script
$(document).ready(function () {
  // Attach a keyup event handler to the search input field
  $('.search').keyup(function () {
    // Get the search term from the input field
    const searchTerm = $('.search').val();
    // Replace spaces with "'):containsi('" to create a search pattern
    const searchSplit = searchTerm.replace(/ /g, "'):containsi('");

    // Extend jQuery to add a custom :containsi selector for case-insensitive search
    $.extend($.expr[':'], {
      containsi: function (elem, _, match) {
        return (
          (elem.textContent || elem.innerText || '')
            .toLowerCase()
            .indexOf((match[3] || '').toLowerCase()) >= 0
        );
      },
    });

    // Hide rows that do not match the search pattern
    $('.results tbody tr')
      .not(`:containsi('${searchSplit}')`)
      .each(function () {
        $(this).attr('visible', 'false');
      });

    // Show rows that match the search pattern
    $(".results tbody tr:containsi('" + searchSplit + "')").each(function () {
      $(this).attr('visible', 'true');
    });

    // Count the number of visible rows
    const jobCount = $('.results tbody tr[visible="true"]').length;
    // Update the counter with the number of visible rows
    $('.counter').text(jobCount + ' item');

    // Show or hide the no-result message based on the number of visible rows
    if (jobCount == '0') {
      $('.no-result').show();
    } else {
      $('.no-result').hide();
    }
  });
});
