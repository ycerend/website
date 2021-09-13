import React from "react"

import { Page, Card, Paragraph, List, Item, FigureCard, Image } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="journey">
            <Card id="journey_usecase">
                <Paragraph id="journey_usecase_1" />
                <Paragraph id="journey_usecase_2" />
                <Paragraph id="journey_usecase_3" />
                <Paragraph id="journey_usecase_4" />
            </Card>
            <Card id="journey_ppc">
            <Paragraph id="journey_ppc_1" />
            <List>
                <Item id="journey_ppc_2a" />
                <Item id="journey_ppc_2b" />
                <Item id="journey_ppc_2c" />
            </List>
            <Paragraph id="journey_ppc_3" />
            <List>
                <Item id="journey_ppc_4a" />
                <Item id="journey_ppc_4b" />
                <Item id="journey_ppc_4c" />
            </List>
            </Card>
            <Card id="journey_consulting">
                <Paragraph id="journey_consulting_1" />
                <Paragraph id="journey_consulting_2" />
                <Paragraph id="journey_consulting_3" />
            </Card>
            <Paragraph>... to be continued ...</Paragraph>
        </Page>
    )
}
