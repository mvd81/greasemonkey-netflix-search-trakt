/**
 * Created by Marcel van Doornen on 16-04-2014.
 */
// ==UserScript==
// @name        Netflix Trakt.tv search
// @namespace   Netflix Trakt.tv search
// @include     *
// @version     1.0
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

<style type="text/css">
.search-container {
  display:block;
  clear: both;
  text-align: left;
  padding-left: 10px;
  }
</style>

this.$ = this.jQuery = jQuery.noConflict(true);
$(document).ready(function()
{
  // Loop over each movie/show on this page
  $('.agMovie').each(function(){

    // Ge movie/show title
    var title = $(this).find('img').attr('alt');

    // Create links for above a movie/show image
    var links = 'Trak.tv search: <a target="_blank" title="Search for movie '+ title +'" href="http://trakt.tv/search/movies?q=' + encodeURIComponent(title) + '">movie</a> | <a target="_blank" title="Search for show '+ title +'" href="http://trakt.tv/search/shows?q=' + title +  '">show</a>';

    // Show the links on the screen
    $(this).prepend('<div class="search-container">' + links +    '</div>');
  });

  // Recommended movie/show



  function create_movie_link(movie) {
    // Ge movie/show title
    var title = $(movie).find('img').attr('alt');

    // Create links for above a movie/show image
    var links = 'Trak.tv search: <a target="_blank" title="Search for movie '+ title +'" href="http://trakt.tv/search/movies?q=' + encodeURIComponent(title) + '">movie</a> | <a target="_blank" title="Search for show '+ title +'" href="http://trakt.tv/search/shows?q=' + title +  '">show</a>';

    // Show the links on the screen
    var output = '<div class="search-container">' + links +    '</div>';
  }

});

