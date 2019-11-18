(function () {
  window.renderPictureElements = function (photos) {
    var picturesFragmentElement = document.createDocumentFragment();
    var picturesElement = document.querySelector('.pictures');
    var pictureTemplateElement = document.querySelector('#picture')
      .content
      .querySelector('.picture');

    photos.forEach(function (photo) {
      var photoElement = pictureTemplateElement.cloneNode(true);
      photoElement.querySelector('.picture__img').src = photo.url;
      photoElement.querySelector('.picture__likes').textContent = photo.likes;
      photoElement.querySelector('.picture__comments').textContent = photo.comments.count;
      picturesFragmentElement.appendChild(photoElement);
    });

    picturesElement.appendChild(picturesFragmentElement);
  };
})();
