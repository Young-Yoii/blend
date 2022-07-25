let $grid = $('.grid').masonry({
  itemSelector: '.photo-item',
  columnWidth: '.grid__col-sizer',
  gutter: '.grid__gutter-sizer',
  percentPosition: true,
  stagger: 30,
  // nicer reveal transition
  visibleStyle: { transform: 'translateY(0)', opacity: 1 },
  hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
});

//------------------//

// Get an API key for your demos at https://unsplash.com/developers
const unsplashID = '9ad80b14098bcead9c7de952435e937cc3723ae61084ba8e729adb642daf0251';

// get Masonry instance
var msnry = $grid.data('masonry');

$grid.infiniteScroll({
  path: function() {
    return `https://api.unsplash.com/photos?client_id=${unsplashID}&page=${this.pageIndex}`;
  },
  // load response as JSON
  responseBody: 'json',
  outlayer: msnry,
  status: '.page-load-status',
  history: false,
});

$grid.on( 'load.infiniteScroll', function( event, body ) {
  // compile body data into HTML
  let itemsHTML = body.map( getItemHTML ).join('');
  // convert HTML string into elements
  let $items = $( itemsHTML );
  // append item elements
  $items.imagesLoaded( function() {
    $grid.append( $items ).masonry( 'appended', $items );
  })
});

// load initial page
$grid.infiniteScroll('loadNextPage');

//------------------//

function getItemHTML({ user, urls }) {
  return `<div class="photo-item">
    <img class="photo-item__image" src="${urls.regular}" alt="Photo by ${user.name}" />
    <p class="photo-item__caption">
      <a href="${user.links.html}?utm_source=infinite-scroll-demos&utm_medium=referral&utm_campaign=api-credit">${user.name}</a>
    </p>
  </div>`;
}