import React,{Component} from "react";
import Title from "../component/Title";

class Home extends Component{
    render(){
        return(
            
            <div>
                <Title index = "1" title = "TatvaSoft industrial Project" />
                <Title index = "2" title = "ReactJs Course by TatvaSoft" />
                <Title index = "3" title = "Sem 6th Industrial Project by TatvaSoft" />
            </div>
        )
    }
}

export default Home;