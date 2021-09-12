import React from "react"

import { Page, Card, Paragraph, List, Item, FigureCard, Image } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="journey">
            <Card id="journey_ppc">
            <Paragraph id="journey_ppc1" />
            <Paragraph id="journey_ppc2" />
            <Paragraph id="journey_ppc3" />
                <List>
                    <Item id="journey_ppc4a" />
                    <Item id="journey_ppc4b" />
                    <Item id="journey_ppc4c" />
                </List>
            </Card>
            <FigureCard id="journey_meeting">
                <Paragraph id="journey_meeting1" />
                <Paragraph id="journey_meeting2"/>
                <Paragraph id="journey_meeting3"/>
                <Image src="/about/pitch/creativeart_wavebreakmedia.png" credit="Wavebreak Media"/>
            </FigureCard>
            <Card id="journey_roadblocks">
                <Paragraph id="journey_roadblocks1" />
                <Paragraph id="journey_roadblocks2" />
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
            <Card id="journey_requirements">
                <Paragraph id="journey_requirements1" />
                <Paragraph id="journey_requirements2" />
                <Paragraph id="journey_requirements3" />
                <List>
                    <Item id="journey_requirements3a" />
                    <Item id="journey_requirements3b" />
                    <Item id="journey_requirements3c" />
                    <Item id="journey_requirements3d" />
                    <Item id="journey_requirements3e" />
                    <Item id="journey_requirements3f" />
                    <Item id="journey_requirements3g" />
                    <Item id="journey_requirements3h" />
                    <Item id="journey_requirements3i" />
                    <Item id="journey_requirements3j" />
                </List>
            </Card>
            <Card id="journey_approach">
                <Paragraph id="journey_approach1" />
                <Paragraph id="journey_approach2" />
            </Card>
        </Page>
    )
}
