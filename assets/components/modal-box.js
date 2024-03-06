/* eslint-disable require-jsdoc */
class ModalBox extends HTMLElement {
  set data(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.setAttribute('id', 'myModal');
    this.classList.add('modal');
    this.innerHTML = `<div class="modal-content">
        <span class="close"> &times;</span>
          <img class="modal-image" src="${this._data.Poster}">
          <table>
            <tr>
              <th><h2>${this._data.Title}</h2></th>
            </tr>
            <tr>
              <td><h6>Actor : </h6><span>${this._data.Actors}</span></td>
            </tr>
            <tr>
              <td><h6>Director : </h6><span>${this._data.Director}</span></td>
            </tr>
            <tr>
              <td><h6>Writer : </h6><span>${this._data.Writer}</span></td>
            </tr>
            <tr>
              <td><h6>Plot : </h6><span>${this._data.Plot}</span></td>
            </tr>
          </table>
      </div>`;
  }
}
customElements.define('modal-box', ModalBox);
