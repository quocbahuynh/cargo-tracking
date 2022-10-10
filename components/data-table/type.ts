export interface EventLocation {
    stempty: boolean,
    vessel_name: string,
    expected_time: string,
    actual_time: string,
    rkem_move: string,
    is_cancelled: boolean,
    is_current: boolean,
    city: string,
    state: string,
    country: string,
}


export interface Container {
    locations: Location[],
}

export interface Cargo {
    container_num: string,
    container_size: string,
    container_type: string
}