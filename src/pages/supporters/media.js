import React from "react"
import { FormattedDate } from "gatsby-plugin-intl"

import { Page, Card, Paragraph, Line, ThumbnailAndText } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="media">
            <Card id="media_clippings">
                <Paragraph>
                    <FormattedDate value="2019-05-14" /><br />
                    <Line id="media_clippings_1"/>
                </Paragraph>
            </Card>
            <Card id="media_releases">
            <Paragraph>
                    <FormattedDate value="2021-09-22"/><br />
                    <Line id="media_releases_4"/>
                </Paragraph>
                <Paragraph>
                    <FormattedDate value="2021-09-21"/><br />
                    <Line id="media_releases_3"/>
                </Paragraph>
                <Paragraph>
                    <FormattedDate value="2021-05-31"/><br />
                    <Line id="media_releases_2"/>
                </Paragraph>
                <Paragraph>
                    <FormattedDate value="2020-11-09"/><br />
                    <Line id="media_releases_1"/>
                </Paragraph>
            </Card>
            <Card id="media_downloads">
                <ThumbnailAndText id="media_logo_dark" src="/home/media/logo_dark.png" background="black"/>
                <ThumbnailAndText id="media_logo_light" src="/home/media/logo_light.png" />
            </Card>
        </Page>
    )
}
