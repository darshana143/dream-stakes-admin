export enum AdminMainViews {
    overview = 0,
    auctions = 1,
    users = 2,
    message = 3,
    ads = 4,
    archive = 5,
    settings = 6
}

export enum AdminSubViews {
    act_all = 10,
    act_add_new = 11,
    act_contracts = 12,
    act_winners = 13
}

export enum IGridFilter {
    all = 'all',
    active = 'active',
    unpublished = 'unpublished',
    draft = 'draft',
    trash = 'trash'
}