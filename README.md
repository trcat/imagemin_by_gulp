# imagemin_by_gulp
学习 gulp 的过程中发现图片用 `gulp-imagemin` 压缩后质量浮动也不大，但是效果很明显，所以这边做一个简单工具，用 gulp 来压缩图片。有机会研究一下怎么在网页上实现这个功能

## 用法
首先执行 `cd` 到当前目录, 并执行 `npm install` 安装依赖.

将要压缩的图片放到 `imageSrc` 文件夹, 然后命令行 `cd` 到当前目录, 输入 `gulp` 并执行, 压缩后图片就会出现在 `imageBuild` 文件夹中

## Note
当前 `gulp-imagemin` 是有 bug 的，安装的时候会提示 error，如果无视，安装好并完成 gulpfile 配置，运行起来也会有错误。推断是因为这个插件中的 `gifsicle` 等插件没有下载成功导致。
### 解决方法
手动安装 `imagemin-gifsicle` 等插件, 在运行 gulp, 发现就是正常的
