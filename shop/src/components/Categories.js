import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories : [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'lighting',
                    name: 'Lighting'
                },
                {
                    key: 'rugs',
                    name: 'Rugs'
                },
                {
                    key: 'tables',
                    name: 'Tables'
                },
                {
                    key: 'decorative accents',
                    name: 'Decorative'
                },
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el=>(
            <div key = {el.key} onClick = {() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories