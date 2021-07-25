import React from "react"

import { Page, Card, ThumbnailAndText } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="media">
            <Card id="media_downloads">
                <ThumbnailAndText id="media_logo_dark" src="/home/media/logo_dark.png" background="black"/>
                <ThumbnailAndText id="media_logo_light" src="/home/media/logo_light.png" />
            </Card>
        </Page>
    )
}
