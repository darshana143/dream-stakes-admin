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
    act_winners = 13,
    user_analytics = 14,
    all_users = 15,
    usr_add_new = 16,
    user_profile = 17,
    user_management = 18,
    msg_mass_msg = 19,
    msg_builder_side = 20,
    msg_client_side = 21,
    ads_new = 22,
    ads_all = 23,
    set_general = 24,
    set_permalink = 25,
    set_privacy = 26
}

export enum IGridFilter {
    all = 'all',
    active = 'active',
    unpublished = 'unpublished',
    draft = 'draft',
    trash = 'trash'
}

export enum IGridFilter2 {
    Deleted = 'Deleted',
    Banned = 'Banned',
}

export enum IGridFilterUsers {
    all = 'all',
    administrator = 'administrator',
    subscriber = 'subcribers',
    premium = 'premium',
    bulider = 'bulider'
    
}

export enum IGridFilterMsg {
    all = 'all',
    Message = 'Message',
    Email = 'Email',
    SMS = 'SMS',
    Trash = 'Trash'
}
export interface IUser {
    displayName: string,
    fullName: string,
    email: string,
    profileImage: string,
    
}