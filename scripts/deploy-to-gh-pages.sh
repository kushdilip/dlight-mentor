#!/bin/bash
# See https://medium.com/@nthgergo/publishing-gh-pages-with-travis-ci-53a8270e87db
# See http://ricostacruz.com/cheatsheets/travis-gh-pages.html
set -o errexit

rm -rf dist
mkdir dist

# config
git config --global user.email "kush.dilip@gmail.com"
git config --global user.name "Travis CI"

# build (CHANGE THIS)
# make
ember build --environment production

# deploy
cd dist
git init
git add .
git commit -m "Deploy to Github Pages"
# if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "master" ]; then exit 0; fi
git push --force --quiet "https://${GITHUB_TOKEN}@github.com/${GITHUB_REPO}.git" master:gh-pages > /dev/null 2>&1
