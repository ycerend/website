import React from "react"

import { Page, Card, Paragraph, GreyButton, ActiveButton, ExternalLink } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="users_support">
            <Card id="users_support_a">
                <Paragraph id="users_support_a1" />
                <Paragraph id="users_support_a2" />
                <Paragraph>
                    <ActiveButton>
                        <ExternalLink url="https://github.com/fdrtd" text="GitHub" />
                    </ActiveButton>
                </Paragraph>
            </Card>
            <Card id="users_support_b">
                <Paragraph id="users_support_b1" />
                <Paragraph id="users_support_b2" />
                <Paragraph>
                    <GreyButton>
                        <ExternalLink url="mailto:support@fdrtd.com" text="support@fdrtd.com" />
                    </GreyButton>
                </Paragraph>
            </Card>
        </Page>
    )
}
