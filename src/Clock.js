import React from 'react'

class Clock extends React.Component{

    constructor(props){
        super(props)
        this.state = {date: new Date()}
    }

    componentDidMount(){
        this. timerID = setInterval(
            ()=>this.tick(),
            1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    render(){
        return(
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/38Lz08LNKEY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h1>Clock with Class, State and Lifecycle</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <div>
                    <h2>Lifecycle Methods</h2>
                    <h3>First Render</h3>
                    <p>Mounting</p>
                    <p>componentDidMount</p>
                    <h3>Removed</h3>
                    <p>Unmounting</p>
                    <p>componentWillUnmount</p>
                </div>
            </div>
        )
    }
}

export default Clock