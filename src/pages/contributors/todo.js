import React from "react"

import { Page, Card, Paragraph, List, Item } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="contributors_todo">
            <Card id="contributors_todo_clients">
                <Paragraph id="contributors_todo_clients1" />
                <Paragraph id="contributors_todo_clients2" />
                <List>
                <Item id="contributors_todo_clients3" />
                <Item id="contributors_todo_clients4" />
                <Item id="contributors_todo_clients5" />
                <Item id="contributors_todo_clients6" />
                </List>
            </Card>
            <Card id="contributors_todo_pysyft">
                <Paragraph id="contributors_todo_pysyft1" />
                <Paragraph id="contributors_todo_pysyft2" />
                <List>
                <Item id="contributors_todo_pysyft3" />
                <Item id="contributors_todo_pysyft4" />
                <Item id="contributors_todo_pysyft5" />
                <Item id="contributors_todo_pysyft6" />
                </List>
            </Card>
        </Page>
    )
}
