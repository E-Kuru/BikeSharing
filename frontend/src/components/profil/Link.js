import React from "react";
import styled from "styled-components";

const A = styled.a`
  font-family: Gilda Display;
`

const Link = (props) => {
  return (
    <>
      <A
        className={props.className}
        href={props.href}
        onClick={() => props.toggleTab(props.number)}
      >
        {props.name}
      </A>
    </>
  );
};

export default Link;
