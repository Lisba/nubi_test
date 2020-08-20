import React, { useState } from 'react';
import TreeView from '../components/TreeView';
import '../assets/styles/containers/App.scss';

const App = () => {

    const [api, setApi] = useState('');
    const [data, setData] = useState('');

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

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input id='textInput' type="text" onChange={handleOnChange}/>
                <input id='submitInput' type="submit" value="submit"/>
            </form>
            <TreeView data={data}/>
        </div>
    )
}

export default App;
