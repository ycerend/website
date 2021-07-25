import React from "react"

import { Page, Card, Line, Paragraph } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="faq">
            <Card id="faq_crypto">
                <Paragraph>
                    <em><Line id="faq_smpc" /></em><br />
                    <Line id="faq_smpc_" />
                </Paragraph>
                <Paragraph>
                    <em><Line id="faq_blockchain" /></em><br />
                    <Line id="faq_blockchain_" />
                </Paragraph>
                <Paragraph>
                    <em><Line id="faq_coins" /></em><br />
                    <Line id="faq_coins_" />
                </Paragraph>
            </Card>
        </Page>
    )
}
