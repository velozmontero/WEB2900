import React from 'react';

const styles = {
  textContainer: {
    margin: '50px',
  }
}

const DisplayNameAndAge = (props) => {
  const { name, age } = props; 
  return (
    <div style={styles.textContainer}>{name} {age}</div>
  )
}

export default DisplayNameAndAge; 