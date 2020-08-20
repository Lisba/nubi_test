import React, { useState } from 'react';
import TreeView from '../components/TreeView';
import '../assets/styles/containers/App.scss';

const App = () => {

    const [api, setApi] = useState('');
    const [data, setData] = useState('');

    let dataExample = [
        {
            type: "directory",
            name: "uno",
            files: [
                {
                    type: "directory",
                    name: "subUno",
                    files: [
                        {
                            type: "directory",
                            name: "subSubUno",
                            files: []
                        },
                        {
                            type: "file",
                            name: "file1.exe"
                        }
                    ]
                }
            ]
        },
        {
            type: "file",
            name: "file1.exe"
        }
    ];

    const handleOnChange = (event) => {
        setApi(event.target.value);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();

        fetch(api)
        .then(response => response.json())
        .then(data => setData(data))

        document.getElementById('textInput').value = '';
    }

    console.log(data)

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input id='textInput' type="text" onChange={handleOnChange}/>
                <input id='submitInput' type="submit" value="submit"/>
            </form>
            <TreeView data={dataExample}/>
        </div>
    )
}

export default App;
