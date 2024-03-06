/* eslint-disable require-jsdoc */
// eslint-disable-next-line no-unused-vars
import filmItem from './film-item.js';


class FilmContainer extends HTMLElement {
  set films(films) {
    this._films = films;
    this.render();
  }

  render() {
    this._films.forEach((film) => {
      const filmItemElement = document.createElement('film-item');

      // memanggil fungsi setter article() pada article-item.

      filmItemElement.film = film;
      this.classList.add('row');
      this.setAttribute('id', 'film-container');
      this.appendChild(filmItemElement);
    });
  }
}

customElements.define('film-container', FilmContainer);
