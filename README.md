# flow-tree

#### React flow tree component (work in progress)

React component, to show data in tree view similar to git branches
Useful for iPaaS application UI

#### Demo site

[https://flowtree.netlify.app](https://flowtree.netlify.app)

Example json file

```json
{
  "title": "My Flow",
  "desc": "",
  "steps": [
    {
      "id": "123",
      "title": "Get Repo Detail",
      "desc": "get github repo detail"
    },
    {
      "id": "124",
      "title": "Create New Repo",
      "desc": "create new github repo"
    },
    {
      "id": "125",
      "as": "loop",
      "input": {
        "by": "times|items",
        "value": ""
      },
      "title": "Repeat",
      "desc": "repeat specific steps",
      "steps": [
        {
          "id": "126",
          "title": "Send Notification",
          "desc": "send email notification"
        }
      ]
    },
    {
      "id": "2126",
      "title": "Get Score",
      "desc": "get score from db"
    },
    {
      "id": "1257",
      "as": "ifelse",
      "input": [[{ "input": "", "condition": "exactly matches", "value": "" }]],
      "title": "If Else",
      "desc": "if and else condition",
      "if": [
        {
          "id": "1231",
          "title": "Get User",
          "desc": "get user by id"
        },
        {
          "id": "1241",
          "title": "Fetch Tweets",
          "desc": "fetch user tweets from twitter by specific hashtag sorted by date"
        }
      ],
      "else": [
        {
          "id": "1232",
          "title": "Create Post",
          "desc": "create Linkedin post"
        }
      ]
    }
  ]
}
```

Rendered view

![Rendered](/public/ss1.png)
