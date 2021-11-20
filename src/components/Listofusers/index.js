import "./index.css"

const Listofusers = props => {
    const {userDetailsdata} = props
    const {id,userName,imageUrl} = userDetailsdata;
    
    return(
        <li className = "list-style">
            <img src = {imageUrl} alt = "style" className = "image-style"/>
            <h1>{id}</h1>
            <h1>{userName}</h1>
        </li>
    )
}

export default Listofusers