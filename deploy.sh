rm -r dist
# abort on errors
set -e

# build
npm run build

# navigate into dist
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

git init
git remote add origin https://github.com/jasaj316/dev-portfolio.git
git checkout -b gh-pages
git add -A
git commit -m 'deploy'
git push -u origin gh-pages --force
cd -