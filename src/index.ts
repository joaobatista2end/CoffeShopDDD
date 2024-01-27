import mongoose from "mongoose";
import { createDrink, deleteDrink, fetchDrinks, findDrinkByName, updateDrink } from "./database/drink-repository";

const DB_URL = 'mongodb://root:password@localhost:27017/coffee_shop?authSource=admin'

const main = async () => {
    console.log('Starting connection')
    await mongoose.connect(DB_URL)
    console.log('Connected!')

    // Criação do Drink
    console.log('Creatting drink...')
    const coffeDrink = createDrink({
        name: 'Cafézinho',
        price: 2,
        description: 'Ut cillum irure officia do eu labore exercitation dolor consequat. Ad commodo anim dolor anim ea aute labore occaecat consectetur incididunt tempor. Et cupidatat irure exercitation voluptate cupidatat aute tempor id aute. Laboris commodo elit veniam commodo dolore sunt proident sit excepteur est et. Labore elit excepteur magna culpa nostrud reprehenderit nostrud consequat nostrud. Et veniam anim dolor excepteur sunt mollit deserunt irure culpa occaecat officia est.'
    })
    console.log('Drink created!', { coffeDrink })

    // Obtendo Drinks
    console.log('Fetching drinks...')
    const drinks = await fetchDrinks()
    console.log('Drinks is fetched!')

    // Removendo Drink
    console.log('Remove drink...')
    await deleteDrink('65b5144dafbac1acfd7a22fe')
    console.log('Drink is removed...')

    // Atualizando nome
    await updateDrink('65b515c76730e711e2aeb90e', { name: 'Simple Espresso'})

    // Buscando por nome
    const drink = await findDrinkByName('inho')
    console.log({ drink })
}

main()
