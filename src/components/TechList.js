import React, {Component} from 'react';
import TechItem from './TechItem';

/**
 * Esse é um modelo de componente em formato de classe
 */
class TechList extends Component{
  /**
   * Todas as variáveis que são manipuladas no componente são chamadas de estados e 
   * obrigatoriamente precisam ficar setadas dentro deste objecto
   */
  state = {
    newTech: '',
    techs: [],
  };

  /**
   * Ciclo de vida
   * Executado assim que o componente aparece em tela
   */
   componentDidMount(){
      /**
       * Recarregando as informações diretamente do localStorage do navegador
       */
      const techs = localStorage.getItem('techs');

      if(techs)
        /**
         * O localStorage grava os dados em formato JSON
         */
        this.setState({techs: JSON.parse(techs)});
   }

   /**
    * 
    * @param {*} _ prevProps => Recebe as propriedades do componente antes da alteração
    * Neste caso, não temos props
    * @param {*} prevState Recebe os states do componente antes de alteração
    */
   componentDidUpdate(_, prevState){
     if(prevState.techs !== this.state.techs) {
       /**
        * Gravando o array em formato JSON
        */
       localStorage.setItem('techs', JSON.stringify(this.state.techs))
     }
   }

   /**
    * Executado quando o componente deixa de existir
    */
   componentWillUnmount(){

   }

   /**
    * Método criado para o evento de alteração no input para inclusao de novos elementos
    * 
    * Obs.: Todas as funções de um componente de classe só é possível acessar o this
    * no formato de arrow function
    */
   handleInputChange = e => {
   /**
    * O conceito de imutabilidade não nos permite alterar diretamente um estado (newTech)
    * É sempre necessário utilizar o setState
    */
   this.setState({ newTech: e.target.value});
  }

  handleSubmit = e => {
    /**
     * Previne que o submir do form recarregue a página HTML por completo
     */
    e.preventDefault();

    this.setState({
       /**
        * Precisamos recriar o array, não podemos simplesmente incluir um novo valor
        */
       techs: [... this.state.techs, this.state.newTech],
       /**
        * Resetando o newTech
        */
       newTech: ''
      });
  }

  handleDelete = (tech) => {
    /**
     * Filtrando o array com os valores diferentes do parâmetro 'tech'
     */
    this.setState({techs: this.state.techs.filter(t => t !== tech)})
  }

   /**
   * Todo componente de classe é obrigado a definir um render()
   * Esse método retornará o HTML do componente
   */
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech =>
             <TechItem           
               /**
                * É necessário passar um valor chave para cada item na lista, geralmente
                * o id retornado por um backend
                * Nesse exemplo, colocamos o próprio elemento como sendo único
                */
               key={tech} 
               /**
                * É necessário passar () para que a função não seja executada assim
                * que o componente é criado, somente qunado realmente chamamos o onDelete
                */
               onDelete={() =>this.handleDelete(tech)} 
               tech={tech}
             />)}
        </ul>
        <input 
          type="text" 
          onChange={this.handleInputChange} 
          /**
           * Boa prática para garantir que se o newTech for alterado por algum outro 
           * componente, o valor será atualizado
           */
          value={this.state.newTech}
        />
        <button type="submit"> Enviar </button>
      </form>
    )
  }
}

export default TechList;