import crypto from 'crypto';

export type LatLng = {
    lat: number, 
    lng: number
};

export type RouteProps = {
    title: string;
    startPosition: LatLng;
    endPosition: LatLng;
    points?: LatLng[];
}

export class Route {
    // Regra de negócio: Uma rota que não é necessária de ter os pontos e, quando não tem, fica um array vazio 
    public readonly id: string;
    public props: Required<RouteProps>
    constructor(props: RouteProps, id?: string) {
        this.id = id || crypto.randomUUID();
        this.props = {
            ...props,
            points: props.points || []
        }
    }

    updateTitle(title: string) {
        this.title = title;
        // mudar pra maiusculo
        // validar caracteres
        // validacoes especificas
    }

    updatePosition(startPosition: LatLng, endPosition: LatLng) {
        this.startPosition = startPosition;
        this.endPosition = endPosition;
        // mudar pra maiusculo
        // validar caracteres
        // validacoes especificas
    }

    updatePoints(points: LatLng[]) {
        this.points = points;
        // mudar pra maiusculo
        // validar caracteres
        // validacoes especificas
    }

    get title() {
        return this.props.title;
    }

    private set title(value: string) {
        this.props.title = value;
    }

    get startPosition() {
        return this.props.startPosition;
    }

    private set startPosition(value: LatLng) {
        this.props.startPosition = value;
    }

    get endPosition() {
        return this.props.endPosition;
    }

    private set endPosition(value: LatLng) {
        this.props.endPosition = value;
    }

    get points() {
        return this.props.points;
    }

    private set points(value: LatLng[]) {
        this.props.points = value;
    }

    toJSON() {
        return {
            id: this.id, 
            ...this.props
        }
    }
}

const rota = new Route({
    title: "minha rota",
    startPosition: { lat: 15, lng: 15 },
    endPosition: { lat: 20, lng: 20 },
    points: [
        {lat: 20, lng: 20},
        {lat: 20, lng: 20}
    ]
});