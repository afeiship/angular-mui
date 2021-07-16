(function () {
  require('../src');
  const { execSync } = require('child_process');
  const globby = require('globby');

  describe('api.basic test', () => {
    test('nx.localKeepFiles', function () {
      execSync('touch __tests__/files/001.txt');
      execSync('touch __tests__/files/002.txt');
      execSync('touch __tests__/files/003.txt');
      execSync('touch __tests__/files/004.txt');
      execSync('touch __tests__/files/005.txt');
      execSync('touch __tests__/files/006.txt');
      execSync('touch __tests__/files/007.txt');

      const files = globby.sync('__tests__/files/*.txt');

      expect(files.length).toBe(7);

      nx.localKeepFiles({
        files: globby.sync('__tests__/files/*.txt')
      });

      expect(files.length).toBe(5);
    });
  });
})();
