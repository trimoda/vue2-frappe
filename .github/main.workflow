workflow "New workflow" {
  resolves = ["GitHub Action for npm"]
  on = "push"
}

action "GitHub Action for npm" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
}

workflow "Publish on release" {
  on = "release"
  resolves = ["GitHub Action for npm-1"]
}

action "GitHub Action for npm-1" {
  uses = "actions/npm@f11f0a33bb81074e6448ed3737cbc6ca4e1318d2"
  secrets = ["GITHUB_TOKEN"]
}
