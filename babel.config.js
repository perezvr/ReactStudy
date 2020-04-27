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
  /**
   * Plugin responsável por setar os states de componentes de classe fora do constructor()
   */
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
}