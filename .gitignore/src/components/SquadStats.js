import React, { Component } from 'react';
import { connect } from 'react-redux';

class SquadStats extends Component{

    strength(){
        let strength=0;
        this.props.heroes.forEach(hero=>strength+=hero.strength);
        return strength;
    }

    intelligence(){
        let intelligence=0;
        this.props.heroes.forEach(hero=>intelligence+=hero.intelligence);
        return intelligence;
    }

    speed(){
        let speed=0;
        this.props.heroes.forEach(hero=>speed+=hero.speed);
        return speed;
    }


    render(){
        return(
            <div>
                <h4>Your Hero Squad Statistics</h4>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <div className='list-item'><b>Overall Strength:</b>{this.strength()}</div>
                    </li>
                    <li className='list-group-item'>
                        <div className='list-item'><b>Overall Intelligence:</b>{this.intelligence()}</div>
                    </li>
                    <li className='list-group-item'>
                        <div className='list-item'><b>Overall Speed:</b>{this.speed()}</div>
                    </li>
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        heroes: state.heroes
    };
}

export default connect(mapStateToProps, null)(SquadStats);