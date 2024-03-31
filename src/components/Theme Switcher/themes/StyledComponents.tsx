import styled from "styled-components";

export const Wrapper = styled.div`
          background-color: ${(props) => props.theme.background};
          color: ${(props)=> props.theme.text};
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        `;