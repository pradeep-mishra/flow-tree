# flow-tree

#### React flow tree component

React component, to show data in tree view similar to git branches
Useful for iPaaS application UI

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
      "as": "ifelse",
      "title": "If Else",
      "desc": "Apply if and else",
      "if": [
        {
          "id": "1231",
          "title": "Get User",
          "desc": "get user by id"
        },
        {
          "id": "1241",
          "title": "Fetch Tweets",
          "desc": "fetch tweets by hashtag"
        }
      ],
      "else": [
        {
          "id": "1232",
          "title": "Create Post",
          "desc": "create Linkedin post"
        }
      ]
    },
    {
      "id": "126",
      "name": "s4",
      "title": "Send Notification",
      "desc": "send email notification",
      "icon": "bubble"
    }
  ]
}
```

Rendered view

![Rendered](/public/ss1.png)
