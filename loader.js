/* eslint-disable max-lines */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const isDevelopMode = process.env.NODE_ENV !== 'production';

const SVGStyleLoader = {
    test: /\.svg$/i,
    issuer: /.scss$/,
    use: [
        {
            loader: 'file-loader',
            options: {
                hash: 'sha512',
                digest: 'hex',
                name() {
                    if (isDevelopMode) {
                        return '[path][name].[ext]';
                    }

                    return 'img/[hash].[ext]';
                },
                publicPath: url => {
                    if (process.env.CLOUDINARY_ENABLED === '1') {
                        return `${process.env.CLOUDINARY_URL}/${process.env.SVG_CLOUDINARY_TAG}/${url}`;
                    }

                    return `/${url}`;
                },
            },
        },
    ],
    include: path.resolve(`${__dirname}/../modules`),
};

const ImageLoader = {
    test: /\.(jpe?g|png|gif|cur)$/i,
    use: [
        {
            loader: 'file-loader',
            options: {
                hash: 'sha512',
                digest: 'hex',
                name() {
                    if (isDevelopMode) {
                        return '[path][name].[ext]';
                    }

                    return 'img/[hash].[ext]';
                },
                esModule: false,
                publicPath: url => {
                    if (process.env.CLOUDINARY_ENABLED === '1') {
                        return `${process.env.CLOUDINARY_URL}/${process.env.DEFAULT_CLOUDINARY_TAG}/${url}`;
                    }

                    return `/${url}`;
                },
            },
        },
        ...(process.env.NODE_ENV === 'production'
            ? [
                  {
                      loader: 'image-webpack-loader',
                      options: {
                          mozjpeg: {
                              progressive: true,
                              quality: 90,
                          },
                          gifsicle: {
                              interlaced: false,
                          },
                          optipng: {
                              optimizationLevel: 7,
                          },
                          pngquant: {
                              quality: [0.65, 0.9],
                              speed: 4,
                          },
                      },
                  },
              ]
            : []),
    ],
    exclude: [/node_modules/],
};

const StyleLoader = {
    test: /\.scss$/,
    use: [
        MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                importLoaders: 1,
                url: url => !url.includes('skin/frontend/default/optimax'),
                modules: {
                    mode: 'global',
                    localIdentName: `${
                        isDevelopMode
                            ? '[path][name]__[local]'
                            : '[name]__[local]___[hash:base64:5]'
                    }`,
                    localIdentContext: path.resolve(`${__dirname}/../`),
                },
            },
        },
        'postcss-loader',
    ],
};

const JSLoader = {
    test: /.(js|ts)x?$/,
    use: ['thread-loader', 'babel-loader'],
    include: [path.resolve(`${__dirname}/../modules`), path.resolve(`${__dirname}/../server`)],
    exclude: [/node_modules/],
};

const SVGLoader = {
    test: /\.svg$/,
    issuer: /.(js|ts)x?$/,
    use: [
        {
            loader: '@svgr/webpack',
            options: {
                svgoConfig: {
                    plugins: [
                        {
                            removeAttributesBySelector: {
                                selector: 'path:not(defs > path)',
                                attributes: ['id'],
                            },
                        },
                        {
                            removeAttrs: {
                                attrs: ['svg:id', 'svg:x', 'svg:y'],
                            },
                        },
                        {
                            removeViewBox: false,
                        },
                        {
                            removeEmptyAttrs: false,
                        },
                        {
                            removeDimensions: true,
                        },
                        {
                            removeUnknownsAndDefaults: false,
                        },
                    ],
                },
            },
        },
        {
            loader: 'file-loader',
            options: {
                name() {
                    if (isDevelopMode) {
                        return '[path][name].[ext]';
                    }

                    return 'img/[hash].[ext]';
                },
            },
        },
    ],
    include: path.resolve(`${__dirname}/../modules`),
};

const SVGSprite = {
    test: /\.svg$/,
    use: [{loader: 'svg-sprite-loader'}],
};

module.exports = {
    ImageLoader,
    StyleLoader,
    JSLoader,
    SVGLoader,
    SVGStyleLoader,
    SVGSprite,
};
