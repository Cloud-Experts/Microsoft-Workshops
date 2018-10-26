# Guide to contributing MCW package updates

Thank you for contributing to our Microsoft Cloud Workshop (MCW) packages! Our team follows an official maintenance schedule which includes test/fixes and updates. A test/fix happens more frequently and is a way to ensure minor changes to the Azure portal and its services are accounted for in the hands-on labs, and that any breaking changes are resolved for a smooth user experience. Updates, on the other hand, consist of significant changes to the whiteboard design documents, hands-on-labs, and associated preferred solutions. Updates go through [subject matter expert (SME) reviews](reviewers.md) as part of the approval process.

Test/fixes and updates are initiated by the MCW team [creating a new GitHub issue](reviewers.md#create-a-new-issue-for-update) in the target MCW repository stating the type of maintenance to be performed, and assigning that issue to the appropriate maintenance team member.

## Contents

The instructions contained within this guide apply to both test/fixes and updates, with the [review process](#addressing-review-feedback) section pertaining only to updates.

- [Fork the MCW repository](#fork-the-mcw-repository)
- [Update your fork with upstream changes](#update-your-fork-with-upstream-changes)
  - [Add remote from original repository in your forked repository](#add-remote-from-original-repository-in-your-forked-repository)
  - [Update your fork from original repository to keep up with changes](#update-your-fork-from-original-repository-to-keep-up-with-changes)
  - [Push changes to your fork after updating local repository](#push-changes-to-your-fork-after-updating-local-repository)
- [Create pull request](#create-pull-request)
- [Address review feedback](#address-review-feedback)

## Fork the MCW repository

The first step is to fork the MCW repository if you have not already. If you have an existing fork, you will need to [synchronize it to the origin](#update-your-fork-with-upstream-changes), or original Microsoft MCW repository, before committing any changes. This ensures you are working from the latest changes.

To fork an MCW repository, perform the following steps:

1. Browse to the top-level MCW repository and locate the link to the MCW repository you wish to fork: <https://github.com/Microsoft/MCW>.

2. With the selected MCW repository open, click the **Fork** button on the upper-right. If you belong to one or more GitHub organizations, you will be prompted to select the account into which you wish to fork the repository. In most cases, select your own profile.

    ![Click the Fork button on the upper-right of the GitHub repository](media/fork-button.png 'Fork the repository')

3. After a few moments, you will be redirected to your forked repository. You will see a link to the original Microsoft MCW repository from which this repository was forked.

    ![Screenshot of forked repository with a link to the origin](media/forked-repo.png 'Forked repository')

4. Now that you have forked the MCW repository, you are ready to clone your fork and start making changes. You can find the clone path to your fork by clicking the **Clone or download** button on its home page.

    ![Click the Clone or download button to copy the clone path](media/clone-or-download.png 'Clone or download button')

## Update your fork with upstream changes

To update your existing fork with changes made to the Microsoft MCW repository, open a new command prompt and **navigate to your forked repository**.

Execute the following git commands to keep your fork up-to-date:

### Add remote from original repository in your forked repository

```git
git remote add upstream git://github.com/Microsoft/REPO-YOU-FORKED-FROM.git
```

```git
git fetch upstream
```

### Update your fork from original repository to keep up with changes

```git
git pull upstream master
```

### Push changes to your fork after updating local repository

```git
git push
```

## Create pull request

After you have made the necessary changes for the update or test/fixes and committed them to your fork, you will need to submit a pull request (PR), referencing the [GitHub issue](reviewers.md#create-a-new-issue-for-update) that was created by the stakeholder.

1. Navigate to your fork on GitHub.

2. You will see a message stating that this branch is x commits ahead of Microsoft:master. Select **Pull request** to the right of this message.

    ![Screenshot of fork showing pull request option](media/pull-request-button.png 'Pull request button')

3. The "Comparing changes" page will show you the number of commits, files changed, and whether there are merge conflicts. Ensure your commits are included and click **Create pull request**.

    ![Screenshot of the comparing changes page. Click Create pull request.](media/create-pull-request-page.png 'Comparing changes page')

4. In the "Open a pull request" page, enter a descriptive title for your PR, as well as comments asking for a review. Be sure to **reference the GitHub issue** that was [created by the stakeholder](reviewers.md#create-a-new-issue-for-update) requesting the update (if one exists). You can do this in the comments by typing a hashtag (#), which will display a list of issues in the parent repository.

    ![Screenshot of the open pull request page. Reference the associated GitHub issue in the comments.](media/open-pull-request-page.png 'Open pull request')

5. Select **Create pull request**.

## Addressing review feedback

Reviewers will make comments on your PR and submit reviews on specific lines of your committed files. GitHub should automatically notify you when these actions occur, depending on your settings. In either case, it is your responsibility to monitor your PR for feedback and address any issues with comments and additional commits. Any commits you make to your fork will automatically be added to your PR while it is still open.

Here is an example of a review that was submitted by a reviewer, which appears on the **Conversation** tab of the pull review. This is where you can see all reviews and associated comments in one place:

![PR conversation tab with new review displayed](media/new-review-with-comments.png 'New review with comments')

In the screenshot below, the contributor has committed a new change after the review ("Changed VSTS to Azure DevOps"), and has added a comment to the review item to that effect. Select **Resolve conversation** in this case:

![Screenshot showing comments to the review with new commit below](media/resolve-review.png 'Resolve conversation')