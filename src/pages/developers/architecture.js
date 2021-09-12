import React from "react"

import { Page, Card, Paragraph, GreyButton, ExternalLink, List, Item, FigureCard, Figure, FigureRect, FigureBox, FigureText } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="architecture">
            <FigureCard id="architecture_clientserver_a">
                <Figure width="36em" height="25em">

                    <FigureRect x="3em" y="3em" w="12em" h="21em">client</FigureRect>
                    <FigureBox x="5em" y="7em" w="10em" h="4em">business logic</FigureBox>
                    <FigureText x="5em" y="11.4em" w="10em" h="1em">&#8597;</FigureText>
                    <FigureBox x="5em" y="13em" w="10em" h="2em">fdrtd API</FigureBox>
                    <FigureBox x="5em" y="15.5em" w="10em" h="2em">interface</FigureBox>
                    <FigureBox x="5em" y="18em" w="10em" h="2em">web client</FigureBox>
                    <FigureText x="5em" y="20.4em" w="10em" h="1em">&#8597;</FigureText>

                    <FigureRect x="23em" y="3em" w="12em" h="21em">server</FigureRect>
                    <FigureBox x="25em" y="13em" w="10em" h="2em">bus</FigureBox>
                    <FigureBox x="25em" y="15.5em" w="10em" h="2em">controller</FigureBox>
                    <FigureBox x="25em" y="18em" w="10em" h="2em">web server</FigureBox>
                    <FigureText x="25em" y="20.4em" w="10em" h="1em">&#8597;</FigureText>

                    <FigureBox x="25em" y="9em" w="2em" h="2em"> </FigureBox>
                    <FigureBox x="29em" y="9em" w="2em" h="2em"> </FigureBox>
                    <FigureBox x="33em" y="9em" w="2em" h="2em"> </FigureBox>
                    <FigureText x="25em" y="5.5em" w="10em" h="4em">microservices</FigureText>
                    <FigureText x="21em" y="11.4em" w="10em" h="1em">&#8597;</FigureText>
                    <FigureText x="25em" y="11.4em" w="10em" h="1em">&#8597;</FigureText>
                    <FigureText x="29em" y="11.4em" w="10em" h="1em">&#8597;</FigureText>

                    <FigureBox x="5em" y="22em" w="30em" h="2em">network layer</FigureBox>

                </Figure>
            </FigureCard>
        </Page>
    )
}
