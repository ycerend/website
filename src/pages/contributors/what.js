import React from "react"

import { Page, Card, Paragraph, List, Item } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="contributors_what">
            <Card id="contributors_what_clients">
                <Paragraph id="contributors_what_clients1" />
                <Paragraph id="contributors_what_clients2" />
                <List>
                <Item id="contributors_what_clients3" />
                <Item id="contributors_what_clients4" />
                <Item id="contributors_what_clients5" />
                <Item id="contributors_what_clients6" />
                </List>
            </Card>
            <Card id="contributors_what_pysyft">
                <Paragraph id="contributors_what_pysyft1" />
                <Paragraph id="contributors_what_pysyft2" />
                <List>
                <Item id="contributors_what_pysyft3" />
                <Item id="contributors_what_pysyft4" />
                <Item id="contributors_what_pysyft5" />
                <Item id="contributors_what_pysyft6" />
                </List>
            </Card>
        </Page>
    )
}
