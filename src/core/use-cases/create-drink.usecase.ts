import { DrinkRepository } from '../../infra/database/mongo/repositories/drink-repository';
import { type DrinkDto } from '../dto/drink.dto';

export class CreateDrinkUseCase {
  repository: DrinkRepository;

  constructor() {
    this.repository = new DrinkRepository();
  }

  async execute(data: DrinkDto) {
    try {
      await this.repository.store(data);
    } catch (error) {
      console.log('Error on create drink!');
      console.error(error);
    }
  }
}
