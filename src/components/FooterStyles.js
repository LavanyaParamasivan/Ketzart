import styled from "styled-components";
 
export const Box = styled.div`
    padding: 1% 2.5%;
    background: #d8c8f9;
    // position: absolute;
    bottom: 0;
    width: 100%;

 
    @media (max-width: 1000px) {
        // padding: 70px 30px;
    }
`;
 
export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`;
 
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: 25px;
`;
 
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(185px, 1fr)
    );
    grid-gap: 5px;
 
    @media (max-width: 1000px) {
        grid-template-columns: repeat(
            auto-fill,
            minmax(200px, 1fr)
        );
    }
`;
 
export const FooterLink = styled.a`
    color: #8c52ff;
    margin-bottom: 10px;
    font-size: 12px;
    text-decoration: none;
 
    &:hover {
        color: green;
        transition: 200ms ease-in;
    }
`;
 
export const Heading = styled.p`
    font-size: 15px;
    color: #8c52ff;
    margin-bottom: 10px;
    font-weight: bold;
`;