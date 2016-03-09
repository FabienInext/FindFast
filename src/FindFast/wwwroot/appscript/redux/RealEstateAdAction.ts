import {RealEstateAd} from "../realEstateAd"
import {List} from 'immutable';

export class LoadRelEstateAdAction {

    constructor(public realEstateAds: List<RealEstateAd>) {

    }
}

export class AddRealEstateAction {

    constructor(public newRealEstateAd: RealEstateAd) {

    }
}

export class DeleteRealEstateAction {

    constructor(public deletedRealEstateAd: RealEstateAd) {

    }
}

export class StartBackendAction {

    constructor(public message: string) {

    }

}

export class EndBackendAction {

    constructor(public message: string) {

    }
}

export type Action = LoadRelEstateAdAction | DeleteRealEstateAction | AddRealEstateAction | StartBackendAction | EndBackendAction;


