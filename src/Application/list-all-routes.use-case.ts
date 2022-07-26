import { LatLng } from "Domain/route.entity";
import { RouteRepositoryInterface } from "Domain/route.repository";


export class listAllRoutesUseCase {
    // Isso é uma 'porta'
    constructor(private routeRepo: RouteRepositoryInterface) {}
    
    async execute(): Promise<CreateRouteOutput> {

        const routes = await this.routeRepo.findAll();
        return routes.map(r => r.toJSON());
    }

}
type CreateRouteOutput = {
    id: string;
    title: string;
    startPosition: LatLng;
    endPosition: LatLng;
    paths?: LatLng;
}[];