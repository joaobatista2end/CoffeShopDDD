import { Request, Response } from 'express';
import { DrinkRepository } from '../../database/mongo/repositories/drink-repository';

class Controller {
  public repository: DrinkRepository;

  constructor() {
    this.repository = new DrinkRepository();
  }

  async fetch(req: Request, res: Response) {
    const data = await this.repository.fetch();
    res.send(data);
  }

  find(req: Request, res: Response) {
    res.send('Obter café');
  }

  store(req: Request, res: Response) {
    res.send('Criar cafés');
  }

  destroy(req: Request, res: Response) {
    res.send('Deletar cafés');
  }

  update(req: Request, res: Response) {
    res.send('Atualizar cafés');
  }
}

const CoffeController = new Controller();

export default CoffeController;
