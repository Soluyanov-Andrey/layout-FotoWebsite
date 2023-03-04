module.exports = {
    plugins: [
        require('autoprefixer')(
            {
                overrideBrowserslist:['ie >= 8', 'last 4 version'],
                //выстраиваем автопрефиксы в каскад для красоты отображеия
                cascade: true
            }

        ),
        //групирует медиа запросы
        require('css-mqpacker'),

        //сжимает вайлы css
        require('cssnano')({
            preset: [
                'default', {
                    discardComments: {
                        removeAll: true
                    }
                }
            ]
        })
    ]
}