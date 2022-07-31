import { GithubUser, TicketUser } from '../../shared';
import { maxChar } from './max-char';

export function mapToTicketUser(githubUser: GithubUser): TicketUser {
  return {
    ...githubUser,
    nodeId: githubUser.node_id,
    login: maxChar(githubUser.login, 12),
    avatarUrl: githubUser.avatar_url,
    gravatarId: githubUser.gravatar_id,
    htmlUrl: githubUser.html_url,
    followersUrl: githubUser.followers_url,
    followingUrl: githubUser.following_url,
    gistsUrl: githubUser.gists_url,
    starredUrl: githubUser.starred_url,
    subscriptionsUrl: githubUser.subscriptions_url,
    organizationsUrl: githubUser.organizations_url,
    reposUrl: githubUser.repos_url,
    eventsUrl: githubUser.events_url,
    receivedEventsUrl: githubUser.received_events_url,
    siteAdmin: githubUser.site_admin,
    twitterUsername: githubUser.twitter_username,
    publicRepos: githubUser.public_repos,
    publicGists: githubUser.public_gists,
    createdAt: githubUser.created_at,
    updatedAt: githubUser.updated_at,
  };
}
