import React from "react"

import { Page, Card, Paragraph, Image,ExternalLink, GreyButton, Float } from "../components/Elements"

export default function Home() {
    return (
        <Page id="home">
            <Card id="home_a">
                <Float float="right" width="33%">
                    <Image src="/adam-solomon-WHUDOzd5IYU-unsplash.png" credit="Adam Solomon / Unsplash"/>
                </Float>
                <Paragraph id="home_a1" />
                <Paragraph id="home_a2" />
                <Paragraph id="home_a3" />
                <Paragraph id="home_a4" />
                <GreyButton>
                    <ExternalLink url="mailto:support@fdrtd.com" text="support@fdrtd.com" />
                </GreyButton>
            </Card>
        </Page>
    )
}
