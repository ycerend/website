const itemsAbout = [
    {
        text_id: "nav_about_news",
        link_url: "/about/news",
    },
    {
        text_id: "nav_about_teaser",
        link_url: "/about/teaser",
    },
    {
        text_id: "nav_about_story",
        link_url: "/about/story",
    },
    {
        text_id: "nav_about_milestones",
        link_url: "/about/milestones"
    },
    {
        text_id: "nav_about_acknowledgements",
        link_url: "/about/acknowledgements"
    },
    {
        text_id: "nav_about_faq",
        link_url: "/about/faq"
    }
]

const sectionAbout = {
    text_id: "nav_about",
    children: itemsAbout
}

const itemsMotivation = [
    {
        text_id: "nav_motivation_data",
        link_url: "/motivation/data"
    },
    {
        text_id: "nav_motivation_privacy",
        link_url: "/motivation/privacy"
    },
    {
        text_id: "nav_motivation_tradeoffs",
        link_url: "/motivation/tradeoffs"
    },
    {
        text_id: "nav_motivation_cryptography",
        link_url: "/motivation/cryptography"
    },
    {
        text_id: "nav_motivation_challenges",
        link_url: "/motivation/challenges"
    },
    {
        text_id: "nav_motivation_designgoals",
        link_url: "/motivation/designgoals"
    }
]

const sectionMotivation = {
    text_id: "nav_motivation",
    children: itemsMotivation
}

const itemsUseCases = [
    {
        text_id: "nav_usecases_it",
        link_url: "/usecases/it"
    },
    {
        text_id: "nav_usecases_healthcare",
        link_url: "/usecases/healthcare"
    },
    {
        text_id: "nav_usecases_retail",
        link_url: "/usecases/retail"
    },
    {
        text_id: "nav_usecases_finance",
        link_url: "/usecases/finance"
    },
    {
        text_id: "nav_usecases_energyutility",
        link_url: "/usecases/energyutility"
    },
    {
        text_id: "nav_usecases_publicsector",
        link_url: "/usecases/publicsector"
    }
]

const sectionUseCases = {
    text_id: "nav_usecases",
    children: itemsUseCases
}

const itemsTechnology = [
    {
        text_id: "nav_technology_federation",
        link_url: "/technology/federation"
    },
    {
        text_id: "nav_technology_clientserver",
        link_url: "/technology/clientserver"
    },
    {
        text_id: "nav_technology_microservices",
        link_url: "/technology/microservices"
    },
    {
        text_id: "nav_technology_platform",
        link_url: "/technology/platform"
    },
    {
        text_id: "nav_technology_cloud",
        link_url: "/technology/cloud"
    },
    {
        text_id: "nav_technology_openapi",
        link_url: "/technology/openapi"
    }
]

const sectionTechnology = {
    text_id: "nav_technology",
    children: itemsTechnology
}

const itemsSolution = [
    {
        text_id: "nav_solution_fdrtd",
        link_url: "/solution/fdrtd"
    },
    {
        text_id: "nav_solution_protocols",
        link_url: "/solution/protocols"
    },
    {
        text_id: "nav_solution_usecases",
        link_url: "/solution/usecases"
    },
    {
        text_id: "nav_solution_features",
        link_url: "/solution/features"
    },
    {
        text_id: "nav_solution_plugandplay",
        link_url: "/solution/plugandplay"
    },
    {
        text_id: "nav_solution_foss",
        link_url: "/solution/foss"
    }
]

const sectionSolution = {
    text_id: "nav_solution",
    children: itemsSolution
}

const itemsDevClient = [
    {
        text_id: "nav_clientside_explanation",
        link_url: "/clientside/explanation"
    },
    {
        text_id: "nav_clientside_tutorials",
        link_url: "/clientside/tutorials"
    },
    {
        text_id: "nav_clientside_howto",
        link_url: "/clientside/howto"
    },
    {
        text_id: "nav_clientside_reference",
        link_url: "/clientside/reference"
    },
    {
        text_id: "nav_clientside_library",
        link_url: "/clientside/library"
    },
    {
        text_id: "nav_clientside_apibrowser",
        link_url: "/clientside/apibrowser"
    }
]

const sectionClientside = {
    text_id: "nav_clientside",
    children: itemsDevClient
}

const itemsDevServer = [
    {
        text_id: "nav_serverside_explanation",
        link_url: "/serverside/explanation"
    },
    {
        text_id: "nav_serverside_tutorials",
        link_url: "/serverside/tutorials"
    },
    {
        text_id: "nav_serverside_howto",
        link_url: "/serverside/howto"
    },
    {
        text_id: "nav_serverside_reference",
        link_url: "/serverside/reference"
    },
    {
        text_id: "nav_serverside_stub",
        link_url: "/serverside/stub"
    },
    {
        text_id: "nav_serverside_devsecops",
        link_url: "/serverside/devsecops"
    }
]

const sectionServerside = {
    text_id: "nav_serverside",
    children: itemsDevServer
}

const itemsResources = [
    {
        text_id: "nav_resources_sourcecode",
        link_url: "/resources/sourcecode"
    },
    {
        text_id: "nav_resources_support",
        link_url: "/resources/support"
    },
    {
        text_id: "nav_resources_community",
        link_url: "/resources/community"
    },
    {
        text_id: "nav_resources_science",
        link_url: "/resources/science"
    },
    {
        text_id: "nav_resources_styleguide",
        link_url: "/resources/styleguide"
    },
    {
        text_id: "nav_resources_license",
        link_url: "/resources/license"
    }
]

const sectionResources = {
    text_id: "nav_resources",
    children: itemsResources
}

export const navigationFooter = [
    sectionAbout,
    sectionMotivation,
    sectionUseCases,
    sectionTechnology,
    sectionSolution,
    sectionClientside,
    sectionServerside,
    sectionResources
]

export const navigationHeader = [
    {
        text_id: "nav_about",
        children: [
            sectionAbout
        ],
        align: "left"
    },
    {
        text_id: "nav_why",
        children: [
            sectionMotivation,
            sectionUseCases
        ],
        align: "left"
    },
    {
        text_id: "nav_how",
        children: [
            sectionTechnology,
            sectionSolution
        ],
        align: "left"
    },
    {
        text_id: "nav_what",
        children: [
            sectionClientside,
            sectionServerside,
            sectionResources
        ],
        align: "right"
    }
]