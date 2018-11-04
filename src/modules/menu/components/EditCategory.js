import React from 'react'
import { Col,Form, FormGroup, Label, Input } from 'reactstrap'
import {
 compose,
 withHandlers,
 withState,
 lifecycle,
} from 'recompose'
import { connect } from 'react-redux'
import { editCategory as Edit, loadCategory } from '../../../redux/action'
import { withRouter } from 'react-router-dom'
import './style.css'

const EditCategory = ({
    handleInput,editCategory
}) => (
    <div className="container"><br/>
    <h3 className='text-center'>Edit category</h3><br/>
    <Form className="container text-center"> 
       <FormGroup row>
           <Label for="name" sm={2}>name</Label>
           <Col sm={5}>
               <Input 
                    type="text" 
                    name="name"
                    placeholder
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
                   placeholder
                   onChange={handleInput}
               />
           </Col>
       </FormGroup>
       <button className="btn btn-primary btn3d" onClick={(e) => editCategory(e)}>submit</button>
     </Form>
</div>
)
export default compose(
    withRouter,
    withState('name','setName',''),
    withState('detail','setDetail',''),
    connect(
        ({category:{item}},{match}) => ({item,match}),
        (dispath,props) => ({
            editCategory: (e) => {
                e.preventDefault();
                const {name,detail,match:{params:{id}}} = props
                const body = {
                    name,detail,id
                }
                dispath(Edit(body))
                setTimeout(_ => {
                props.history.goBack()
                },1000)
            },
            loadCategory:id => {
                dispath(loadCategory(id))
            }
        })
    ),
    lifecycle({
        componentDidMount(){
            this.props.loadCategory(this.props.match.params.id)
        }
    }),
    withHandlers({
        handleInput: ({name,detail,setName,setDetail}) => ({target}) =>{
            switch (target.name) {
                case "name": 
                    setName(target.value)
                    break;
                case "detail": 
                    setDetail(target.value)
                    break;
                default :
                    break
            }
        }
    })
)(EditCategory)