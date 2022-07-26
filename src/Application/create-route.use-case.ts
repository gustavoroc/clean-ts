import { RouteRepositoryInterface } from "Domain/route.repository";
import { LatLng, Route } from "../Domain/route.entity"

export class CreateRouteUseCase {

    constructor(private routeRepo: RouteRepositoryInterface) {
        // Inversão de dependencia
    }

    async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
        // Operações em cima da entidade.
        const route = new Route(input);
        await this.routeRepo.insert(route);
        return route.toJSON();
    }
}

type CreateRouteInput = {
    title: string,
    startPosition: LatLng,
    endPosition: LatLng,
    paths?: LatLng[]
}

type CreateRouteOutput = {
    id: string,
    title: string,
    startPosition: LatLng,
    endPosition: LatLng,
    paths?: LatLng[]
}


//S     OLID