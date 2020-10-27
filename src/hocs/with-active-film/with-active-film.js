import React, { PureComponent } from 'react'

const withActivefilm = (Component) => {


  class WithActivefilm extends PureComponent {
    render(){
      return(
<Component>
  
</Component>
      )
    }
  }
  return WithActivefilm;
}

return withActivefilm;
