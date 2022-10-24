import React, { Component } from 'react';
import Navbar from './navbar';
import Home from './home';
import Linux from './linux';
import Django from './django';
import Web from './web';
import NotFound from './notFound';
import WebContent from './webContent';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { Navigate } from 'react-router-dom';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <Navbar />
                <div className="container">
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/linux/' element={<Linux />}>
                            <Route index path='a' element={<h1>aaa</h1>} />
                            <Route index path='b' element={<h1>bbb</h1>} />
                        </Route>
                        <Route path='/django' element={<Django />} />
                        <Route path='/web' element={<Web />} />
                        <Route path='/web/content/:chapter' element={<WebContent />} />
                        <Route path='/404' element={<NotFound />}></Route>
                        <Route path='*' element={<Navigate replace to="/404" />}></Route>
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;