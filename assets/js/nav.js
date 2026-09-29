// Shared nav + "currently feeling" block for all pages.
// Edit this ONE file to change the nav/footer on every page at once.
document.write(
  '<div class="nav-bg-fill" id="navBgFill"></div>' +
  '<nav class="nav">' +
    '<div class="nav-title">Yi Hui&rsquo;s internet home</div>' +
    '<div class="nav-links">' +
      '<a href="index.html" id="navHome">Home</a>, ' +
      '<a href="about.html" id="navAbout">About</a>, ' +
      '<a href="https://yihuichan.com/">Blog</a>, <a href="https://yihuichan.com/work/">Work</a>' +
    '</div>' +
    '<div class="nav-feeling" id="feelingTrigger">' +
      '<p>Currently feeling...</p>' +
      '<p>Missing the ocean breeze in Okinawa</p>' +
    '</div>' +
  '</nav>' +
  '<div class="feeling-photo" id="feelingPhoto">' +
    '<img src="assets/images/assets/images/IMG_9708.png" alt="Beach, Okinawa">' +
  '</div>'
);

// Mark the current page's nav link so it gets the "current" styling.
(function () {
  var path = window.location.pathname.split('/').pop() || 'index.html';
  var currentId = (path === 'about.html') ? 'navAbout' : 'navHome';
  var link = document.getElementById(currentId);
  if (link) { link.classList.add('current'); }
})();
