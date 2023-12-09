import React from 'react';

export class PropsAndState extends React.Component {
  

  render(){
    const {text, number} = this.props;  
    return (
      <>
        {
          text && (<p>{text}</p>)
        }
        {
          number && (<p>{number}</p>)
        }
      </>
    )
  }
}
