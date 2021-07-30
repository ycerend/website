import React from "react"

import { Card, Item, List, Page, Paragraph, ThumbnailAndText } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="acknowledgements">
            <Card id="acknowledgements_sponsors">
                <Paragraph id="acknowledgements_sponsors_" />
                <ThumbnailAndText id="acknowledgements_stifterverband" src="/home/acknowledgements/SV_Logo_01_2_DM_WB_RGB_L.png" />
                <ThumbnailAndText id="acknowledgements_bytesforlife" src="/home/acknowledgements/bytesforlife.jpg" />
                <ThumbnailAndText id="acknowledgements_lrz" src="/home/acknowledgements/lrz_wortbild-blau-rgb_de.png" />
            </Card>
            <Card id="acknowledgements_tools">
                <Paragraph id="acknowledgements_tools_" />
                <List>
                    <Item id="acknowledgements_gatsby" />
                    <Item id="acknowledgements_github" />
                    <Item id="acknowledgements_jetbrains" />
                    <Item id="acknowledgements_openapi" />
                    <Item id="acknowledgements_vscode" />
                </List>
            </Card>
        </Page>
    )
}
