    	import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import { Fdrtd, Filename, ExternalLink, InternalLink, DirectLink, Code, Red, Green } from "./Elements"

const defaultStrings = require("../intl/en.json")

const getDefaultMessage = (key) => {
    const defaultMessage = defaultStrings[key]
    return defaultMessage || "<undefined string>"
}
  
const Translation = ({ id }) => (
    id ?
    <FormattedMessage
        id={id}
        defaultMessage={getDefaultMessage(id)}
        values={{
            em: msg => <em>{msg}</em>,
            fdrtd: msg => <Fdrtd>{msg}</Fdrtd>,
            filename: msg => <Filename>{msg}</Filename>,
            elink: msg => <ExternalLink url={msg.split("§")[0]} text={msg.split("§")[1]}/>,
            ilink: msg => <InternalLink url={msg.split("§")[0]} text={msg.split("§")[1]}/>,
            dlink: msg => <DirectLink url={msg.split("§")[0]} text={msg.split("§")[1]}/>,
            code: msg => <Code>{msg}</Code>,
            red: msg => <Red>{msg}</Red>,
            green: msg => <Green>{msg}</Green>,
            brk: msg => <div>{msg.split("§")[0]}<br/>{msg.split("§")[1]}</div>
        }}
    /> : ""
)

export default Translation
