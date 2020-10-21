import React from 'react';
import { RelationsTable } from "../components/EntityDataTable.jsx";

class Relations extends React.Component {
    render(){
        return (
            <>
            <h2>Relations</h2>
            <RelationsTable />
            </>
        )   
    }
}
export { Relations }

