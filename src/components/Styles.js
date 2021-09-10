import styled from "styled-components"

export const DarkTheme = {
    pageBackground: "#303030",
    cardBackground: "#404040",
    shadeBackground: "#505050",
    figureBackground: "#303030",
    boxColor: "white",
    boxBackground: "#505050",
    highlightColor: "white",
    emphasisColor: "white",
    textColor: "#C0C0C0",
    activeColor: "orange",
    fdrtdColor: "orange",
    id: "dark",
    colors: {
        greyButtonBackground: "#303030",
        greyButtonText: "#C0C0C0",
        greyButtonHoverBackground: "#202020",
        greyButtonHoverText: "white",
        activeButtonBackground: "orange",
        activeButtonText: "black",
        activeButtonHoverBackground: "darkorange",
        activeButtonHoverText: "white"
    }
}

export const LightTheme = {
    pageBackground: "#EFEFEF",
    cardBackground: "white",
    shadeBackground: "#DFDFDF",
    figureBackground: "white",
    boxColor: "black",
    boxBackground: "#DFDFDF",
    highlightColor: "black",
    emphasisColor: "black",
    textColor: "#404040",
    activeColor: "darkorange",
    fdrtdColor: "darkorange",
    id: "light",
    colors: {
        greyButtonBackground: "#EFEFEF",
        greyButtonText: "#404040",
        greyButtonHoverBackground: "#DFDFDF",
        greyButtonHoverText: "black",
        activeButtonBackground: "orange",
        activeButtonText: "black",
        activeButtonHoverBackground: "darkorange",
        activeButtonHoverText: "white"
    }
}

export const HighContrastTheme = {
    pageBackground: "white",
    cardBackground: "white",
    shadeBackground: "#888888",
    figureBackground: "white",
    boxColor: "white",
    boxBackground: "black",
    highlightColor: "black",
    emphasisColor: "black",
    textColor: "black",
    activeColor: "black",
    fdrtdColor: "black",
    id: "highcontrast",
    colors: {
        greyButtonBackground: "white",
        greyButtonText: "#black",
        greyButtonHoverBackground: "#white",
        greyButtonHoverText: "black",
        activeButtonBackground: "black",
        activeButtonText: "white",
        activeButtonHoverBackground: "black",
        activeButtonHoverText: "white"
    }
}

export const StyledPage = styled.div`
    font-family: system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.pageBackground};
    margin: 0;

    h1, h2, h3, h4 {
        font-style: normal;
        font-weight: bold;
        color: ${props => props.theme.highlightColor};
    }

    em {
        font-style: normal;
        font-weight: bold;
        color: ${props => props.theme.emphasisColor};
    }


    a {
        color: ${props => props.theme.highlightColor};
    }
    a:hover {
        color: orange;
    }
`

export const StyledContent = styled.div`
    @media (max-width: 799px) {
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
    };
    @media (min-width: 800px) and (max-width: 1199px) {
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 1rem;
        padding-bottom: 2rem;
    };
    @media (min-width: 1200px) {
        padding-left: 2rem;
        padding-right: 2rem;
        padding-top: 2rem;
        padding-bottom: 4rem;
    };
`

export const StyledHeading = styled.h1`
    @media (max-width: 799px) {
        margin-top: 0rem;
        margin-bottom: 1rem;
    };
    @media (min-width: 800px) and (max-width: 1199px) {
        margin-top: 1rem;
        margin-bottom: 2rem;
    };
    @media (min-width: 1200px) {
        margin-top: 2rem;
        margin-bottom: 4rem;
    };
`

export const StyledFloatingToc = styled.div`
    width: auto;
    float: right;
    position: fixed;
    right: 3em;
    margin-left: 3em;
    padding: 1rem 1rem;
    border: 1px;
    border-style: solid;
    background-color: ${props => props.theme.cardBackground};
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`

export const StyledCard = styled.div`
    @media (max-width: 799px) {
        margin: 1rem 0rem;
        padding: 1rem 1rem;
    };
    @media (min-width: 800px) and (max-width: 1199px) {
        margin: 1rem 1rem;
        padding: 1rem 1rem;
    };
    @media (min-width: 1200px) {
        margin: 2rem 2rem;
        padding: 2rem 2rem;
    };
    display: inline-block;
    vertical-align: top;
    max-width: 500px;
    border: 1px;
    border-style: solid;
    background-color: ${props => props.theme.cardBackground};
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`

export const StyledFigureCard = styled.div`
    @media (max-width: 799px) {
        margin: 1rem 0rem;
        padding: 1rem 1rem;
    };
    @media (min-width: 800px) and (max-width: 1199px) {
        margin: 1rem 1rem;
        padding: 1rem 1rem;
    };
    @media (min-width: 1200px) {
        margin: 2rem 2rem;
        padding: 2rem 2rem;
    };
    display: inline-block;
    vertical-align: top;
    max-width: 500px;
    border: 1px;
    border-style: solid;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`

export const StyledIllustration = styled.div`
    display: block;
    margin-left: 20%;
    margin-right: 20%;
    padding: 2rem 2rem;
    border: 1px;
    width: 60%;
`

export const StyledTitle = styled.h2`
    margin-top: 0;
`

export const StyledSection = styled.h3`
    margin-top: 0;
`

export const StyledParagraph = styled.p`
/*    text-align: justify;*/
`

export const StyledSubtitle = styled.div`
    font-style: italic;
`

export const StyledList = styled.ul`
`

export const StyledItem = styled.li`
`

export const StyledLink = styled.a`
`

export const StyledFdrtdLink = styled.a`
    color: ${props => props.theme.fdrtdColor};
`


export const StyledThumbnailContainer = styled.div`
    width: 150px;
    height: 100px;
    background-color: ${props => props.background};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledThumbnail = styled.img`
    margin: 10px;
    max-width: 130px;
    max-height: 80px;
`

export const StyledColumns = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.columns}, auto);
    grid-gap: 2rem;
    justify-content: left;
`

export const StyledCitationContainer = styled.div`
    background-color: ${props => props.theme.shadeBackground};
    border-radius: 0.2rem;
    border-style: solid;
    border-width: 1px;
    border-color: ${props => props.theme.highlightColor};
    padding: 2rem;
    padding-top: 1rem;
    margin-left: 5rem;
    margin-right: 5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: inline-block;
`

export const StyledCitationContent = styled.div`
    text-align: justify;
    font-style: italic;
`

export const StyledCitationSource = styled.div`
    margin-top: -0.75rem;
    /*text-align: center;*/
    font-style: italic;
    font-size: small;
`

export const StyledFdrtd = styled.span`
    color: ${props => props.theme.fdrtdColor};
    /*font-weight: ${props => props.theme.id === "highcontrast" ? "bold" : "normal"};*/
`

export const StyledFilename = styled.span`
    background-color: ${props => props.theme.shadeBackground};
    border-radius: 0.2rem;
    border-style: solid;
    border-width: 1px;
    border-color: ${props => props.theme.highlightColor};
    padding-left: 0.2rem;
    padding-right: 0.2rem;
`

export const StyledCode = styled.span`
    background-color: ${props => props.theme.shadeBackground};
    border-radius: 0.2rem;
    border-style: solid;
    border-width: 1px;
    border-color: ${props => props.theme.highlightColor};
    padding-left: 0.2rem;
    padding-right: 0.2rem;
`

export const StyledImageContainer = styled.div`
    width: ${props => props.width};
`

export const StyledImage = styled.img`
    width: ${props => props.width};
`

export const StyledImageCredit = styled.div`
    width: ${props => props.width};
    font-style: italic;
    font-size: x-small;
    margin-bottom: 1.0rem;
`

export const StyledFloat = styled.div`
    width: ${props => props.width};
    float: ${props => props.float};
    padding: 2rem;
`

export const StyledButton = styled.div`
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    padding-top: 10px;
    cursor: pointer;
    text-decoration: none;
    border-radius: 5px;
    display: inline-block;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    a {
        text-decoration: none;
    }
    a:hover {
        text-decoration: none;
    }
`

export const StyledGreyButton = styled(StyledButton)`
    background-color: ${props => props.theme.colors.greyButtonBackground};
    color: ${props => props.theme.colors.greyButtonText};
    a {
        background-color: ${props => props.theme.colors.greyButtonBackground};
        color: ${props => props.theme.colors.greyButtonText};
    }
    a:hover {
        background-color: ${props => props.theme.colors.greyButtonBackground};
        color: ${props => props.theme.colors.greyButtonHoverText};
    }
`

export const StyledActiveButton = styled(StyledButton)`
    background-color: ${props => props.theme.colors.activeButtonBackground};
    color: ${props => props.theme.colors.activeButtonText};
    a {
        background-color: ${props => props.theme.colors.activeButtonBackground};
        color: ${props => props.theme.colors.activeButtonText};
    }
    a:hover {
        background-color: ${props => props.theme.colors.activeButtonBackground};
        color: ${props => props.theme.colors.activeButtonHoverText};
    }
`

export const MenuSection = styled.div`
`

export const MenuHeading = styled.div`
    display: flex;
    align-items: flex-end;
    cursor: pointer;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-right: 1.5rem;

    font-weight: bold;
    color: ${(props) => props.theme.highlightColor};
    a {
        color: ${(props) => props.theme.highlightColor};
        text-decoration: none;
    }
    a:hover {
        color: ${(props) => props.theme.activeColor};
        text-decoration: none;
    }
`

export const MenuList = styled.ul`
    font-weight: normal;
    list-style-type: none;
    padding: 0;
    margin: 0;
`

export const MenuItem = styled.li`
    color: ${(props) => props.theme.textColor};
    a {
        color: ${(props) => props.theme.textColor};
        text-decoration: none;
    }
    a:hover {
        color: ${(props) => props.theme.activeColor};
        text-decoration: none;
    }
`

export const StyledNavbarContainer = styled.div`
    font-size: small;
    padding-left: 3rem;
`

export const StyledNavbarItem = styled.div`
    font-size: small;
    display: inline-block;
    vertical-align: top;
`

export const StyledNavbarSection = styled.div`
`

export const StyledNavbarHeading = styled.div`
    display: flex;
    align-items: flex-end;
    cursor: pointer;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-right: ${(props) => props.style ? props.style.paddingRight ? props.style.paddingRight : "2.5rem" : "2.5rem"};

    font-weight: bold;
    color: ${(props) => props.theme.highlightColor};
    a {
        color: ${(props) => props.theme.highlightColor};
        text-decoration: none;
    }
    a.hover {
        color: ${(props) => props.theme.activeColor};
        text-decoration: none;
    }
`

export const StyledNavbarDropdown = styled.div`
    top: 4.5rem;
    position: absolute;
    border: 1px;
    border-color: ${(props) => props.theme.textColor};
    border-style: solid;
    margin: 0;
    padding: 1rem;
    padding-top: 0.5rem;
    visibility: ${(props) => props.animate === "open" ? "visible" : "hidden"};
    background: ${(props) => props.theme.cardBackground};
`

export const StyledFooterContainer = styled.div`
    padding: 2rem 2rem;
    border: 0px;
    border-top: 1px;
    border-color: ${props => props.theme.textColor};
    border-style: dotted;
`

export const StyledFooterItem = styled.div`
    font-size: small;
    display: inline-block;
    vertical-align: top;
    margin: 2rem;
`

export const StyledToggleDark = styled.span`
    color: ${props => props.theme.id === "dark" ? props.theme.activeColor : props.theme.textColor};
    font-weight: ${props => props.theme.id === "dark" ? "bold" : "normal"};
`

export const StyledToggleLight = styled.span`
    color: ${props => props.theme.id === "light" ? props.theme.activeColor : props.theme.textColor};
    font-weight: ${props => props.theme.id === "light" ? "bold" : "normal"};
`

export const StyledToggleHighContrast = styled.span`
    color: ${props => props.theme.id === "highcontrast" ? props.theme.activeColor : props.theme.textColor};
    font-weight: ${props => props.theme.id === "highcontrast" ? "bold" : "normal"};
`

export const StyledToggleLanguage = styled.span`
    color: ${props => props.currentLocale === props.language ? props.theme.activeColor : props.theme.textColor};
    font-weight: ${props => props.currentLocale === props.language ? "bold" : "normal"};
`

export const StyledLogo = styled.img.attrs(
    props => ({'src': props.theme.id === "dark" ? "/favicon-dark.png" : "/favicon-light.png"})
)`
    alt: "logo showing a stylized letter F for fdrtd";
    width: 3rem;
    height: 3rem;
`

export const StyledMenuSection = styled.div`
`

export const StyledMenuHeading = styled.div`
    align-items: top;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-right: 1.5rem;
    font-weight: bold;
    color: ${props => props.theme.highlightColor};
    a {
        color: ${props => props.theme.highlightColor};
        text-decoration: none;
    }
    a.hover {
        color: ${props => props.theme.activeColor};
        text-decoration: none;
    }
`

export const StyledMenuList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`

export const StyledMenuItem = styled.li`
    font-weight: normal;
    color: ${props => props.theme.textColor};
    a {
        color: ${props => props.theme.textColor};
        text-decoration: none;
    }
    a.hover {
        color: ${props => props.theme.activeColor};
        text-decoration: none;
    }
    cursor: pointer;
`

export const StyledHeader = styled.div`
    position: sticky;
    top: 0px;
    z-index: 1000;
    width: 100%;
    background-color: ${props => props.theme.pageBackground};
    border: 0px;
    border-bottom: 1px;
    border-color: ${props => props.theme.textColor};
    border-style: dotted;
`

export const StyledHeaderContainer = styled.div`
    display: flex;
    padding: 1rem 2rem;
`

export const StyledFigureContent = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    /*border: 1px;
    border-style: solid;*/
    padding: 2em;
    background-color: ${props => props.theme.figureBackground};
`

export const StyledFigureContainer = styled.div`
    position: relative;
    width: ${props => props.width};
    height: ${props => props.height};
`

export const StyledFigureCaption = styled.div`
    font-style: italic;
    margin-bottom: 1.0rem;
`

export const StyledFigureBox = styled.div`
    border: 1px;
    border-style: solid;
    position: absolute;
    left: ${props => props.x};
    top: ${props => props.y};
    width: ${props => props.w};
    height: ${props => props.h};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.boxBackground};
    color: ${props => props.theme.boxColor};
`

export const StyledFigureRect = styled.div`
    border: 1px;
    border-style: dashed;
    position: absolute;
    left: ${props => props.x};
    top: ${props => props.y};
    width: ${props => props.w};
    height: ${props => props.h};
    display: flex;
    justify-content: center;
    align-items: top;
    color: ${props => props.theme.textColor};
    padding: 1em;
    font-weight: bold;
`

export const StyledFigureText = styled.div`
    position: absolute;
    left: ${props => props.x};
    top: ${props => props.y};
    width: ${props => props.w};
    height: ${props => props.h};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.highlightColor};
`
