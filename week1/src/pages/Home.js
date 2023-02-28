import React,{Component} from "react";
import Title from "../component/Title";

class Home extends Component{
    constructor(){
        super()
        this.state ={
            title : "This is Title ",
            description : "This is Description"
        }
    }
    render(){
        return(
            <div>
                <Title index = "1" title = {this.state.title} />
                <Title index = "2" title = {this.state.description} />
            </div>  
        )
    }
}

export default Home;