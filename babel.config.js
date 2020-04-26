module.exports = {
 /**
   * Definindo os presets que o babel irá transpilar
   */
  presets:[
    /**
    * Responsavel por alterar as funcionalidadas do JS que o browser não entende
    * Ex.: Import/export - arrowFunctions e etc
    */ 
    "@babel/preset-env",
    /**
    * Responsavel por alterar as funcionalidadas do react
    * Ex.: JSX
    */ 
    "@babel/preset-react",
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
}