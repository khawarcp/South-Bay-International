var product_on_page = $('.products-on-page');
var next_url = product_on_page.data('next-url');
var load_more__btn = $('.load-more__btn');
var load_more__spinner = $('.load-more__spinner');

function loadMoreProducts() {
  $.ajax({
    url: next_url,
    type: 'GET',
    dataType: 'html',
    beforeSend: function () {
      load_more__btn.hide();
      load_more__spinner.show();
    }
  })
    .done(function (next_page) {
      var new_products = $(next_page).find('.products-on-page');
      var new_url = new_products.data('next-url');
      load_more__spinner.hide();

      if (new_url) {
        load_more__btn.show();
      }

      next_url = new_url;
      product_on_page.append(new_products.html());
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.error('Error loading more products:', textStatus, errorThrown);
      load_more__btn.show(); // Show the button in case of failure
      load_more__spinner.hide();
    });
}

// Example of using the function when clicking a button
$('.load-more__btn').on('click', function () {
  loadMoreProducts();
});
