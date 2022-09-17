import React from 'react';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import styled from 'styled-components'; // do we actually have a styled?
import Button from 'react-bootstrap/Button';
import ArticleViewer from '../articleViewer/ArticleViewer';

let articleURL = "https://getbootstrap.com/docs/3.4/css/" //test URL
let url1 = "https://www.jhunewsletter.com/article/2022/09/sga-returns-to-discuss-welcome-event-for-all-students"
let url2 = 

function ArticleSelect() {
    return (
        <div id="parent">
            <Button variant ="primary" type ="submit">
                <ArticleViewer url ="{articleURL}"/>
            </Button>
             {/* <button onClick ={openNew}>Article</button> */}
        </div>
    )
}

const Button = styled.button`
  /* Same as above */
`;
const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
  `;
const types = ['Article 1', 'Article 2', 'Article 3'];
function ToggleGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <ButtonGroup>
      {types.map(type => (
        <ButtonToggle
          key={type}
          active={active === type}
          onClick={() => setActive(type)}
        >
          {type}
        </ButtonToggle>
      ))}
    </ButtonGroup>
  );
}




export default ArticleSelect;