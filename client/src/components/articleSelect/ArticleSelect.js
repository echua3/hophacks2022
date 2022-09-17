import React from 'react';
//import Card from 'react-bootstrap/Card';
//import styled from 'styled-components'; // do we actually have a styled?
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/Button';
//import ArticleViewer from '../articleViewer/ArticleViewer';

let url1 = "https://www.jhunewsletter.com/article/2022/09/sga-returns-to-discuss-welcome-event-for-all-students"
let url2 = "https://www.jhunewsletter.com/article/2022/09/sga-returns-to-discuss-welcome-event-for-all-students"
let url3 = "https://www.jhunewsletter.com/article/2022/09/sga-returns-to-discuss-welcome-event-for-all-students"

function ArticleSelect() {
    return (
        <div id="parent">
            const ButtonGroup = styled.div
                display: flex;

            <ButtonGroup>
                <Button onClick = {this.props.history.push('/articles?url=' + url1)}> Article 1 </Button>
                <Button onClick={this.props.history.push('/articles?url='+ url2)}> Article 2 </Button>
                <Button onClick={this.props.history.push('/articles?url' + url3)}>Article3 </Button>
            </ButtonGroup>
             {/* <button onClick ={openNew}>Article</button> */}
        </div>
    )
}
export default ArticleSelect;