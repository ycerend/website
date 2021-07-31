import React from "react"
import { Link as IntlLink } from "gatsby-plugin-intl"

import Layout from "./Layout"
import { StyledHeading, StyledCard, StyledFigureCard, StyledIllustration, StyledTitle, StyledSubtitle, StyledSection, StyledParagraph, StyledList, StyledItem, StyledLink, StyledThumbnailContainer, StyledThumbnail, StyledColumns, StyledCitationContainer, StyledCitationContent, StyledCitationSource, StyledFdrtd, StyledFilename, StyledImage, StyledImageContainer, StyledImageCredit, StyledButton, StyledGreyButton, StyledActiveButton, StyledFloat, StyledFigureContainer, StyledFigureContent, StyledFigureCaption, StyledFigureBox, StyledFigureRect, StyledFigureText, StyledCode, StyledFdrtdLink } from "./Styles"
import Translation from "./Translation"

export function Page(props) {
    return (
        <Layout>
            {props.breadcrumbs}
            <StyledHeading>
                {props.id ? <Translation id={props.id} /> : props.text}
            </StyledHeading>
            {props.children}
        </Layout>
    )
}

export function Card(props) {
    return (
        <StyledCard>
            {props.heading_id ? <StyledSubtitle><Translation id={props.heading_id} /></StyledSubtitle> : ""}
            {props.heading ? <StyledSubtitle>{props.heading}</StyledSubtitle> : ""}
            <StyledTitle>
                {props.id ? <Translation id={props.id} /> : props.text}
            </StyledTitle>
            {props.children}
        </StyledCard>
    )
}

export function FigureCard(props) {
    return (
        <StyledFigureCard>
            {props.heading_id ? <StyledSubtitle><Translation id={props.heading_id} /></StyledSubtitle> : ""}
            {props.heading ? <StyledSubtitle>{props.heading}</StyledSubtitle> : ""}
            <StyledTitle>
                {props.id ? <Translation id={props.id} /> : props.text}
            </StyledTitle>
            {props.children}
        </StyledFigureCard>
    )
}

export function Section(props) {
    return (
        <div>
            <StyledSection>
                {props.id ? <Translation id={props.id} /> : props.text}
            </StyledSection>
            {props.children}
        </div>
    )
}

export function Paragraph(props) {
    return (
        <StyledParagraph>
            {props.id ? <Translation id={props.id} /> : props.text}
            {props.children}
        </StyledParagraph>
    )
}

export function Subtitle(props) {
    return (
        <StyledSubtitle>
            {props.id ? <Translation id={props.id} /> : props.text}
            {props.children}
        </StyledSubtitle>
    )
}

export function Line(props) {
    return (
        <span>
            {props.id ? <Translation id={props.id} /> : props.text}
            {props.children}    
        </span>
    )
}

export function List(props) {
    return (
        <StyledList>
            {props.children}
        </StyledList>
    )
}

export function Item(props) {
    return (
        <StyledItem>
            {props.id ? <Translation id={props.id} /> : props.text}
            {props.children}
        </StyledItem>
    )
}

export function FdrtdLink(props) {
    return (
        <StyledFdrtdLink href={props.href} target={props.target}>
            {props.children}
        </StyledFdrtdLink>
    )
}

export function ExternalLink(props) {
    return (
        <StyledLink href={props.url} target="_new" style={props.style}>
            {props.id ? <Translation id={props.id} /> : props.text}
            {props.children}
        </StyledLink>
    )
}

export function DirectLink(props) {
    return (
        <StyledLink href={props.url} download>
            {props.id ? <Translation id={props.id} /> : props.text}
            {props.children}
        </StyledLink>
    )
}

export function InternalLink(props) {
    return (
        <IntlLink to={props.url} style={props.style}>
            {props.id ? <Translation id={props.id} /> : props.text}
            {props.children}
        </IntlLink>
    )
}

export function Thumbnail(props) {
    return (
        <StyledThumbnailContainer background={props.background}>
            <StyledThumbnail src={props.src} />
        </StyledThumbnailContainer>
    )
}

export function ThumbnailAndText(props) {
    return (
        <Paragraph>
            <Columns columns="2">
                <div width="150px">
                    <Thumbnail width="150" height="100" padding="0" src={props.src} background={props.background ? props.background : "white"} />
                </div>
                <div>
                    <Paragraph id={props.id} />
                </div>
            </Columns>
        </Paragraph>
    )
}

export function Columns(props) {
    return (
        <StyledColumns columns={props.columns}>
            {props.children}
        </StyledColumns>
    )
}

export function Citation(props) {

    return (
        <StyledCitationContainer>
            <StyledCitationContent>
                {props.children}
            </StyledCitationContent>
            <StyledCitationSource>
                <Translation id="general_source" />: <Translation id={props.id} />
            </StyledCitationSource>
        </StyledCitationContainer>
    )
}

export function Fdrtd(props) {

    return (
        <StyledFdrtd>
            {props.children ? props.children : "fdrtd"}
        </StyledFdrtd>
    )
}

export function Filename(props) {

    return (
        <StyledFilename>
            {props.children}
        </StyledFilename>
    )
}

export function Image(props) {
    return (
        <StyledImageContainer>
            <StyledImage src={props.src} width={props.width} height={props.height} />
            <StyledImageCredit>
                <Translation id="general_imagecredit" />: {props.credit}
            </StyledImageCredit>
        </StyledImageContainer>
    )
}

export function Float(props) {
    return (
        <StyledFloat width={props.width} height={props.height} float={props.float}>
            {props.children}
        </StyledFloat>
    )
}

export function Illustration(props) {
    return (
        <StyledIllustration>
            {props.children}
        </StyledIllustration>
    )
}

export function Button(props) {
    return (
        <StyledButton textColor={props.textColor} backgroundColor={props.backgroundColor} hoverColor={props.hoverColor}>
            {props.children}
        </StyledButton>
    )
}

export function GreyButton(props) {
    return (
        <StyledGreyButton>
            {props.children}
        </StyledGreyButton>
    )
}

export function ActiveButton(props) {
    return (
        <StyledActiveButton>
            {props.children}
        </StyledActiveButton>
    )
}

export function Figure(props) {
    return (
        <StyledFigureContainer>
            <StyledFigureContent width={props.width} height={props.height}>
                {props.children}
            </StyledFigureContent>
            {props.source ? 
                <StyledFigureCaption>
                    {props.caption}
                </StyledFigureCaption>
            : ""}
        </StyledFigureContainer>
    )
}

export function FigureBox(props)
{
    return(
        <StyledFigureBox x={props.x} y={props.y} w={props.w} h={props.h}>
            {props.children}
        </StyledFigureBox>
    )
}

export function FigureRect(props)
{
    return(
        <StyledFigureRect x={props.x} y={props.y} w={props.w} h={props.h}>
            {props.children}
        </StyledFigureRect>
    )
}

export function FigureText(props)
{
    return(
        <StyledFigureText x={props.x} y={props.y} w={props.w} h={props.h}>
            {props.children}
        </StyledFigureText>
    )
}

export function Code(props)
{
    return(
        <StyledCode>
            {props.children}
        </StyledCode>
    )
}

export function Red(props)
{
    return(
        <span style={{color: "red"}}>
            {props.children}
        </span>
    )
}


export function Green(props)
{
    return(
        <span style={{color: "green"}}>
            {props.children}
        </span>
    )
}
