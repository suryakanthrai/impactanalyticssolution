import { Component } from "react";
import Listofusers from "../Listofusers"
import "./index.css"
class Searchinput extends Component{

    state={
        userdata:[],
        searchInput:""
    }

    componentDidMount(){
        this.getData()
    }

    getData = async() => {
        const response = await fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json");
        const data = await response.json();
        

        const formattedData = data.map(eachOject => ({
            imageUrl:eachOject.Image,
            userName:eachOject.name,
            id:eachOject.id
        }))

        this.setState({userdata:formattedData})
        
    }

    onChangeSearchInput = event => {
        this.setState({
          searchInput: event.target.value,
        })
    }

    render(){
        const {userdata,searchInput} = this.state 
        const searchResults = userdata.filter(eachSuggestion => eachSuggestion.userName.toLowerCase().includes(searchInput.toLowerCase()));
        console.log(searchResults)
        return(
            <div className = "app-container">
                <h1>job portal</h1>
                <input type = "search" className = "input-text"  onChange={this.onChangeSearchInput}/>
                <div className = "user-container">
                    {searchResults.map(eachItem => (<Listofusers userDetailsdata = {eachItem} key = {eachItem.id}/>))}
                </div>
            </div>
        )
    }
}

export default Searchinput;