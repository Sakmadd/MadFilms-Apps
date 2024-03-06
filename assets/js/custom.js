import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/jquery/dist/jquery.min.js';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../components/film-container';
import '../components/modal-box';
import '../style/style.css';

const $ = require('jquery');

$('.search-button').on('click', function() {
  $.ajax({
    url: `https://www.omdbapi.com/?apikey=15b2de10&s=` + $('.search-input').val(),
    success: (results) => {
      const films = results.Search;
      const filmContainerElement = document.createElement('film-container');
      filmContainerElement.films = films;
      $('#film-container').html(filmContainerElement);
      $('.myBtn').on('click', function() {
        $.ajax({
          // eslint-disable-next-line no-invalid-this
          url: `https://www.omdbapi.com/?apikey=15b2de10&i=` + $(this).data('imdbid'),
          success: (hasil) => {
            const modalElement = document.createElement('modal-box');
            modalElement.data = hasil;
            $('.modal-container').html(modalElement);

            $('#myModal').on('click', () => {
              $('#myModal').remove();
            });

            $(window).on('click', () => {
              $(window).remove();
            });
          },
          error: (e)=> {
            console.log(e);
          },
        });
      });
    },
    error: (e)=> {
      console.log(e);
    }});
});
