# Guide to reviewing MCW package updates

There are two official types of maintenance schedules each of our packages undergo by our team of maintainers: test/fixes and updates. A test/fix happens more often and is a way to ensure minor changes to the Azure portal and its services are accounted for in the hands-on labs, and that any breaking changes are resolved for a smooth user experience. Updates, on the other hand, consist of significant changes to the whiteboard design documents, hands-on-labs, and associated preferred solutions. These involve [subject matter expert (SME) reviews](./reviewers.md) as part of the update process.

The instructions contained within this guide apply to both test/fixes and updates. The basic flow of an MCW package update is as follows:

- [Stakeholder creates GitHub issue]()
- [Maintainer forks repo and completes changes]()
- [Maintainer creates pull request (PR) and associates with issue]()
- [Reviewer(s) comment and provide feedback on PR]()
  - Maintainer commits any additional changes based on feedback
- [Stakeholder merges PR and closes issue]()

## Create a new issue for update

The first step of the process is to create a new GitHub issue on the MCW repo that needs to be updated. This issue will be referenced by the pull request (PR) that the maintainer submits when they are ready for a review. This step is completed by the stakeholder, or the person responsible for scheduling and overseeing the update cycle for the MCW.

1.  Browse to the top-level MCW repository to find a link to the MCW repository you wish to fork: <https://github.com/Microsoft/MCW>.

2.  With the selected MCW repository open, select **Issues** and create a new issue.

    - Enter a title indicating whether this is an **Update** or **Test/fix** request. Example: `Update serverless architecture MCW`.
    - Write a description of the update request and instructions to the maintainer. Example: `This package is scheduled for a November update. Please fork this repo, make your updates, then reference this issue when you submit your pull request.`.
    - Optionally assign a maintainer, if you know who will be making changes.

    ![Screenshot of a new GitHub issue for requesting an update](media/new-github-issue.png 'GitHub issue')

## Review pull request

Per the contributor instructions, the contributor will [create a pull request](contributors.md#create-pull-request) and associate it with the issue [you created](#create-a-new-issue-for-update). When this happens, you will see a comment added that references their pull request with the issue. You can click the pull request title in this comment to view it.

![Screenshot of issue with linked PR](media/issue-with-linked-pr.png 'Issue with linked PR')

Alternately, you may select the **Pull requests** tab in the repo to find and select the PR.

The pull request screen contains the following components:

1. A list of commits associated with the PR. These can be selected to view just the changes associated with a commit.
1. The outcome of checks GitHub made to ensure the pull request can be merged, along with a button to merge the pull request.
1. A place to add comments to the PR. This is the ideal location to discuss issues and questions about the update.
1. Tabs that allow you to view the commits, checks, and changed files.

![Screenshot of the various components of a pull request](media/pull-request-components.png 'Pull request components')

Consider using the following features to review changes associated with the PR:

1.  Select the **Files changed** tab to view a list of files and the changes that were made to them.

    ![Screenshot of the files changed tab](media/files-changed-tab.png 'Files changed tab')

2.  If you find an item in a file that you need to have the contributor change, select the **+** button that appears when you hover over the changed line. From here, type in your comments and click **Start a review**. This will notify the contributor that they have a review on their PR. They will have options to reply with a comment or request a review of their changes.

    ![Animated gif showing adding a new review item to a file](media/start-review.gif 'Start review')
