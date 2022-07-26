import { CreateRouteUseCase } from '../../../Application/create-route.use-case';
import express, { Express, Request, Response } from 'express';
import { RouteInMemoryRepository } from '../../db/route-in-memory.repository';
import { listAllRoutesUseCase } from '../../../Application/list-all-routes.use-case';

const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 3000;
const routeRepo = new RouteInMemoryRepository();


app.get("/routes", async (req: Request, res: Response) => {
    const listAllUseCase = new listAllRoutesUseCase(routeRepo);
    const output = await listAllUseCase.execute();
    res.json(output);
})

app.post('/routes', async (req: Request, res: Response) => {
    const createUseCase = new CreateRouteUseCase(routeRepo);
    const output = await createUseCase.execute(req.body);
    res.status(201).json(output);
})

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`);
})