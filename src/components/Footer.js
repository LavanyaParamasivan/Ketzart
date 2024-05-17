import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
 
const Footer = () => {
    return (
        <Box>
            <h6
                style={{
                    color: "#8c52ff",
                    textAlign: "center",
                    marginTop: "10px",
                    fontFamily: "PT Sans",
                }}
            >
                Art Bidding Portal For KetzArt
            </h6>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">
                          KetzArt Art Gallery
                        </FooterLink>
                       
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">
                            Bidding Artworks
                        </FooterLink>
                      
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">
                          +61 100000000
                        </FooterLink>
                      
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                 
                            <img src="./artImages/facebook.png" className="imgsrc" style={{
                                        marginLeft: "10px",
                                    }}>
                                {/* <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Facebook
                                </span> */}
                            </img>
                            <img src="./artImages/instagram.png" className="imgsrc" style={{
                                        marginLeft: "10px",
                                    }}>
                                {/* <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Facebook
                                </span> */}
                            </img>
                            <img src="./artImages/twitter.png" className="imgsrc" style={{
                                        marginLeft: "10px",
                                    }}>
                                {/* <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Facebook
                                </span> */}
                            </img>
                        </FooterLink>
                     
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;