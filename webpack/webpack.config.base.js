'use strict';

module.exports = {
    entry: {
        'tools-dict-generator': './src/tools-dict-generator.js'

        , 'demo-case1': './src/demo-case1.js'
    }
    , output: {
        filename: '[name].js'
        , path: './dist'
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }
            , { test: /jspdd/, loaders: ['babel-loader'] }
        ]
    }
};
