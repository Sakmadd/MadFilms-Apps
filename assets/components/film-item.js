/* eslint-disable require-jsdoc */

class FilmItem extends HTMLElement {
  set film(film) {
    this._film = film;
    this.render();
  }

  render() {
    this.classList.add('col-lg-3');
    this.classList.add('col-sm-6');
    // eslint-disable-next-line max-len
    this.innerHTML = `<div class="item"><img src="${this._film.Poster}"><h3>${this._film.Title}</h3><a class="myBtn" data-imdbid="${this._film.imdbID}" >SEE DETAILS</a></div>`;
  }
}

customElements.define('film-item', FilmItem);
