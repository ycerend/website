import React from "react"

import { Page, Card, Paragraph, Image, List, Item, Floa, Columns } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="welcome">
            <Card id="elevatorpitch">
                <Columns columns="2">
                    <div>
                        <Paragraph id="elevatorpitch_why" />
                        <Paragraph id="elevatorpitch_how" />
                        <Paragraph id="elevatorpitch_what" />
                        <Paragraph id="elevatorpitch_who" />
                    </div>
                    <div style={{padding: "2em"}}>
                        <Image src="/adam-solomon-WHUDOzd5IYU-unsplash.png" credit="Adam Solomon / Unsplash" height="400"/>
                    </div>
                </Columns>
            </Card>
        </Page>
    )
}
