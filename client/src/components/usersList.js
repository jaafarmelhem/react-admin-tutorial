import React from 'react'
import {List, Datagrid, TextField, EmailField, EditButton, DeleteButton } from 'react-admin'

const usersList = (props) => {
    return (
        <List {... props}>
            <Datagrid>
                <TextField source = 'id'/>
                <TextField source = 'name'/>
                <EmailField source = 'email'/>
                <EditButton basePath='/users' />
                <DeleteButton basePath='/users'/>        
            </Datagrid>
        </List>
    )
}
//insert
export default usersList