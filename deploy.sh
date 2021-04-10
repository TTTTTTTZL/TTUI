rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@gitee.com:Cfplhys/tt-ui-website.git &&
git push -f -u origin master  &&
cd - 
echo https://cfplhys.gitee.io/tt-ui-website/#/