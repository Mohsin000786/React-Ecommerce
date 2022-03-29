import { useState, useEffect } from 'react';
import './Account.css';
import axios from 'axios';


const Account = ({history}) => {
     const [error, setError] = useState('');
     const [fileSuccess, setFileSuccess] = useState('');
     const [upload, setUpload] = useState("");

     const [file, setFile] = useState('');
     const [fileName, setFileName] = useState("Choose file");
     const fileHandler = (e) => {
          setFile(e.target.files[0]);
          setFileName(e.target.files[0].name);
     };

     const fileFormHandler = async (e) => {
          e.preventDefault();

          const formData = new FormData();
          formData.append('image', file);

          const config = {
               headers: {
                    "Content-type": "multipart/form-data",
               },
          };

          try{
               const {data}= await axios.post("/upload", formData, config);
                    setTimeout(() => {
                         setFileSuccess("");
                    }, 3000);
                    return setFileSuccess(data.message);
          }
          catch(error){
               setError(error.response.data.error);
          };
     };

     const [edit, setEdit] = useState(false);
     const editHandler = () => setEdit(!edit);

     const [image, setImage] = useState(false);
     const imageHandler = () => setImage(!image);

     const [user, setUser] = useState({});
     const [err, setErr] = useState("");

     useEffect(() => {
          const userDetail = async () => {

             try{
               const {data} = await axios.get("auth/user", {withCredentials: true});
               setUser(data.data);
               var imgstr = data.data.image;
               if(imgstr) {
                   imgstr = imgstr.replace("C:\\Users\\MD.MOHSIN\\M Project\\React\\ecommerce\\backend\\public\\uploads\\", "");
                   setUpload("http://localhost:5000/uploads/"+imgstr);
               }
             }
             catch(error){
               setErr(error.response.data.error);
             }
          };

        userDetail();
     },[]);

     return err ? (<span className="error-message">{err}</span> ) : (
          <div className="account-screen">
               <div className="account-section">
                <div className="account-info">
                    { error && <span className="error-message">{error}</span> }
                    { fileSuccess && <span className="success-message">{fileSuccess}</span> }
                         <h3 className="account-title"> User's Profile</h3>
                         <div className="account-image">
                             <img src={upload} alt={user.firstname} />
                              <button className="account-profile-upload" onClick={imageHandler}>
                              <i className="fas fa-user"></i></button>
                              {
                                  image && <div className="account-profile-form">
                                   <form onSubmit={fileFormHandler}>
                                        <div className="custom-file">
                                             <input type="file" className="custom-file-input"  name="image" onChange={fileHandler} />
                                             <label htmlFor="image" className="custom-file-label">{fileName}</label>
                                        </div>
                                        <div className="account-upload-btn">
                                             <button type="submit" className="btn btn-primary btn-block mt-3" > Upload </button>
                                        </div>
                                   </form>
                              </div>
                              }
                         </div>
                         <div className="account-profile">
                              <p>
                               First Name: {""}
                              <span>{user.firstname}</span>
                              </p>
                              <p>
                               Last Name: {""}
                              <span>{user.lastname}</span>
                              </p>
                              <p>
                               Email Add: {""}
                              <span>{user.email}</span>
                              </p>
                         </div>
                   <button className="account-btn" onClick={editHandler}>Edit Profile</button>
                 </div>
               </div>
               {
                 edit && <div className="account-form-screen">
                    <div className="account-form-section">
                         <form>
                              <h3 className="account-form-title"> Edit Profile</h3>
                              <div className="account-form-group">
                                   <label htmlFor="firstname">Firstname</label>
                                   <input type="text" name="firstname" id="firstname" placeholder="Change your existing first name"/>
                              </div>
                              <div className="account-form-group">
                                   <label htmlFor="lastname">Lastname</label>
                                   <input type="text" name="lastname" id="lastname" placeholder="Change your existing last name"/>
                              </div>
                              <div className="account-form-group">
                                   <label htmlFor="email">Email</label>
                                   <input type="text" name="email" id="email" placeholder="Change your existing email address"/>
                              </div>
                              <div className="account-form-group">
                                   <label htmlFor="phone">Phone</label>
                                   <input type="number" name="phone" id="phone" placeholder="Enter your valid phone number"/>
                              </div>
                              <div className="account-form-group">
                                   <label htmlFor="address">Address</label>
                                   <input type="text" name="address" id="address" placeholder="Enter your valid correspondence address"/>
                              </div>
                              <div className="form-btn">
                                   <button type="submit" className="btn btn-primary">Save</button>
                              </div>
                         </form>
                    </div>
               </div>
               }
          </div>
     );
};

export default Account;
