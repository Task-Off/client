import React from 'react';

class Header extends React.Component {
    
    render() {
        
        return (
            <header>
                <h1 id='appTitle'>
                    {this.props.appTitle}
                </h1>
            </header>
        )
            
    }
    
}

export default Header;