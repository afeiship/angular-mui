(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var defaults = { files: [], keep: 5, by: 'ctime' };
  var fs = require('fs');

  nx.localKeepFiles = function (inOptions) {
    var options = nx.mix(null, defaults, inOptions);
    var files = options.files;
    var keep = options.keep;
    var by = options.by;
    if (files.length > keep) {
      var sorted = files.sort(function (a, b) {
        var stat1 = fs.statSync(a);
        var stat2 = fs.statSync(b);
        return stat2[by] - stat1[by];
      });
      var excluded = sorted.slice(keep, sorted.length);
      excluded.forEach(function (file) {
        fs.unlinkSync(file);
      });
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.localKeepFiles;
  }
})();
