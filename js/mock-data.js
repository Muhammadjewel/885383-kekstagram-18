(function() {
  var MOCK = {
    messages: [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
    ],
    names: ['Arthur', 'Conan', 'Doyle', 'George', 'Washington', 'Bruce']
  };

  var getRandomNumber = function (min, max) {
    var minValue = Math.ceil(min);
    var maxValue = Math.floor(max);

    return Math.floor(Math.random() * (maxValue - minValue + 1));
  };

  var generateComments = function () {
    var comments = [];
    var commentsCount = getRandomNumber(1, 6);

    for (var i = 0; i < commentsCount; i++) {
      comments.push({
        avatar: 'img/avatar-' + (i + 1) + '.svg',
        message: MOCK.messages[getRandomNumber(0, MOCK.messages.length - 1)],
        name: MOCK.names[getRandomNumber(0, MOCK.names.length - 1)]
      });
    }

    return comments;
  };

  window.generateData = function (count) {
    var data = [];

    for (var i = 0; i < count; i++) {
      data.push({
        url: 'photos/' + (i + 1) + '.jpg',
        description: 'description',
        likes: getRandomNumber(15, 200),
        comments: generateComments()
      });
    }

    return data;
  };
})();
