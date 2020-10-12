const { src, dest } = require("gulp");
const imagemin = require("gulp-imagemin");

exports.default = function () {
  return src(["imageSrc/*", "imageSrc/**/*"])
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest("imageBuild/"));
};
