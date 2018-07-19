'use strict';

module.exports = {
    entry: {
        'tools-dict-generator': './src/tools-dict-generator.js'

        , 'tools-dict-generator-for-method': './src/tools-dict-generator-for-method.js'

        , 'demo-normal': './src/demo-normal.js'

        , 'demo-simple': './src/demo-simple.js'
    }
    , output: {
        filename: '[name].js'
        , path: './dist'
    },
    resolve: {
        extensions: ['', '.js']
        , alias: {
            //"jspdd": "/home/qiushaowei/udocs/website/jspdd-master/dist/jspdd.js"
        }
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }
        ]
    }
};
