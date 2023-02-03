
import '../CreatePost.css'


export default function CreatePost() {
  return (  
    <div className='cont'>

   
 <div className="create-post">
    <form>
 <div className="container">
   <h1>Create a Post</h1>
   <hr/>

   <label for="title"><b>Title:</b></label>
   <input type="text" placeholder="Enter Title" name="title" id="title" required/>

   <label for="sub"><b>SubTitle:</b></label>
   <input type="text" placeholder="Enter SubTitle" name="sub" id="sub" required/>

   <label for="psw"><b>Description:</b></label>
   <input type="text" placeholder="Enter Description" name="psw" id="psw" required/>


   
   <button type="submit" className="submitbtn">SUBMIT</button>
 </div>
</form> 
 </div>
 </div>
  )
}
