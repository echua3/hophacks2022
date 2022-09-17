import React, { Component } from 'react';
//import styled from 'styled-components'; // do we actually have a styled?
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
//import {Link} from 'react-router-dom';
import './ArticleSelect.css';

let url1 = "https://www.jhunewsletter.com/article/2022/09/sga-returns-to-discuss-welcome-event-for-all-students"
let url2 = "https://www.jhunewsletter.com/article/2022/09/rain-or-shine-mens-soccer-remains-unbeaten-after-weekend-doubleheader"
let url3 = "https://www.jhunewsletter.com/article/2022/09/dont-get-cocky-blue-jays-rank-is-just-a-number"

class ArticleSelect extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id="parent">
                <ButtonGroup>
                <a href={"/view?url=" + url1} target="_blank">
                    <Button className="artButton" name="artButton"> Article 1</Button>
                    </a>
                <a href={"/view?url=" + url2} target="_blank">
                    <Button className="artButton" name="artButton"> Article 2</Button>
                </a>
                <a href={"/view?url=" + url3} target="_blank">
                    <Button className="artButton" name="artButton"> Article 3</Button>
                </a>
                </ButtonGroup>
            </div>
        )
    }
}
export default ArticleSelect;