var path = require('path');

module.exports = {
    entry: './app/app.js',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules: ["node_modules", __dirname],
        alias: {
            store: 'app/redux.js',
            reducer: 'app/reducer/reducer.js',
            course: 'app/reducer/course.js',
            IsAdding: 'app/reducer/IsAdding.js',
            List: 'app/component/List.js',
            Note: 'app/component/Note.js',
            Noteform: 'app/component/Noteform.js',
            action: 'app/action.js'
        }
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015','stage-0']
                },
                test: /\.jsx?$/,
                exclude: /node_modules/
            }
        ]
    }
}