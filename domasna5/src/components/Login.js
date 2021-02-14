import React, { useState } from 'react';
import {Input} from './Input';
import {Textarea} from './Textarea';

export function Login (){

    const[name, setName]= useState('');
    const[title, setTitle] = useState('');
    const[toggle, setToggle] = useState(false);
    const[post, setPost] = useState('');

    function showPost () {
        setToggle(!toggle)
    }

    function handlePost(event){
        event.preventDefault();
        alert(`User ${name}\nwrites a post ${title}: \n${post}`)
    }

    return (
        <div id='login'>
            <h3>Login</h3>
            <Input
            type='text'
            placeholder='username'
            value={name}
            onChange={(e)=>{
                setName(e.target.value)
            }}
            />
            <Input
            type='text'
            placeholder='Post Title'
            value={title}
            onChange={(e)=>{
                setTitle(e.target.value)
            }}/>
            <button onClick={showPost}>Write a post!</button>
            {
                toggle?
                <Textarea
                type='text'
                polaceHolder='Write your post here!'
                value={post}
                onChange={(e)=>{
                    setPost(e.target.value)
                }}
                />:null
            }<br/>
           <br/>
           <button onClick={handlePost}>Submit post!</button> 
          </div>
    )
}