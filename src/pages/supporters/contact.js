import React from "react"

import { Page, Card, Paragraph, GreyButton, ExternalLink, List, Item } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="contact">
            <Card id="contact_support">
                <Paragraph id="contact_support1" />
                <GreyButton>
                    <ExternalLink url="mailto:support@fdrtd.com" text="support@fdrtd.com" />
                </GreyButton>
            </Card>
            <Card id="contact_other">
                <List>
                    <Item id="contact_other1" />
                    <Item id="contact_other2" />
                </List>
            </Card>
            <Card id="contact_vulnerabilities" style={{color: 'red'}}>
                <Paragraph id="contact_vulnerabilities1" />
            </Card>
        </Page>
    )
}
