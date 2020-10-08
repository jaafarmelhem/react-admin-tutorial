import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const PostEdit = (props) => {
    return (
        <Edit title='Edit Post' {... props}>
            <SimpleForm>      
                <TextInput source='id' disabled/>
                <TextInput source='title' />
                <TextInput multiline source='body' />
                <DateInput label='Published' source='publishedAt' />


            </SimpleForm>

        </Edit>

       
    )
}
//insert
export default PostEdit