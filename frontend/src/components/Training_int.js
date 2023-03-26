import React, { useState } from 'react'
import Editor from "@monaco-editor/react";
import Loading from './Loading';
import Navbar from './Navbar';

function Training_int() {
    const [value, setValue] = useState("");
    const [value1, setValue1] = useState("");
    const [output, setOutput] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSubmit = () => {
        setLoading(true);
        fetch("http://localhost:3333/question", {
        method: "POST",
        body: JSON.stringify({
            value,
        }),
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then((res) => res.json())
        .then((data) => {
            setLoading(false);
            setOutput(data.response);
            console.log(data.response)
        })
        .catch((err) => console.error(err));
    };
    const handleresponse = () => {
        setLoading(true);
        fetch("http://localhost:3333/answer", {
        method: "POST",
        body: JSON.stringify({
            value1,output
        }),
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then((res) => res.json())
        .then((data) => {
            setLoading(false);
            setOutput(data.response);
            console.log(data.response)
        })
        .catch((err) => console.error(err));
    };
    console.log(value1)
  return (
    <div style={{width: '100%',minHeight: '100vh',backgroundImage:`url("https://cdn.wallpapersafari.com/9/57/PdJiN3.jpg")`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover'}}>
        <Navbar/>
       <header className='header__container' style={{width: '100%',display: 'flex',alignItems: 'center',height: '10vh',backgroundColor: '#e0f2fe'}}>
                <div className='header' style={{border: '1px solid #ddd',width: '100%',alignItems: 'center',padding: '10px 20px',display: 'flex',justifyContent: 'space-between',height: '100%',flex: '1'}}>
                    <h3>Enter what's your job and start the demo interview</h3>
                    <div className='header__right' style={{display: 'flex',alignItems: 'center'}}>
                    <input type='text' placeholder='put your job' onChange={(e) => setValue(e.target.value)} ></input>
                        <button className='runBtn' style={{color:'#fff',backgroundColor:'#065f46',outline:'none',padding: '10px 5px',width: '100px',marginRight: '10px',cursor: 'pointer',border: 'none',borderRadius: '3px',boxShadow: '0 0 1px 1px #e0e0ea'}} onClick={handleSubmit}>
                            Start 
                        </button>
                    </div>
                </div>
        </header>

            <div className='code__container' style={{alignItems: 'flex-start',display: 'flex',width: '100%',height:'95vh'}}>
               
                <div className='code'style={{width:'50vw'}}>
                 
                <Editor
                        height='70vh'
                        className='editor'
                        style={{width: '100%',padding:'10px 0px'}}
                        defaultValue=''
                       value={value1}
                       onchange={(value)=>setValue1(value)}
                    />
                    <button className='runBtn' style={{color:'#fff',backgroundColor:'#065f46',outline:'none',padding: '10px 5px',width: '100px',marginRight: '10px',cursor: 'pointer',border: 'none',borderRadius: '3px',boxShadow: '0 0 1px 1px #e0e0ea'}} onClick={handleresponse}>
                            Send answer 
                        </button>
                </div>
                <div className='output' style={{width:'50vw'}}>
                {loading ? (
                    <Loading />
                ) : (<Editor
                        height='70vh'
                        className='editor'
                        style={{width: '100%',padding:'10px 0px'}}
                        defaultLanguage='typescript'
                        defaultValue=''
                        options={{
                            domReadOnly: true,
                            readOnly: true,
                        }}
                        value={output}
                        onChange={(value) => setOutput(value)}
                    />)}
                
                </div>
            </div>
    </div>
  )
}

export default Training_int
