# MANUAL

1. Code - 
2. Test the application 
3. Build
4. Deploy the application in the server
5. Test the Deployed Application
6. Monitor application all the times


Development + Operations = DevOps

DevOps - Automate

# AUTOMATED PROCESS

1. Developers write code - GIT (to maintain the source code, version control system)
2. We also write Unit testing (TDD)
3. Continous Integration
  - Devops will trigger Automatic Build Checks
  - Eg Tools: Travis CI, Circle CI, Jenkins, etc
4. Continuous Deployment
  - Keep watching the branches and deploy in the respective environment(url)
  - Tools: Jenkins, VSTS, etc
5. Automatic Monitoring Tools
  - Eg: App Dynamics, ELK stack, etc


# GIT

1. Repository - actual project source code
  - Local Repository
    - git init
  - Remote Repository - Distributed System
    - git clone
    - Gitlab, github, BitBucket
2. Branches - master, 
3. commits


# GIT CLIENT TOOLS
1. Tortoise GIT
2. GITHUB for Desktop
3. VS Code
4. Source Tree - Atlassion product
5. GIt Bash, GIT Bash UI
6. Cmd



# Commit
 - edit my commit message
 - revert - select and revert particular commits from the same branch
 - reset - reset all the commits which we have done before  in the same branch
 - cherry pick - clone the commit to other branches
 - resolving conflicts



# EXAMPLE - E Commerce Applicartion (Simple Features)

- Login 
- Products 
- Shopping Cart 
- Order Info
- Generate Invoice
- Checkout
   - Card Component (common component)
   - Product Component
   - Total Amount Component
   - checkout Buttons
   - Integration with back end


# Branch 

main -> production code -> shopping.com
|
master  -> pre production -> pre-prod.shopping.com
|
test  -> testing environment -> test.shopping.com
|
development (3 features)  -> development environment -> dev.shopping.com
| 
team_one_order_info (feature branch) <header-component>
team_two_order_info (feature branch)
team_three_order_info (feature branch)



Source (from):  team_one_order_info
Destination (to) : development


# ENSURE
- Build need to be verified
- Tests need to be verified


# Developer
- Create a feature branch (development -> card_component)
- commit the changes for card component
- push the changes to the remote repository
- CREATE PR (Pull Request) (source: card_component -> target: development)
  - It will be revieweed and Approved
  - Merge the changes into development
- switch the branch the development (git checkout development)
- pull the latest development branch changes (git pull)
- Repeat the same activities



- Main or Master (Commit)
- create a New Branch (Development)
- create a PR (development -> Main or Master)
