
  /*!
   * Create an array of word objects, each representing a word in the cloud
   */
  var wordString = "Lorem Lorem Lorem Lorem elit. Donec aliquet ornare ante, nec imperdiet mi tempor nec. Lorem Cras consectetur iaculis risus. Donec commodo ipsum at varius cursus. Donec nec porttitor magna, id pellentesque neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam mollis, tellus semper suscipit tristique, dolor lectus facilisis nisi, eget lacinia quam urna vel nibh. Aliquam at iaculis felis. In tempus ac felis eget semper. Vestibulum molestie mauris quis tristique ornare. Sed dictum lacus non lacus auctor suscipit. Cras at diam non nibh scelerisque mollis vitae vel nunc"

  var wordArray = wordString.split(' ');
  var occurences = {};

  for(var i = 0; i < wordArray.length; i++) {
    occurences[wordArray[i]] = (occurences[wordArray[i]] || 0) + 1;
  }

  var cloudArray = []
  for (var i = 0; i < Object.keys(occurences).length; i++) {
    cloudArray[i] = {text: Object.keys(occurences)[i], weight: occurences[Object.keys(occurences)[i]]}
  }

  $(function() {
    // When DOM is ready, select the container element and call the jQCloud method, passing the array of words as the first argument.
    $("#example").jQCloud(cloudArray);
  });

