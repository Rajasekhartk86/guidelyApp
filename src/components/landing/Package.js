import React from 'react';

class Package extends React.Component{
    render(){
        return(
            <div>
                <h3>{this.props.match.params.name}</h3>
            </div>
        )
    }
}

export default Package