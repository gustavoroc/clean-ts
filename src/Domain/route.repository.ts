import { Route } from "Domain/route.entity";


export interface RouteRepositoryInterface {
    insert(route: Route): Promise<void>
    findAll(): Promise<Route[]>
} 

// DIP