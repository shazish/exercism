var Hamming = {
  compute: function(input1, input2) {
    var diff = 0;
    for (i = 0; i < input1.length; i++) {
      if (input1[i] != input2[i]) {
        diff = diff + 1;
      }
    }
    return diff;
  }
};

module.exports = Hamming;