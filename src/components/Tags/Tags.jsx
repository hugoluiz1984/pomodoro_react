import React,{useState, useContext} from 'react'
import styled,{css} from 'styled-components';
import { StateContext } from '../StateProvider';

const Tags = () => {

    const {activeTag, setActiveTag} = useContext(StateContext);

    const handleTagClick = (index) => {
        setActiveTag(index);
    }

  return (
    <TagsContainer>
        {
            ['Work', 'Short Break', 'Long Break'].map((tag,i)=> (
                <Tag activeTag={activeTag === i} key={i} onClick={()=>handleTagClick(i)}>{tag}</Tag>
                ))
        }

    </TagsContainer>
  )
}

export default Tags;

const TagsContainer = styled.div`
    background-color : ${props => props.theme.colors.secondary};;
    height: 5rem;
    width : 40rem;
    margin: 0 auto;
    border-radius: 5rem;
    display: flex;
    gap: 1rem;
    align-items: center;

`
const Tag = styled.button`
    all: unset;
    height: 4rem;
    text-align: center;
    flex: 1;
    
    border-radius: 2rem;
    font-size: 2rem;

    ;

    ${({activeTag})=> activeTag && css `
        background-color:${(props) => props.theme.colors.primary};
    `}
`
