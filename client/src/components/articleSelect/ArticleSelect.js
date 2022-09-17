import React from 'react';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import styled from 'styled-components'; // do we actually have a styled?
import Button from 'react-bootstrap/Button';
import ArticleViewer from '../articleViewer/ArticleViewer';

let articleURL = "https://getbootstrap.com/docs/3.4/css/" //test URL
let url1 = "https://www.jhunewsletter.com/article/2022/09/sga-returns-to-discuss-welcome-event-for-all-students"
let url2 = "https://www.jhunewsletter.com/article/2022/09/sga-returns-to-discuss-welcome-event-for-all-students"
let url3 = "https://www.jhunewsletter.com/article/2022/09/sga-returns-to-discuss-welcome-event-for-all-students"

function ArticleSelect() {
    return (
        <div id="parent">
            <ButtonGroup>
                <Button onClick = {props.history.push('/articles?url=url1')}> Article 1 </Button>
                <Button onClick={props.history.push('/articles?url=url2')}> Article 2 </Button>
                <Button onClick={props.history.push('/articles?url=url3')}>Article3 </Button>
            </ButtonGroup>
             {/* <button onClick ={openNew}>Article</button> */}
        </div>
    )
}
export default ArticleSelect;