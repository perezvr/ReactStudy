/**
 * Utilizamos para tratar o caminho de arquivos independente do S.o.
 */
const path = require('path');

module.exports = {
  /**
   * Caminho do arquivo de entrada da aplicação
   */
  entry: path.resolve(__dirname, 'src', 'index.js'),
  /**
   * Caminho do arquivo bundle do webpack com o código transpilado   
   */
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  /**
   * Configuração para o live reload informando a página HTML a ser recarregada
   */
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    /**
     * Informa para o webpack quais loaders serão utilizados para cada tipo de arquivo
     */
    rules: [
      {
        /**
         * todos os arquivos JS
         */
        test: /\.js$/,
        /**
         * Cada biblioteca já é tratada pelo Babel e não necessira ser manipulada pela 
         * aplicaçao
         */
        exclude: /node_modules/,
        /**
         * Definindo o loader
         */
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          /**
           * Esse loader carrega o código CSS para o HTML 
           */
          {loader: 'style-loader'},
          /**
           * Esse loader carrega os outros  imports do CSS, como imagens e outros
           * arquivos dentro do próprio CSS
           */
          {loader: 'css-loader'}
        ]
      },
      {
        /**
         * Filtrando imagens gif, png, pjpg e jpeg
         */
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
};