import React from 'react';
//import Card from 'react-bootstrap/Card';
//import styled from 'styled-components'; // do we actually have a styled?
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
//import ArticleViewer from '../articleViewer/ArticleViewer';

let url1 = "https://www.jhunewsletter.com/article/2022/09/sga-returns-to-discuss-welcome-event-for-all-students"
let url2 = "https://hub.jhu.edu/2022/09/12/flu-vaccine-mandate-2022/"
let url3 = "https://hub.jhu.edu/2022/09/14/william-halsted-breakthroughs-addiction/"

function ArticleSelect() {
    return (
        <div id="parent">
            const ButtonGroup = styled.div
                display: flex;

            <ButtonGroup>
                <Button variant="primary" onClick = {this.props.history.push('/articles?url=' + url1)}> Article 1 </Button>
                <Button variant="primary" onClick={this.props.history.push('/articles?url='+ url2)}> Article 2 </Button>
                <Button variant="primary" onClick={this.props.history.push('/articles?url' + url3)}>Article3 </Button>
            </ButtonGroup>
             {/* <button onClick ={openNew}>Article</button> */}
        </div>
    )
}
export default ArticleSelect;