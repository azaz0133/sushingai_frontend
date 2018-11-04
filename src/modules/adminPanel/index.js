import React from 'react'
import ReactTable from 'react-table'
import {
  lifecycle,
  compose,
 } from 'recompose'
 import Axios from 'axios'

const handleEdit = (value) => {
    console.log(value)
}
const handleDelete = (value) => {
    console.log(value)
}

const columns = [{
    Header: 'Sequence order',
    accessor: 'seq',
    maxWidth: 80,
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  }, {
    Header: 'Customer Name',
    maxWidth: 180,
    accessor: 'name' // String-based value accessors!
  }, {
    Header: 'Order',
    accessor: 'order' // String-based value accessors!
  }, {
    Header: 'Date',
    maxWidth: 140,
    accessor: 'date' // String-based value accessors!
  },{
    Header: 'Status',
    maxWidth: 120,
    accessor: 'status' // String-based value accessors!
  },{
    id: 'edit',
    accessor: 'seq',
    maxWidth: 180,
    Cell: ({value}) => <div>
        <button type="button" className="btn btn-primary btn-sm btn3d" onClick={() => handleEdit(value)}>Confirm</button>
        <button type="button" className="btn btn-danger btn-sm btn3d" onClick={() => handleDelete(value)}>Cancel</button>
        </div>
  },
] // columns setting

  const data = [{
    seq: 1,
    name: 'Tanner Linsley',
    status:"success",
    order: "26 asdasdasd 456454 6a54dasd asdasdassd",
    date: '18/12/2018'
  },{
    seq: 2,
    name: 'Bail Lanister',
    status:"cancel",
    order: "25 aaa 456454 ds bbb",
    date: '18/11/2018'
  }] //data from axios


const adminpanel = () => {
    return(
        <ReactTable
        data={data}
        columns={columns}
        SubComponent={ row => <div className="container">{row.original.order}</div>}
      />
    )  
}

export default compose(
  lifecycle({
    // componentDidMount(){
     
    //   Axios.get('http://localhost:9001/api/list/test/query').then(
    //     ({data:List}) => {
    //       Object.keys(List).map(key=>{
    //         List[key]['']
    //       })
    //     }
    //   )
    // }
  })
)(adminpanel)