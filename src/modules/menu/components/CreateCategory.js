import React from 'react'
import { Col,Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input } from 'reactstrap'
import {
 compose,
 withHandlers,
 withState
} from 'recompose'
import { connect } from 'react-redux'
import Axios from 'axios'
import CONSTANTS from '../../../constants'
import { createCategory as Create } from '../../../redux/action'
import FileBase64 from 'react-file-base64'
import constants from '../../../constants';

const CreateCategory = ({
 name,detail,setDetail,setName,handleInput,createCategory,upPic
}) => (
    <div className='container' style={{padding:"5%"}}>
               <h3 className="text-center">Create Categories</h3>
         <Form>
         <FileBase64
                    multiple={ true }
                    onDone={ upPic } 
                />
            <FormGroup row>
                
                <Label for="alt_name" sm={2}>name of picture</Label>
                <Col sm={3}>
                    <Input 
                         type="text" 
                         name="alt_name" 
                         onChange={handleInput}
                    />
                </Col>
             </FormGroup>
            <FormGroup row>
                <Label for="name" sm={2}>name</Label>
                <Col sm={5}>
                    <Input 
                         type="text" 
                         name="name" 
                         onChange={handleInput}
                    />
                </Col>
             </FormGroup>
                <FormGroup row>
                <Label for="detail" sm={2}>detail</Label>
                <Col sm={5}>
                    <Input 
                        type="textarea" 
                        name="detail"
                        onChange={handleInput}
                    />
                </Col>
            </FormGroup>
            <button className="btn btn-primary" onClick={createCategory}>submit</button>
          </Form>
    </div>
)
export default compose(
    withState('name','setName',""),
    withState('detail','setDetail',""),
    withState('locationPic','setLocationPic',""),
    withState('nameOfPic','setNameOfPic',""),
    withHandlers({
        upPic: ({setLocationPic}) => file => {
            Axios.post(`${constants.API}/categories/upload`,{uri:file[0].base64}).then( ({data:{url}}) =>{
                setLocationPic(url)
             }).catch(err => console.log(err))
        },
        handleInput: ({setName,setDetail,setNameOfPic}) => ({target}) => {
            switch (target.name) {
                case "name": 
                    setName(target.value)
                    break;
                case "detail": 
                    setDetail(target.value)
                    break;
                case "alt_name":
                    setNameOfPic(target.value)
                default:
                    break;
            }
        }
    }),
    connect(
        null,
        (dispatch,props) => ({
            createCategory: (event) => {
                event.preventDefault();
                const {name,detail,locationPic,nameOfPic} = props 
                dispatch(Create({name,detail,locationPic,nameOfPic}))
            }
        })
    )
)(CreateCategory)