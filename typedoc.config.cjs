const fs = require('fs');

const { name } = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

const testFilePattern = '!(*.spec|*.test|*.d).{ts,tsx}';
const targetDirectories = ['src/hooks', 'src/utils'];

const entryPoints = targetDirectories.map(
  (dir) => `${dir}/**/${testFilePattern}`,
);

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  name: `${name} TypeScript Documents`,
  entryPoints: entryPoints,
  out: 'docs/typedoc/',
  categorizeByGroup: true,
};
