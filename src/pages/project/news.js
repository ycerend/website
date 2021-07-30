import React from "react"
import { FormattedDate } from "gatsby-plugin-intl"

import { Page, Card, Paragraph } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="news">
            <Card id="news_2021-05-31" heading={<FormattedDate value="2021-05-31" />}>
                <Paragraph id="news_2021-05-31_a" />
                <Paragraph id="news_2021-05-31_b" />
                <Paragraph id="news_2021-05-31_c" />
            </Card>
            <Card id="news_2021-04-03" heading={<FormattedDate value="2021-04-03" />}>
                <Paragraph id="news_2021-04-03_a" />
                <Paragraph id="news_2021-04-03_b" />
                <Paragraph id="news_2021-04-03_c" />
            </Card>
            <Card id="news_2021-03-12" heading={<FormattedDate value="2021-03-12" />}>
                <Paragraph id="news_2021-03-12_a" />
                <Paragraph id="news_2021-03-12_b" />
                <Paragraph id="news_2021-03-12_c" />
            </Card>
            <Card id="news_2021-03-11" heading={<FormattedDate value="2021-03-11" />}>
                <Paragraph id="news_2021-03-11_a" />
                <Paragraph id="news_2021-03-11_b" />
                <Paragraph id="news_2021-03-11_c" />
            </Card>
            <Card id="news_2020-12-02" heading={<FormattedDate value="2020-12-02" />}>
                <Paragraph id="news_2020-12-02_a" />
                <Paragraph id="news_2020-12-02_b" />
            </Card>
            <Card id="news_2020-11-09" heading={<FormattedDate value="2020-11-09" />}>
                <Paragraph id="news_2020-11-09_a" />
                <Paragraph id="news_2020-11-09_b" />
                <Paragraph id="news_2020-11-09_c" />
            </Card>
            <Card id="news_2020-03-02" heading={<FormattedDate value="2020-03-02" />}>
                <Paragraph id="news_2020-03-02_a" />
                <Paragraph id="news_2020-03-02_b" />
                <Paragraph id="news_2020-03-02_c" />
                <Paragraph id="news_2020-03-02_d" />
            </Card>
        </Page>
    )
}
