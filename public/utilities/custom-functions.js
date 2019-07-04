/**
 * Created by IntelliJ IDEA.
 * User: Chris
 * Date: 1/3/12
 * Time: 1:31 PM
 */

(function() {

   $(document).ready( function() {

      /* Email links: sneakily alter the link */
      $(".email-link").attr("href", "mailto:chris@chriskrycho.com");

      /* Generate the Typekitify bookmarklet */
      $('.generator').submit( function (e) {
         e.preventDefault();
         $name = $('#submit').attr('value');
         $action = $(this).attr('action');
         $.post(
            $action,
            $('.generator').serialize(),
            function(data) {
               if (data) {
                  $bookmarklet = '<div class="overlay">';
                  $bookmarklet += '<a href="#" class="overlay-closer">x</a>';
                  $bookmarklet += '<a class="bookmarklet" href="' + data + '">' + $name + '</a>';
                  $bookmarklet += '<p>Drag me to your bookmarks bar!</p>';
                  $bookmarklet += '</div>';
                  $('body').prepend($bookmarklet).find('.overlay-closer').click(function(e) {
                     e.preventDefault();
                     $('.overlay').fadeOut(270);
                     setTimeout(
                        function() {
                           $('.overlay').remove();
                        },
                        270
                        );
                  });
                  $('.overlay').hide().fadeIn(270);
               }
            }
         );
      });

      /* jQuery tooltip popup for footnotes */
      $('.footnoteRef, sup.footnote a').tooltip({
         bodyHandler: function() {
            var footnote;
            var link = $(this).attr('href');
            if (link.charAt(0) != '#') {
               footnote = link.substr(link.search('#'), link.length);
            } else {
               footnote = link;
            }
            var content = $(footnote).html();
            return content;
         },
         showURL: false,
         extraClass: "fancy-footnote",
         delay: 0
      });
   });


   /* Attempt to load Typekit fonts after jQuery has loaded */
   try {
      Typekit.load()
   } catch(e) {}

   $(window).load( function() {
      /* Hide or display the table of contents */
      $('.toc-toggle').click(function(e) {
         e.preventDefault();
         $('.toc-toggle').toggle();
         $('#table-of-contents').slideToggle(853);
      });
   });

}) ();