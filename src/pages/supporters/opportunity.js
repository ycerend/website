import React from "react"

import { Page, Card, Paragraph, List, Item, FigureCard, Figure, FigureBox, FigureText } from "/src/components/Elements"
import { MdLock, MdLockOpen, MdFolder, MdMoreVert } from "react-icons/md"
import { BsArrowLeftRight } from "react-icons/bs"

export default function Layout() {
    return (
        <Page id="supporters_problem">
            <Card id="supporters_problem_a">
                <Paragraph id="supporters_problem_a1" />
                <List>
                    <Paragraph id="supporters_problem_a1a" />
                </List>
                <Paragraph id="supporters_problem_a2" />
                <List>
                    <Item id="supporters_problem_a2a" />
                    <Item id="supporters_problem_a2b" />
                    <Item id="supporters_problem_a2c" />
                    <Paragraph id="supporters_problem_a2d" />
                </List>
                <Paragraph id="supporters_problem_a3" />
                <List>
                    <Paragraph id="supporters_problem_a3a" />
                    <Paragraph id="supporters_problem_a3b" />
                    <Paragraph id="supporters_problem_a3c" />
                    <Paragraph id="supporters_problem_a3d" />
                </List>
            </Card>
            <FigureCard id="supporters_problem_b">
                <Figure width="44em" height="10em">
                    <FigureBox x="2em" y="2em" w="12em" h="2em"><em>siloed data</em></FigureBox>
                    <FigureText x="3em" y="5.5em" w="3em" h="3em"><MdFolder size="3em"/></FigureText>
                    <FigureText x="4em" y="6.6em" w="1em" h="1em"><MdLock size="2em" style={{color: 'green'}} /></FigureText>
                    <FigureText x="7.5em" y="5.7em" w="1em" h="1em"><MdMoreVert style={{color: 'red'}} /></FigureText>
                    <FigureText x="7.5em" y="6.5em" w="1em" h="1em"><MdMoreVert style={{color: 'red'}} /></FigureText>
                    <FigureText x="7.5em" y="7.3em" w="1em" h="1em"><MdMoreVert style={{color: 'red'}} /></FigureText>
                    <FigureText x="10em" y="5.5em" w="3em" h="3em"><MdFolder size="3em"/></FigureText>
                    <FigureText x="11em" y="6.6em" w="1em" h="1em"><MdLock size="2em" style={{color: 'green'}} /></FigureText>
                    <FigureText x="2em" y="10em" w="12em" h="1em">privacy &amp; security &#10004;</FigureText>
                    <FigureText x="2em" y="11em" w="12em" h="1em">cooperation &amp; value &#10060;</FigureText>

                    <FigureBox x="18em" y="2em" w="12em" h="2em"><em>data sharing</em></FigureBox>
                    <FigureText x="19em" y="5.5em" w="3em" h="3em"><MdFolder size="3em"/></FigureText>
                    <FigureText x="20em" y="6.6em" w="1em" h="1em"><MdLockOpen size="2em" style={{color: 'red'}} /></FigureText>
                    <FigureText x="22.5em" y="5.5em" w="3em" h="3em"><BsArrowLeftRight size="2em" style={{color: 'green'}} /></FigureText>
                    <FigureText x="26em" y="5.5em" w="3em" h="3em"><MdFolder size="3em"/></FigureText>
                    <FigureText x="27em" y="6.6em" w="1em" h="1em"><MdLockOpen size="2em" style={{color: 'red'}} /></FigureText>
                    <FigureText x="18em" y="10em" w="12em" h="1em">privacy &amp; security &#10060;</FigureText>
                    <FigureText x="18em" y="11em" w="12em" h="1em">cooperation &amp; value &#10004;</FigureText>

                    <FigureBox x="34em" y="2em" w="12em" h="2em"><em>cryptography</em></FigureBox>
                    <FigureText x="35em" y="5.5em" w="3em" h="3em"><MdFolder size="3em"/></FigureText>
                    <FigureText x="36em" y="6.6em" w="1em" h="1em"><MdLock size="2em" style={{color: 'green'}} /></FigureText>
                    <FigureText x="38.5em" y="5.5em" w="3em" h="3em"><BsArrowLeftRight size="2em" style={{color: 'green'}} /></FigureText>
                    <FigureText x="42em" y="5.5em" w="3em" h="3em"><MdFolder size="3em"/></FigureText>
                    <FigureText x="43em" y="6.6em" w="1em" h="1em"><MdLock size="2em" style={{color: 'green'}} /></FigureText>
                    <FigureText x="34em" y="10em" w="12em" h="1em">privacy &amp; security &#10004;</FigureText>
                    <FigureText x="34em" y="11em" w="12em" h="1em">cooperation &amp; value &#10004;</FigureText>
                </Figure>
            </FigureCard>
            <Card id="supporters_problem_c">
                <Paragraph id="supporters_problem_c1" />
                <Paragraph id="supporters_problem_c2" />
                <Paragraph id="supporters_problem_c3" />
                <Paragraph id="supporters_problem_c4" />
                <List>
                    <Item id="supporters_problem_c4a" />
                    <Item id="supporters_problem_c4b" />
                    <Item id="supporters_problem_c4c" />
                </List>
                <Paragraph id="supporters_problem_c5" />
                <List>
                    <Item id="supporters_problem_c5a" />
                    <Item id="supporters_problem_c5b" />
                    <Item id="supporters_problem_c5c" />
                </List>
                <Paragraph id="supporters_problem_c6" />
                <List>
                    <Item id="supporters_problem_c6a" />
                    <Item id="supporters_problem_c6b" />
                    <Item id="supporters_problem_c6c" />
                </List>
            </Card>
        </Page>
    )
}
