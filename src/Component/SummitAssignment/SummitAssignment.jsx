import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { SERVER_URL } from '../../config/config'
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import GoogleDocsViewer from "react-google-docs-viewer"
import { useParams } from 'react-router-dom';

const SummitAssignment = (props) => {
    const [assignment, setAssignment]= useState()
    const {idAssignment}= useParams()
    useEffect(()=> {
        (async()=> {
            const res= await axios({
                url: `${SERVER_URL}/a`,
                method: "get", 
                params: {
                    idAssignment
                }
            })
            const result= await res.data    
            setAssignment(()=> result.result)
        })()
    }, [idAssignment])
  return (
    <div className={"saksjdkjfkjaaksasa"} style={{width: "100%", marginTop: 12, display: "flex", justifyContent: 'center', alignItems: 'center',}}>
        <div className={"sjdkjaskjdfkjasassaw"} style={{width: "100%", maxWidth: 960}}>
            <Title title={props.className} />
            <AuthorName authorName={props.account} time_created={props.time_created} />
            <AttachMent uri={assignment?.link} />
        </div>
    </div>
  )
}

const Title= (props)=> {
    return (
        <div className={"skkjfowajsjoaswawa"} style={{fontSize: 24, fontWeight: 600, marginBottom: 12}}>
            {props.title}
        </div>
    )
}

const AuthorName= (props)=> {
    return (
        <div className={"sajksjfkjdkjsaskaew"} style={{display: "flex", alignItems: 'center'}}>
            <div>{props.authorName}</div>&nbsp;-&nbsp; 
            <div>{moment(props.time_created).format("DD/MM/YYYY HH:mm:ss")}</div>
        </div>
    )
}

const AttachMent= (props)=> {
    if(props.uri) {
        return (
            <div className={"kakslfdkfsjkssakwwa"} style={{width: "100%", padding: "20px 0", borderTop: "1px solid #e7e7e7", borderBottom: "1px solid #e7e7e7"}}>
                <GoogleDocsViewer
                    width="600px"
                    height="780px"
                    fileUrl={props.uri}
                    />
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

export default SummitAssignment