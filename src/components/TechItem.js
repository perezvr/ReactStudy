import React from 'react';
import PropTypes  from 'prop-types';

/**
 * Componente react em formato de função
 * { tech, onDelete } => Desentruturação das props do componente
 */
function TechItem({ tech, onDelete }){
  return (
    <li >
    {tech}
    <button onClick={onDelete} type="button">Remover</button>
  </li>    
  );
}

/**
 * Definindo as default props para quando o valor não é informado
 */
TechItem.defaultProps = {
  tech: 'Desconhecido',
}

/**
 * Definindo as prop-types do componente
 */
TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}

export default TechItem