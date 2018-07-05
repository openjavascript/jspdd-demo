'use strict';

module.exports = {
    entry: {
        'tools-dict-generator': './src/tools-dict-generator.js'

        , 'demo-case1': './src/demo-case1.js'

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
