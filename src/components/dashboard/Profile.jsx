import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateUserAction, editProfilePhotoAction } from '../../redux/UserDucks'
import Spinner from '../Spinner'

const Profile = () => {

    const loading = useSelector(store => store.user.loading)
    const user = useSelector(store => store.user.user)
    
    console.log(user);
    
    
    const dispatch = useDispatch()

    const [ useName, setUserName  ] = useState(user.displayName)
    const [ activeForm, setActiveForm  ] = useState(false)
    const [ error, setError ] = useState(false) 
    
    const updateUser = () => {

        if (!useName.trim()) {
            console.log('nombre vacio');
            return
            
        }
        dispatch(updateUserAction(useName))
        
        setActiveForm(false)
    }

    const selectFile = img => {
        
        const image = img.target.files[0]


        if (image === undefined) {
            console.log('no selection');
            
            return
        }
        console.log(image.type);
        

        if (image.type === 'image/jpeg' || image.type === 'image/png') {
            dispatch(editProfilePhotoAction(image))
            setError(false)
        } else {
            setError(true)
        }
        
    }

    return user !== undefined ? (
        <div className="mt-5 text-center" >
            <h3 className="text-center" >
                Profile
            </h3>
            <div className="card ">
                <div className="card-body">
                    <img className="img-fluid rounded-circle border border-dark border-2" style={{ width: '300px' }} src={user.photoURL} alt=""/>
                    <h5 className="card-title mt-4">
                        Name : {user.displayName}
                    </h5>
                    <p className="card-text mt-3">
                        Email: {user.email}
                    </p>
                    <div className="row justify-content-center d-flex mt-5">
                    <div className="col-lg-6 colsm-12 justify-content-around d-flex">
                    {
                        error && (
                            <div className="alert alert-warning mt-3">
                                Only files of type .png or .jpg allowed
                            </div>
                        )
                    }
                    <button className="btn btn-dark rounded-pill text-uppercase" 
                            style={{padding: '12px 40px', fontWeight: 500, fontSize: '19px'}} 
                            onClick={() => setActiveForm(true)} >
                        Edit Name
                    </button>
                    
                    <div className="custom-file"  >
                        
                        <input 
                            type="file" 
                            className="custom-file-input" 
                            id="validatedCustomFile" 
                            onChange={ e => selectFile(e)}
                            required 
                            disabled={loading}
                            style={{display:'none'}}
                            />
                        <label 
                            className={loading ? "btn btn-dark disabled rounded-pill  text-uppercase" : "btn btn-dark rounded-pill  text-uppercase"}
                            style={{padding: '12px 40px', fontWeight: 500, fontSize: '19px'}}
                            htmlFor="validatedCustomFile"
                            >
                                Change profile image
                        </label>
                    </div>
                    </div>
                    </div>
                </div>
                
                {
                    activeForm && (
                        <div className="card-body">
                            <div className="row justify-content-center">
                                <div className="col-md-5">
                                <div className="input-group mb-3">
                                    <input type="text" 
                                           className="form-control"
                                           value={useName}
                                           onChange={e => setUserName(e.target.value)} />
                                    <button className="btn btn-dark" type="button" onClick={() => updateUser()} >
                                        Edit name
                                    </button>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                    )
                }

                
            </div>
        </div>
    ) : (
        <div className="row" >
                <Spinner background={'rgba(250, 250, 250, 0.4)'} />
        </div>
    )
}

export default Profile
