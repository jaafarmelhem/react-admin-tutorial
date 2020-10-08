import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const usersEdit = (props) => {
    return (
        <Edit title='Edit User' {... props}>
            <SimpleForm>      
                <TextInput source='id' disabled/>
                <TextInput source='name' />
                <TextInput source='email' />

            </SimpleForm>

        </Edit>

       
    )
}
//insert
export default usersEdit