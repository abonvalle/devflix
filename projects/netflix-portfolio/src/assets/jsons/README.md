# Cards

## Card entity :

A card (movie in the Netflix UI) is a visual element representing various entities such as an experience, a language, a framework, or even a project.

## Card entity format :

```
{
    "guid": string,
    "title": string,
    "tagline": string,
    "shortDescription": string,
    "fullDescription": string,
    "year": number,
    "seasons": number,
    "lowResThumbnailPath": string,
    "mediumResThumbnailPath": string,
    "highResThumbnailPath": string,
    "clipPath": string
}
```

# Profiles

## Profile entity :

Similar to Netflix, a profile serves the purpose of configuring the cards in different arrangements based on the selected profile. This ensures that the most relevant cards are displayed prominently. A profile can have multiple configurations, and the main page will randomly render one of these layouts.

## Profile entity format :

```
{
    "guid": string,
    "name": string,
    "layouts": string[],
    "thumbnailPath": string,
}
```

# Layouts

## Layout entity :

A layout refers to a specific arrangement of cards. It can be associated with one or more profiles.

## Layout entity format :

```
{
    "guid": string,
    "mainCards": {
        "guid": string, // Card guid
        "related":string[] // Related cards guids
    }[],
    "lists": {
        "name":string,
        "cards": {
            "guid": string, // Card guid
            "related":string[] // Related cards guids
        }[]
    }[],
}
```
