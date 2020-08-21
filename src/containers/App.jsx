import React, { useState, Fragment } from 'react';
import TreeView from '../components/TreeView';
import Button from '../components/Button';
import Input from '../components/Input';
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
        .then(data => {
            setData(data)
            console.log(data)
        })

        document.getElementById('textInput').value = '';
    }

    return (
        <Fragment>
            <div className="formDiv">
                <form onSubmit={handleOnSubmit}>
                    <Input id="textInput" type="text" onChange={handleOnChange} className="textInput" />
                    <Button id="submitInput" type="submit" value="Fetch" className="submitInput" />
                </form>
            </div>
            <div className="treeViewDiv">
                <TreeView data={data}/>
            </div>
        </Fragment>
    )
}

export default App;
