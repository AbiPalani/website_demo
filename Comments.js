import axios from "axios";
import React from "react";
import "./form.css";

const cmtApi="https://jsonplaceholder.typicode.com/comments";

class Comments extends React.Component{
    constructor(props){
        super(props);
        this.state={
            comments:[],
            postId:"",
            id:"",
            name:"",
            email:"",
            body:"",
        };
    }

createComment= async () =>{
    try{
        const {postId,id,name,email,body} =this.state;
        const {data:comment} = await axios.post(cmtApi,{postId,id,name,email,body});
        let comments =[...this.state.comments];
        comments.push(comment);
        this.setState({comments,postId:"",id:"",name:"",email:"",body:""});
        console.log(comments);
    }catch(err){
        console.log(err,"Creating error");
    }
}; 

  
readComment = async()=>{
    try{
        const {data} = await axios.get(cmtApi);
        this.setState({comments:data});
        console.log(data);
    }catch(err){
        console.log(err,"Fetching error");
    }

};


deleteComment= async(postId)=>{
    try{
        await axios.delete(`https://jsonplaceholder.typicode.com/comments/${postId}`);
        let comments =[...this.state.comments];
        comments=comments.filter((comment)=>comment.id!==postId);
        this.setState({comments}) ;       
        console.log(`${postId}`, "Deleted");
    }catch(err){
        console.log(err,"Deleting error");
    }

};

componentDidMount(){
    this.readComment();
}

handleChange = ({target:{name,value}})=> {
    this.setState({ [name]:value });
};

handleSubmit =(event)=>{
    event.preventDefault();
    this.createComment();   
};

setUpdate = (comment)=>{
    this.setState({...comment});
}

render(){
    return(
       <>
       
       <form align="center" onSubmit={this.handleSubmit}>
       <div className="form">
       <img className="img" src="https://thumbs.dreamstime.com/b/user-avatar-icon-button-profile-symbol-flat-person-icon-vector-user-avatar-icon-button-profile-symbol-flat-person-icon-%C3%A2%E2%82%AC-stock-131363829.jpg" />
           <p><label className="label">PostId</label><input className="text" name="postId" type="text" value={this.state.postId} onChange={this.handleChange} required/><br/></p>
           <p><label className="label">Id</label><input className="text" name="id" type="text" value={this.state.id} onChange={this.handleChange} required/><br/></p>
           <p><label className="label">Name</label><input className="text" name="name" type="text" value={this.state.name} onChange={this.handleChange} required/><br/></p>
           <p><label className="label">Email</label><input className="text" name="email" type="text" value={this.state.email} onChange={this.handleChange} required/><br/></p>
           <p><label className="label">Body</label><input className="text" name="body" type="text" value={this.state.body} onChange={this.handleChange} required/><br/></p>
           <p><input align="center" name="Submit" type="submit"></input></p>
        </div>
       </form>
        <table>
            <tbody>
            <tr>
                <th>PostId</th>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Body</th>
                <th>Actions</th>
            </tr>
            {this.state.comments.map((comment)=>{
            return (            
            <tr>
                <td>{comment.postId}</td>
                <td>{comment.id}</td>
                <td>{comment.name}</td>
                <td>{comment.email}</td>
                <td>{comment.body}</td>
                <td>
                    <button onClick={()=>this.deleteComment(comment.id)}>Delete</button>
                </td>
            </tr>
            );
            })}
            </tbody>
        </table>
        </>
    );
}
}

export default Comments;