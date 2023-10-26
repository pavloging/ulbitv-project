import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";

export function buildPlugins({
    paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[countenthash:8].css',
            chunkFilename: 'css/[name].[countenthash:8].css'
        }),
    ];
}
