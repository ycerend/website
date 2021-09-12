const itemsUsers = [
    {
        text_id: "nav_users_benefit",
        link_url: "/users/benefit"
    },
    {
        text_id: "nav_users_usecases",
        link_url: "/users/usecases"
    },
    {
        text_id: "nav_users_journey",
        link_url: "/users/journey"
    },
    {
        text_id: "nav_users_solution",
        link_url: "/users/solution"
    },
    {
        text_id: "nav_users_start",
        link_url: "/users/start"
    }
]

export const sectionUsers = {
    text_id: "nav_users",
    link_url: "/users",
    children: itemsUsers
}

const itemsDevelopers = [
    {
        text_id: "nav_developers_architecture",
        link_url: "/developers/architecture"
    },
    {
        text_id: "nav_developers_middleware",
        link_url: "/developers/middleware"
    },
    {
        text_id: "nav_developers_features",
        link_url: "/developers/features"
    },
    {
        text_id: "nav_developers_resources",
        link_url: "/developers/resources"
    },
    {
        text_id: "nav_developers_contribute",
        link_url: "/developers/contribute"
    }
]

export const sectionDevelopers = {
    text_id: "nav_developers",
    link_url: "/developers",
    children: itemsDevelopers
}

const itemsSupporters = [
    {
        text_id: "nav_supporters_news",
        link_url: "/supporters/news"
    },
    {
        text_id: "nav_supporters_pitch",
        link_url: "/supporters/pitch"
    },
    {
        text_id: "nav_supporters_acknowledgements",
        link_url: "/supporters/acknowledgements"
    },
    {
        text_id: "nav_supporters_media",
        link_url: "/supporters/media"
    },
    {
        text_id: "nav_supporters_contact",
        link_url: "/supporters/contact"
    }
]

export const sectionSupporters = {
    text_id: "nav_supporters",
    link_url: "/supporters",
    children: itemsSupporters
}

export const navigationFooter = [
    sectionUsers,
    sectionDevelopers,
    sectionSupporters
]
