// export const ActionType = {
//     ADD_RSS  : 'ADD_RSS',
//     LIST_RSS : 'LIST_RSS',
//     SHOW_RSS : 'SHOW_RSS',
// }

export function createRss(rss_name, rss_url) {
    return { name: rss_name, url: rss_url };
}

// export function list_rss(rss_name, rss_url) {
//     return { type: ActionType.LIST_RSS, name: rss_name, url: rss_url  };
// }
