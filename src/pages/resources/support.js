import React from "react"

import { Page, Card, Paragraph, GreyButton, ActiveButton, ExternalLink } from "../../components/Elements"

export default function Support() {
    return (
        <Page id="resources_support">
            <Card id="resources_support_a">
                <Paragraph id="resources_support_a1" />
                <Paragraph id="resources_support_a2" />
                <Paragraph>
                    <ActiveButton>
                        <ExternalLink url="https://github.com/fdrtd" text="GitHub" />
                    </ActiveButton>
                </Paragraph>
            </Card>
            <Card id="resources_support_b">
                <Paragraph id="resources_support_b1" />
                <Paragraph id="resources_support_b2" />
                <Paragraph>
                    <GreyButton>
                        <ExternalLink url="mailto:support@fdrtd.com" text="support@fdrtd.com" />
                    </GreyButton>
                </Paragraph>
            </Card>
        </Page>
    )
}
