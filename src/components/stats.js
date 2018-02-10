import React from 'react';
import {connect} from 'react-redux';
import Piechart from './stats-index';
import Arc from './arc';
import * as statsActions from '../app/actions/stats';

class Stats extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        // console.log('component props groupID: ', this.props.groupID)
        this.props.statsInitialize(this.props.groupID);
    }

    render(){
       console.log("in stats:  ", this.props.stats)
        return(
            <div>
                <h2>Here is your stats:</h2>
                <Piechart x={100} y={100} outerRadius={100} innerRadius={50}
                //we can change the size of our pie chart by messing with the above variables. 
                    data= {this.props.stats}
                    //get from stats route and plug in here
                    //piechart expects an array of objects with the keys 'value' and 'label'  
                    //colors for the pie slices are selected automatically and supports up to 10 unique colors.
                /> 
            </div> 
        )
    }


}

const mapStateToProps = state => ({
    stats: state.stats
})
const mapDispatchToProps = (dispatch, getState)=>({
    statsInitialize: groupID => dispatch(statsActions.statsInitialize(groupID))
})

export default  connect(mapStateToProps, mapDispatchToProps)(Stats);