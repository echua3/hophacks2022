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
                    <Button className="artButton" name="artButton" size="lg" variant="info">
                        <img src={"https://snworksceo.imgix.net/jhn/2e71f3f9-6a24-4206-a547-d942eada016d.sized-1000x1000.jpg?w=1000"} alt="add item" width="200"/>Article 1</Button>
                    </a>
                <a href={"/view?url=" + url2} target="_blank">
                    <Button className="artButton" name="artButton" size="lg" variant="info"> 
                    <img src={"	https://snworksceo.imgix.net/jhn/4ee5da38-d3f3-49e3-89ec-8cb6aa6b586e.sized-1000x1000.jpeg?w=1000"} alt="add item" width="250"/>Article 2</Button>
                </a>
                <a href={"/view?url=" + url3} target="_blank">
                    <Button className="artButton" name="artButton" size="lg" variant="info">
                        <img src={"https://snworksceo.imgix.net/jhn/e8cadb8b-e1a9-4ef8-954b-692a10952c92.sized-1000x1000.png?w=1000"} alt="add item" width="200"/>Article 3</Button>
                </a>
                </ButtonGroup>
            </div>
        )
    }
}
export default ArticleSelect;