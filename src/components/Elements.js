import React from "react"
import { Link as IntlLink } from "gatsby-plugin-intl"

import Layout from "./Layout"
import { StyledHeading, StyledCard, StyledTitle, StyledSubtitle, StyledSection, StyledParagraph, StyledList, StyledItem, StyledLink, StyledThumbnailContainer, StyledThumbnail, StyledColumns, StyledCitationContainer, StyledCitationContent, StyledCitationSource, StyledFdrtd, StyledFilename, StyledImage, StyledImageContainer, StyledImageCredit, StyledButton, StyledGreyButton, StyledActiveButton, StyledFloat } from "./Styles"
import Translation from "./Translation"

export function Page(props) {
    return (
        <Layout>
            <StyledHeading>
                <Translation id={props.id} />
            </StyledHeading>
            {props.children}
        </Layout>
    )
}

export function Card(props) {
    return (
        <StyledCard>
            <StyledTitle>
                <Translation id={props.id} />
            </StyledTitle>
            {props.children}
        </StyledCard>
    )
}

export function Section(props) {
    return (
        <div>
            <StyledSection>
                <Translation id={props.id} />
            </StyledSection>
            {props.children}
        </div>
    )
}

export function Paragraph(props) {
    return (
        <StyledParagraph>
            <Translation id={props.id} />
            {props.children}
        </StyledParagraph>
    )
}

export function Subtitle(props) {
    return (
        <StyledSubtitle>
            <Translation id={props.id} />
            {props.children}
        </StyledSubtitle>
    )
}

export function Line(props) {
    return (
        <span>
            <Translation id={props.id} />
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
            <Translation id={props.id} />
            {props.children}
        </StyledItem>
    )
}

export function ExternalLink(props) {
    return (
        <StyledLink href={props.url} target="_new">
            {props.id ? <Translation id={props.id} /> : props.text}
        </StyledLink>
    )
}

export function InternalLink(props) {
    return (
        <IntlLink to={props.url}>
            {props.id ? <Translation id={props.id} /> : props.text}
            {props.children}
        </IntlLink>
    )
}

export function Thumbnail(props) {
    return (
        <StyledThumbnailContainer>
            <StyledThumbnail src={props.src} />
        </StyledThumbnailContainer>
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
            <StyledImage src={props.src} width={"100%"}/>
            <StyledImageCredit>
                <Translation id="general_imagecredit" />: {props.credit}
            </StyledImageCredit>
        </StyledImageContainer>
    )
}

export function Float(props) {
    return (
        <StyledFloat width={props.width} float={props.float}>
            {props.children}
        </StyledFloat>
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

